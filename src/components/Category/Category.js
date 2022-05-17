import React from 'react';
import './Category.css';
import artBookIcon from '../../images/art-book.png';
import foodDeliveryIcon from '../../images/food-delivery.png';
import mathIcon from '../../images/math.png';
import studentIcon from '../../images/graduating-student.png';
import pencilIcon from '../../images/pencil.png';
import scienceIcon from '../../images/science.png';
import techIcon from '../../images/tech.png';
import medicineIcon from '../../images/med.png';

const Category = () => {
    return (
        <section className='category'>
            <div className='d-flex justify-content-between category-title'>
                <h1>Featured topics by category</h1>
                <button>Explore More</button>
            </div>
            <div className='category-items pt-5'>
                <div>
                    <img src={pencilIcon} alt="" />
                    <h4>Design</h4>
                </div>
                <div>
                    <img src={scienceIcon} alt="" />
                    <h4>Chemistry</h4>
                </div>
                <div>
                    <img src={techIcon} alt="" />
                    <h4>Technology</h4>
                </div>
                <div>
                    <img src={medicineIcon} alt="" />
                    <h4>Medical</h4>
                </div>
                <div>
                    <img src={mathIcon} alt="" />
                    <h4>Mathmetics</h4>
                </div>
                <div>
                    <img src={foodDeliveryIcon} alt="" />
                    <h4>Food & Recipe</h4>
                </div>
                <div>
                    <img src={studentIcon} alt="" />
                    <h4>Language</h4>
                </div>
                <div>
                    <img src={artBookIcon} alt="" />
                    <h4>Art & Block</h4>
                </div>
            </div>
         
        </section>
    );
};

export default Category;