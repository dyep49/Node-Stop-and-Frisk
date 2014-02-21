var width = 960,
   height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var nyb = 

  	console.log(nyb)

    var projection = d3.geo.mercator()
  					.center([-73.94, 40.70])
  					.scale(50000)
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



// var width = 960;
// var height = 500;

// var svg = d3.select('body').append('svg')
//     .attr('width', width)
//     .attr('height', height);

// var projection = d3.geo.albersUsa()
//     .scale(1000)
//     .translate([width / 2, height / 2]); 

// var path = d3.geo.path()
//     .projection(projection);

//     svg.append('path')
//         .datum(topojson.feature(states, states.objects.state))
//         .attr('class', 'states') // defined in CSS
//         .attr('d', path);
