import React from "react";
import { Chart } from "react-google-charts";
import './ChartContainer.css';

export const data = [
  ["Mes", "Containers"],
  ["Ene", 20],
  ["Feb", 30],
  ["Mar", 38],

];

export const options = {
  chart: {
    title: "Grafico Contenedores",
    subtitle: "Activos mensuales, con disponibilidad de agua",
  },
  colors: ['#FF0000']
};

const ChartContainer: React.FC = () => {
  return (
    <div className="chartContainer">
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
      
    />
    </div>
  );
}

export default ChartContainer;
