var width = 1920,
   height = 1000;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var projection = d3.geo.mercator()
				.center([-73.94, 40.70])
				.scale(90000)
				.translate([(width) / 2, (height)/2]);

var path = d3.geo.path()
		.projection(projection);

var g = svg.append("g");

g.append("g")
	.attr("id", "boroughs")
	.selectAll(".state")
	.data(nyb.features)
	.enter().append("path")
	.attr("class", function(d){ return d.properties.name; })
	.attr("d", path);