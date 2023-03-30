# Belly-Button-Challenge

## Context

A dataset which catalogs the microbes that colonize human navels reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

This challenge aimed to create a dashboard consisting of a horizontal bar chart with a dropdown menu to display the top 10 OTUs found; a bubble chart  displaying each sample and an individual's demographic information.

## Challenge instructions

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

![image](https://user-images.githubusercontent.com/113676942/228804685-689bb950-5913-4ffd-aaca-7bdf04191200.png)

3. Use sample_values as the values for the bar chart.

4. Use otu_ids as the labels for the bar chart.

5. Use otu_labels as the hovertext for the chart.

6. Create a bubble chart that displays each sample.

![image](https://user-images.githubusercontent.com/113676942/228804899-1725d031-83ac-496b-abf3-751a4b24df7a.png)

7. Use otu_ids for the x values.

8. Use sample_values for the y values.

9. Use sample_values for the marker size.

10. Use otu_ids for the marker colors.

11.  Use otu_labels for the text values.

12. Display the sample metadata, i.e., an individual's demographic information.

13. Display each key-value pair from the metadata JSON object somewhere on the page.

14. Update all the plots when a new sample is selected. Additionally, you create any layout for the dashboard.
