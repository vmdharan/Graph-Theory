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

//Display edges where vertex 'x' is either a source or destination.
for(var i=0;i<GImport.G.E.length;i++) {
	if((GImport.G.E[i]['source'] == 'x') || (GImport.G.E[i]['destination'] == 'x')) {
		console.log(GImport.G.E[i]);
	}
}

// Get the edge containing minimum weight.
console.log('minimum edge')
console.log(GImport.G.getMinEdge());

//Get the edge containing maximum weight.
console.log('maximum edge')
console.log(GImport.G.getMaxEdge());
