import React from "react";
import Plot from "react-plotly.js";

interface PieChartProps {
  selectedState: string | undefined;
  selectedStateData: {
    cases: number;
    active: number;
    recovered: number;
    deaths: number;
  } | undefined;
}

const PieChart: React.FC<PieChartProps> = ({ selectedState, selectedStateData }) => {
  return (
    <>
      {selectedState ? (
        <Plot
          data={[
            {
              values: [
                selectedStateData?.cases || 0,
                selectedStateData?.active || 0,
                selectedStateData?.recovered || 0,
                selectedStateData?.deaths || 0,
              ],
              labels: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
              type: "pie",
              marker: { colors: ["blue", "orange", "green", "red"] },
            },
          ]}
          layout={{
            width: 500,
            height: 400,
            title: "Graphical Representation",
          }}
          className="pieChart"
        />
      ) : (
        <p className="pie-chart-text">Please select a state to show the pie chart</p>
      )}
    </>
  );
};

export default PieChart;
