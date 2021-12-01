import React, { useState } from "react";
import {
  faBook,
  faSignOutAlt,
  faVideo,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TableComponent from "./CourseTable";
import "axios-progress-bar/dist/nprogress.css";
import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";
import UploadForm from "./UploadForm";
import AddEditForm from "./AddEditForm";
import "../../constants/css/App.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";
import { Link } from "react-router-dom";
import { NavIcon } from "../Layout/Header/styled";
import Logo from "../../constants/Images/Logo";

const AdminPanel = (props) => {
  const [loadingForCourses, setLoadingForCourses] = useState(0);
  const [courseInfo, setCourseInfo] = useState([]);
  const [showCourses, setShowCourses] = useState(false);
  const [uploadVideosNotes, setUploadVideosNotes] = useState(false);
  const [addEditCourse, setAddEditCourse] = useState(false);
  const [courseClick, setOnCourseClick] = useState(false);
  const [addEditClick, setOnAddEditClick] = useState(false);
  const [uploadClick, setOnUploadClick] = useState(false);
  const [logoutClick, setOnLogoutClick] = useState(false);
  const [course, setCourse] = useState({});

  const dispatch = useDispatch();
  const onCourseClick = () => {
    props.history.push("/admin/courses");
    getDataForCourses();
    setShowCourses(true);
    setUploadVideosNotes(false);
    setAddEditCourse(false);
    setOnCourseClick(true);
    setOnAddEditClick(false);
    setOnUploadClick(false);
    setOnLogoutClick(false);
  };
  const onUploadVideosNotesClick = () => {
    props.history.push("/admin/upload");
    setUploadVideosNotes(true);
    setShowCourses(false);
    setAddEditCourse(false);
    setOnCourseClick(false);
    setOnAddEditClick(false);
    setOnUploadClick(true);
    setOnLogoutClick(false);
  };
  const onAddEditClick = () => {
    setCourse("");
    props.history.push("/admin/add");
    setUploadVideosNotes(false);
    setShowCourses(false);
    setAddEditCourse(true);
    setOnCourseClick(false);
    setOnAddEditClick(true);
    setOnUploadClick(false);
    setOnLogoutClick(false);
  };

  const onLogoutClick = () => {
    setOnCourseClick(false);
    setOnAddEditClick(false);
    setOnUploadClick(false);
    setOnLogoutClick(true);
    dispatch(logout());
    props.history.push("/");
  };

  const getDataForCourses = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/admin/courses`, {
          onDownloadProgress: (progressEvent) => {
            var percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setLoadingForCourses(percentCompleted);
          },
        })
        .then((res) => {
          setCourseInfo(res.data.CourseInfoList);
        });
    } catch (error) {
    }
  };

  const fromEditForm = (courseInfo) => {
    setCourse(courseInfo);
  };
  const editClick = () => {
    setOnCourseClick(false);
    setOnAddEditClick(true);
    setOnUploadClick(false);
    setOnLogoutClick(false);
  };

  return (
    <div>
      <div className="admin-panel-container">
        <div className="admin-header">
          <Link to="/">
            <NavIcon>
              <Logo />
              <span>Neel Classes</span>
            </NavIcon>
          </Link>
          <div className="admin-header-title">Admin Panel</div>
        </div>
        <div className="admin-body">
          <div className="admin-left-sidebar">
            <div className="admin-left-sidebar-buttons">
              <button
                className={`course ${courseClick ? "active" : ""}`}
                onClick={() => onCourseClick()}
              >
                <span className="admin-icons">
                  <FontAwesomeIcon icon={faBook} />
                </span>
                Courses
              </button>
              <button
                className={`course ${addEditClick ? "active" : ""}`}
                onClick={() => onAddEditClick()}
              >
                <span className="admin-icons">
                  <FontAwesomeIcon icon={faFolderPlus} />
                </span>
                Add Course
              </button>
              <button
                className={`course ${uploadClick ? "active" : ""}`}
                onClick={() => onUploadVideosNotesClick()}
              >
                <span className="admin-icons">
                  <FontAwesomeIcon icon={faVideo} />
                </span>
                Upload Video/Notes
              </button>
              {/* <button className="course"><span className="admin-icons"><FontAwesomeIcon icon={faFilePdf} /></span>Notes</button> */}
            </div>
            <div className="separator"></div>
            <div className="admin-left-sidebar-utility">
              <div className="admin-left-sidebar-utility-buttons">
                <button
                  className={`logout ${logoutClick ? "active" : ""}`}
                  onClick={() => onLogoutClick()}
                >
                  <span className="admin-icons">
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </span>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="admin-right-sidebar">
            {showCourses && loadingForCourses === 100 ? (
              <div className="admin-right-sidebar-course">
                <TableComponent
                  courses={courseInfo}
                  setAddEditMethod={setAddEditCourse}
                  setShowCoursesMethod={setShowCourses}
                  setUploadVideosNotesMethod={setUploadVideosNotes}
                  setCourseMethod={fromEditForm}
                  setButtonClick={editClick}
                />
              </div>
            ) : (
              loadProgressBar()
            )}
            {addEditCourse ? (
              <div className="admin-right-sidebar-add-edit">
                <AddEditForm course={course} />
              </div>
            ) : null}
            {uploadVideosNotes ? (
              <div className="admin-right-sidebar-upload">
                <UploadForm />
              </div>
            ) : null}
          </div>
        </div>
        <div className="admin-footer"></div>
      </div>
    </div>
  );
};

export default AdminPanel;
