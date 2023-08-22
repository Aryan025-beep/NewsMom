import React, {useEffect,useState} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[totalResults,setTotalResults]=useState(0)
  // document.title = `${props.category}-Newsmom`;


  const updateNews=async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=55930fc468184cbe99ceaec7405d3a11&page=1&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
   
  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  const fetchMoreData = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=55930fc468184cbe99ceaec7405d3a11&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
   
  }


    return (
      <>
        <h3 className="text-center" style={{marginTop:"40px"}} >
          Newsmom-{props.category}-Top Headlines
        </h3>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
  }


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: propTypes.string,
  pagrsize: propTypes.number,
  category: propTypes.string,
};

export default News;
