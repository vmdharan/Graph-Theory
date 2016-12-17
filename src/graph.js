/*
 * graph.js
 * Define the graph structure.
 */

var exports = module.exports = {};

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

// Export both Edge and Graph structures.
exports.Edge = Edge;
exports.Graph = Graph;
