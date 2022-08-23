import React from "react";
import "./style.css";
import AddTodo from "./AddTodo";
import ShowTodo from "./ShowTodo";

export default function ToDo() {

 
  return (
    <>
    

      <div className="main_container">
        <AddTodo />

        <div className="card_container">
          <ShowTodo />
        </div>
      </div>
    </>
  );
}
