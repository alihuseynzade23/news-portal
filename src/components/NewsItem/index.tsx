import { useParams } from "react-router";
import { useEffect, useState } from "react";
import news from '../../../news.json';
import styles from './news-item.module.css'

interface NewsItem {
    id: string;
    title: string;
    likes: number;
    dislikes: number;
    visits: number;
    image: string;
    content: string;
  }

function NewsItem() {
    const [singleNews, setSingleNews] = useState<NewsItem | {}>({});

    const {id} = useParams()

    useEffect(() => {
        if(!id) {
            return;
        }

        const singleNew = news.filter(n => n.id.toString() === id)[0];
        setSingleNews(singleNew)
    })

  return (
    <div className={styles.container}>
        <h1>{(singleNews as NewsItem).title}</h1>

        <div className={styles.newsContent}>
            <div>
                <p>Date:</p>
            </div>
            <div>
                <p>Likes: {(singleNews as NewsItem).likes}</p>
            </div>
            <div>
                <p>Dislikes: {(singleNews as NewsItem).dislikes}</p>
            </div>
            <div>
                <p>Visits: {(singleNews as NewsItem).visits}</p>
            </div>
        </div>
            <img src={(singleNews as NewsItem).image} alt="image" style={{ width: '100%' }} />
            <p>{(singleNews as NewsItem).content}</p>
    </div>
  )
}

export default NewsItem