import React from "react";
import Plot from "react-plotly.js";

function LineChart({ selectedStateData }) {

  return (
    <>
      <Plot
        data={[
          {
            x: [selectedStateData?.todayActive ,], 
            y: [selectedStateData?.active], 
            type: "scatter",
            mode: "lines+markers",
            name: "Active Cases",
            marker: { color: "blue" },
          },
          {
            x: [selectedStateData?.todayRecovered], 
            y: [selectedStateData?.recovered], 
            type: "scatter",
            mode: "lines+markers",
            name: "Recovered Cases",
            marker: { color: "green" },
          },
          {
            x: [selectedStateData?.todayDeaths], 
            y: [selectedStateData?.deaths], 
            type: "scatter",
            mode: "lines+markers",
            name: "Deaths",
            marker: { color: "red" },
          },
          {
            x: [selectedStateData?.todayCases], 
            y: [selectedStateData?.cases], 
            type: "scatter",
            mode: "lines+markers",
            name: "Total Cases",
            marker: { color: "purple" },
          },
        ]}
        layout={{
          title: "COVID-19 Cases by State",
          xaxis: { title: "Today's Cases" }, 
          yaxis: { title: "Total Cases" }, 
          width: 600,
          height: 400,
        }}
      />
    </>
  );
}

export default LineChart;
