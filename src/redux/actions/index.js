import axios from "axios";
import { ADD_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "./types";

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment
  };
};

export const fetchComments = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return {
    type: FETCH_COMMENTS,
    payload: response.data
  };
};
export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
