function isInt(n) {
   return n % 1 === 0;
}

var width = 1800,
   height = 940;

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

var sorted_data = _.sortBy(stop_data.results, function(num){return num.datestop})

// var first_sorted_data = _.sortBy(first.results, function(num){return num.datestop})



g.append("g")
	.attr("id", "boroughs")
	.selectAll(".state")
	.data(nyb.features)
	.enter().append("path")
	.attr("class", function(d){ return d.properties.name; })
	.attr("d", path);

var stop_projection = d3.select('svg')
							.selectAll('circle')
							.data(sorted_data)



stop_projection.enter()
	.append('circle')
	.attr("class", function(d){
		return d.race
	})
	.attr("cx", projection([-73.94, 40.70])[0])
	.attr("cy", projection([-73.94, 40.70])[1])
	.transition()
	.duration(1000)
	.delay(100)
	.attr("cx", function(d){
		return projection([d.x, d.y])[0]})
	.attr("cy", function(d){
		return projection([d.x, d.y])[1]})
	.attr("r", 1.5)
	.style("fill", function(d){
		var race = d.race
		switch(race)
		{
			case "A":
				return "yellow"
				break;
			case "B":
				return "black"
				break;
			case "I":
				return "red"
				break;
			case "P":
				return "brown"
				break;
			case "Q":
				return "beige"
				break;
			case "W":
				return "white"
				break;
			case "U":
				return "purple"
				break;
			case "Z":
				return "orange"
				break;
			case "":
				return "green"
				break;
		}
	}
	)
	.style("visibility", "visible")

var text_projection = d3.select('svg')
							.selectAll('text')
							.data([1])

text_projection.enter()
	.append('text')
	.text('NYC Stop and Frisk')
	.attr('x', 450)
	.attr('y', 225)
	.style('fill', 'white')
	.style('font-size', 55)
	.style('font-family', 'Voces, cursive')
	.style('text-anchor', 'middle')
	.append('tspan')
	.attr('x', 450)
	.attr('y', 300)
	.text('January 1, 2011')
	.style('text-anchor', 'middle')

race_data = ['X']
$.each(sorted_data, function(index, stop){
	race_data.push(stop.race)
})

sorted_race_data = _.uniq(race_data);

var key_projection = d3.select('svg')
							.selectAll('li')
							.data(sorted_race_data)

key_projection.enter()
	.append('foreignObject')
	.attr("width", 500)
	.attr("height", 600)
	.attr("x", 1350)
	.attr("y", function(d){
		var y = sorted_race_data.indexOf(d);
		return 200 + 45*y})
	.append("xhtml:body")
	.append("xhtml:ul")
	.append("xhtml:li")
	.attr("width", "200px")
  .text(function(d){
  	var race = d
		switch(race)
		{
			case "A":
				return "Asian/Pacific Islander"
				break;
			case "B":
				return "Black"
				break;
			case "I":
				return "American Indian/Alaskan Native"
				break;
			case "P":
				return "Black-Hispanic"
				break;
			case "Q":
				return "White-Hispanic"
				break;
			case "W":
				return "White"
				break;
			case "U":
				return "Unknown"
				break;
			case "Z":
				return "Other"
				break;
			case "X":
				return "Not Listed"
				break;
		}
  })
  .attr("id", function(d){return d})
  .on("mouseover", function(d){
  	d3.select('svg').selectAll('circle').style('visibility', 'hidden')
  	d3.select('svg').selectAll('.'+d).style('visibility', 'visible')
  })
  .on("mouseout", function(d){
  	d3.select('svg').selectAll('circle').style('visibility', 'visible')
  })






