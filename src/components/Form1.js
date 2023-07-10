import styles from './Form1.module.css';

export default function Form1() {
    return (
        <div className={styles.form} >
            <h2 className={styles.title}>Form 1</h2>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input id="name" type="text" className={styles.formInput} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>Phone</label>
                <input id="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className={styles.formInput} />
            </div>
        </div>
    );
}
