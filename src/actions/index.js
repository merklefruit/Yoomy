import {
  API,
  SET_TEACHERS,
  FETCH_TEACHERS,
  SET_COURSES,
  FETCH_COURSES,
} from "./types";
import { TEACHERS_URL, COURSES_URL } from "../helpers/config";

function apiAction({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
}

//? API CALLS
//?
//? For now, all api calls are kept in this single file.
//? Expand in another folder for convenience in the future.

// fetch all teachers
export function fetchTeachers() {
  return apiAction({
    url: TEACHERS_URL,
    onSuccess: setTeachers,
    onFailure: () => console.log("Error fetching teachers"),
    label: FETCH_TEACHERS,
  });
}
function setTeachers(data) {
  return {
    type: SET_TEACHERS,
    payload: data,
  };
}

// fetch all courses
export function fetchCourses() {
  return apiAction({
    url: COURSES_URL,
    onSuccess: setCourses,
    onFailure: () => console.log("Error fetching courses"),
    label: FETCH_COURSES,
  });
}
function setCourses(data) {
  return {
    type: SET_COURSES,
    payload: data,
  };
}
