import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
import "./masonary_style.css";

export default function ShowTodo() {

  const todos = useSelector((state) => state.todos.todos);
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 2,
    500: 1,
  };
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {todos.map((e, i) => (
          <TodoCard
            key={i}
            text={e.text}
            date={e.date}
            id={e.id}
            comleted={e.completed}
          />
        ))}
      </Masonry>
    </>
  );
}
