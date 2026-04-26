import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './posts.module.css';

export const metadata: Metadata = {
  title: 'Notícias | Central de Notícias',
  description: 'Confira as últimas notícias do mundo tech.',
};

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Erro ao buscar posts');
  return res.json();
}

export default async function ListaPosts() {
  const posts = await getPosts();

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Últimas Notícias</h1>
      <div className={styles.grid}>
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className={styles.card}>
            <span className={styles.numero}>#{post.id}</span>
            <h2 className={styles.cardTitulo}>{post.title}</h2>
            <p className={styles.resumo}>{post.body.slice(0, 80)}...</p>
            <Link href={`/posts/${post.id}`} className={styles.link}>
              Ler mais →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
