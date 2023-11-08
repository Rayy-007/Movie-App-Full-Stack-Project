import axios from "axios";

export default axios.create({
  baseURL: "https://9f50-202-165-89-181.ngrok-free.app",
  headers: { "ngrok-skip-browser-warning": "true" },
});
