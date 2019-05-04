import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Roots from "../../Roots";

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Roots>
      <CommentBox />
    </Roots>
  );
});
afterEach(() => {
  wrapper.unmount();
});
it("has a textarea and a button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
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
    expect(wrapper.find("textarea").prop("value")).toEqual(comment);
  });
  it("when form is submitted text area form should be empty", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
