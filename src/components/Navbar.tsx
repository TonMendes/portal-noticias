import Link from 'next/link';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Central de Notícias
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/posts" className={styles.link}>Notícias</Link>
        </nav>
      </div>
    </header>
  );
}
