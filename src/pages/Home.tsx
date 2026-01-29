import React from 'react';
import { Hero } from '../components/Hero';
// import { CourseHighlights } from '../components/CourseHighlights';
// import { FeaturedCourses } from '../components/FeaturedCourses';
// import Stats  from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
import  Footer  from '../components/Footer';
import { GetStarted } from '../components/GetStarted';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div id="home"><Hero /></div>
      {/* <div id="about"><CourseHighlights /></div>
      <div id="course"><FeaturedCourses /></div>
      <div id="stats"><Stats /></div> */}
      <div id="testimonials"><Testimonials /></div>
      <div id="getstarted"><GetStarted /></div>
      <Footer />
    </div>
  );
}
