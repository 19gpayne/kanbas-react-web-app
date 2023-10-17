import { FaRegCalendar } from "react-icons/fa";
import ModuleList from "../Modules/ModulesList";
import { useParams } from "react-router-dom";
import "../../custom.css"
import "./index.css"

function Home() {
    const { courseId } = useParams();
    return (
    <div className="row">
        <div className="col-9"><ModuleList /></div>
        <div className="col-lg-3 d-none d-lg-block">
        <h5>Course Status</h5>
        <div className="d-flex gap-1">
            <button className="btn btn-light">Unpublish</button>
            <button className="btn btn-success">Published</button>
        </div>
        <br /><br />
        <ul className="list-group">
            <li className="list-group-item list-group-item-secondary">Import Existing Content</li>
            <li className="list-group-item list-group-item-secondary">Import from Commons</li>
            <li className="list-group-item list-group-item-secondary">Choose Home Page</li>
            <li className="list-group-item list-group-item-secondary">View Course Stream</li>
            <li className="list-group-item list-group-item-secondary">New Announcement</li>
            <li className="list-group-item list-group-item-secondary">New Analytics</li>
            <li className="list-group-item list-group-item-secondary">View Course Notifications</li>
        </ul>
        <br />
        <h5>To Do</h5>
        <hr />
        <div className="d-flex justify-content-between align-items-baseline wd-font-xxs">
            <span className="badge rounded-pill text-bg-danger">1</span>
            <div>
                <a className="wd-styled-link" href="#">Grade assignment</a>
                <p className="text-secondary">100 points | Sep 18 at 11:59pm</p>
            </div>
            <i className="fa-solid fa-x text-secondary"></i>
        </div>

        <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Coming Up</h5>
            <span className="text-secondary me-3 wd-font-xxs">
                <FaRegCalendar />
                <a className="wd-styled-link" href="#">View Calendar</a>
            </span>
        </div>
        <hr/>
        <div className="d-flex align-items-baseline wd-font-xxs">
            <span className="text-secondary me-3"><FaRegCalendar /></span>
            <div>
                <a className="wd-styled-link" href="#">Lecture</a>
                <p className="text-secondary mb-0">{courseId}</p>
                <p className="text-secondary">Sep 7 at 11:45am</p>
            </div>
        </div>
        <div className="d-flex align-items-baseline wd-font-xxs">
            <span className="text-secondary me-3"><FaRegCalendar /></span>
            <div>
                <a className="wd-styled-link" href="#">Lecture</a>
                <p className="text-secondary mb-0">{courseId}</p>
                <p className="text-secondary">Sep 11 at 11:45am</p>
            </div>
        </div>
        <div className="d-flex align-items-baseline wd-font-xxs">
            <span className="text-secondary me-3"><FaRegCalendar /></span>
            <div>
                <a className="wd-styled-link" href="#">Lecture</a>
                <p className="text-secondary mb-0">{courseId}</p>
                <p className="text-secondary">Sep 11 at 6pm</p>
            </div>
        </div>
    </div>
</div>
  );
}
export default Home;