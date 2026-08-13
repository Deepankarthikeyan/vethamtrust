#!/usr/bin/env python3
"""Update page-specific main content for Vetham Spiritual Trust pages."""

import re
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def replace_between(filepath, start_marker, end_marker, new_content):
    path = os.path.join(ROOT, filepath)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    pattern = re.escape(start_marker) + r".*?" + re.escape(end_marker)
    replacement = start_marker + new_content + end_marker
    new = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)
    if new == content:
        print(f"WARNING: No match for {filepath}")
        return False
    with open(path, "w", encoding="utf-8") as f:
        f.write(new)
    print(f"Updated content: {filepath}")
    return True


# --- Our Village (causes.html) ---
VILLAGE_CONTENT = """
        <section class="page-title centred">
            <div class="bg-layer" style="background-image: url(assets/images/vetham/village-about.jpg);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1>Our Village</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Our Village</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <section class="about-section p_relative sec-pad">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Our Village</span>
                    <h2>Discover Vethathiri Maharishi Spiritual Village Retirement Home</h2>
                </div>
                <div class="text centred mb_50" style="max-width:900px;margin:0 auto;">
                    <p>Vethathiri Maharishi Spiritual Village is a peaceful retreat dedicated to spiritual living, nestled in the foothills of Pathimalai Murugan Temple at Marisettipathi Village, Kumittipathi Anchal, Tirumalayampalayam Taluk, Coimbatore District. Just 7 km from Madukkarai, this serene forested area offers the perfect environment for meditation, health, and enlightenment.</p>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad bg-color-1">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_one">
                            <div class="content-box">
                                <div class="sec-title mb_30">
                                    <span class="sub-title">Spiritual Sanctuary</span>
                                    <h2>The Need for a Spiritual Sanctuary</h2>
                                </div>
                                <h4>Why it is required?</h4>
                                <p>The ashram is required for the disciples to reside to get the teachings of the Guru on a continual day and night basis. It becomes comfortable to conduct Satsang sessions and spiritual activities if there is an ashram of our own.</p>
                                <h4>Who can take part in this?</h4>
                                <p>Anybody who whole soulfully wants to get connected to the Guru and know the meaning of life and life force can and will automatically become a part of the ashram.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="content_block_one">
                            <div class="content-box">
                                <div class="sec-title mb_30">
                                    <span class="sub-title">Spiritual Growth</span>
                                    <h2>A Haven for Spiritual Growth</h2>
                                </div>
                                <p>The purpose of the Ashram "Vethathiri Maharishi Spiritual Village" is to create a home for the children of the Guru Yogiraj Vethathiri Maharishi. The ashram has the environment that helps the soul for spiritual tranquility and get connected with nature and thereby with the universal divine power.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad">
            <div class="auto-container">
                <div class="row clearfix align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure class="image-box"><img src="assets/images/vetham/construction.jpg" alt="Spiritual Village Construction" style="width:100%;border-radius:8px;"></figure>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="sec-title mb_30">
                            <span class="sub-title">Village Highlights</span>
                            <h2>Current Phase of Construction</h2>
                        </div>
                        <ul class="village-highlight-list">
                            <li>Mini Meditation Hall – Already inaugurated, serving as a space for daily meditation and satsang.</li>
                            <li>Gurukul – Opened for spiritual learning and growth.</li>
                            <li>Beautiful Garden – Spread over 3 acres, designed for peace and reflection.</li>
                            <li>Future Projects: 128 houses, Dining Hall for 200 people, Largest Meditation Hall (4 acres, capacity 400 people), Themed gardens like Vrindavan, Individual meditation units, Indoor &amp; outdoor play areas, and a swimming pool.</li>
                        </ul>
                        <p>The current phase of construction is expected to be fully operational by August 2026.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad bg-color-1">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Vision &amp; Purpose</span>
                    <h2>Vision &amp; Purpose of the Spiritual Village</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <p>This initiative by the Vetham Group Spiritual Trust follows Guru Mahan's vision for world peace, a unified way of life, and care for elders. Our aim is to create a self-sustaining spiritual community where those who have completed their family responsibilities can live in harmony, pursue self-realization, and experience peace.</p>
                        <h4>Lifestyle &amp; Values</h4>
                        <ul class="village-highlight-list">
                            <li>Naturally grown organic vegetables for daily consumption.</li>
                            <li>Cow rearing for fresh milk.</li>
                            <li>Drug-free, side-effect-free natural healing system.</li>
                            <li>Focus on health, peace, knowledge, and enlightenment.</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <h4>Residential Details</h4>
                        <ul class="village-highlight-list">
                            <li>1 BHK (600 sq. ft.) – ₹18 lakhs</li>
                            <li>2 BHK (1000 sq. ft.) – ₹27 lakhs</li>
                            <li>Houses are provided on a lease agreement (not for private ownership; successor nomination allowed).</li>
                        </ul>
                        <h4>How to Find us</h4>
                        <p>The Village is located in Madukkarai, about 5 km from Gandhipuram Main Bus stand, 10 km from Coimbatore Main Junction, and 23 km from Coimbatore International Airport.</p>
                        <div class="btn-box mt_20">
                            <a href="contact.html" class="theme-btn-one">Contact Us for Directions</a>
                            <a href="donate.html" class="theme-btn-one" style="margin-left:10px;">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

# --- Donate page ---
DONATE_CONTENT = """
        <section class="page-title centred">
            <div class="bg-layer" style="background-image: url(assets/images/vetham/construction.jpg);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1>Donate</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Donate</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <section class="about-section p_relative sec-pad">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Donations</span>
                    <h2>Donate to Vethathiri Maharishi Spiritual Village Retirement Home</h2>
                </div>
                <div class="row clearfix align-items-center">
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div class="text">
                            <p><strong>🙏 Give with Heart. Build with Purpose</strong></p>
                            <p>Vetham Kuzhumam Spiritual Trust is building a retirement home where elders are cared for with dignity, love, and spiritual support. This space will offer peace, companionship, and a nurturing environment where every resident feels safe and valued.</p>
                            <p>Your contribution helps lay the foundation for this sacred vision. With every donation, you bring comfort, healing, and hope to those who need it most. Together, we can create a home rooted in compassion and guided by service.</p>
                            <p>The blessings and goodwill generated ensure that every donation multiplies manifold, bringing abundance to the giver while uplifting the receiver.</p>
                            <p><em>Swami Vivekananda: "It is the giver who is blessed."</em></p>
                            <div class="progress-box mt_30" style="max-width:400px;">
                                <div class="bar">
                                    <div class="bar-inner count-bar" data-percent="0.09%"><div class="count-text">0.09%</div></div>
                                </div>
                                <div class="donate-text">
                                    <h6><span>₹900</span> Raised</h6>
                                    <h6><span>₹10 lakh</span> Goal</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 content-column centred">
                        <div class="vetham-donate-options" style="background:#faf6f2;padding:30px;border-radius:12px;">
                            <h4>Donate via Razorpay or QR Code</h4>
                            <p>Scan the QR code or click Razorpay to make your donation.</p>
                            <a href="https://vethamspiritualtrust.com/donations/" target="_blank" rel="noopener" class="vetham-razorpay-link" style="display:inline-block;margin:15px 0;">
                                <img src="assets/images/vetham/razorpay-logo.png" alt="Donate via Razorpay" width="150">
                            </a>
                            <p><small>Click Razorpay to donate</small></p>
                            <img src="assets/images/vetham/qr-code-vkst.jpg" alt="Vetham Kuzhumam QR Code" class="vetham-qr-code" style="max-width:200px;margin:15px auto;display:block;">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad bg-color-1">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <h2>Donate to Vetham Kuzhumam Spiritual Trust</h2>
                </div>
                <div class="text centred" style="max-width:800px;margin:0 auto;">
                    <p><strong>🌼 Support with Purpose</strong> — Your donation helps us nurture a space where spiritual growth, wellness, and compassionate service thrive.</p>
                    <p><strong>🙏 Give from the Heart</strong> — Join us in building a legacy of peace and wisdom.</p>
                    <p><strong>🌿 Donate Today</strong> — Be the Light in Someone's Journey.</p>
                </div>
                <div class="row clearfix mt_50">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="service-block-one">
                            <div class="inner-box centred">
                                <h3>Spiritual Village</h3>
                                <p>Support the construction of Vethathiri Maharishi Spiritual Village.</p>
                                <a href="https://vethamspiritualtrust.com/donations/" target="_blank" rel="noopener" class="theme-btn-one">Donate</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="service-block-one">
                            <div class="inner-box centred">
                                <h3>Retirement Home</h3>
                                <p>Help build a retirement home for elders with dignity and spiritual support.</p>
                                <a href="https://vethamspiritualtrust.com/donations/" target="_blank" rel="noopener" class="theme-btn-one">Donate</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="service-block-one">
                            <div class="inner-box centred">
                                <h3>General Trust Fund</h3>
                                <p>Support meditation programs, yoga camps, and spiritual education.</p>
                                <a href="https://vethamspiritualtrust.com/donations/" target="_blank" rel="noopener" class="theme-btn-one">Donate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

