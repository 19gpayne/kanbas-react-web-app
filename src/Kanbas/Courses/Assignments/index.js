import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV, FaFileSignature, FaGripVertical, FaPlus } from "react-icons/fa";
import "./index.css"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="float-start">
          <input type="text" className="form-control" placeholder="Search for Assignments"/>
      </div>
      <div className="float-end text-end d-flex gap-1">
        <button className="btn btn-light"><FaPlus /> Group</button>
        <button className="btn btn-danger"><FaPlus /> Assignment</button>
        <button className="btn btn-light"><FaEllipsisV /></button>
      </div>
      <br /><br />
      <ul className="list-group">
          <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center p-3">
              <span><FaGripVertical /> Assignments</span>
              <span>
                  <span className="badge rounded-pill text-bg-light me-3">40% of Total</span>
                  <FaPlus />
                  <FaEllipsisV />
              </span>
          </li>
          {courseAssignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center wd-green-border">
                <span className="d-flex align-items-center gap-2">
                    <FaGripVertical />
                    <FaFileSignature color="green" />
                    <div>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                          className="wd-assignment-title mb-0 fw-medium fs-5">
                          {assignment.title}
                        </Link>
                    </div>
                </span>
                <span><FaCheckCircle color="green" /> <FaEllipsisV /></span>
            </li>
          ))}
      </ul>
    </>
  );
}
export default Assignments;