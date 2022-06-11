import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CourseDetails.css";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    fetch("/courses.JSON")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const courseDetails = courses.find(
    (course) => course.id === parseInt(courseId)
  );

  const userIcon = <FontAwesomeIcon className="user-icon" icon={faUser} />;

  return (
    <div className="course-details">
      {courseDetails ? (
        <div>
          <img src={courseDetails.image} alt="" />
          <div>
            <div className="d-flex cat-price justify-content-between align-items-center">
              <p>{courseDetails.category}</p>
              <p>{courseDetails.price}</p>
            </div>
            <div className="title">{courseDetails.courseName}</div>
            <div className="d-flex author align-items-center justify-content-between gap-2 text-muted">
              <div className="d-flex align-items-center justify-centent-center gap-2">
                <img src={courseDetails.authorImage} alt="" />
                <p className="pt-3">{courseDetails.author}</p>
              </div>
              <button>Enroll Now!</button>
            </div>
          </div>
          <div className="d-flex border-top px-3 py-3 text-muted fw-bold justify-content-between align-items-center">
            <p className="m-0">
              {userIcon} {courseDetails.enrolledUser}+ Enrolled
            </p>
            <Rating
              emptySymbol="fa fa-star-o fa-2x star"
              fullSymbol="fa fa-star fa-2x star"
              initialRating={courseDetails.rating}
              readonly
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CourseDetails;
