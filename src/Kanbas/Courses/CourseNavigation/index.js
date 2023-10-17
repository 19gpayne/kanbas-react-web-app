import { Link, useParams, useLocation } from "react-router-dom";
import "../../index.css";
import "./index.css"

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Quizzes", "Grades", "People", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`wd-sub-navigation my-2 ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;