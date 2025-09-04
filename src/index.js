import("./async").then((exports) => {
  console.log("foo", exports.foo);
  console.log("bar", exports.bar);
});
