import React from "react";

import styles from "./styles.scss";

const Filter = ({ value, onChange }) => (
  <div className={styles.root}>
    <input
      className={styles.input}
      type="text"
      placeholder="Filter by author..."
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);

export default Filter;
