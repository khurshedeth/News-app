import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

function NewsCard({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=effa4d3924b840e9a93bb6f2ea6422ef`;

    const response = await fetch(URL);
    const Data = await response.json();
    setData(Data.articles);
    console.log(Data);
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div>
      <h2 className=" text-center p-2 fw-semibold ">
        Latest <span className=" badge bg-danger"> News</span>
      </h2>

      {data.map((news, index) => {
        return (
          <div>
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NewsCard;
