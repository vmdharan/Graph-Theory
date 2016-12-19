/*
 * graph_exec.js
 * Main entry point for the project.
 */

// Imports
var gi = require('./graph_import');

// Create a new instance.
var GImport = new gi.GraphImport();
GImport.parseData();


console.log(GImport.G.V);
console.log('\n');
console.log(GImport.G.E);
console.log('\n');

//Display edges where vertex 'v1' is either a source or destination.
var connectedEdges = GImport.G.getConnectedEdges('v1');
console.log('connected edges for: ' + 'v1');
console.log(connectedEdges);

// Get the edge containing minimum weight.
console.log('minimum edge')
console.log(GImport.G.getMinEdge());

//Get the edge containing maximum weight.
console.log('maximum edge')
console.log(GImport.G.getMaxEdge());
