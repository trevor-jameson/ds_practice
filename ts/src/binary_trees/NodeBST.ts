interface NodeBSTInterface {
  val: any;
  left?: NodeBST | null;
  right?: NodeBST | null;
}

class NodeBST implements NodeBSTInterface {
  val: any;
  left: any;
  right: any;
  constructor(val: any, left: NodeBST | null = null, right: NodeBST | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export default NodeBST;