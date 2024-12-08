import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/common/NavBar";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./Components/Core/Dashboard/MyProfile";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Components/Core/Auth/PrivateRoute";
import Settings from "./Components/Core/Dashboard/settings/Settings";
import EnrolledCourses from "./Components/Core/Dashboard/EnrolledCourses";
import Cart from "./Components/Core/Dashboard/Cart/index";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import AddCourse from "./Components/Core/Dashboard/Addcourse";
import Mycourses from "./Components/Core/Dashboard/Mycourses";
import EditCourse from "./Components/Core/Dashboard/EditCourse/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./Components/Core/ViewCourse/VideoDetails";
import InstructorDashboard from "./Components/Core/Dashboard/InstructorDashboard/InstructorDashboard";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/catalog/:catalogName" element={<Catalog/>}></Route>
        <Route path="/courses/:courseId" element={<CourseDetails/>}></Route>
        <Route path="/error" element={<Error/>}></Route>

        <Route path="login" element={
          <OpenRoute>
            <Login/>
          </OpenRoute>
        }></Route>

        <Route path="signup" element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        }></Route>

        <Route path="forgot-password" element={
          <OpenRoute>
            <ForgotPassword/>
          </OpenRoute>
        }></Route>
          <Route path="update-password/:id" element={
          <OpenRoute>
            <UpdatePassword/>
          </OpenRoute>
        }></Route>

       <Route path="verify-email" element={
          <OpenRoute>
            <VerifyEmail/>
          </OpenRoute>
        }></Route>

        <Route path="about" element={
            <About/>
        }></Route>

        <Route path="/contact" element={<Contact/>} />

        <Route element={
          <PrivateRoute>
              <Dashboard/>
          </PrivateRoute> 
        }>
          <Route path="dashboard/my-profile" element={<MyProfile/>}></Route>
          <Route path="dashboard/settings" element={<Settings/>}></Route>
          <Route path="dashboard/purchase-history" element={<MyProfile/>}></Route>
          {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>}></Route>
          <Route path="dashboard/cart" element={<Cart/>}></Route>
          </>
            )
          }

         {
          user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
          <Route path="dashboard/add-course" element={<AddCourse/>}></Route>
          <Route path="dashboard/my-courses" element={<Mycourses />} />
          <Route path="dashboard/instructor" element={<InstructorDashboard />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          </>
            )
          }
        </Route>

        <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>
          <Route path="*" element={<Error/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
