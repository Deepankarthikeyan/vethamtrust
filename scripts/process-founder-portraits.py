#!/usr/bin/env python3
"""Turn founder reference photos into white-shirt + left yellow thundu portraits."""
from __future__ import annotations

import colorsys
import os
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/assets/images/vetham"
NAVY = (2, 14, 30)
YELLOW = (217, 147, 75)
TARGET = (864, 1152)

SOURCES = {
    "trustee-selvin-uniform.jpg": ROOT
    / "assets/user-uploads/selvin.png",
    "trustee-balasubramanian-uniform.jpg": ROOT
    / "assets/user-uploads/balasubramanian.png",
    "trustee-gnana-rishi-uniform.jpg": ROOT
    / "assets/user-uploads/gnana-rishi.jpg",
    "trustee-sureash-uniform.jpg": ROOT
    / "assets/user-uploads/sureash.jpg",
}


def cover_resize(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    tw, th = size
    w, h = im.size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale), int(h * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - tw) // 2
    top = (nh - th) // 2
    return im.crop((left, top, left + tw, top + th))


def in_face(x: int, y: int, w: int, h: int) -> bool:
    cx, cy = w * 0.5, h * 0.34
    rx, ry = w * 0.2, h * 0.24
    return ((x - cx) ** 2) / (rx**2) + ((y - cy) ** 2) / (ry**2) < 1.0


def is_skin(r: int, g: int, b: int) -> bool:
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    return 0.02 < h < 0.14 and 0.12 < s < 0.72 and v > 0.22


def in_torso(x: int, y: int, w: int, h: int) -> bool:
    return 0.1 * w < x < 0.9 * w and 0.1 * h < y < 0.98 * h


def is_background(r: int, g: int, b: int, x: int, y: int, w: int, h: int) -> bool:
    if in_torso(x, y, w, h):
        return False
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if v < 0.38 and s < 0.7:
        return True
    return r < 55 and g < 70 and b < 100


def is_beads(r: int, g: int, b: int) -> bool:
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    return 0.03 < h < 0.12 and 0.25 < s < 0.85 and 0.15 < v < 0.55


def is_shawl(r: int, g: int, b: int) -> bool:
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if is_beads(r, g, b):
        return False
    if v > 0.62:
        return False
    # dark grey / black / navy angavastram
    if v < 0.52 and (r + g + b) < 360:
        return True
    if b > r + 8 and v < 0.5:
        return True
    return False


def is_shirt_fabric(r: int, g: int, b: int) -> bool:
    h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    return v > 0.55 and s < 0.35 and not is_skin(r, g, b)


def shawl_mass_x(im: Image.Image) -> float:
    px = im.load()
    w, h = im.size
    total_x = count = 0
    for y in range(int(h * 0.18), h):
        for x in range(w):
            if in_face(x, y, w, h):
                continue
            r, g, b = px[x, y]
            if is_shawl(r, g, b):
                total_x += x
                count += 1
    return total_x / count if count else w / 2


def yellowize_shawl(im: Image.Image) -> Image.Image:
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            if in_face(x, y, w, h):
                continue
            r, g, b = px[x, y]
            if is_shawl(r, g, b):
                shade = 0.76 + 0.24 * colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)[2]
                px[x, y] = (
                    min(255, int(YELLOW[0] * shade)),
                    min(255, int(YELLOW[1] * shade)),
                    min(255, int(YELLOW[2] * shade)),
                )
    return im


def to_uniform(im: Image.Image) -> Image.Image:
    im = cover_resize(im.convert("RGB"), TARGET)
    im = yellowize_shawl(im)

    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            if in_face(x, y, w, h):
                continue
            r, g, b = px[x, y]
            if is_background(r, g, b, x, y, w, h):
                px[x, y] = NAVY
            elif is_shirt_fabric(r, g, b):
                px[x, y] = (255, 255, 255)

    if shawl_mass_x(im) > im.size[0] * 0.52:
        im = ImageOps.mirror(im)

    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if is_yellow_thundu(r, g, b) or is_beads(r, g, b) or is_skin(r, g, b):
                continue
            if in_face(x, y, w, h) or (r > 235 and g > 235 and b > 230):
                continue
            if is_studio_backdrop(r, g, b):
                px[x, y] = NAVY

    im = ImageEnhance.Brightness(im).enhance(1.02)
    im = ImageEnhance.Contrast(im).enhance(1.03)
    return im


def is_yellow_thundu(r: int, g: int, b: int) -> bool:
    return r > 130 and g > 85 and b < 130 and r > b + 25


def is_studio_backdrop(r: int, g: int, b: int) -> bool:
    hsv_h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
    if v < 0.36:
        return True
    if b > r + 6 and v < 0.42:
        return True
    if 0.05 < hsv_h < 0.13 and 0.12 < s < 0.55 and 0.34 < v < 0.88:
        return True
    return False


def main() -> None:
    for dest_name, src in SOURCES.items():
        if not src.exists():
            raise SystemExit(f"Missing source: {src}")
        out = OUT / dest_name
        result = to_uniform(Image.open(src))
        result.save(out, quality=94)
        print("wrote", out)


if __name__ == "__main__":
    main()
