#!/usr/bin/env python3
"""Fix corrupted navigation menus after bulk update."""

import re
import glob
import os

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NAV_TEMPLATE = '''                                <ul class="navigation clearfix">
                                    <li{home}><a href="index.html">Home</a></li>
                                    <li{about}><a href="about.html">About Us</a></li>
                                    <li{village}><a href="causes.html">Our Village</a></li>
                                    <li{service}><a href="service.html">Services</a></li>
                                    <li{team}><a href="team.html">Leadership</a></li>
                                    <li{events}><a href="events.html">Events</a></li>
                                    <li{blog}><a href="blog.html">Blog</a></li>
                                    <li{contact}><a href="contact.html">Contact</a></li>
                                </ul>'''

CURRENT = {
    'index.html': 'home', 'about.html': 'about', 'causes.html': 'village',
    'causes-2.html': 'village', 'causes-details.html': 'village',
    'service.html': 'service', 'team.html': 'team', 'team-details.html': 'team',
    'events.html': 'events', 'events-details.html': 'events',
    'blog.html': 'blog', 'blog-2.html': 'blog', 'blog-details.html': 'blog',
    'contact.html': 'contact',
}


def build_nav(filename):
    active = CURRENT.get(filename, '')
    keys = ['home', 'about', 'village', 'service', 'team', 'events', 'blog', 'contact']
    vals = {k: (' class="current"' if k == active else '') for k in keys}
    return NAV_TEMPLATE.format(**vals)


def fix_nav(content, filename):
    pattern = r'<ul class="navigation clearfix">.*?</nav>'
    replacement = build_nav(filename) + '\n                            </div>\n                        </nav>'
    new_content, count = re.subn(pattern, replacement, content, count=1, flags=re.DOTALL)
    return new_content, count


def fix_header_top(content):
    content = re.sub(
        r'<li><i class="icon-20"></i>.*?</li>',
        '<li><i class="icon-20"></i>Marisettipathi Village, Coimbatore - 641032</li>',
        content
    )
    content = re.sub(
        r'<a href="tel:912136660027">\+91-213-666-0027</a>',
        '<a href="tel:+919944511067">+91 9944511067</a>',
        content
    )
    return content


def main():
    for filepath in sorted(glob.glob(os.path.join(WORKSPACE, '*.html'))):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        filename = os.path.basename(filepath)
        content, count = fix_nav(content, filename)
        if 'header-top' in content:
            content = fix_header_top(content)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'{filename}: nav fixed={count}')


if __name__ == '__main__':
    main()
