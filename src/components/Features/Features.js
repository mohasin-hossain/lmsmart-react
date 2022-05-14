import React from 'react';
import './Features.css';
import bookIcon from '../../images/book-logo.png';
import brainIcon from '../../images/brain-logo.png';
import clipIcon from '../../images/clip-logo.png';

const Features = () => {
    return (
        <section className='features'>
            <div className='d-flex gap-3'>
                <div>
                    <img src={bookIcon} alt="" />
                </div>
                <div>
                    <h3>Over 155,000</h3>
                    <p>Video courses on career skills</p>
                </div>
            </div>
            <div className='d-flex gap-3'>
                <div>
                    <img src={brainIcon} alt="" />
                </div>
                <div>
                    <h3>Choose from</h3>
                    <p>Top industry instructors</p>
                </div>
            </div>
            <div className='d-flex gap-3'>
                <div>
                    <img src={clipIcon} alt="" />
                </div>
                <div>
                    <h3>Lifetime access</h3>
                    <p>On mobile and desktop</p>
                </div>
            </div>

        </section>
    );
};

export default Features;