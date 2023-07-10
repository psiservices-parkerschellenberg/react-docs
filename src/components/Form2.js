import styles from './Form2.module.css';

export default function Form2() {
    return (
        <div className={styles.form} >
            <h2 className={styles.title}>Form 2</h2>
            <div className={styles.formGroup}>
                <label htmlFor="game" className={styles.formLabel}>Game</label>
                <input id="title" type="text" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="Dev" className={styles.formLabel}>Dev</label>
                <input id="Dev" type="text" className={styles.formInput} />
            </div>
        </div>
    );
}
