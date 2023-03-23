function DirectedGraph(v) {
  this.adjList = [];
  for (let i = 0; i < v; ++i) {
    this.adjList.push([]);
  }
  this.addEdge = function (from, to) {
    this.adjList[from].push(to);
  }
}

export default DirectedGraph;