// describe("normalizeVNode", () => {
//   it.each([
//     [null, ""],
//     [undefined, ""],
//     [true, ""],
//     [false, ""],
//   ])("null, undefined, boolean 값은 빈 문자열로 변환되어야 한다. (%s)", (input, expected) => {
//     expect(normalizeVNode(input)).toBe(expected);
//   });

export function normalizeVNode(vNode) {
  return vNode;
}
