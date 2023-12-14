// add your JavaScript/D3 to this file

  const w = 400;
  const h = 300;
  const margin = {top: 25, right: 0, bottom: 25,
      left: 25};
  const innerWidth = w - margin.left - margin.right;
  const innerHeight = h - margin.top - margin.bottom;

  const svg = d3.select("div#plot")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", w)
      .attr("height", h)
      .attr("fill", "lightblue");
