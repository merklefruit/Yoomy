//?   GLOBAL CONFIG

// Base API Route

// export const API_URL = "https://yooga-server.herokuapp.com";
export const API_URL = process.env.API_URL;

// Dynamic URLs just for simplicity:
export const USERS_URL = API_URL + "/users";
export const TEACHERS_URL = API_URL + "/teachers";
