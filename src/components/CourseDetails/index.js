import { Content } from "../../globalStyles";
import {
  ContentTextSection,
  Heading,
  SubHeading,
  TitleSection,
} from "../AboutUs/styled";
import courseImg from "../../constants/Images/courseImage.jpg";
import {
  ContentSection,
  CourseTitle,
  CourseWrapper,
  Detail,
  Details,
  EnrollBtn,
  Image,
  LeftSection,
  Price,
  RightSection,
  RowCell,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCodeBranch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { constants } from "../../constants";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useFetchCourseDetails from "../Hooks/useFetchCourseDetails";
import { useParams } from "react-router";
import Ratings from "./Ratings";
import VideoAccordions from "./VideoAccordions";
import NoteAccordions from "./NoteAccordions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import uuid from "react-uuid";
import { setCourse } from "../../store/actions";

const CourseDetails = () => {
  const { courseId } = useParams(),
    [data, error] = useFetchCourseDetails(courseId),
    [courseDetails, setCourseDetails] = useState({}),
    [courseAccess, setCourseAccess] = useState(false),
    [activeNotes, setActiveNotes] = useState(null),
    [activeVideo, setActiveVideo] = useState(null),
    [activeModal, setActiveModal] = useState(false),
    [modalVideo, setModalVideo] = useState(""),
    [stars, setStars] = useState([]),
    dispatch = useDispatch(),
    { userInfo } = useSelector((state) => state.userInfo),
    toggleActiveVideo = (videoTitle) => {
      console.log(videoTitle);
      if (videoTitle === activeVideo) {
        setActiveVideo(null);
      } else {
        setActiveVideo(videoTitle);
      }
    },
    toggleActiveNotes = (noteTitle) => {
      if (noteTitle === activeNotes) {
        setActiveNotes(null);
      } else {
        setActiveNotes(noteTitle);
      }
    },
    toggleModal = (url) => {
      if (url) {
        console.log(url);
        setModalVideo(url);
      }
      setActiveModal(!activeModal);
    };

  useEffect(() => {
    if (data) {
      setCourseDetails(data.CourseInfo);
    }
    if (Object.keys(error).length !== 0 && error.constructor === Object) {
      console.log(error);
    }
  }, [data, error]);
  useEffect(() => {
    if (activeModal) {
      document.body.classList.add("stopScroll");
    } else {
      document.body.classList.remove("stopScroll");
    }
  }, [activeModal]);
  useEffect(() => {
    if (courseDetails?.courseRating !== undefined) {
      const starsArray = [];
      const ratingNumber = Number(courseDetails?.courseRating);
      [...Array(parseInt(ratingNumber))].forEach(() => {
        starsArray.push(1);
      });
      if (!Number.isInteger(ratingNumber)) {
        starsArray.push(0);
      }
      setStars(starsArray);
    }
  }, [courseDetails]);

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  const handlePurchase = async () => {
    if (courseAccess && courseDetails) {
      return;
    } else {
      if (!userInfo) {
        alert("Please log in first");
        return;
      } else {
        dispatch(setCourse(courseDetails));
        const email = "vw78690@gmail.com";
        const order_id = "ORDERID" + uuid();
        const params = {
          orderId: order_id,
          email: email,
          amount: courseDetails.amount,
          phonenumber: userInfo.mobile,
          uid: userInfo.uid,
        };
        var url = "https://neelclasses.herokuapp.com/payment";
        var request = {
          url: url,
          params: params,
          method: "get",
        };

        const response = await axios(request);
        const processParams = await response.data;
        console.log(processParams);
        var details = {
          action: "https://securegw.paytm.in/order/process",
          params: processParams,
        };
        post(details);
      }
    }
  };
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      if (userInfo.role === "Admin") {
        setCourseAccess(true);
        return;
      }
      async function checkAccess() {
        const Info = {
          uid: userInfo.uid,
          courseId: courseId,
        };
        await axios
          .post(`${process.env.REACT_APP_API_URL}/checkAccess`, Info)
          .then((res) => {
            console.log(res.data);
            if (res.data === "Yes") {
              setCourseAccess(true);
              return false;
            } else {
              setCourseAccess(false);
              return true;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
      checkAccess();
    }
  }, [courseId, userInfo]);
  return (
    <>
      <CourseWrapper>
        <TitleSection>
          <Content>
            <ContentTextSection>
              <Heading>Course Details</Heading>
              <SubHeading>
                Course Details by <span>Neel Classes</span>
              </SubHeading>
            </ContentTextSection>
          </Content>
        </TitleSection>
        <Content>
          <ContentSection>
            <LeftSection>
              <CourseTitle>{courseDetails?.courseName ?? "-"}</CourseTitle>
              <Image src={courseImg} alt="Course Image" />
            </LeftSection>
            <RightSection>
              <Price>&#8377;{courseDetails?.coursePrice}</Price>
              <EnrollBtn disabled={courseAccess} onClick={handlePurchase}>
                {courseAccess ? "Enrolled" : "Enroll Now"}
              </EnrollBtn>
              <Details>
                <Detail>
                  <RowCell>
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      rotation={180}
                      flip="vertical"
                      color={constants.colors.secondaryColor}
                    />
                  </RowCell>
                  <RowCell>Branch</RowCell>
                  <RowCell>:</RowCell>
                  <RowCell>{courseDetails?.courseBranch ?? "-"}</RowCell>
                </Detail>
                <Detail>
                  <RowCell>
                    <FontAwesomeIcon
                      icon={faUser}
                      color={constants.colors.secondaryColor}
                    />
                  </RowCell>
                  <RowCell>Instructor</RowCell>
                  <RowCell>:</RowCell>
                  <RowCell>{courseDetails?.courseInstructor ?? "-"}</RowCell>
                </Detail>
                <Detail>
                  <RowCell>
                    <FontAwesomeIcon
                      icon={faAward}
                      color={constants.colors.secondaryColor}
                    />
                  </RowCell>
                  <RowCell>Rating</RowCell>
                  <RowCell>:</RowCell>
                  <RowCell>
                    <Ratings stars={stars} />
                  </RowCell>
                </Detail>
              </Details>
            </RightSection>
          </ContentSection>
          {courseAccess && courseDetails ? (
            <>
              <VideoAccordions
                toggleActiveVideo={toggleActiveVideo}
                activeVideo={activeVideo}
                toggleModal={toggleModal}
                courseVideos={courseDetails?.courseVideos}
              />
              <NoteAccordions
                toggleActiveNotes={toggleActiveNotes}
                activeNotes={activeNotes}
                courseNotes={courseDetails?.courseNotes}
              />
            </>
          ) : (
            ""
          )}
        </Content>
      </CourseWrapper>
      <VideoPlayer
        isOpen={activeModal}
        toggleModal={toggleModal}
        videoSource={modalVideo}
      />
    </>
  );
};

export default CourseDetails;
