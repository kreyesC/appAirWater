import React from "react";
import { Chart } from "react-google-charts";
import './ChartWater.css';

export const data = [
  ["Mes", "Water"],
  ["Ene", 20],
  ["Feb", 30],
  ["Mar", 38],

];

export const options = {
  chart: {
    title: "Grafico Disponibilidad Agua",
    subtitle: "Porcentage mensuales, de disponibilidad de agua",
  },
  colors: ['#3e98c7']
};

const ChartWater: React.FC = () => {
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

export default ChartWater;
