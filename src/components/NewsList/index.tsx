import { Link } from 'react-router-dom'
import styles from './new-list.module.css'
import { useCallback, useContext, useEffect, useState } from 'react';
import { likesDislikesContext } from '../../contexts/LikesDislikesContext';


interface NewListProps {
    image: string;
    title: string;
    id: number;
    likesCount: number;
    dislikesCount:number;
    visits: number;
}


function NewsList({image, title, id, likesCount, dislikesCount, visits}: NewListProps) {
    
    const [likes, setLikes] = useState(likesCount)
    const [dislikes, setDislikes] = useState(dislikesCount)

    const [state, dispatch] = useContext(likesDislikesContext)
    
    
    const likeCallback = useCallback(() => {
        dispatch({
            type: 'like',
            payload: {
                id,
                count: likes
            }
        })
    }, [id, likes])
    
    const dislikeCallback = useCallback(() => {
        dispatch({
            type: 'dislike',
            payload: {
                id,
                count: dislikes
            }
    
        })
    }, [id, dislikes]) 

    useEffect(() => {
        const newsLikes = state.likes[id]
        const newsDislikes = state.dislikes[id]

        if(newsLikes?.count > 0) {
            setLikes(newsLikes.count)
        }

        if(newsDislikes?.count > 0) {
            setDislikes(newsDislikes.count)
        }
    }, [state.likes, state.dislikes])

  return (
    <>
        <div className={styles.newsList}>
            <Link to={`/news/${id}`}>
                <img src={image} alt="" className={styles.img} />
                <p style={{padding: '0 1rem', fontSize: '1.2rem', fontWeight: 700}}>{title}</p>
            </Link>
            <div className={styles.paragraphContainer}>       
                <div onClick={likeCallback} className={styles.paragraphContent}>     
                    <p style={{margin: 0}}>likes: {likes}</p>
                </div>
                <div onClick={dislikeCallback} className={styles.paragraphContent}>     
                    <p style={{margin: 0}}>dis: {dislikes}</p>
                </div>
                <div className={styles.paragraphContent}>     
                    <p style={{margin: 0}}>visits: {visits}</p>
                </div>
            </div>

        </div>
    </>
)
}

export default NewsList
