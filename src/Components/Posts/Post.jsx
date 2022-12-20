import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId } from "../../Redux/Actions";
import { getTodo } from "../../Redux/Actions";
import "./post.css";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const data = useSelector((todoState) => todoState.todo.todos);

  return (
    <div className="post">
      {data?.length > 0
        ? data.map((data, index) => {
            
              return (
                <Link
                  onClick={() => dispatch(setId(data.id))}
                  to={`/content/${data.id}`}
                  className="posts"
                  key={data.id}
                >
                  {index + 1} {data.title}
                </Link>
              );
            
          })
        : "No todos found"}
    </div>
  );
};

export default Post;
