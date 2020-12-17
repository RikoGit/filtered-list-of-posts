import React from "react";

import Post from "../Post/index.jsx";
import styles from "./styles.scss";

const PostsList = ({ posts, users }) => (
  <ul className={styles.root}>
    {posts.map((post) => (
      <li className={styles.item} key={post.id}>
        <Post
          title={post.title}
          body={post.body}
          user={users.find((user) => user.id === post.userId).name}
        />
      </li>
    ))}
  </ul>
);

export default PostsList;
