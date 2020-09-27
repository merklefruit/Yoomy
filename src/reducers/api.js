import {
  API_START,
  API_END,
  SET_TEACHERS,
  FETCH_TEACHERS,
  SET_COURSES,
  FETCH_COURSES,
  SET_EVENTS,
  FETCH_EVENTS,
} from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // API SPECIFIC ACTIONS:
    case SET_TEACHERS:
      return {
        ...state,
        teachers: payload,
      };
    case SET_COURSES:
      return {
        ...state,
        courses: payload,
      };
    case SET_EVENTS:
      return {
        ...state,
        events: payload,
      };

    // API LOGIC ::
    case API_START:
      if (payload === FETCH_TEACHERS) {
        return {
          ...state,
          isLoadingTeachers: true,
        };
      } else if (payload === FETCH_COURSES) {
        return {
          ...state,
          isLoadingCourses: true,
        };
      } else if (payload === FETCH_EVENTS) {
        return {
          ...state,
          isLoadingEvents: true,
        };
      }
      break;

    case API_END:
      if (payload === FETCH_TEACHERS) {
        return {
          ...state,
          isLoadingTeachers: false,
        };
      } else if (payload === FETCH_COURSES) {
        return {
          ...state,
          isLoadingCourses: false,
        };
      } else if (payload === FETCH_EVENTS) {
        return {
          ...state,
          isLoadingEvents: false,
        };
      }
      break;

    default:
      return state;
  }
}
