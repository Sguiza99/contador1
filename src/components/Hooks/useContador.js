import{useState} from "react";
export const useContador = () => {

    const [ data, setData] = useState(0);

    const Aumentar = () => {

        setData(data + 1)

    }

    const Resetear = () => {
        setData(0)
    }

    const Disminuir = () => {
        setData (data - 1)
    }

    return{

        Aumentar,Disminuir,Resetear,data,setData
    }
}