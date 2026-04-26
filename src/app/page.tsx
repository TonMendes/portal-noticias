import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bem-vindo à Central de Notícias</h1>
      <p className={styles.subtitulo}>
        Fique por dentro das últimas novidades do mundo da tecnologia.
      </p>
      <Link href="/posts" className={styles.botao}>
        Ver todas as notícias →
      </Link>
    </div>
  );
}
