import { useSelector } from "react-redux";
import { selectAllusers } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllusers);
  //console.log(users, userId);
  const author = users.find((user) => user.id == userId);

  return <span>by {author ? author.name : "unknown author"}</span>;
};

export default PostAuthor;
