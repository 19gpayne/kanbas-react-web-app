import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaCog, FaFileImport, FaFilter, FaFileExport} from "react-icons/fa";
import "./index.css"
import "../../index.css"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <div class="row mb-3 float-end">
            <div class="float-end text-right">
                <button class="btn btn-light me-1"><FaFileImport /> Import</button>
                <button class="btn btn-light dropdown-toggle me-1" type="button">
                    <FaFileExport /> Export
                </button>
                <button class="btn btn-light"><FaCog /></button>
            </div>
        </div>
        <div class="row mb-3 w-100">
            <div class="w-50">
                <label class="fw-bold">Student Names</label><br/>
                <input type="text" placeholder="Search Students" class="form-control" />
            </div>
            <div class="w-50">
                <label class="fw-bold">Assignments Names</label><br/>
                <input type="text" placeholder="Search Assignments" class="form-control" />
            </div>
        </div>
        <div class="row mb-3">
            <div>
                <button class="btn btn-light"><FaFilter /> Apply Filters</button>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table table-striped table-bordered text-center">
                <th className="p-2">Student Name</th>
                {assignments.map((assignment) => (<th className="p-2">{assignment.title}</th>))}
                <tbody>
                {enrollments.map((enrollment) => {
                    const user = db.users.find((user) => user._id === enrollment.user);
                    return (
                        <tr>
                            <td>{user.firstName} {user.lastName}</td>
                            {assignments.map((assignment) => {
                                const grade = db.grades.find(
                                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                return (<td>{grade?.grade || "Not yet graded"}</td>);})}
                        </tr>
                    );
                })}
                </tbody>
            </table>
    </div></div>);
}
export default Grades;
