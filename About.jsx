import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about-component'>
            <header className='about-header'>
                <h1>About DogWorld</h1>
            </header>

            <div className="about-container">
                <h2>Mission</h2>
                <p>
                    At BowWorld, our mission is to educate and delight dog enthusiasts by offering a user-friendly platform
                    where they can learn about different breeds, their characteristics, and their unique personalities. We aim
                    to promote responsible pet ownership by providing valuable insights and guidance to potential dog owners.
                </p>

                <h2>App Features</h2>
                <ul>
                    <li>Extensive Breed Database: DogWorld boasts an extensive database of dog breeds, ranging from popular
                        favorites to lesser-known gems, ensuring you have access to a diverse range of options.</li>
                    <li>Detailed Breed Profiles: Each breed is presented with a detailed profile that includes essential
                        information such as size, temperament, exercise needs, grooming requirements, and common health issues.
                    </li>
                    <li>High-Quality Images: Immerse yourself in the captivating world of dogs with stunning, high-quality images
                        that showcase the beauty and diversity of each breed.</li>
                    <li>Search and Filter: Looking for a specific breed or traits? Our search and filter functionalities allow
                        you to quickly find the perfect match for your preferences.</li>
                    <li>User Reviews and Ratings: Get insights from fellow dog lovers through user-generated reviews and
                        ratings, helping you make informed decisions about potential breeds.</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                    Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to reach out to our friendly
                    support team at <a href="mailto:support@dogworldapp.com">support@dogworldapp.com</a>, and we'll be more than
                    happy to assist you.
                </p>

                <h2>Privacy Policy</h2>
                <p>
                    We value your privacy and take data protection seriously. Please review our <a href="#">privacy policy</a> to
                    understand how we collect, use, and safeguard your information.
                </p>

                <h2>Terms of Service</h2>
                <p>
                    By using DogWorld, you agree to abide by our <a href="#">terms of service</a>, ensuring a respectful and
                    enjoyable experience for all users.
                </p>

                <h2>Acknowledgments</h2>
                <p>
                    We extend our gratitude to the various breed organizations, photographers, and contributors who have helped
                    us create this comprehensive platform.
                </p>

                <h2>Follow Us</h2>
                <p>
                    Stay connected with us on social media for the latest updates, dog care tips, and adorable doggy content!
                    Follow us on <a href="#">Facebook</a>, <a href="#">Instagram</a>, and <a href="#">Twitter</a>.
                </p>
            </div>
        </div>
    )
}

