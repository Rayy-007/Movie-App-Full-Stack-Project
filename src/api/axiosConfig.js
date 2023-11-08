import axios from "axios";

export default axios.create({
  baseURL: "https://e302-103-121-230-169.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
