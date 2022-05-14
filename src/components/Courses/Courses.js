import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [displayCourses, setDisplayCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.JSON")
      .then((response) => response.json())
      .then((data) => {
          setCourses(data);
          setDisplayCourses(data);
      });
  }, []);

  const handleFilter = (category) => {
    const filterValue = category;
    const filteredCourses = courses.filter(
      (course) => course.category === filterValue
    );
    setDisplayCourses(filteredCourses);
  };

  return (
    <section>
      <div className="courses-bg">
        <h1 className="text-center fw-bold">All Tutorials</h1>
      </div>
      <div className="categories d-flex flex-wrap gap-3 mt-5 justify-content-center text-uppercase fw-bold">
        <span onClick={() => handleFilter("Business")}>Business</span>
        <span onClick={() => handleFilter('Cooking')}>Cooking</span>
        <span onClick={() => handleFilter('Lifestyle')}>LifeStyle</span>
        <span onClick={() => handleFilter('Programming')}>Programming</span>
      </div>
      <div className="courses">
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 mt-3">
          {displayCourses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Courses;
