import Navbar from "./Navbar";
import HeaderPages from './HeaderPages';
import Footer from './Footer';
import NewsCard from "./NewsCard";
import React from 'react';
import { Container, Box, Grid } from "@mui/material";


function News() {

    const api_key = "8cce169a4ece4aa689e8637fd862fcf0";
    const apiRequest = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=" + api_key;

    // const styles = {
        
    //     "--bg-img":"url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg);"
    // };
    
    const title = "News";
    const [newsData, setNewsData] = React.useState([]);

    React.useEffect(() => {
        fetch(apiRequest)
        .then(res => res.json())
        .then(data => setNewsData(data.articles))
    },[]);

    console.log(newsData);

    let displayNews = newsData.map(news => {
        return newsData && <NewsCard title = {news.title} author = {news.author} date = {news.publishedAt} url = {news.url} />
    })

    return(
        <div className="News">
            <Navbar />
            <HeaderPages title = {title} />
            <Grid className="news-cards-wrapper">
            
           { displayNews}
            
            </Grid>
            <Footer />
        </div>
    );
};

export default News;