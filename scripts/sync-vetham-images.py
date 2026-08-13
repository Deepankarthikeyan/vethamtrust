#!/usr/bin/env python3
"""Download images from vethamspiritualtrust.com and replace theme placeholders."""

import glob
import os
import re
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "assets", "images", "vetham")
BASE = "https://vethamspiritualtrust.com/wp-content/uploads"

DOWNLOADS = {
    "logo.png": f"{BASE}/2025/09/logo-vetham.png",
    "favicon.jpg": f"{BASE}/2025/09/cropped-logo-vetham-spiritual-group-180x180.jpg",
    "banner-1.jpg": f"{BASE}/2025/08/village_about.jpg",
    "banner-2.jpg": f"{BASE}/2025/08/Meditation-hall-3.jpg",
    "banner-3.jpg": f"{BASE}/2025/08/history.jpg",
    "banner-4.jpg": f"{BASE}/2025/08/village_plan.jpg",
    "mahaan.png": f"{BASE}/2025/08/mahaan-png.png",
    "leader.jpg": f"{BASE}/2025/08/leader.jpg",
    "village-about.jpg": f"{BASE}/2025/08/village_about.jpg",
    "village-plan.jpg": f"{BASE}/2025/08/village_plan.jpg",
    "history.jpg": f"{BASE}/2025/08/history.jpg",
    "construction.jpg": f"{BASE}/2025/08/construction-3.jpg",
    "meditation-hall.jpg": f"{BASE}/2025/08/Meditation-hall-3.jpg",
    "page-banner.jpg": f"{BASE}/2025/08/vetham-spiritual-group-9.jpg",
    "about-group.jpg": f"{BASE}/2025/08/vetham-spiritual-group-19.jpg",
    "trustee-selvin.jpg": f"{BASE}/2025/09/trustee-1-e1760003310143.jpeg",
    "trustee-gnana-rishi.jpg": f"{BASE}/2025/09/trustee-2-e1760004447431.jpeg",
    "trustee-balasubramanian.png": f"{BASE}/2025/09/trustee-4.png",
    "trustee-sureash.jpg": f"{BASE}/2026/01/Gnanasiriyar-A-S-Sureash-Kumaar.jpg",
    "blog-1.jpg": f"{BASE}/2025/08/vetham-spiritual-group-36.jpg",
    "blog-2.jpg": f"{BASE}/2025/08/vetham-spiritual-group-37.jpg",
    "blog-3.jpg": f"{BASE}/2025/08/vetham-spiritual-group-38.jpg",
    "blog-4.jpg": f"{BASE}/2023/04/vetham-spiritual-group-35.jpg",
    "blog-5.jpg": f"{BASE}/2022/03/vetham-spiritual-group-7.jpg",
    "testimonial-boy.png": f"{BASE}/2022/05/boy.png",
    "testimonial-woman.png": f"{BASE}/2022/05/woman.png",
    "razorpay-logo.png": f"{BASE}/2025/09/razorpay-with-all-cards-upi-logo-png.png",
    "courses-hero.jpg": f"{BASE}/2025/08/vetham-spiritual-group-7.jpg",
    "event-foundation.jpg": f"{BASE}/2025/08/vetham-spiritual-group-8-e1756405469555.jpg",
    "contact-phone.png": f"{BASE}/2025/08/incoming-call-e1755454105274.png",
    "contact-home.png": f"{BASE}/2025/08/home-2-e1755454366869.png",
    "contact-email.png": f"{BASE}/2025/08/exchange-mails-1-e1755454643815.png",
}

