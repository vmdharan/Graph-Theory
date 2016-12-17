/*
 * graph_import.js
 * Import graphs from a file.
 */

fs = require('fs');

// Graph file.
var srcFile = '../data/graph1.dat';

// Read the file containing the graph data.
fs.readFile(srcFile, 'utf8', function(err, data) {
	if(err) {
		return console.log(err);
	}
	console.log(data);
})