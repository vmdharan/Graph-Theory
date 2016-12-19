/*
 * graph_exec.js
 * Main entry point for the project.
 */

// Imports
var gr = require('./graph');
var gi = require('./graph_import');

// Create a new instance.
var GImport = new gi.GraphImport();
GImport.parseData();


console.log(GImport.G.V);
console.log('\n');
console.log(GImport.G.E);
console.log('\n');

// Display edges where vertex 'myVertex' is either a source or destination.
var myVertex = new gr.Vertex('v1');
var connectedEdges = GImport.G.getConnectedEdges(myVertex.name);
console.log('connected edges for: ' + myVertex.name);
console.log(connectedEdges);

// Get the edge containing minimum weight.
console.log('minimum edge')
console.log(GImport.G.getMinEdge());

// Get the edge containing maximum weight.
console.log('maximum edge')
console.log(GImport.G.getMaxEdge());

console.log('\n');

// Get the outbound edges for myVertex2.
var myVertex2 = new gr.Vertex('y1');
var outboundEdges = GImport.G.getOutboundEdges(myVertex2.name);
console.log('outbound edges for: ' + myVertex2.name);
console.log(outboundEdges);
