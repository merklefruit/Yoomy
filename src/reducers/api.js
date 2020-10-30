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

//? API REDUCER
// This reducer is responsible for all API actions

const initialState = [];
export default function (state = initialState, action) {
  const { type, payload } = action;

  //? API SPECIFIC ACTIONS:
  switch (type) {
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
    // Important: for every API call, there is an action for API start and one for API end.
    case API_START:
      switch (payload) {
        //? API Calls that don't enforce a state change. 1st part: start.
        case UNSUBSCRIBE_USER:
        case SUBSCRIBE_USER:
        case CREATE_EVENT:
          return {
            ...state,
          };

        //? API Calls that require loading data. 1st part: start.
        case FETCH_TEACHERS:
        case FETCH_COURSES:
        case FETCH_EVENTS:
        case FETCH_DAILY_EVENTS:
          return {
            ...state,
            isLoadingData: true,
          };
        default:
          break;
      }
      break;

    case API_END:
      switch (payload) {
        //? API Calls that don't enforce a state change. 2nd part: end.
        case UNSUBSCRIBE_USER:
        case SUBSCRIBE_USER:
        case CREATE_EVENT:
          return {
            ...state,
          };

        //? API Calls that require loading data. 2nd part: end.
        case FETCH_TEACHERS:
        case FETCH_COURSES:
        case FETCH_EVENTS:
        case FETCH_DAILY_EVENTS:
          return {
            ...state,
            isLoadingData: false,
          };
        default:
          break;
      }
      break;

    default:
      return state;
  }
}
