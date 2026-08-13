#!/usr/bin/env python3
"""Download social-media gallery images and update gallery.html."""

import json
import os
import re
import subprocess
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GALLERY_DIR = os.path.join(ROOT, "assets", "images", "vetham", "gallery")
GALLERY_HTML = os.path.join(ROOT, "gallery.html")
SOURCE_URL = "https://vethamspiritualtrust.com/social-media/"

ITEMS = [
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/foundation-course-1.jpg", "file": "foundation-course-1.jpg", "cat": "foundation", "title": "Foundation Course", "label": "Foundation Course"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/foundation-course-2-scaled.jpg", "file": "foundation-course-2-scaled.jpg", "cat": "foundation", "title": "Foundation Course", "label": "Foundation Course"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/foundation-course-4-scaled.jpg", "file": "foundation-course-4-scaled.jpg", "cat": "foundation", "title": "Foundation Course", "label": "Foundation Course"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/ASR-Ayya-Teacher.jpg", "file": "ASR-Ayya-Teacher.jpg", "cat": "teachers", "title": "ASR Ayya Teacher", "label": "Teachers Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/Nagarajan-Ayya-Teacher.jpg", "file": "Nagarajan-Ayya-Teacher.jpg", "cat": "teachers", "title": "Nagarajan Ayya Teacher", "label": "Teachers Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-1-scaled.jpg", "file": "event-photos-1-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-4-scaled.jpg", "file": "event-photos-4-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-7-scaled.jpg", "file": "event-photos-7-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-10-scaled.jpg", "file": "event-photos-10-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-15-scaled.jpg", "file": "event-photos-15-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-18-scaled.jpg", "file": "event-photos-18-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-16-scaled.jpg", "file": "event-photos-16-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-20-scaled.jpg", "file": "event-photos-20-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-19-scaled.jpg", "file": "event-photos-19-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-21-scaled.jpg", "file": "event-photos-21-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-39-scaled.jpg", "file": "event-photos-39-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-23-scaled.jpg", "file": "event-photos-23-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-43-scaled.jpg", "file": "event-photos-43-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-45-scaled.jpg", "file": "event-photos-45-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-47-scaled.jpg", "file": "event-photos-47-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-48-scaled.jpg", "file": "event-photos-48-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-50-scaled.jpg", "file": "event-photos-50-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-49-scaled.jpg", "file": "event-photos-49-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-52-scaled.jpg", "file": "event-photos-52-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-54-scaled.jpg", "file": "event-photos-54-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/08/event-photos-57-scaled.jpg", "file": "event-photos-57-scaled.jpg", "cat": "events", "title": "Event Photos", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/10/sept-event-2025-4.jpg", "file": "sept-event-2025-4.jpg", "cat": "events", "title": "September Event 2025", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/10/sept-event-2025-2.jpg", "file": "sept-event-2025-2.jpg", "cat": "events", "title": "September Event 2025", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/10/sept-event-2025-3.jpg", "file": "sept-event-2025-3.jpg", "cat": "events", "title": "September Event 2025", "label": "Event Photos"},
    {"src": "https://vethamspiritualtrust.com/wp-content/uploads/2025/10/sept-event-2025-1.jpg", "file": "sept-event-2025-1.jpg", "cat": "events", "title": "September Event 2025", "label": "Event Photos"},
]


def download_images():
    os.makedirs(GALLERY_DIR, exist_ok=True)
    for item in ITEMS:
        dest = os.path.join(GALLERY_DIR, item["file"])
        if os.path.exists(dest) and os.path.getsize(dest) > 0:
            print(f"Skip: {item['file']}")
            continue
        print(f"Download: {item['file']}")
        urllib.request.urlretrieve(item["src"], dest)


def build_gallery_html():
    items_html = []
    for item in ITEMS:
        local = f"assets/images/vetham/gallery/{item['file']}"
        items_html.append(
            f"""                    <div class="col-lg-4 col-md-6 col-sm-12 gallery-item {item['cat']}" data-category="{item['cat']}">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box">
                                    <a href="{local}" data-fancybox="vetham-gallery" data-caption="{item['title']}">
                                        <img src="{local}" alt="{item['title']}" loading="lazy">
                                    </a>
                                </figure>
                                <div class="content-box"><div class="inner"><h3>{item['title']}</h3><p>{item['label']}</p></div></div>
                            </div>
                        </div>
                    </div>"""
        )
    return "\n".join(items_html)


GALLERY_SECTION = """        <section class="gallery-page-section sec-pad bg-color-1">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Photo Gallery</span>
                    <h2>Our Spiritual Journey in Pictures</h2>
                </div>
                <div class="vetham-gallery-filters centred mb_40">
                    <button type="button" class="filter-btn active" data-filter="*">All</button>
                    <button type="button" class="filter-btn" data-filter=".foundation">Foundation Course</button>
                    <button type="button" class="filter-btn" data-filter=".teachers">Teachers Photos</button>
                    <button type="button" class="filter-btn" data-filter=".events">Event Photos</button>
                </div>
                <div class="items-container row clearfix vetham-gallery-grid">
{items}
                </div>
            </div>
        </section>"""


def update_gallery_page():
    with open(GALLERY_HTML, encoding="utf-8") as f:
        content = f.read()

    new_section = GALLERY_SECTION.format(items=build_gallery_html())
    pattern = re.compile(
        r'<section class="gallery-page-section.*?</section>',
        re.DOTALL,
    )
    if not pattern.search(content):
        raise SystemExit("Gallery section not found in gallery.html")

    content = pattern.sub(new_section, content, count=1)

    if "vetham-gallery.js" not in content:
        content = content.replace(
            '    <script src="assets/js/vetham-widgets.js"></script>',
            '    <script src="assets/js/vetham-gallery.js"></script>\n'
            '    <script src="assets/js/vetham-widgets.js"></script>',
        )

    with open(GALLERY_HTML, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated gallery.html")


def main():
    download_images()
    update_gallery_page()


if __name__ == "__main__":
    main()
