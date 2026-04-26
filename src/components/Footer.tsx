import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.texto}>
        © {new Date().getFullYear()} Central de Notícias — Todos os direitos reservados.
      </p>
    </footer>
  );
}
