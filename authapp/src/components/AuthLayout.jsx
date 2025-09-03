import styles from './AuthLayout.module.css';

export const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
};