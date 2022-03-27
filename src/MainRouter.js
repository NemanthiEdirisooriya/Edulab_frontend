import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";



import AddMarks from "./pages/Student Management/AddMarks";
import Enroll from "./pages/Student Management/Enroll";
import MyCourses from "./pages/Student Management/MyCourses";
import MyPerformance from "./pages/Student Management/MyPerformance";
import UpdateEnroll from "./pages/Student Management/UpdateEnroll";
import UpdateMarks from "./pages/Student Management/UpdateMarks";
import ViewMarks from "./pages/Student Management/ViewMarks";
import ReportPerform from "./pages/Student Management/ReportPerform";

import courseMain from  "../src/pages/course/courseMain.js";
import courseCreate from "./pages/course/courseCreate";
import courseEdit from "./pages/course/courseEdit";
import courseforlecturer from  "./pages/course/courseforlecturer";
import coursesesCreatedbyLecturer from  "./pages/course/coursesesCreatedbyLecturer";
import courseContentCreate from "./pages/course/courseContentCreate";
import courseLessons from "./pages/course/courseLessons";
import viewACourseLesson from "./pages/course/viewACourseLesson";
import courseLessonEdit from "./pages/course/courseLessonEdit";
import analysis from "./pages/course/analysis";


import askQuestion from './pages/Lecturer Management/askQuestion';
import editQuestion from "./pages/Lecturer Management/editQuestion";
import noticeCreate from "./pages/Lecturer Management/noticeCreate";
import allQuestions from "./pages/Lecturer Management/allQuestions";
import allQuestionList from "./pages/Lecturer Management/allQuestionList";
import noticesAll from "./pages/Lecturer Management/noticesAll";
import noticeView from "./pages/Lecturer Management/noticeView";






import SignupLec from "../src/pages/Authentication Management/SignupLec";
import SignupStd from "../src/pages/Authentication Management/SignupStd";
import AreYou from "../src/pages/Authentication Management/AreYou";

import AuthenticationReport from "../src/pages/Authentication Management/AuthenticationReport";

import Signin from "../src/pages/Authentication Management/Signin";
//import LecProfile from "../src/pages/Authentication Management/LecProfile";

import StdProfile from "../src/pages/Authentication Management/StdProfile";
import LecManagement from "./pages/Authentication Management/LecManagement";
// import StdManagement from "./pages/Authentication Management/StdManagement";

import Home from "./pages/Authentication Management/Home";
import Home2 from "./pages/Authentication Management/Home2";
import AboutUs from "./pages/Authentication Management/AboutUs";
import Terms from "./pages/Authentication Management/Terms";




function MainRouter() {
  return (

  <>


        <Route path="/home2" exact component={Home2}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/" exact component={Home}/>

        <Route path="/aboutus" exact component={AboutUs}/>

        <Route path="/enroll" exact component={Enroll}/>
        <Route path="/MyCourses" exact component={MyCourses}/>
        <Route path="/MyPerformance" exact component={MyPerformance}/>
        <Route path="/UpdateEnroll/:id" exact component={UpdateEnroll}/>
        <Route path="/AddMarks" exact component={AddMarks} />
        <Route path="/UpdateMarks/:id" exact component={UpdateMarks} />
        <Route path="/ViewMarks" exact component={ViewMarks} />
        <Route path="/ReportPerform" exact component={ReportPerform} />

        <Route path="/courseMain" exact component={courseMain} />
        <Route path="/courseCreate" exact component={courseCreate} />
        <Route path="/courseEdit/:id" exact component={courseEdit} />
        <Route path="/courseforlecturer" exact component={courseforlecturer} />
        <Route path="/courseLessonEdit" exact component={courseLessonEdit} />
        <Route path="/coursesesCreatedbyLecturer" exact component={coursesesCreatedbyLecturer} />
        <Route path="/courseContentCreate/:id" exact component={courseContentCreate} />
        <Route path="/courseLessons/:id" exact component={courseLessons} />
        <Route path="/viewACourseLesson/:id" exact component={viewACourseLesson} />
        <Route path="/analysis" exact component={analysis} />
        
        

        
        

        <Route path="/askQ" exact component={askQuestion} />
        <Route path="/EditQ/:id" exact component={editQuestion} />
        <Route path="/createN" exact component={noticeCreate} />
        <Route path="/allQ" exact component={allQuestions} />
        <Route path="/allQL" exact component={allQuestionList} />
        <Route path="/allN" exact component={noticesAll} />
        <Route path="/viewN" exact component={noticeView} />
        

       
        
        <Route path="/signuplec" exact component={SignupLec} />
        <Route path="/signupstd" exact component={SignupStd} />
        {/* <Route path="/signin" exact component={Signin} /> */}
        <Route path="/" exact component={Signin}/>
        <Route path="/areyou" exact component={AreYou} />
        {/* <Route path="/lecprofile" exact component={LecProfile} /> */}
        <Route path="/stdprofile" exact component={StdProfile} />
        <Route path="/lecmanagement" exact component={LecManagement} />
        <Route path="/authenticationreport" exact component={AuthenticationReport} />
        {/* <Route path="/stdmanagement" exact component={StdManagement} /> */}
        <Route path="/terms" exact component={Terms} />

      

    </>
  );
}
export default MainRouter;
