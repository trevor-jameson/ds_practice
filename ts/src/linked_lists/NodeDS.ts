interface NodeInterface {
  val: any;
  next?: NodeDS | null;
}

class NodeDS implements NodeInterface {
  val: any;
  next: any;
  constructor(val: any, next: NodeDS | null = null) {
    this.val = val;
    this.next = next;
  }
}

export default NodeDS;