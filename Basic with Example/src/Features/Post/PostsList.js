import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import { getAlldata } from "./TestingKit";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //console.log("userlist..", posts);
  const users = useSelector(getAlldata);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
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
