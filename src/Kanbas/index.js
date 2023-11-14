import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import axios from "axios";
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { COURSES_URL } from "./Courses/Modules/client";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const defaultCourse = {
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  }
  const [course, setCourse] = useState(defaultCourse);
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const addCourse = async () => {
    const response = await axios.post(COURSES_URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
  };
  const resetAddCourseform = () => {
    setCourse(defaultCourse)
    setShowCourseForm(false);
    setIsEditing(false);
  };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${COURSES_URL}/${courseId}`
    );
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const editCourse = (courseId) => {
    setIsEditing(true);
    setCourse(courses.find((course) => course._id === courseId));
    setShowCourseForm(true);
  }
  
  const updateCourse = async () => {
    if (isEditing) {  
      const response = await axios.put(
        `${COURSES_URL}/${course._id}`,
        course
      );
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return response.data;
          }
          return c;
        })
      );
    } else {
      addCourse()
    }
    resetAddCourseform();
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block col-2 col-lg-1"><KanbasNavigation /></div>
        <div className="mt-md-3 col-12 col-md-10 col-lg-11">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard 
                courses={courses}
                showCourseForm={showCourseForm}
                setShowCourseForm={setShowCourseForm}
                course={course}
                setCourse={setCourse}
                resetAddCourseform={resetAddCourseform}
                deleteCourse={deleteCourse}
                editCourse={editCourse}
                updateCourse={updateCourse}
              />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;