import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postSlice";
import ReactionButtons from "./ReactionButtons";
import { getAlldata } from "./TestingKit";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  //console.log("userlist..", posts);
  const orderedposts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const users = useSelector(getAlldata);

  const renderPosts = orderedposts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
