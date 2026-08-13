#!/usr/bin/env python3
"""Fix broken duplicate navigation and header alignment across all HTML pages."""

import re
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def nav_for_page(filename):
    home = about = village = courses = events = social = contact = ""
    base = os.path.basename(filename)

    if base == "index.html":
        home = ' class="current"'
    elif base in ("about.html", "team.html", "team-details.html", "testimonial.html"):
        about = ' class="current"'
    elif base in ("causes.html", "causes-details.html", "causes-2.html"):
        village = ' class="current"'
    elif base == "donate.html":
        events = ' class="current"'
    elif base == "service.html":
        courses = ' class="current"'
    elif base in ("events.html", "events-details.html", "blog.html", "blog-2.html", "blog-details.html"):
        events = ' class="current"'
    elif base == "gallery.html":
        social = ' class="current"'
    elif base == "contact.html":
        contact = ' class="current"'

    return f"""                                <ul class="navigation clearfix">
                                    <li{home}><a href="index.html">Home</a></li>
                                    <li class="dropdown{about}"><a href="about.html">About Us</a>
                                        <ul>
                                            <li><a href="team.html">Leadership</a></li>
                                        </ul>
                                    </li>
                                    <li{village}><a href="causes.html">Our Village</a></li>
                                    <li{courses}><a href="service.html">Courses</a></li>
                                    <li class="dropdown{events}"><a href="events.html">Events</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="donate.html">Donate</a></li>
                                        </ul>
                                    </li>
                                    <li{social}><a href="gallery.html">Social Media</a></li>
                                    <li{contact}><a href="contact.html">Contact</a></li>
                                </ul>"""


MAIN_NAV_PATTERN = re.compile(
    r'(<div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">)\s*'
    r'<ul class="navigation clearfix">.*?(</div>\s*</nav>)',
    re.DOTALL,
)

STICKY_NAV_PATTERN = re.compile(
    r'(<div class="menu-area clearfix">\s*'
    r'<nav class="main-menu clearfix">\s*'
    r'<!--Keep This Empty / Menu will come through Javascript-->\s*'
    r'</nav>\s*)'
    r'(<ul class="nav-right">.*?</ul>\s*)'
    r'(</div>)',
    re.DOTALL,
)


def fix_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    nav = nav_for_page(filename)

    content = MAIN_NAV_PATTERN.sub(r"\1\n" + nav + r"\n                            \2", content)

    def sticky_replacer(match):
        return match.group(1) + "</div>\n                        " + match.group(2)

    content = STICKY_NAV_PATTERN.sub(sticky_replacer, content)

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed: {filename}")
        return True
    print(f"OK: {filename}")
    return False


def main():
    files = glob.glob(os.path.join(ROOT, "*.html"))
    fixed = sum(fix_file(f) for f in sorted(files))
    print(f"\nFixed {fixed}/{len(files)} files.")


if __name__ == "__main__":
    main()