# --- Courses (service.html) ---
COURSES_CONTENT = """
        <section class="page-title centred">
            <div class="bg-layer" style="background-image: url(assets/images/background/page-title-3.jpg);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1>Courses</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Courses</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <section class="about-section p_relative sec-pad">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Open your mind</span>
                    <h2>Join hands with Vetham Kuzhumam Spiritual Group</h2>
                    <p>Finding inner peace through spiritual practices</p>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box centred">
                                <div class="icon-box"><div class="icon"><i class="icon-8"></i></div></div>
                                <h3>Teachings</h3>
                                <p>Spreading the timeless teachings of Vethathiri Maharishi through yoga and meditation.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box centred">
                                <div class="icon-box"><div class="icon"><i class="icon-9"></i></div></div>
                                <h3>Kundalini</h3>
                                <p>Awakening inner energy through guided Kundalini practices and spiritual discipline.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box centred">
                                <div class="icon-box"><div class="icon"><i class="icon-10"></i></div></div>
                                <h3>Vinyasa</h3>
                                <p>Flowing yoga sequences that harmonize body, mind, and breath for holistic wellness.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box centred">
                                <div class="icon-box"><div class="icon"><i class="icon-11"></i></div></div>
                                <h3>Hatha</h3>
                                <p>Traditional Hatha yoga for physical health, mental clarity, and spiritual growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad bg-color-1">
            <div class="auto-container">
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="sec-title mb_30">
                            <span class="sub-title">Meditation Time</span>
                            <h2>Ashram Schedule</h2>
                        </div>
                        <p>Ashram will be in operation on a daily basis but spiritual classes and Satsang's will be scheduled as per the calendar days of convenience.</p>
                        <ul class="village-highlight-list">
                            <li>Mon – Saturday: 11 AM – 6.30 PM</li>
                            <li>Mon – Saturday: 5 AM – 7.30 AM for NRI</li>
                            <li>Sunday: No Classes</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="sec-title mb_30">
                            <span class="sub-title">Free Online Yoga</span>
                            <h2>Online Meditation Sessions</h2>
                        </div>
                        <p>இந்த பயிற்சி புதிய அன்பர்களுக்கான பயிற்சி</p>
                        <p>பயிற்சி காலம் ஆகஸ்ட் 2025 முதல் ஜனவரி 2026 வரை வாரத்தில் 3 நாட்கள் (திங்கள், புதன், வெள்ளி)</p>
                        <p>விருப்பமுள்ள அன்பர்கள் கீழ்க்கண்ட google form fill பண்ணுங்கள்</p>
                        <a href="https://docs.google.com/forms/" target="_blank" rel="noopener" class="theme-btn-one">Submit for Free Online Yoga Registration</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Meditation (Thavam) Time Table</span>
                    <h2>Weekly Schedule</h2>
                    <p><small>For Mobile users: Enable Auto-rotate to view the time table</small></p>
                </div>
                <div class="meditation-timetable">
                    <table>
                        <thead>
                            <tr>
                                <th>Days</th>
                                <th>காலை 05.00</th>
                                <th>காலை 7.30</th>
                                <th>காலை 11.00</th>
                                <th>மாலை 06-30</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Monday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை ஆஷா பாய்</td><td>ஞானாசிரியை காஞ்சனா பாலகிருஷ்ணன்</td><td>ஞானாசிரியர் சுக.ஆனந்த் நாகராஜன்</td></tr>
                            <tr><td>Tuesday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை காஞ்சனா பாலகிருஷ்ணன்</td><td>ஞானாசிரியர் பாப்பாத்தி ராஜேந்திரன்</td><td>ஞானரிஷி AS ராதாகிருஷ்ணன்</td></tr>
                            <tr><td>Wednesday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை இரமணி வேதநாயகம்</td><td>ஞானாசிரியை ஆஷா பாய்</td><td>ஞானாசிரியர் A.S.சுரேஷ் குமார்</td></tr>
                            <tr><td>Thursday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை காஞ்சனா பாலகிருஷ்ணன்</td><td>ஞானாசிரியர் பாப்பாத்தி ராஜேந்திரன்</td><td>ஞானாசிரியை இரமணி வேதநாயகம்</td></tr>
                            <tr><td>Friday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை ஆஷா பாய்</td><td>ஞானாசிரியை காஞ்சனா பாலகிருஷ்ணன்</td><td>ஞானாசிரியர் ச.செல்வின்</td></tr>
                            <tr><td>Saturday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை இரமணி வேதநாயகம்</td><td>ஞானாசிரியை காஞ்சனா பாலகிருஷ்ணன்</td><td>ஞானரிஷி AS ராதாகிருஷ்ணன்</td></tr>
                            <tr><td>Sunday</td><td>ஞானாசிரியர் ச.செல்வின்</td><td>ஞானாசிரியை காஞ்சனா பாலகிருஷ்ணன்</td><td>ஞானாசிரியை ஆஷா பாய்</td><td>✨ No Satsang ✨</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
"""

