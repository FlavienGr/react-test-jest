import { ADD_COMMENT } from "../../actions/types";

import commentsReducer from "../commentsReducer";

it("should return commentsReducer init", () => {
  const response = commentsReducer(undefined, { type: "@@INIT" });
  expect(response).toEqual([]);
});
it("should return an Add_Comment action", () => {
  const text = "computer";
  const action = commentsReducer(undefined, {
    type: ADD_COMMENT,
    payload: text
  });
  expect(action).toEqual([text]);
});
it("handle action with unknow type", () => {
  const action = commentsReducer(undefined, { type: "error" });
  expect(action).toEqual([]);
});
