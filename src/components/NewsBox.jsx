import { Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
import LoadingBar from 'react-top-loading-bar';
import InfiniteScroll from 'react-infinite-scroll-component';


function NewsBox({ query, category }) {
  const apiKey = import.meta.env.VITE_NEWS_API;
  const [totalResults, setTotalResults] = useState(0)
  const [articles, setArticles] = useState([])
  const [pageNo, setPageNo] = useState(2)
  const [progress, setProgress] = useState(20)
  const [showSpiner, setShowSpiner] = useState(true)
  let count = 0;

  const getNews = async () => {
    try {
      let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${query}&pageSize=10&page=1&apiKey=${apiKey}`);
      let data = await res.json();
      setProgress(40);
      setTotalResults(data.totalResults);
      setProgress(70);
      setArticles(articles.concat(data.articles));
      setProgress(100);
      setShowSpiner(false)
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const loadMore = async () => {
    setProgress(20);
    setPageNo(pageNo + 1)
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${query}&pageSize=10&page=${pageNo}&apiKey=${apiKey}`);
    setProgress(60);
    let data = await res.json();
    setArticles(articles.concat(data.articles));
    setProgress(100);
  }

  return (
    <>
      <LoadingBar
        color='#f11946'
        height='3px'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Text pt='2' m={3} fontSize='4xl'>
        NewsMonkey - Top {category} HeadLines
      </Text>

      {showSpiner && <div style={{ textAlign: 'center' }}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          m={3} />
      </div>}

      <InfiniteScroll
        dataLength={articles.length}
        next={loadMore}
        hasMore={totalResults > articles.length}
        loader={
          <div style={{ textAlign: 'center' }}>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
              m={3}
            /></div>
        }
      >
        {
          articles.map((ele) => (
            <NewsItems key={count++} sourceName={ele.source.name} title={ele.title} author={ele.author} description={ele.description} publishedAt={ele.publishedAt} url={ele.url} urlToImage={ele.urlToImage} />
          ))
        }
      </InfiniteScroll>
    </>
  );
}

export default NewsBox;

NewsBox.propTypes = {
  category: PropTypes.string,
  query: PropTypes.string
}