# Old theme path -> vetham path (content images only)
REPLACEMENTS = [
    # Logos
    ("assets/images/logo-2.png", "assets/images/vetham/logo.png"),
    ("assets/images/logo.png", "assets/images/vetham/logo.png"),
    ("assets/images/logo-3.png", "assets/images/vetham/logo.png"),
    ("assets/images/footer-logo.png", "assets/images/vetham/logo.png"),
    # Homepage banners
    ("assets/images/banner/banner-1.jpg", "assets/images/vetham/banner-1.jpg"),
    ("assets/images/banner/banner-2.jpg", "assets/images/vetham/banner-2.jpg"),
    ("assets/images/banner/banner-3.jpg", "assets/images/vetham/banner-3.jpg"),
    # About section
    ("assets/images/resource/about-1.jpg", "assets/images/vetham/village-about.jpg"),
    ("assets/images/resource/about-2.jpg", "assets/images/vetham/meditation-hall.jpg"),
    # Village / causes cards
    ("assets/images/resource/cause-1.jpg", "assets/images/vetham/village-plan.jpg"),
    ("assets/images/resource/cause-2.jpg", "assets/images/vetham/construction.jpg"),
    ("assets/images/resource/cause-3.jpg", "assets/images/vetham/history.jpg"),
    ("assets/images/resource/feature-1.jpg", "assets/images/vetham/village-about.jpg"),
    ("assets/images/resource/feature-2.jpg", "assets/images/vetham/meditation-hall.jpg"),
    # Homepage gallery preview
    ("assets/images/gallery/gallery-1.jpg", "assets/images/vetham/gallery/foundation-course-1.jpg"),
    ("assets/images/gallery/gallery-2.jpg", "assets/images/vetham/gallery/foundation-course-2-scaled.jpg"),
    ("assets/images/gallery/gallery-3.jpg", "assets/images/vetham/gallery/event-photos-1-scaled.jpg"),
    ("assets/images/gallery/gallery-4.jpg", "assets/images/vetham/gallery/event-photos-4-scaled.jpg"),
    # Leadership / team
    ("assets/images/team/team-1.jpg", "assets/images/vetham/trustee-gnana-rishi.jpg"),
    ("assets/images/team/team-2.jpg", "assets/images/vetham/trustee-selvin.jpg"),
    ("assets/images/team/team-3.jpg", "assets/images/vetham/trustee-balasubramanian.png"),
    ("assets/images/team/team-4.jpg", "assets/images/vetham/trustee-sureash.jpg"),
    ("assets/images/team/team-10.jpg", "assets/images/vetham/trustee-gnana-rishi.jpg"),
    # Blog / news
    ("assets/images/news/news-1.jpg", "assets/images/vetham/blog-1.jpg"),
    ("assets/images/news/news-2.jpg", "assets/images/vetham/blog-2.jpg"),
    ("assets/images/news/news-3.jpg", "assets/images/vetham/blog-3.jpg"),
    # Page title backgrounds
    ("assets/images/background/page-title.jpg", "assets/images/vetham/page-banner.jpg"),
    ("assets/images/background/page-title-2.jpg", "assets/images/vetham/page-banner.jpg"),
    ("assets/images/background/page-title-3.jpg", "assets/images/vetham/page-banner.jpg"),
    ("assets/images/background/page-title-4.jpg", "assets/images/vetham/page-banner.jpg"),
    # Testimonials
    ("assets/images/background/testimonial-bg.jpg", "assets/images/vetham/page-banner.jpg"),
    ("assets/images/resource/testimonial-1.jpg", "assets/images/vetham/testimonial-boy.png"),
    ("assets/images/resource/testimonial-2.jpg", "assets/images/vetham/testimonial-woman.png"),
    ("assets/images/resource/testimonial-3.jpg", "assets/images/vetham/testimonial-boy.png"),
    ("assets/images/resource/testimonial-4.jpg", "assets/images/vetham/testimonial-boy.png"),
    ("assets/images/resource/testimonial-5.jpg", "assets/images/vetham/testimonial-woman.png"),
    ("assets/images/resource/testimonial-6.jpg", "assets/images/vetham/testimonial-boy.png"),
    ("assets/images/resource/testimonial-7.jpg", "assets/images/vetham/testimonial-woman.png"),
    ("assets/images/resource/testimonial-8.jpg", "assets/images/vetham/testimonial-boy.png"),
    ("assets/images/resource/testimonial-9.jpg", "assets/images/vetham/testimonial-woman.png"),
    # Legacy vetham aliases -> canonical names
    ("assets/images/vetham/trustee-1.jpg", "assets/images/vetham/trustee-selvin.jpg"),
    ("assets/images/vetham/trustee-2.jpg", "assets/images/vetham/trustee-gnana-rishi.jpg"),
    ("assets/images/vetham/trustee-3.jpg", "assets/images/vetham/trustee-balasubramanian.png"),
    ("assets/images/vetham/trustee-4.jpg", "assets/images/vetham/trustee-sureash.jpg"),
    ("assets/images/vetham/group.jpg", "assets/images/vetham/blog-1.jpg"),
    ("assets/images/vetham/mahaan.png", "assets/images/vetham/mahaan.png"),
]

MAIN_PAGES = [
    "index.html", "about.html", "team.html", "team-details.html",
    "causes.html", "causes-2.html", "causes-details.html",
    "service.html", "events.html", "events-details.html",
    "blog.html", "blog-2.html", "blog-details.html",
    "gallery.html", "donate.html", "contact.html", "faq.html",
]

BLOG_IMAGE_MAP = [
    ("assets/images/vetham/meditation-hall.jpg", "assets/images/vetham/blog-5.jpg"),
    ("assets/images/vetham/group.jpg", "assets/images/vetham/blog-1.jpg"),
    ("assets/images/vetham/history.jpg", "assets/images/vetham/blog-4.jpg"),
    ("assets/images/vetham/leader.jpg", "assets/images/vetham/blog-3.jpg"),
    ("assets/images/vetham/village-about.jpg", "assets/images/vetham/blog-2.jpg"),
]

CLIENTS_HIDE_CSS = """
/* Hide theme placeholder client logos — not used on vethamspiritualtrust.com */
.clients-section,
.clients-logo {
  display: none !important;
}
"""


def download_images():
    os.makedirs(IMG_DIR, exist_ok=True)
    for name, url in DOWNLOADS.items():
        dest = os.path.join(IMG_DIR, name)
        print(f"Download: {name}")
        try:
            urllib.request.urlretrieve(url, dest)
        except Exception as exc:
            print(f"  WARN: {name}: {exc}")


def apply_replacements(content):
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)
    return content


def update_blog_page(content):
    for old, new in BLOG_IMAGE_MAP:
        content = content.replace(old, new)
    return content


def hide_clients_section(css_path):
    with open(css_path, encoding="utf-8") as f:
        css = f.read()
    if "clients-section" in css and "not used on vethamspiritualtrust.com" in css:
        return
    with open(css_path, "a", encoding="utf-8") as f:
        f.write(CLIENTS_HIDE_CSS)


def update_html_files():
    files = [os.path.join(ROOT, p) for p in MAIN_PAGES]
    files += glob.glob(os.path.join(ROOT, "*.html"))
    files = sorted(set(files))
    updated = 0
    for path in files:
        with open(path, encoding="utf-8") as f:
            content = f.read()
        original = content
        content = apply_replacements(content)
        if os.path.basename(path) == "blog.html":
            content = update_blog_page(content)
        if content != original:
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated: {os.path.basename(path)}")
            updated += 1
    print(f"HTML files updated: {updated}")


def main():
    download_images()
    update_html_files()
    hide_clients_section(os.path.join(ROOT, "assets", "css", "vetham-custom.css"))
    print("Done.")


if __name__ == "__main__":
    main()