# --- Social Media (gallery.html) ---
SOCIAL_CONTENT = """
        <section class="page-title centred">
            <div class="bg-layer" style="background-image: url(assets/images/background/page-title-3.jpg);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1>Social Media</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Social Media</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <section class="services-page-section centred sec-pad social-media-cards">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Connect With Us</span>
                    <h2>Follow our Social Media Accounts</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <div class="icon-box"><div class="icon"><i class="fab fa-facebook-f" style="font-size:40px;color:#C45A1A;"></i></div></div>
                                <h3><a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener">Facebook</a></h3>
                                <p>Follow us on Facebook for daily spiritual insights, event updates, and community stories.</p>
                                <a href="https://www.facebook.com/vetham.kuzhumam.1/" target="_blank" rel="noopener" class="theme-btn-one">Follow us on Facebook</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <div class="icon-box"><div class="icon"><i class="fab fa-instagram" style="font-size:40px;color:#C45A1A;"></i></div></div>
                                <h3><a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener">Instagram</a></h3>
                                <p>Follow us on Instagram for photos from our spiritual village, yoga sessions, and events.</p>
                                <a href="https://www.instagram.com/vethamkuzhumam/" target="_blank" rel="noopener" class="theme-btn-one">Follow us on Instagram</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 service-block">
                        <div class="service-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <div class="icon-box"><div class="icon"><i class="fab fa-youtube" style="font-size:40px;color:#C45A1A;"></i></div></div>
                                <h3><a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener">YouTube</a></h3>
                                <p>Subscribe to our YouTube Channel for meditation sessions, teachings, and spiritual discourses.</p>
                                <a href="https://www.youtube.com/@VethamSpiritualGroup" target="_blank" rel="noopener" class="theme-btn-one">Subscribe on YouTube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="gallery-page-section sec-pad bg-color-1">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Photo Gallery</span>
                    <h2>Our Spiritual Journey in Pictures</h2>
                </div>
                <div class="items-container row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/meditation-hall.jpg" alt="Meditation Hall"></figure>
                                <div class="content-box"><div class="inner"><h3>Meditation Hall</h3><p>Foundation Course</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/group.jpg" alt="Community"></figure>
                                <div class="content-box"><div class="inner"><h3>Community</h3><p>Event Photos</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/leader.jpg" alt="Spiritual Leader"></figure>
                                <div class="content-box"><div class="inner"><h3>Teachers Photos</h3><p>Spiritual Guidance</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/village-plan.jpg" alt="Village Plan"></figure>
                                <div class="content-box"><div class="inner"><h3>Spiritual Village</h3><p>Construction</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/history.jpg" alt="History"></figure>
                                <div class="content-box"><div class="inner"><h3>Our History</h3><p>Foundation Course</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="project-block-one">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/mahaan.png" alt="Vethathiri Maharishi"></figure>
                                <div class="content-box"><div class="inner"><h3>Vethathiri Maharishi</h3><p>Spiritual Inspiration</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

# --- Events ---
EVENTS_CONTENT = """
        <section class="page-title centred">
            <div class="bg-layer" style="background-image: url(assets/images/background/page-title-3.jpg);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1>Events</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Events</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <section class="about-section p_relative sec-pad">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Upcoming Events</span>
                    <h2>Free Online Yoga Courses</h2>
                    <p>From 15th August till 14th January 2026</p>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="content-box" style="background:#faf6f2;padding:30px;border-radius:12px;margin-bottom:20px;">
                            <h3>Free Online Yoga Courses</h3>
                            <p>Join our free online yoga courses from 15th August 2025 till 14th January 2026. Classes are held 3 days a week (Monday, Wednesday, Friday).</p>
                            <p>இந்த பயிற்சி புதிய அன்பர்களுக்கான பயிற்சி. விருப்பமுள்ள அன்பர்கள் google form fill பண்ணுங்கள்.</p>
                            <a href="service.html" class="theme-btn-one">View Course Schedule</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <div class="content-box" style="background:#faf6f2;padding:30px;border-radius:12px;margin-bottom:20px;">
                            <h3>ஆத்ம சங்கமம் – Kodaikanal</h3>
                            <p>வாழ்க வளமுடன்!! ஞான ரிஷி A. S. இராதா கிருஷ்ணன் ஐயா அவர்கள் வழங்கும் 'ஆத்ம சங்கமம்' மே மாதம் 26, 27, 28 தேதிகளில் கொடைக்கானல் பெருமாள் மலையில் நடைபெறும்.</p>
                            <p>நபர் ஒருவருக்கு ₹4000. தொடர்புக்கு: பிரேம் குமார் 9443127726 | GPay: 9443127726</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about-section p_relative sec-pad bg-color-1">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">Meditation Time</span>
                    <h2>Ashram Operating Hours</h2>
                </div>
                <div class="text centred" style="max-width:600px;margin:0 auto;">
                    <ul class="village-highlight-list" style="text-align:left;display:inline-block;">
                        <li>Mon – Saturday: 11 AM – 6.30 PM</li>
                        <li>Mon – Saturday: 5 AM – 7.30 AM for NRI</li>
                        <li>Sunday: No Classes</li>
                    </ul>
                </div>
            </div>
        </section>
