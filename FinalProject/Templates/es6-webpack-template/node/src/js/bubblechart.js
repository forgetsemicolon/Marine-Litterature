import * as d3 from "d3";
import csvPath from '../assets/data/MLW_Data - Agency.csv';


export async function drawBubbleChart(){

    

    //Read the data
    const data = await d3.csv(csvPath);
    
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;


    // const zoom = d3.zoom()
    //     .scaleExtent([0.5, 32])
    //     .on("zoom", zoomed);
  
  

    // append the svg object to the body of the page
    var svg = d3.select("#bubblechart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")")
                // .call(d3.zoom().on("zoom", function () {
                //         svg.attr("transform", d3.event.transform)
                //      }))
                //      .append("g");

    
    // Add X axis
    var x = d3.scaleLinear()
              .domain([0, 100])
              .range([ 0, width ])

    // var xAxis = svg.append("g")
    //         .attr("transform", "translate(0," + height + ")")
    //         .call(d3.axisBottom(x));
    

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 1])
        .range([ height, 0]);

    // var yAxis = svg.append("g")
    //     .call(d3.axisLeft(y));

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

    // Create the scatter variable: where both the circles and the brush take place
    // var scatter = svg.append('g')
    //                 .attr("clip-path", "url(#clip)")


    // svg.append("g")
    //     .call(d3.axisLeft(y))
    //     .call(g =>
    //         g .select(".tick:last-of-type text")
    //           .clone()
    //           .attr("transform", `rotate(-90)`)
    //           .attr("text-anchor", "middle")
    //           .attr("x", (600 - margin.top - margin.bottom) / 2)
    //           .attr("y", 100)
    //           .attr("font-weight", "bold")
    //           .text("Danceability")
    //           .style("color", "white")
    //       );



    // Add a scale for bubble size
    var z = d3.scaleLinear()
        .domain([1, 1061])
        .range([5, 150]);


    // var tooltip = d3.select("#bubblechart")
    //                 .append("div")
    //                 .style("opacity", 0)
    //                 .attr("id", "tooltip")
    //                 .style("background-color", "grey")
    //                 .style("border-radius", "5px")
    //                 .style("padding", "10px")
    //                 .style("color", "white")

    //                 tooltip.append("text")
    //                 .attr("x", 15)
    //                 .attr("dy", "1.2em")
    //                 .style("text-anchor", "middle")
    //                 .attr("font-size", "12px")
    //                 .attr("font-weight", "bold");

    
    // var showTooltip = function(d) {
                        
    //                 tooltip
    //                       .transition()
    //                       .duration(200)
    //                 tooltip
    //                       .style("opacity", 1)
    //                       .html("Community name: " + d.CommunityName)
    //                       .style("left", (d3.mouse(this)[0]+30) + "px")
    //                       .style("top", (d3.mouse(this)[1]+30) + "px")

    //                   }

    // var moveTooltip = function(d) {
                        
    //                 tooltip
    //                       .style("left", (d3.mouse(this)[0]+30) + "px")
    //                       .style("top", (d3.mouse(this)[1]+30) + "px")
    //                   }
    
    // var hideTooltip = function(d) {
                
    //                 tooltip
    //                       .transition()
    //                       .duration(200)
    //                       .style("opacity", 0)
    //                   }
                    
    
    const gGrid = svg.append("g");


    var toolTip = d3.select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('style', 'position: absolute; opacity: 0;');

    
    
    // Add dots
    //svg.append('g')
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
        .on('mouseover', function (d) {
            d3.select('#tooltip')
                .transition()
                .duration(200)
                .style('opacity', 1);
    
            d3.select('#tooltip').html(d.CommunityName)
                .style("left", d3.event.pageX + "px")
                .style("top", "10px")
        })
        .on('mouseout', function () {
            d3.select('#tooltip').style('opacity', 0)
        })
    
        // .attr("stroke", "black")
        // .style("stroke-width", '2.5px')
        // .on('mouseover', showTooltip)
        // // .on('mouseover', function(d) {
        // //     tooltip.transition()
        // //     //tooltip.duration(200)
        // //     tooltip.style("opacity", 1)
        // //     tooltip.select("text").text(d.CommunityName);
        // // })
        // .on("mousemove", moveTooltip )
        // .on("mouseleave", hideTooltip)

    
//    bubbles.append("text")
//             .text(d => d.CommunityName)
}
