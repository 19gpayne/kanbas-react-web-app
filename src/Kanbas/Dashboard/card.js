import {FaPen} from "react-icons/fa"
import header from "./blueheader.png"
import "./index.css"
import "../index.css"

function DashboardCard({ _id, name, number, startDate, endDate}) {
    return (
        <div className="card" style={{maxWidth: "270px"}}>
            <img src={header} className="card-img-top" alt="..." />
            <div className="card-body text-secondary">
                <div className="wd-course-title card-title wd-course-link">
                    {name}
                </div>
                <h5 className="card-text mb-0">
                    {number}
                </h5>
                <p className="card-text">
                    {startDate} - {endDate}
                </p>
                <FaPen size={14} />
            </div>
        </div>
    );
}
export default DashboardCard;