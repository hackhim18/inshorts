import { useState, useEffect } from 'react';
import { getNews } from "../service/api";
import React from 'react';
import { Box } from "@mui/material";
import Article from './Article';


//import InfiniteScroll from 'react-infinite-scroll-component';

//components
//import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    // const [page, setPage] = useState(0);

    useEffect(() => {
        dailyNews();
    },[])

  const dailyNews = async() =>{
      let response = await getNews();
      console.log(response.data);
      setNews(response.data); 
  }



    return (
        <Box>
            {
                news.map(data => (
                  <Article  data={data}/>
                ))
            }
        </Box>
    )
}

export default Articles;