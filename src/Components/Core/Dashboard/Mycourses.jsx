import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import ModalBtn from "../../common/ModalBtn"
import CourseTable from "./InstructorCourses/CourseTable"

const Mycourses = () => {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchCourses = async () => {
          const result = await fetchInstructorCourses(token)
          if (result) {
            setCourses(result)
          }
        }
        fetchCourses()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">My Courses</h1>
        <ModalBtn customClasses={"bg-yellow-50 flex items-center gap-2  "}
          text="Add Course"
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </ModalBtn>
      </div>
      {courses && <CourseTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}

export default Mycourses