import React from "react";
import { mount } from "enzyme";
import Roots from "../Roots";
import App from "../components/App";
import moxios from "moxios";
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "fetched #1" }, { name: "fetched #2" }]
  });
});
afterEach(() => {
  moxios.uninstall();
});
it("can fetch a list of comments and display them", done => {
  const wrapper = mount(
    <Roots>
      <App />
    </Roots>
  );
  wrapper.find("#fetch-comments").simulate("click");

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(2);
    done();
    wrapper.unmount();
  });
});
