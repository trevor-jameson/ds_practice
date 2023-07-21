type Edge = Array<number | string>;

interface AdjacencyList {
    [index: number | string]: Edge;
};

export default AdjacencyList;