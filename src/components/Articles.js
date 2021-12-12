import { getNews } from "../services/api.js";
import { useEffect, useState } from "react";
import Article from "./eachArticle.js";
import InfiniteScroll from "react-infinite-scroll-component";
const Articles = () => {
  const [articles, setData] = useState([]);
  const [pages, setPage] = useState(0);
  const dailyNews = async () => {
    let response = await getNews(pages);
    if (response !== null) setData([...articles, ...response.data]);
    console.log(response);
  };
  useEffect(() => {
    dailyNews();
  }, [pages]);
  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={() => setPage(pages + 1)}
      hasMore={true}
    >
      {articles && articles.map((ele) => <Article article={ele} />)}
    </InfiniteScroll>
  );
};

export default Articles;
