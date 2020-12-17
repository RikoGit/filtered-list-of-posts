import { POSTS_URL, USERS_URL } from "./constants.js";

export const fetchAndSetData = (setPosts, setUsers) => {
  fetch(POSTS_URL)
    .then((response) => response.json())
    .then(setPosts)
    .catch((error) => setPosts({ error }));

  fetch(USERS_URL)
    .then((response) => response.json())
    .then(setUsers)
    .catch((error) => setUsers({ error }));
};