"""

# --- Blog ---
BLOG_CONTENT = """
        <section class="page-title centred">
            <div class="bg-layer" style="background-image: url(assets/images/background/page-title-3.jpg);"></div>
            <div class="auto-container">
                <div class="content-box">
                    <h1>Blog</h1>
                    <ul class="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- End Page Title -->

        <section class="news-section sec-pad">
            <div class="auto-container">
                <div class="sec-title centred mb_50">
                    <span class="sub-title">The Wisdom Blog</span>
                    <h2>Find valuable information and inspiration in our stories</h2>
                </div>
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/meditation-hall.jpg" alt="Yoga and Stress"></figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">How yoga can help reduce stress</a></h3>
                                    <p>🧘 How Yoga Can Help Reduce Stress Naturally. In today's fast-paced world, stress affects us all. Discover how yoga can bring calm and balance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/group.jpg" alt="Mindful Practice"></figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">The difference between mindful practice and meditation</a></h3>
                                    <p>🧘‍♀️ Mindful Practice vs. Meditation: A Journey Through Awareness and Stillness in today's busy world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/history.jpg" alt="Yoga Happiness"></figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">Yoga can actually make you happier</a></h3>
                                    <p>😊 Yoga Can Actually Make You Happier. In a world full of stress and distractions, yoga offers a path to genuine happiness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/leader.jpg" alt="Spiritual Practices"></figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">The most unusual spiritual practices and yoga</a></h3>
                                    <p>🧘‍♀️ Exploring the Most Unusual Spiritual Practices. Spirituality takes many forms across cultures and traditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div class="news-block-one wow fadeInUp animated">
                            <div class="inner-box">
                                <figure class="image-box"><img src="assets/images/vetham/village-about.jpg" alt="Conscious Creation"></figure>
                                <div class="lower-content">
                                    <h3><a href="blog-details.html">The conscious creation of reality</a></h3>
                                    <p>🧘‍♀️ Meditation: The Conscious Creation of Reality. Learn how meditation shapes our perception and experience of life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""


def main():
    pages = [
        ("causes.html", "<!-- Page Title -->", "<!-- cta-style-two -->", VILLAGE_CONTENT),
        ("donate.html", "<!-- Page Title -->", "<!-- cta-style-two -->", DONATE_CONTENT),
        ("service.html", "<!-- Page Title -->", "<!-- cta-style-two -->", COURSES_CONTENT),
        ("gallery.html", "<!-- Page Title -->", "<!-- cta-style-two -->", SOCIAL_CONTENT),
        ("events.html", "<!-- Page Title -->", "<!-- cta-style-two -->", EVENTS_CONTENT),
        ("blog.html", "<!-- Page Title -->", "<!-- cta-style-two -->", BLOG_CONTENT),
    ]
    for filepath, start, end, content in pages:
        replace_between(filepath, start, end, content)


if __name__ == "__main__":
    main()
