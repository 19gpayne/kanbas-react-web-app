import { Link } from "react-router-dom";
import db from "../Database";
import DashboardCard from "./card";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="w-100">
      <h1 className="ms-1">Dashboard</h1>
      <hr />
      <h3 className="ms-4">Published Courses (3)</h3>
      <hr />
      <div className="d-flex flew-row flex-wrap gap-4 ms-4">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            <DashboardCard 
              _id={course._id} 
              name={course.name} 
              number={course.number} 
              startDate={course.startDate}
              endDate={course.endDate}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;