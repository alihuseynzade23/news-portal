import { useParams } from "react-router";
import { useCallback, useContext, useEffect, useState } from "react";
import news from '../../../news.json';
import styles from './news-item.module.css'
import { likesDislikesContext } from "../../contexts/LikesDislikesContext";

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
  const [singleNews, setSingleNews] = useState<NewsItem | undefined>(undefined); 

  const { id } = useParams<{ id: string }>(); 

  useEffect(() => {
    if (!id) {
      return;
    }

    const singleNew = news.find((n) => n.id.toString() === id); 
    setSingleNews(singleNew);
  }, [id]); 

  const [state, dispatch] = useContext(likesDislikesContext)!; 

  useEffect(() => {
    const newsLikes = state.likes[id];
    const newsDislikes = state.dislikes[id];

    if (newsLikes?.count !== undefined) {
      setSingleNews((prevNews) => ({
        ...(prevNews as NewsItem),
        likes: newsLikes.count,
      }));
    }
    if (newsDislikes?.count !== undefined) {
      setSingleNews((prevNews) => ({
        ...(prevNews as NewsItem),
        dislikes: newsDislikes.count,
      }));
    }
  }, [state.likes, state.dislikes, id]);

  const likesCallback = useCallback(() => {
    dispatch({
      type: 'like',
      payload: {
        id,
        count: (singleNews as NewsItem).likes + 1,
      },
    });
  }, [dispatch, id, singleNews]);

  const dislikesCallback = useCallback(() => {
    dispatch({
      type: 'dislike',
      payload: {
        id,
        count: (singleNews as NewsItem).dislikes + 1,
      },
    });
  }, [dispatch, id, singleNews]);

  if (!singleNews) {
    return null;
  }

  return (
    <div className={styles.container}>
        <h1>{(singleNews as NewsItem).title}</h1>

        <div className={styles.newsContent}>
            <div>
                <p>Date:</p>
            </div>
            <div onClick={likesCallback}>
                <p>Likes: {(singleNews as NewsItem).likes}</p>
            </div>
            <div onClick={dislikesCallback}>
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