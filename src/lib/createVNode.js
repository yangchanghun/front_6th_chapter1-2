export function createVNode(type, props, ...children) {
  return {
    type,
    props,
    children: children.flat(Infinity).filter((child) => {
      return child !== false && child !== null && child !== undefined;
    }),
  };
}

//

// children.flat().flat() => 무한 평탄화 => flat(Infinity)
// 자식 false인것들은 제거 ..,,?

// createVNode(
//   "div",
//   null,
//   true && createVNode("span", null, "Shown"),
//   false && createVNode("span", null, "Hidden")
// )

// createVNode(
//   "div",
//   null,
//   createVNode("span", null, "Shown"), // ✅ 이건 들어감
//   false                                // ❌ 이건 그대로 false로 남음
// )
