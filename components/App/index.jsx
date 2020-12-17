import React, { useState, useEffect } from "react";

import Filter from "../Filter/index.jsx";
import Loader from "../Loader/index.jsx";
import ErrorMessage from "../ErrorMessage/index.jsx";
import PostsList from "../PostsList/index.jsx";
import { fetchAndSetData } from "../../utils.js";

import styles from "./styles.scss";

const App = () => {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [filter, setFilter] = useState(null);

  const onChange = (value) => {
    const searchString = value.trim();
    if (searchString === "") return;

    let filters = [];
    users.forEach((user) => {
      if (user.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
        filters.push(user.id);
      }
    });
    setFilter(filters ? filters : null);
  };

  useEffect(() => fetchAndSetData(setPosts, setUsers), []);

  let content = (
    <PostsList
      posts={
        filter && filter.length === 1
          ? posts.filter((post) => post.userId === filter[0])
          : posts
      }
      users={users}
    />
  );

  if (posts && users) {
    if (posts.error || users.error) {
      content = <ErrorMessage />;
    }
  } else {
    content = <Loader />;
  }

  return (
    <>
      <header className={styles.header}>
        <Filter onChange={onChange} />
      </header>
      <main>{content}</main>
    </>
  );
};

export default App;
