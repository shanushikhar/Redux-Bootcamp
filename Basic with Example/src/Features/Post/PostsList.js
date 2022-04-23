import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { getAlldata } from "./TestingKit";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //console.log(posts);
  const users = useSelector(getAlldata);
  //console.log(users);
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>
        Posts - ({users.value} {users["datas"][0].name})
      </h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
