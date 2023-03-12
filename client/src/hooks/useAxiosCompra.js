import  axios  from "axios"

const UseAxios = async(listaid,listaCant)=>{//Listaid deve contener todas las id de los productos vendidos y lista cantidad deve contener la cantidad vendida para poder actulizar los productos
    try {
        for (let index = 0; index < listaid.length; index++) {
            await axios.put(`${process.env.REACT_APP_API_URL}/api/producto/${listaid[index]}`,listaCant[index])
            console.log(listaid[index],listaCant[index])
        }
        return true
    } catch (error) {
        return false
    }
    
}

export default UseAxios