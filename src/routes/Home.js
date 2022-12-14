import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home() {
  const [text, setText] = useState("");

  const mapStateToProps = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <h1>To Do</h1>
      <form
        onSubmit={(e) => {
          dispatch(add(text));
          e.preventDefault();
          setText("");
        }}
      >
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {mapStateToProps.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
