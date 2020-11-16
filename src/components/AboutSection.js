import React from 'react';
import Home1 from '../img/home1.png';
function AboutSection() {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                    </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact us for photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </div>
            <img src={Home1} alt="guy with camera" />
        </div>
    )
}

export default AboutSection;
