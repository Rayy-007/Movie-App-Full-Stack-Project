import axios from "axios";

export default axios.create({
  baseURL: "https://79b2-103-121-230-173.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
