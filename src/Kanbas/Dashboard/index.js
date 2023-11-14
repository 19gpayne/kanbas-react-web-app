import { Link } from "react-router-dom";
import DashboardCard from "./card";

function Dashboard({ courses, showCourseForm, setShowCourseForm, course, setCourse, resetAddCourseform, deleteCourse, editCourse, updateCourse }) {
  return (
    <div className="w-100 mx-3">
      <h1 className="ms-1">Dashboard</h1>
      <hr />
      <div className="d-flex justify-content-between">
        <h3 className="ms-4">Published Courses (3)</h3>
        <button onClick={() => {setShowCourseForm(true)}} className="btn btn-danger me-4">Add</button>
      </div>
      {showCourseForm &&
        <div className="mx-4">
          <hr />
          <input value={course.name} className="form-control mb-3 w-75"
                onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          <input value={course.number} className="form-control mb-3 w-75"
                onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          <input value={course.startDate} className="form-control mb-3 w-75" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          <input value={course.endDate} className="form-control mb-3 w-75" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          <hr />
          <div className="d-flex gap-2 justify-content-end me-4">
            <button className="btn btn-light" onClick={resetAddCourseform}>Cancel</button>
            <button className="btn btn-danger" onClick={updateCourse}>Save</button>
          </div>
        </div>
      }
      {!showCourseForm &&
        <div className="d-flex flew-row flex-wrap gap-4 ms-4">
          {courses.map((course, index) => (
            <Link key={`${course._id}${index}`} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
              <DashboardCard 
                _id={course._id} 
                name={course.name} 
                number={course.number} 
                startDate={course.startDate}
                endDate={course.endDate}
                deleteCourse={deleteCourse}
                editCourse={editCourse}
              />
            </Link>
          ))}
        </div>
      }
    </div>
  );
}
export default Dashboard;