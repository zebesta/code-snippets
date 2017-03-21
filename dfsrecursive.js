class Graph {
  constructor () {
    this.graph = {}
  }

  // add a directed adge from a to b, create node(s) if necessary
  addEdge (a, b) {
    if(!this.graph[a]){
      this.graph[a] = [];
    }
    if(!this.graph[b]){
      this.graph[b] = [];
    }
    this.graph[a].push(b);
  }

  // BFS class method
  bfs(a) {
    var visited = {};
    var queue = [];

    queue.push(a);

    while(queue.length > 0){
      // console.log(queue);
      var current = queue.shift();
      console.log(current);
      visited[current] = true;

      var neighbors = this.graph[current];
      for(let n of neighbors){
        if(!visited[n]){
          // console.log("Adding " + n + " to the queue");
          queue.push(n);
          this.graph[n].from = current;
        }
      }
    }
  }
  dfs_util(a, visited) {
    if(!visited[a]){
      visited[a] = true // visit it
      console.log(a)

      var neighbors = this.graph[a];
      for(let n of neighbors){
        this.dfs_util(n, visited);
      }

    }
  }

  dfs(a) {
    var visited = {};
    this.dfs_util(a, visited);
  }


  path(a, b) {
    this.bfs(a);
    console.log("PATH BETWEEN " + a + " and " + b);
    var path = [];
    while(b !== a){
      path.unshift(b);
      b = this.graph[b].from;
    }
    console.log(path);
  }
}

var g = new Graph();
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
// g.addEdge(1, 4);
// g.addEdge(4, 5);
// g.addEdge(2,5);

// console.log("Following is Breadth First Traversal (starting from vertex 2)");
// g.bfs(2);
console.log("Following is Depth First Traversal (starting from vertex 2)");
g.dfs(2);

// g.path(2, 3);
