import AdjacencyList from './AdjacencyList';

function hasPath(graph: AdjacencyList, src: any, dst: any): boolean {
    const queue = [src];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current === dst) return true;
      for (let neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
    return false;
  };
  

  export default hasPath;