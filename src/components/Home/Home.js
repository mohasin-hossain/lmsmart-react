import React from "react";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import TopCourses from "../TopCourses/TopCourses";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <Category></Category>
      <TopCourses></TopCourses>
    </>
  );
};

export default Home;
