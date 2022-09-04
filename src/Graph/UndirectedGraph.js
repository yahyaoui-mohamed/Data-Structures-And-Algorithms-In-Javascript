function UndirectedGraph(v) {
  this.adjList = [];
  for (let i = 0; i < v; ++i) {
    this.adjList.push([]);
  }
  this.addEdge = function (from, to) {
    this.adjList[from].push(to);
    this.adjList[to].push(from);
  }
}

export default UndirectedGraph;