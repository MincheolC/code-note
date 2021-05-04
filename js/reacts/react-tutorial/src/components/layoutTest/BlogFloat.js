import React from "react";
import styles from './blogFloat.css'

const BlogFloat = () => (
  <div className={styles.container}>
    <header>
      <h1>Progressively Enhanced CSS Layouts Blog</h1>
      <nav className={styles.menu}>
        <ul>
          <li className={styles.left}>
            <a href="#">Home</a>
          </li>
          <li className={styles.left}>
            <a href="#">About</a>
          </li>
          <li className={styles.right}>
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <article className={styles.card}>
        <h2>Progressively Enhanced CSS Layouts Post</h2>
        <h5>Jul 15, 2018</h5>
        <figure>Featured Image</figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget sodales ex. Praesent mollis orci eget iaculis ultrices. Praesent
          massa nisi, blandit quis risus sed, egestas dictum ligula. Curabitur
          imperdiet nec ante sed volutpat. Quisque massa urna, consequat in urna
          non, porta efficitur massa.
        </p>
      </article>

      <article className={styles.card}>
        <h2>Progressively Enhanced CSS Layouts Post</h2>
        <h5>Jul 15, 2018</h5>
        <figure>Featured Image</figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget sodales ex. Praesent mollis orci eget iaculis ultrices. Praesent
          massa nisi, blandit quis risus sed, egestas dictum ligula. Curabitur
          imperdiet nec ante sed volutpat. Quisque massa urna, consequat in urna
          non, porta efficitur massa.
        </p>
      </article>
    </main>

    <aside>
      <h2>Popular Posts</h2>
      <ul className={styles.card}>
        <li>
          <figure>Featured Image</figure>
          <p>Lorem ipsum dolor sit amet..</p>
        </li>

        <li>
          <figure>Featured Image</figure>
          <p>Lorem ipsum dolor sit amet..</p>
        </li>

        <li>
          <figure>Featured Image</figure>
          <p>Lorem ipsum dolor sit amet..</p>
        </li>
      </ul>

      <h2>Follow Me</h2>

      <ul className={styles.card}>
        <li>
          <p>Lorem ipsum dolor sit amet..</p>
        </li>
      </ul>
    </aside>

    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
);

export default BlogFloat;
