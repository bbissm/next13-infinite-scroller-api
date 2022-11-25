'use client';

import { useState, useEffect } from "react";
import Card from "./Card";
import InfiniteScroll from 'react-infinite-scroller';


// This is an async Server Component
export default function News() {
const [news, setNews] = useState([])
const [activeItemId, setActiveItemId] = useState(null)
const [isLoading, setLoading] = useState(false);

useEffect(()  => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=1')
    .then((res) => res.json())
    .then((data) => {
        setNews(data)
        setLoading(false);
    })
}, [])


function handleClick(e, id) {
    e.preventDefault();
    setActiveItemId(id)
}

const loadMore = async () => {
    const last = news[news.length - 1];
    console.log(last)
    if(!isLoading) {
       await fetch('https://jsonplaceholder.typicode.com/posts?_start=2&_limit=1')
        .then((res) => res.json())
        .then((data) => {
            setNews(news.concat(data))
        })
    }
    setLoading(false);
}

return (
    <>
        <h1>{isLoading ? 'Loading...' : ''}</h1>
        <div className="flex flex-row flex-wrap" style={{height:"700px"}}>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
            useWindow={true}
        >
            {news.map((item) => {
                return (
                    
                    <button key={item.id} className="cursor-pointer hover:scale-110 bg-transparent lg:basis-1/3 p-1" onClick={(e) => handleClick(e, item.id)}>
                        <Card active={activeItemId == item.id ? 'scale-y-50' : ''}   item={item}/>
                    </button>
                );
            })}
        </InfiniteScroll>
        </div>
    </>
);
}