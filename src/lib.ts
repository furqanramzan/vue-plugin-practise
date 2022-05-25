export default {
  install: (app: any, options: any) => {
    console.log(app, options);
  },
};
export { default as HelloWorld } from "./components/HelloWorld.vue";
