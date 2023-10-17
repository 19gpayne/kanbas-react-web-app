import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css"
import "../../index.css"

function Breadcrumb({ course, pathname}) {
    const splitPath = pathname.split("/")
    const endingPath = splitPath[splitPath.length - 1]
    const goBackPath = splitPath.slice(0, splitPath.length - 1).join("/") + "/Home"
    return (
        <>
            <div className="d-flex align-items-center w-100">
                <FaBars color="crimson" />
                <nav className="ms-4" style={{"--bs-breadcrumb-divider": '>'}}>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link
                                to={goBackPath}
                                className="wd-crimson wd-navigation-link">
                                {course.number}
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{"> " +endingPath}</li>
                    </ol>
                </nav>
            </div>
            <hr />
        </>
    )
}
export default Breadcrumb;