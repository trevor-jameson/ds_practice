import sumList from "./sumList";
import NodeLL from "./NodeLL";

describe("sumList()", () => {
  test("sumList", () => {
    const a = new NodeLL(2);
    const b = new NodeLL(8);
    const c = new NodeLL(3);
    const d = new NodeLL(-1);
    const e = new NodeLL(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const result = sumList(a);
    expect(result).toBe(19);
  })
})