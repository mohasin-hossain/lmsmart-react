import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    const {
        author,
        authorImage,
        image,
        enrolledUser,
        courseName,
        price,
        rating,
        category,
      } = props.course;
    
      const userIcon = <FontAwesomeIcon className="user-icon" icon={faUser} />;
    return (
        <Col>
        <Card border="light shadow-sm card">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div className="d-flex cat-price justify-content-between align-items-center">
              <p>{category}</p>
              <p>{price}</p>
            </div>
            <Card.Title className="title">{courseName}</Card.Title>
            <div className="d-flex author align-items-center justify-content-start gap-2 text-muted">
              <img src={authorImage} alt="" />
              <p className="pt-3">{author}</p>
            </div>
          </Card.Body>
          <div className="d-flex border-top px-3 py-3 text-muted fw-bold justify-content-between align-items-center">
            <p className="m-0">{userIcon} {enrolledUser}+ Enrolled</p>
            <Rating
              emptySymbol="fa fa-star-o fa-2x star"
              fullSymbol="fa fa-star fa-2x star"
              initialRating={rating}
              readonly
            />
          </div>
        </Card>
      </Col>
    );
};

export default Course;