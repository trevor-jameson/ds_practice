interface NodeLLInterface {
  val: any;
  next?: NodeLL | null;
}

class NodeLL implements NodeLLInterface {
  val: any;
  next: any;
  constructor(val: any, next: NodeLL | null = null) {
    this.val = val;
    this.next = next;
  }
}

export default NodeLL;