import Axios from "axios";

//50- Using instances of the global configurations
const instance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
