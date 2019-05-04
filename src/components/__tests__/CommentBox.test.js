import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapper;
beforeEach(() => {
  wrapper = mount(<CommentBox />);
});
afterEach(() => {
  wrapper.unmount();
});
it("has a textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  const comment = "new comment";
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: comment }
    });
    wrapper.update();
  });
  it("textarea text change", () => {
    expect(wrapper.state("comment")).toEqual(comment);
  });
  it("when form is submitted text area form should be empty", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });
    wrapper.update();
    expect(wrapper.state("comment")).toBe("");
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
