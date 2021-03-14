import * as d3 from "d3";
import csvPath from '../assets/data/MLW_Data - Agency.csv';


export async function drawBubbleChart(){

    

    //Read the data
    const data = await d3.csv(csvPath);
    
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;



    // append the svg object to the body of the page
    var svg = d3.select("#bubblechart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")")

    
    // Add X axis
    var x = d3.scaleLinear()
              .domain([0, 100])
              .range([ 0, width ])



    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 1])
        .range([ height, 0]);


    var k = height/width;

    console.log("k:...." + k)
    
    
    // Add a clipPath: everything out of this area won't be drawn.
    var clip = svg.append("defs").append("SVG:clipPath")
        .attr("id", "clip")
        .append("SVG:rect")
        .attr("width", width )
        .attr("height", height )
        .attr("x", 0)
        .attr("y", 0);



    // Add a scale for bubble size
    var z = d3.scaleLinear()
        .domain([1, 1061])
        .range([5, 150]);
                    
    
    const gGrid = svg.append("g");


    var toolTip = d3.select('#bubblechart')
    .append('div')
    .attr('id', 'tooltip')
    .attr('style', 'position: absolute; opacity: 0;');

    
    
    // Add dots
    const bubbles = svg.append('g')
    //scatter
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "bubbles")
        .attr("cx", function (d) { return x(Math.random()*100); } )
        .attr("cy", function (d) { return y(Math.random()); } )
        .attr("r", function (d) { return z(d.BeachesCleaned); } )
        .style("opacity", 0.8)
        .on('mouseover', function (event,d) {
            d3.select('#tooltip')
                .transition()
                .duration(200)
                .style('opacity', 1)
            
    
            d3.select('#tooltip').html(d.CommunityName + "<br>" + "Cleanups done: " + d.BeachesCleaned)
                .style("left", event.pageX+ "px")
                .style("top", event.pageY+ "px")
        })
        .on('mouseout', function () {
            d3.select('#tooltip').style('opacity', 0)
        })
        .transition().on("end", function () {
            myTransf();
        });
    
    
    //floating bubbles
    function myTransf(){
            d3.selectAll(".bubbles").transition().duration(45500)
            .attr("cx", function (d) { return x(Math.random()*100); }) 
            .attr("cy", function (d) { return y(Math.random()); })  
            .on("end", function () {
            myTransf();
    });
}
}
