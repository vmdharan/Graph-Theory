/*
 * graph.js
 * Define the graph structure.
 */

var exports = module.exports = {};

// Vertex
var Vertex = function(v) {
	this.name = v
}

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
 * v - vertex name
 */
Graph.prototype.addVertex = function(v) {
	this.V.push(new Vertex (v));
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

// Export structures.
exports.Vertex = Vertex;
exports.Edge = Edge;
exports.Graph = Graph;
