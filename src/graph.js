/*
 * graph.js
 * Define the graph structure.
 */

var exports = module.exports = {};

// Vertex
function Vertex (v) {
	this.name = v
}

// Edge
function Edge (w, s, d) {
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
	this.V.push(new Vertex(v));
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

/*
 * Get the edge containing minimum weight.
 */
Graph.prototype.getMinEdge = function() {
	var i;
	var minWeight = 65536;
	var minIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i].weight <= minWeight) {
			minWeight = this.E[i].weight;
			minIndex = i;
		}
	}
	
	return this.E[minIndex];
}

/*
 * Get the edge containing maximum weight.
 */
Graph.prototype.getMaxEdge = function() {
	var i;
	var maxWeight = -65536;
	var maxIndex = -1;
	
	for(i=0; i<this.E.length; i++) {
		if(this.E[i].weight >= maxWeight) {
			maxWeight = this.E[i].weight;
			maxIndex = i;
		}
	}
	
	return this.E[maxIndex];
}

/*
 * Get edges connected to a given vertex.
 * v - the vertex to query for.
 */
Graph.prototype.getConnectedEdges = function(v) {
	var i;
	var edges = [];
	
	for(i=0; i<this.E.length;i++) {
		if((this.E[i]['source'] == v) || (this.E[i]['destination'] == v)) {
			edges.push(this.E[i]) ;
		}
	}
	
	return edges;
}

// Export structures.
exports.Vertex = Vertex;
exports.Edge = Edge;
exports.Graph = Graph;
