import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, id }) {
  const mapStateToProps = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <li>
      <Link to={`/${mapStateToProps.id}`}></Link>
      {text} <button onClick={() => dispatch(remove(id))}>DEL</button>
    </li>
  );
}

export default ToDo;
