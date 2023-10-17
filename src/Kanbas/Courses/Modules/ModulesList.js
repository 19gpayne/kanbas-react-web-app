import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus } from "react-icons/fa";
import "../../custom.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <>
      <div className="float-end text-end d-flex gap-1">
        <button className="btn btn-light">Collapse All</button>
        <button className="btn btn-light">View Progress</button>
        <div className="btn-group">
            <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCheckCircle /> Publish All
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Publish All</a></li>
            </ul>
        </div>
        <button className="btn btn-danger"><FaPlus /> Module</button>
        <button className="btn btn-light"><FaEllipsisV /></button>
      </div>
      <br />
      <br />
      <hr />
      <ul className="list-group">
        {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li className="list-group-item list-group-item-secondary gap-2 mb-4 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <span><FaGripVertical /></span>
                <div className="ms-2">
                  <h4 className="mb-0">{module.name}</h4>
                  <p className="mb-0">{module.description}</p>
                </div>
              </div>
              <span><FaCheckCircle color="green" /> <FaPlus /> <FaEllipsisV /></span>
          </li>
        ))
        }
      </ul>
    </>
  );
}
export default ModuleList;