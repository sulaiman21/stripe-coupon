import axios from "axios";

const http = axios.create();

http.interceptors.request.use(
  async (req) => {
    return req;
  },
  (err) => Promise.resolve(err)
);

export default http;
