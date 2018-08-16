import Axios from "axios";

//50- Using instances of the global configurations
const instance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com";
});