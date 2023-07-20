import sumList from "./sumList";
import NodeDS from "./NodeDS";

describe("sumList()", () => {
  test("sumList", () => {
    const a = new NodeDS(2);
    const b = new NodeDS(8);
    const c = new NodeDS(3);
    const d = new NodeDS(-1);
    const e = new NodeDS(7);

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    const result = sumList(a);
    expect(result).toBe(19);
  })
})