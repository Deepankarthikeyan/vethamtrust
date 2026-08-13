#!/usr/bin/env python3
"""Apply unified header-style-two header across all HTML pages."""

import re
import glob
import os

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CURRENT = {
    'index.html': 'home', 'about.html': 'about', 'causes.html': 'village',
    'causes-2.html': 'village', 'causes-details.html': 'village',
    'service.html': 'service', 'team.html': 'team', 'team-details.html': 'team',
    'events.html': 'events', 'events-details.html': 'events',
    'blog.html': 'blog', 'blog-2.html': 'blog', 'blog-details.html': 'blog',
    'contact.html': 'contact',
}

KEYS = ['home', 'about', 'village', 'service', 'team', 'events', 'blog', 'contact']

MENU_ITEMS = [
    ('home', 'index.html', 'Home'),
    ('about', 'about.html', 'About Us'),
    ('village', 'causes.html', 'Our Village'),
    ('service', 'service.html', 'Services'),
    ('team', 'team.html', 'Leadership'),
    ('events', 'events.html', 'Events'),
    ('blog', 'blog.html', 'Blog'),
    ('contact', 'contact.html', 'Contact'),
]


def build_nav(filename):
    active = CURRENT.get(filename, '')
    lines = ['                                <ul class="navigation clearfix">']
    for key, href, label in MENU_ITEMS:
        cls = ' class="current"' if key == active else ''
        lines.append(f'                                    <li{cls}><a href="{href}">{label}</a></li>')
    lines.append('                                </ul>')
    return '\n'.join(lines)


def build_header(filename):
    nav = build_nav(filename)
    return f'''        <!-- main header -->
        <header class="main-header header-style-two">
            <!-- header-top -->
            <div class="header-top">
                <div class="top-inner">
                    <div class="top-left">
                        <p>World Peace through Individual Peace</p>
                        <ul class="social-links clearfix">
                            <li><a href="index.html"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="index.html"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="index.html"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="top-right">
                        <ul class="info">
                            <li><i class="icon-20"></i>Marisettipathi Village, Coimbatore - 641032</li>
                            <li><i class="icon-21"></i><a href="tel:+919944511067">+91 9944511067</a></li>
                            <li><i class="icon-22"></i><a href="mailto:vethamkuzhumam@gmail.com">vethamkuzhumam@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- header-lower -->
            <div class="header-lower">
                <div class="outer-box">
                    <div class="logo-box">
                        <figure class="logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="Vetham Kuzhumam Spiritual Trust"></a></figure>
                    </div>
                    <div class="menu-area clearfix">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler">
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                            <i class="icon-bar"></i>
                        </div>
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
{nav}
                            </div>
                        </nav>
                    </div>
                    <ul class="nav-right">
                        <li class="search-box-outer search-toggler">
                            <i class="icon-1"></i>
                        </li>
                        <li class="btn-box">
                            <button class="donate-box-btn theme-btn-one"><span>Donate Now</span></button>
                        </li>
                    </ul>
                </div>
            </div>

            <!--sticky Header-->
            <div class="sticky-header">
                <div class="outer-container">
                    <div class="outer-box">
                        <div class="logo-box">
                            <figure class="logo"><a href="index.html"><img src="assets/images/logo-2.png" alt="Vetham Kuzhumam Spiritual Trust"></a></figure>
                        </div>
                        <div class="menu-area clearfix">
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                            <ul class="nav-right">
                                <li class="search-box-outer search-toggler">
                                    <i class="icon-1"></i>
                                </li>
                                <li class="btn-box">
                                    <button class="donate-box-btn theme-btn-one"><span>Donate Now</span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- main-header end -->'''


def add_custom_css(content):
    link = '<link href="assets/css/vetham-custom.css" rel="stylesheet">'
    if 'vetham-custom.css' not in content:
        content = content.replace(
            '<link href="assets/css/responsive.css" rel="stylesheet">',
            '<link href="assets/css/responsive.css" rel="stylesheet">\n' + link
        )
    return content


def process_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<!-- main header -->' not in content:
        return False

    content = re.sub(
        r'        <!-- main header -->.*?        <!-- main-header end -->',
        build_header(filename),
        content,
        count=1,
        flags=re.DOTALL
    )
    content = add_custom_css(content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    return True


def main():
    for filepath in sorted(glob.glob(os.path.join(WORKSPACE, '*.html'))):
        if process_file(filepath):
            print(f'Fixed header: {os.path.basename(filepath)}')


if __name__ == '__main__':
    main()
