import axios from "axios";
import { ADD_COMMENT, FETCH_COMMENTS } from "./types";

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
