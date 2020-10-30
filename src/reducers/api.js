import { toast } from "react-toastify";
import {
  API_START,
  API_END,
  SET_TEACHERS,
  FETCH_TEACHERS,
  SET_COURSES,
  FETCH_COURSES,
  SET_EVENTS,
  FETCH_EVENTS,
  SET_DAILY_EVENTS,
  FETCH_DAILY_EVENTS,
  CREATE_EVENT,
  EVENT_CREATION_SUCCESS,
  SUBSCRIBE_USER,
  SUBSCRIBE_USER_SUCCESS,
  UNSUBSCRIBE_USER,
  UNSUBSCRIBE_USER_SUCCESS,
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
    case SET_DAILY_EVENTS:
      return {
        ...state,
        dailyEvents: payload,
      };
    case EVENT_CREATION_SUCCESS:
      toast.success("Evento creato correttamente");
      return {
        ...state,
      };
    case SUBSCRIBE_USER_SUCCESS:
      toast.success("Iscrizione confermata");
      return {
        ...state,
      };
    case UNSUBSCRIBE_USER_SUCCESS:
      toast.success("Iscrizione rimossa con successo");
      return {
        ...state,
      };

    // API LOGIC ::
    //TODO: implement nested switch(case):
    case API_START:
      if (payload === UNSUBSCRIBE_USER) {
        return {
          ...state,
        };
      } else if (payload === SUBSCRIBE_USER) {
        return {
          ...state,
        };
      } else if (payload === CREATE_EVENT) {
        return {
          ...state,
        };
      } else if (payload === FETCH_TEACHERS) {
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
      } else if (payload === FETCH_DAILY_EVENTS) {
        return {
          ...state,
          isLoadingDailyEvents: true,
        };
      }
      break;

    case API_END:
      if (payload === UNSUBSCRIBE_USER) {
        return {
          ...state,
        };
      } else if (payload === SUBSCRIBE_USER) {
        return {
          ...state,
        };
      } else if (payload === CREATE_EVENT) {
        return {
          ...state,
        };
      } else if (payload === FETCH_TEACHERS) {
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
      } else if (payload === FETCH_DAILY_EVENTS) {
        return {
          ...state,
          isLoadingDailyEvents: false,
        };
      }
      break;

    default:
      return state;
  }
}
