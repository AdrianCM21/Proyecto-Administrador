import React from 'react'

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    BarController,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    BarController,
    Title,
    Tooltip,
    Legend,
    Filler
)

const Grafica = ({datos,titulo}) => {

      const labels =datos[1];
     console.log(datos)
    
    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: titulo,
          },
        },
      };
      
    
      const data = {
        labels,
        datasets: [
          {
            label: 'Numero de ventas',
            data: datos[0],
            backgroundColor: '#0f5e92',
          },
        ],
      };      
  return (
    <div>
        <Bar 
            options={options}
            data={data}
            />
    </div>
  )
}

export default Grafica