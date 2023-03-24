export const UseDias = (array) => {
    const diasInd =  ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const dias = [0,0,0,0,0,0,0]
    
    for (let index = 0; index < array.length; index++) {
        array[index].forEach(element => {
            dias[element.fecha.dia]=dias[element.fecha.dia]+element.unidades 
        });
    }
    return [dias,diasInd]
}

export const UseVendidos=(array)=>{
    const ventaInd =  array.map(e=>e.titulo);
    const venta = array.map(e=>0);
    console.log(venta)
    for (let index = 0; index < array.length; index++) {
        (array[index].ventas).forEach(element => {
            venta[index]=venta[index]+element.unidades 
        });
        
    }
    return [venta,ventaInd]
}

export const UseFechas = (array) => {
    const fechasInd =  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const fechas = [0,0,0,0,0,0,0,0,0,0,0,0]
    
    for (let index = 0; index < array.length; index++) {
        array[index].forEach(element => {
            fechas[element.fecha.mes]=fechas[element.fecha.mes]+element.unidades 
        });
    }
    return [fechas,fechasInd]
}


