import styles from "./loading.module.scss";

export default function LoadingSuspend() {
  const isLoading = true;

  return isLoading ? (
    <div className={styles.loading}>
      <div className="spinner">
        <div className="spinner-border text-muted" />
        <div className="spinner-border text-primary" />
        <div className="spinner-border text-success" />
        <div className="spinner-border text-info" />
        <div className="spinner-border text-warning" />
        <div className="spinner-border text-danger" />
        <div className="spinner-border text-secondary" />
        <div className="spinner-border text-dark" />
        <div className="spinner-border text-light" />
      </div>
    </div>
  ) : null;
}
