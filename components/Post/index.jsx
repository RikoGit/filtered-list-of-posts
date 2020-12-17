import React from "react";

import styles from "./styles.scss";

const Post = ({ title, body, user }) => (
  <article className={styles.root}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{body}</p>
    <address className={styles.author}>{user}</address>
  </article>
);

export default Post;
