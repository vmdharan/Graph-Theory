/*
 * graph_import.js
 * Import graphs from a file.
 */

fs = require('fs');

// Graph file.
var srcFile = '../data/graph1.dat';

// Graph data.
var data;
var vCount = 0;
var eCount = 0;

// Read the file containing the graph data.
fs.readFile(srcFile, 'utf8', function(err, srcData) {
	if(err) {
		return console.log(err);
	}
	
	data = srcData;
	
	// Loop over the data and get the vertices.
	for(var i=0; i<data.length; i++) {
		if((data[i] == ',') || (data[i] == ' ') || (data[i] == '\r')) {
			continue;
		}
		else if(data[i] == '\n') {
			i++;
			break;
		}
		else {
			console.log('Vertex name: ' + data[i]);
			vCount++;
		}
	}
	
	var k = 0; // index for edge property.
	var j = i; // current position in data[];
	
	// Loop over the remaining data and get the edges.
	while(j < data.length) {
		
		for( ; j<data.length; j++) {
			if((data[j] == ',') || (data[j] == ' ') || (data[j] == '\r')) {
				continue;
			} 
			else if(data[j] == '\n') {
				j++;
				k = 0;
				break;
			}
			else {
				switch(k) {
				case 0: console.log('Edge weight - ' + data[j]); break;
				case 1: console.log('Edge source - ' + data[j]); break;
				case 2: console.log('Edge destination - ' + data[j]); eCount++; break;
				default: break;
				}
				
				k++;
			}
		}
	}
	
	console.log('Number of vertices read: ' + vCount);
	console.log('Number of edges read: ' + eCount);
});


