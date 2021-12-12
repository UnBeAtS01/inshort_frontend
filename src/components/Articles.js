import { getNews } from "../services/api.js";
import { useEffect, useState } from "react";
import Article from "./eachArticle.js";
import InfiniteScroll from "react-infinite-scroll-component";
const Articles = () => {
  const [articles, setData] = useState([]);
  const [pages, setPage] = useState(0);

  useEffect(() => {
    const dailyNews = async () => {
      let response = await getNews(pages);
      if (response !== null)
        setData((articles) => [...articles, ...response.data]);
      console.log(response);
    };
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
