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
import { useOutletContext } from 'react-router-dom';

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

const ProductoMasVendido = () => {
    const {datoFecha} = useOutletContext()
      const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
     console.log(new Date().getDay())
    
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
            text: 'Venta por Meses',
          },
        },
      };
      
    
      const data = {
        labels,
        datasets: [
          {
            label: 'Numero de ventas',
            data: datoFecha,
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

export default ProductoMasVendido