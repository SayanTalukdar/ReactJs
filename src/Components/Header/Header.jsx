import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, like } from "../../Redux/Actions";
import { getSpecificItems } from "../../Utils/utils";
import { useLocation  } from "react-router";
import { useNavigate } from "react-router-dom";
import "./header.css";


const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();


 
  let id = useSelector((initialState) => initialState.id.id);

  const dispatch = useDispatch();
  
  const [likes, setLikes] = useState(getSpecificItems(id)[0]?.likes);

  if(getSpecificItems(id)[0]?.likes!==likes){
    setLikes(getSpecificItems(id)[0]?.likes)
  }

  useEffect(() => {
    setLikes(getSpecificItems(id)[0]?.likes)
  }, [likes,id])
  const incrementLikes = () => {
    setLikes((pre) => pre + 1);
    dispatch(like(id, likes + 1));
  };

  const deletePost = () => {
    dispatch(deleteTodo(id))
    navigate("/")
  }

  return (
    <div className="header-container">
      <div>
        <Link className="home" to={"/"}>
          Back to index
        </Link>
      </div>
      <div className="links-container">
        {location.pathname !== "/" ? (
          " "
        ) : (
          <Link to={"/add-new-todo"} className="new-post">
            New Post
          </Link>
        )}
        {location.pathname === "/" || location.pathname === "/add-new-todo" ? (
          " "
        ) : (
          <button onClick={incrementLikes} className="new-post">
            Like {likes}
          </button>
        )}
        {location.pathname === "/" || location.pathname === "/add-new-todo" ? (
          " "
        ) : (
          <Link to={`/update/${id}`} className="new-post">
            Edit Post
          </Link>
        )}
        {location.pathname === "/" || location.pathname === "/add-new-todo" ? (
          " "
        ) : (
          <button onClick={deletePost} className="new-post">
            Delete Post
          </button>
        )}
      </div>
    </div>
  );
  
};

export default Header;
