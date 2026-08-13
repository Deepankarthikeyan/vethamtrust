#!/usr/bin/env python3
"""Ensure GTranslate loads via static script tag on every page."""

import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

GT_SCRIPT = (
    '    <script src="assets/js/vetham-widgets.js"></script>\n'
    '    <script src="https://cdn.gtranslate.net/widgets/latest/ln.js" '
    'data-gt-widget-id="vetham" defer></script>'
)

OLD_PATTERNS = [
    re.compile(
        r'\s*<script src="assets/js/vetham-widgets\.js"></script>\s*',
        re.MULTILINE,
    ),
    re.compile(
        r'\s*<script[^>]*data-vetham-gtranslate[^>]*></script>\s*',
        re.MULTILINE,
    ),
    re.compile(
        r'\s*<script src="https://cdn\.gtranslate\.net/widgets/latest/ln\.js"[^>]*></script>\s*',
        re.MULTILINE,
    ),
]


def fix_file(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()

    original = content
    for pattern in OLD_PATTERNS:
        content = pattern.sub("\n", content)

    if 'data-gt-widget-id="vetham"' not in content:
        if '</body>' in content:
            content = content.replace('</body>', GT_SCRIPT + '\n\n</body>', 1)
        else:
            return False

    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed: {os.path.basename(path)}")
        return True

    print(f"Skip: {os.path.basename(path)}")
    return False


def main():
    files = glob.glob(os.path.join(ROOT, "*.html"))
    n = sum(fix_file(f) for f in sorted(files))
    print(f"Updated {n}/{len(files)} files")


if __name__ == "__main__":
    main()
