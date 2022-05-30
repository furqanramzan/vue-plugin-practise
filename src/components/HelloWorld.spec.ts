import { mount } from "@vue/test-utils";
import HelloWorld from "./HelloWorld.vue";
import { test, expect } from "vitest";

test("mount component", async () => {
  expect(HelloWorld).toBeTruthy();

  const wrapper = mount(HelloWorld, {
    props: {
      msg: "Hello Hi",
    },
  });

  console.log(wrapper.text());
  expect(wrapper.text()).toStrictEqual("Hello Hi");
});
