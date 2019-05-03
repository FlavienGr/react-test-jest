import React from "react";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
import { shallow } from "enzyme";

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});
it("show a comment box", () => {
  expect(wrapper.find(CommentBox).length).toBe(1);
});
it("show a comment list", () => {
  expect(wrapper.find(CommentList).length).toBe(1);
});
