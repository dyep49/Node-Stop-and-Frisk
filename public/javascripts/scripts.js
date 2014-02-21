var svg_width = 1000;
var svg_height = 500;

d3.select('body')
		.append('svg')
		.attr('width', svg_width+'px')
		.attr('height', svg_height+'px')


d3.json("states", function(error, us){
	console.log(us);
});