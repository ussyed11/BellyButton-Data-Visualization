const json_path = "Static/js/samples.json"

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json(json_path).then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json(json_path).then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json(json_path).then((data) => {
    // 3. Create a variable that holds the samples array. 
    var charts = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleNum = charts.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var sampleResult = sampleNum[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds = sampleResult.otu_ids;
    var otuLabels = sampleResult.otu_labels;
    var sampleValues = sampleResult.sample_values;
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIds.slice(0, 10).map(otu_id => `OTU ${otu_id}`).reverse();
   
    // 8. Create the trace for the bar chart. 
    var barData = [{
      x:sampleValues.slice(0,10).reverse(),
      y:yticks,
      type:"bar",
      orientation: "h",
      text: otuLabels.slice(0, 10).reverse(),
      mode:"markers",
      marker:{
        color: sampleValues ,
                colorscale:"#F5F5DC"
            }
    }];
    // 9. Create the layout for the bar chart. 
    var barLayout = {title: "Top 10 Bacteria Cultures Found",
    xaxis: {title: "Number of bacteria"},
    yaxis: {title: "bacteria ids"},
    paper_bgcolor: "#F5F5DC",
    plot_bgcolor:'rgba(0, 0, 0, 0)'
    };
    var config = {responsive: true}
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout, config);
  // 1. Create the trace for the bubble chart.
  var bubbleData = [{
    x:otuIds,
    y:sampleValues,
    text: otuLabels,
    mode:"markers",
    marker:{size: sampleValues,
    color:otuIds,
    colorscale: "#FF4F00",

  }
  }];
  // 2. Create the layout for the bubble chart.
  var bubbleLayout = {
  title: "Bacteria Cultures Per Sample",
  hovermode:"closest",
  xaxis:{title:"OTU ID"},
  yaxis: {title: "Sample Value"},
  paper_bgcolor:'#5FBC9F',
  plot_bgcolor:'rgba(0, 0, 0.5, 0.5)'
  };
  var config = {responsive: true}
  // 3. Use Plotly to plot the data with the layout.
  Plotly.newPlot("bubble", bubbleData, bubbleLayout, config);

//Deliverable 3
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0]['wfreq'];
//     console.log(result);
    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      type: "indicator",
      mode: "gauge+number+delta",
      value: result,
      title: { text: "Belly Button Washing Frequency <br><i>Scrubs per Week</i>", font: { size: 20 } },
      //delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: { range: [null, 9], tickwidth: 2, tickcolor: "black" },
        bar: { color: "#ff0000" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "black",
        steps: [
          { range: [0, 1], color: "#region 9B51E0" },
          { range: [1, 2], color: "#ffcab3"},
          { range: [2, 3], color: "#ffb999" },
          { range: [3, 4], color: "#ffa780"},
          { range: [4, 5], color: "#ff9566" },
          { range: [5, 6], color: "#ff844d"},
          { range: [6, 7], color: "#ff7233"},
          { range: [7, 8], color: "#ff6119" },
          { range: [8, 9], color: "#ff4f00"},
          { range: [9, 10], color: "#ff4f00"},
        ],
      }
    }
  ];
    var gaugeLayout = { 
      margin: { t: 55, r: 25, l: 25, b: 25 },     
    };
    var config = {responsive: true}
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout,config );
  });
}