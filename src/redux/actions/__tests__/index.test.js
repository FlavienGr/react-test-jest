import { ADD_COMMENT } from "../../actions/types";
import { addComment } from "../../actions";

it("should return addComment action ", () => {
  const action = addComment("test 1");
  expect(action).toEqual({
    type: ADD_COMMENT,
    payload: "test 1"
  });
});
