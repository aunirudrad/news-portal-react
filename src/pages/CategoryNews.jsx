import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();

    const allNews = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    // console.log(id, allNews);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(allNews);
            return;
        }
        else if (id == "1") {

            const filteredNews = allNews.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
            return;
        }
        else {

            const filteredNews = allNews.filter((news) => news.category_id == id);
            console.log(filteredNews);
            setCategoryNews(filteredNews);
        }
    }, [allNews, id])
    return (
        <div>
            <h2 className='font-semibold text-xl text-left mb-5'>Dragon News Home</h2>
            <div>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news= {news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;