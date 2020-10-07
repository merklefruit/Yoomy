<h1 align="center">Yoomy - Documentation</h1>

<a href="./README.md">Back to README</a>

## API Endpoint Creation

### How To create a new API Action

1. Create a new action type in /actions/types under "specific api calls"

2. Create a new API CALL function in /actions/index

3. Add a CASE for the specific endpoint on the /reducers/api reducer.

4. Call the function created in step (2) somewhere.

#### Example

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

## App Folder Structure

- Actions: contains redux actions (functions responsible for logic like api calls)

- Assets: static resources

- Components:

  - \_app : all app components
  - \_teachers : all components for the teacher UI
  - auth : login/register flow

- Helpers: general purpose functions that don't fit in other categories

- Pages: self explanatory

  - \_app : app pages
  - \_teachers : teacher pages

- Reducers: redux reducers

- Styles:
  - \_app: all styles used by the app
  - \_teachers: all styles used by the teacher UI

**Note:** _privateRoutes_ and _publicRoutes_ are two different routers, and only one router gets loaded each time the user visits the website, based on the requested page. This boosts performance a lot, especially for the marketing pages.

**Important:** this app uses _multiple layouts_. The main layout is found in /components/layout.js and is responsible for the layout of the marketing pages. The app has its own custom layout defined in /components/\_app/layout.js and the teacher UI has its own, in /components/\_teachers/layout.js.
