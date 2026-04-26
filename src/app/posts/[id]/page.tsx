import Link from 'next/link';
import styles from './detalhe.module.css';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

async function getSinglePost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function DetalhePost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getSinglePost(id);

  if (!post) {
    return <h1 className={styles.erro}>Post não encontrado!</h1>;
  }

  return (
    <article className={styles.container}>
      <span className={styles.tag}>Notícia #{post.id}</span>
      <h1 className={styles.titulo}>{post.title}</h1>
      <p className={styles.corpo}>{post.body}</p>
      <hr className={styles.divisor} />
      <Link href="/posts" className={styles.voltar}>
        ← Voltar para todas as notícias
      </Link>
    </article>
  );
}
