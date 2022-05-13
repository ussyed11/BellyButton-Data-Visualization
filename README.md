## Overview
An interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.  Our volunteers should be able to identify the top 10 bacterial species in their belly buttons. That way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, the volunteers will be able to identify whether that species is found in their navel.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Procedures and Results
We started with JavaScript, Plotly, and D3.js to create a horizontal bar chart to display the top 10 bacterial species (OTUs) when an individual’s ID is selected from the dropdown menu on the webpage. The horizontal bar chart will display the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.  Our Javascript code and results are as follow:

![Screen Shot 2022-05-12 at 10 04 25 PM](https://user-images.githubusercontent.com/98566486/168196764-11e3883f-4572-4355-a3ab-57a23f8dc6bf.png)

![Screen Shot 2022-05-12 at 10 05 57 PM](https://user-images.githubusercontent.com/98566486/168196913-79432a10-ef01-48b3-a51e-5c9c1052dcfe.png)

Next, we used JavaScript, Plotly, and D3.js to create a bubble chart that will display the following when an individual’s ID is selected from the dropdown menu webpage:

* The otu_ids as the x-axis values.
* The sample_values as the y-axis values.
* The sample_values as the marker size.
* The otu_ids as the marker colors.
* The otu_labels as the hover-text values.

The bubble chart is shown below:

![Screen Shot 2022-05-12 at 10 08 34 PM](https://user-images.githubusercontent.com/98566486/168197134-efad2f1a-a522-41d4-9b6e-8552ff72c837.png)

We created a gauge chart that displays the weekly washing frequency's value, and display the value as a measure from 0-10 on the progress bar in the gauge chart when an individual ID is selected from the dropdown menu through the following chart:

![Screen Shot 2022-05-12 at 10 10 49 PM](https://user-images.githubusercontent.com/98566486/168197309-1ffb989c-2009-49fe-a29c-ad42a3f550f4.png)

Finally, we used Bootstrap features to add vibrance to our interactive dashboard:

* Added an image to the jumbotron
* Added background color or a variety of compatible colors to the webpage
* Use a custom font with contrast for the colors
* Made the webpage mobile-responsive




## Summary
We added our project to GitHub pages so anyone can run the script without running on a local server.  




