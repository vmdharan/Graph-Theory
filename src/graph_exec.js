/*
 * graph_exec.js
 * Main entry point for the project.
 */

// Import the Graph object.
var graph = require('./Graph');

var G = new graph.Graph();
G.addVertex('a');
G.addVertex('b');
G.addVertex('c');
G.addVertex('x');
G.addVertex('y');
G.addVertex('z');

console.log(G.V);

G.addEdge(0.1, 'x', 'y');
G.addEdge(0.2, 'y', 'z');
G.addEdge(0.3, 'a', 'x');
G.addEdge(0.4, 'b', 'c');
console.log(G.E);
