// /Use  D3 library to read in samples.json from the URL
const_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(const_url).then(function(data){
  console.log(data);

});

// arrow func
const_url= "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(const_url).then(data=>console.log(data));

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  // Dropdown menu
  let dropdownMenu = d3.select("#selDataset");

// Initialize the dashboard at start up 
function init() {

    // Dropdown menu
    let dropdownMenu = d3.select("#selDataset");

    // Get sample names and populate the drop-down selector
    d3.json(const_url).then((data) => {
        
        // Define a variable for the sample names
        let names = data.names;

        // Add  samples to dropdown menu
        names.forEach((id) => {

            // Log the value of id 
            console.log(id);

            dropdownMenu.append("option")
            .text(id)
            .property("value",id);
        });

        // Set the first sample 
        let sample_one = names[0];

        // Log the value of sample_one
        console.log(sample_one);

        // Build the plots
      
        buildBarChart(sample_one);
        buildBubbleChart(sample_one);
      
    });
};

// modified code for bar bubble chart https://github.com/JeremyTallant/belly-button-challenge/blob/main/static/js/app.js

// Build the bar chart- Use sample_values as the values, Use otu_ids as the labels, Use otu_labels as the hovertext

function buildBarChart(sample) {

    //  Retrieve all of the data
    d3.json(const_url).then((data) => {

        // Retrieve all samples data
        let sampleInfo = data.samples;

        // Filter based on the value of the sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;

        // Log data to the console
        console.log(otu_ids,otu_labels,sample_values);

        // Set top 10 to display in descending order
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        // Set up the trace for bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };
        // Setup barchart and plot
        let layout = {
            
        };
        Plotly.newPlot("bar", [trace], layout)
    });
};

//  Create a bubble chart that displays each sample- Use otu_ids for the x values, Use sample_values for the y values,
//  Use sample_values for the marker size, Use otu_ids for the marker colors.

//Use otu_labels for the text values.
function buildBubbleChart(sample) {

    // Retrieve data
    d3.json(const_url).then((data) => {
        
        //Retrieve all sample data
        let sampleInfo = data.samples;

        // Filter based on  value of sample
        let value = sampleInfo.filter(result => result.id == sample);

        // Get the first index from the array
        let valueData = value[0];

        // Get the otu_ids, lables, and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
        
        // Set up the trace for bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,   
            }
        };

        // Set up the layout
        let layout = {
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        // Plot bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

//Update all the plots when a new sample is selected.
function optionChanged(value) { 

    // Log the new value
    console.log(value); 
};

init()