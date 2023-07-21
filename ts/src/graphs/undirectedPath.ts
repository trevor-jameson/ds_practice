import AdjacencyList from './AdjacencyList';
import Edges from './Edges';

function undirectedPath(edges: Edges, nodeA: any, nodeB: any): boolean {
    const graph = createAdjacencyList(edges);
    const queue = [nodeA];
    const visited: any = {};
    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode === nodeB) return true;
      if (!visited[currentNode]) {
         const currentNeighbors = graph[currentNode];
          queue.unshift(...currentNeighbors);
      }
     visited[currentNode] = true;
    }
    return false;
  };
  
  function createAdjacencyList(edges: Edges): AdjacencyList {
    const graph: AdjacencyList = {};
    for (let pair of edges) {
      const [a, b] = pair;
      if (graph[a] !== undefined) {
        graph[a].push(b)
      } else {
        graph[a] = [b];
      }
      if (graph[b] !== undefined) {
        graph[b].push(a)
      } else {
        graph[b] = [a];
      }
    }
    return graph;
  }
  
export default undirectedPath;