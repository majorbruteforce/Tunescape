//@ts-nocheck
import styles from './streamcard.module.css';


export default function StreamCard() {
    const imgLink = 'https://d1dgwvpmn80wva.cloudfront.net/example-image.jpg'; // Replace with your hardcoded image URL
    return (
        <div className={styles.wrapper}>

            <div className={styles.mainContainer}>
                <img draggable='false' className={styles.thumbnailImage} src={imgLink} alt="" />
               
                <div style={{ display: "flex" }}>
                    <h2 className={styles.cardSong}>Hardcoded </h2>
                    <p className={styles.cardArtist}>Hardcoded Artist</p>
                    <p className={styles.cardTime}>Hardcoded Time</p>
                    <p className={styles.cardLike}>Hardcoded Like</p>
                </div>
            </div>
        </div>

    );
};

