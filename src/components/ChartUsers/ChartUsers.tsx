import React from "react";
import { Chart } from "react-google-charts";
import './ChartUsers.css';

export const data = [
  ["Mes", "Usuarios"],
  ["Ene", 10],
  ["Feb", 25],
  ["Mar", 30],

];

export const options = {
  chart: {
    title: "Grafico Usuarios",
    subtitle: "Mensuales, con disponibilidad de agua",
  },
  colors: ['#008f39']
};

const ChartUsers: React.FC = () => {
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

export default ChartUsers;
