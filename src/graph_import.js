/*
 * graph_import.js
 * Import graphs from a file.
 */

var exports = module.exports = {};

fs = require('fs');

function GraphImport() {
	this.srcFile = '../data/graph1.dat';
	this.data = [];
	
	this.data = fs.readFileSync(this.srcFile, 'utf8');
}

GraphImport.prototype.parseData = function() {
	var vCount = 0;
	var eCount = 0;
	
	// Loop over the data and get the vertices.
	for(var i=0; i<this.data.length; i++) {
		if((this.data[i] == ',') || (this.data[i] == ' ') || (this.data[i] == '\r')) {
			continue;
		}
		else if(this.data[i] == '\n') {
			i++;
			break;
		}
		else {
			console.log('Vertex name: ' + this.data[i]);
			vCount++;
		}
	}
	
	var k = 0; // index for edge property.
	var j = i; // current position in data[];
	
	// Loop over the remaining data and get the edges.
	while(j < this.data.length) {
		
		for( ; j<this.data.length; j++) {
			if((this.data[j] == ',') || (this.data[j] == ' ') || (this.data[j] == '\r')) {
				continue;
			} 
			else if(this.data[j] == '\n') {
				j++;
				k = 0;
				break;
			}
			else {
				switch(k) {
				case 0: console.log('Edge weight - ' + this.data[j]); break;
				case 1: console.log('Edge source - ' + this.data[j]); break;
				case 2: console.log('Edge destination - ' + this.data[j]); eCount++; break;
				default: break;
				}
				
				k++;
			}
		}
	}
	
	console.log('Number of vertices read: ' + vCount);
	console.log('Number of edges read: ' + eCount);
}

exports.GraphImport = GraphImport;

