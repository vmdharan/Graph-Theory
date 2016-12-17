/*
 * graph.js
 * Define the graph structure.
 */

// Edge
var Edge = function(w, s, d) {
	this.weight = w,
	this.source = s,
	this.destination = d
}

// Directed graph
function Graph() {
	this.V = [];
	this.E = [];
}

/*
 * Append a vertex to the graph.
 * v - vertex
 */
Graph.prototype.addVertex = function(v) {
	this.V.push(v);
}

/*
 * Append an edge to the graph.
 * w - edge weight
 * s - edge source node
 * d - edge destination node
 */
Graph.prototype.addEdge = function(w, s, d) {
	this.E.push(new Edge(w,s,d));
}

var G = new Graph();
G.addVertex('x');
G.addVertex('y');
G.addVertex('z');

console.log(G.V);

G.addEdge(0.1, 'x', 'y');
G.addEdge(0.2, 'y', 'z');
console.log(G.E);
