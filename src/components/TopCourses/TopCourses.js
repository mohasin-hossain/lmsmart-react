import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopCourse from '../TopCourse/TopCourse';
import './TopCourses.css';

const TopCourses = () => {
    const [topCourses, setTopCourses] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
        .then(response => response.json())
        .then(data => setTopCourses(data))
    }, [])

    return (
        <section className='top-courses'>
            <h1 className='text-center fw-bold'>Top Rated Learning Tutorials</h1>
            <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4">
            {
                topCourses.slice(0, 4).map(course => <TopCourse course={course}></TopCourse>  )
            }
           </Row>
           <div className='d-flex justify-content-center'>
               <Link to="/courses">
                <button className='mt-5'>Explore All Courses</button>
               </Link>
           </div>
        </section>
    );
};

export default TopCourses;