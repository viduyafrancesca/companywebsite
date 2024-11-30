import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <footer className="bg-[#333333] text-white py-8">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p>
                    © 2024 Beantalks Coffee PH. All rights reserved. | Website developed and maintained by
                    <a href="https://www.linkedin.com/in/francesca-maria-viduya/" target="_blank" id="footer-credits"> FMV</a>
                </p>
                <div className="social-media mt-4">
                    <a href="https://www.facebook.com/beantalks" target="_blank" className="social-icon mx-3">
                        <i className="fab fa-facebook-f text-white text-xl hover:text-[#FFD700]"></i>
                    </a>
                    <a href="https://www.instagram.com/beantalks.ph" target="_blank" className="social-icon mx-3">
                        <i className="fab fa-instagram text-white text-xl hover:text-[#FFD700]"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
