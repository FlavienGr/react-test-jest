import React from "react";
import CommentList from "../CommentList";
import { mount } from "enzyme";
import Roots from "../../Roots";

let wrapper;
beforeEach(() => {
  const initialState = {
    comment: ["New Comment", "courses"]
  };
  wrapper = mount(
    <Roots initialState={initialState}>
      <CommentList />
    </Roots>
  );
});

it("Creates one Li element per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});
it("it shows the text for each comment", () => {
  expect(wrapper.render().text()).toContain("New Comment");
  expect(wrapper.render().text()).toContain("courses");
});
