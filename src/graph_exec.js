/*
 * graph_exec.js
 * Main entry point for the project.
 */

// Import the Graph object.
var graph = require('./graph');

// Create a new Graph instance.
var G = new graph.Graph();

// Add vertices to the graph.
G.addVertex('a');
G.addVertex('b');
G.addVertex('c');
G.addVertex('x');
G.addVertex('y');
G.addVertex('z');

// Display vertices.
console.log(G.V);
console.log('\n');

// Add edges to the graph.
G.addEdge(0.1, 'x', 'y');
G.addEdge(0.2, 'y', 'z');
G.addEdge(0.3, 'a', 'x');
G.addEdge(0.4, 'b', 'c');

// Display edges.
console.log(G.E);
console.log('\n');

// Display edges where vertex 'x' is either a source or destination.
for(var i=0;i<G.E.length;i++) {
	if((G.E[i]['source'] == 'x') || (G.E[i]['destination'] == 'x')) {
		console.log(G.E[i]);
	}
}
console.log('\n');


// Import graph data from a file.
var gi = require('./graph_import');

var GImport = new gi.GraphImport();
GImport.parseData();

console.log(GImport.G.V);
console.log('\n');
console.log(GImport.G.E);
console.log('\n');

