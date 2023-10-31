import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV, FaGripVertical, FaPlus, FaTrashAlt, FaPen } from "react-icons/fa";
import "../../custom.css"
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const courseModules = modules.filter((module) => module.course === courseId);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [showEditModule, setShowEditModule] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const resetModule = () => {
    setIsEditing(false);
    setShowEditModule(false);
    dispatch(setModule({name: "", description: ""}));
  }
  const onSaveModule = () => {
    if (isEditing) {
      dispatch(updateModule({ ...module, course: courseId }));
    } else {
      dispatch(addModule({ ...module, course: courseId }));
    }
    resetModule();
  }
  return (
    <>
      <div className="float-end text-end d-flex gap-1 flex-wrap">
        <button className="btn btn-light">Collapse All</button>
        <button className="btn btn-light">View Progress</button>
        <div className="btn-group">
            <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCheckCircle /> Publish All
            </button>
        </div>
        <button className="btn btn-danger" onClick={() => {setShowEditModule(true)}}><FaPlus /> Module</button>
        <button className="btn btn-light"><FaEllipsisV /></button>
      </div>
      <br />
      <br />
      <hr />
      {showEditModule ?
        <div>
          <input
            className="form-control"
            placeholder="Module name"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
            <br />
          <textarea
            className="form-control"
            placeholder="Description"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
          <div className="d-flex gap-2 justify-content-end mt-4">
            <button className="btn btn-light" onClick={resetModule}>Cancel</button>
            <button className="btn btn-danger" onClick={onSaveModule}>Save</button>
          </div>
        </div>
        :
        <ul className="list-group">
          {(!courseModules || courseModules.length === 0) ? 
            <div className="text-center">No modules yet!</div>
            :
            courseModules
              .map((module, index) => (
                <li className="list-group-item list-group-item-secondary gap-2 mb-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span><FaGripVertical /></span>
                    <div className="ms-2">
                      <h4 className="mb-0">{module.name}</h4>
                      <p className="mb-0">{module.description}</p>
                    </div>
                  </div>
                  <span className="d-flex gap-2">
                    <FaPen onClick={() => {dispatch(setModule(module)); setShowEditModule(true); setIsEditing(true)}} role="button"/>
                    <FaTrashAlt onClick={() => dispatch(deleteModule(module._id))} role="button"/>
                    <FaEllipsisV />
                  </span>
              </li>
            ))
          }
        </ul>
      }
    </>
  );
}
export default ModuleList;