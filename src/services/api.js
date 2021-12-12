import axios from "axios";

const URL = "https://inshortback.herokuapp.com";
export const getNews = async (pages, size = 5) => {
  try {
    return await axios.get(`${URL}/news?page=${pages}&size=${size}`);
  } catch (error) {
    console.log("error occur while getting news from server");
  }
};
