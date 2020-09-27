# Yooga. Client

## API Creation Documentation

- To create a new API Action, do the following:

  1. Create a new action type in /actions/types under "specific api calls"

  2. Create a new API CALL function in /actions/index

  3. Add a CASE for the specific endpoint on the /reducers/api reducer.

  4. Call the function created in step (2) somewhere.

### Example

```javascript
// 1 - actions/types
export const FETCH_COURSES = "FETCH_COURSES";
export const SET_COURSES = "SET_COURSES";

// 2 - actions/index
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
    type: SET_TEACHERS,
    payload: data,
  };
}

// 3 - reducers/api
//...
case SET_COURSES:
      return {
        ...state,
        courses: payload,
      };
// ...
else if (payload === FETCH_COURSES) {
        return {
          ...state,
          isLoadingCourses: true,
        };
      }
      break;
// ...
else if (payload === FETCH_COURSES) {
        return {
          ...state,
          isLoadingCourses: false,
        };
      }
// ...

// 4 - privateRoutes
useEffect(() => {
    fetchCourses();
  });

```
