/*
 * graph_import.js
 * Import graphs from a file.
 */

var exports = module.exports = {};

// Imports
var graph = require('./graph');
fs = require('fs');


function GraphImport() {
	this.srcFile = '../data/graph1.dat';
	this.data = [];
	this.G = new graph.Graph();
	
	// Read the graph data using the synchronous method.
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
			this.G.addVertex(this.data[i]);
			vCount++;
		}
	}
	
	var k = 0; // index for edge property.
	var j = i; // current position in data[];
	
	var w, s, d;
	
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
				case 0: w = this.data[j]; 
					break;
				case 1: s = this.data[j]; 
					break;
				case 2: d = this.data[j]; 
					this.G.addEdge(w, s, d); 
					eCount++; 
					break;
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

