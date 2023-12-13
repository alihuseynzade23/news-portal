import news from '../../../news.json';
import NewsList from '../NewsList'
import styles from './home.module.css'

function HomePage() {
    return (
        <div className={styles.container}>
            {news.map((el) => (
                <NewsList {...el} key={el.id} />
            ))}
        </div>
    )
}

export default HomePage;
