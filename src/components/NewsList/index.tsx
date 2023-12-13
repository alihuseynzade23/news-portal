import { Link } from 'react-router-dom'
import styles from './new-list.module.css'

interface NewListProps {
    image: string;
    title: string;
    id: number;
    likes: number;
    dislikes:number;
    visits: number
}

function NewsList({image, title, id, likes, dislikes, visits}: NewListProps) {
  return (
    <>
    <Link to={`/news/${id}`}>
        <div className={styles.newsList}>
            <img src={image} alt="" className={styles.img} />
            <p style={{padding: '0 1rem', fontSize: '1.1rem'}}>{title}</p>
            <div className={styles.paragraphContainer}>       
                <div className={styles.paragraphContent}>     
                    <p>likes: {likes}</p>
                </div>
                <div className={styles.paragraphContent}>     
                    <p>dis: {dislikes}</p>
                </div>
                <div className={styles.paragraphContent}>     
                    <p>visits: {visits}</p>
                </div>
            </div>

        </div>
    </Link>
    </>
)
}

export default NewsList
