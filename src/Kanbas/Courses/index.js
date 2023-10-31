import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "../index.css"
import Breadcrumb from "./CourseNavigation/breadcrumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentsEditor"
import Grades from "./Grades";

function Courses({courses}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    <div className="px-md-4">
        <Breadcrumb course={course} pathname={pathname}/>
        <div className="row">
            <div className="d-none d-md-block col-2"><CourseNavigation /></div>
            <div className="col-12 col-md-10">
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />}/>
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />}/>
                    <Route path="Grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    </div>
  );
}
export default Courses;