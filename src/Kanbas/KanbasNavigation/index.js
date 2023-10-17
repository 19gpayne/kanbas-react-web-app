import { Link, useLocation } from "react-router-dom";
import logo from "./northeastern-logo.png"
import {
    FaRegUserCircle, 
    FaRegCompass, 
    FaBook,
    FaRegCalendar,
    FaRegEnvelope,
    FaClock,
    FaTv,
    FaShareSquare,
    FaRegQuestionCircle
} from "react-icons/fa";
import "./index.css";
import "../index.css"

function KanbasNavigation() {
  const links = [
        {label: "Account", icon: <FaRegUserCircle size={35} />}, 
        {label: "Dashboard", icon: <FaRegCompass size={28} />},
        {label: "Courses", icon: <FaBook size={28} />},
        {label: "Calendar", icon: <FaRegCalendar size={28} />}, 
        {label: "Inbox", icon: <FaRegEnvelope size={28} />},
        {label: "History", icon: <FaClock size={28} />},
        {label: "Studio", icon: <FaTv size={28} />},
        {label: "Commons", icon: <FaShareSquare size={28} />},
        {label: "Help", icon: <FaRegQuestionCircle size={28} />}
    ];
    const { pathname } = useLocation();
    return (
        <div>
            <div className={`wd-navigation-link wd-navigation py-2 px-3`}>
                <img src={logo} width="70px" />
            </div>
            {links.map((link, index) => (
                <div 
                    className={`wd-navigation py-2 px-3 ${pathname.includes(link.label) && "wd-navigation-active"}`} 
                    key={index}
                >
                    <Link to={`/Kanbas/${link.label}`} className="wd-navigation-link">
                        <>
                            <div className={`mb-1 ${link.label === "Account" ? "wd-gray" : "wd-crimson"}`}>{link.icon}</div>
                            <div className={`mt-2 wd-white ${pathname.includes(link.label) && "wd-crimson"}`}>
                                {link.label}
                                </div>
                        </>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default KanbasNavigation;