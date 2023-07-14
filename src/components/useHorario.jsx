import { useEffect, useState } from "react";
import moment from "moment";


const MOMENT_PATTERN = "YYYYMMDDHHmm"

function useHorario(){
    const [horario, setHorario] = useState([])
    const [data,setData] = useState([])
    const [openData, setOpenData] = useState(false)

    useEffect(() => {
        console.log('open', openData)
    },[openData])

    useEffect(() => {
        let tmpOpenData = false
        let tmpData = []
        let tmpItem = {}

        data.map((item) => {
            const inicio = moment(item.inicio, MOMENT_PATTERN)
            const fin = moment(item.fin, MOMENT_PATTERN)
            if(!item.fin){
                tmpOpenData = item
            }
            let pedidosCount = 0
            let pedidosArray = item.pedidos.split("")
            pedidosArray.forEach(item => {
                pedidosCount += parseInt(item)
            })
            if(tmpItem.inicioDD != parseInt(inicio.format('DD'))){
                if(tmpItem.inicio ) tmpData.push(tmpItem)
                tmpItem = {
                    inicio: inicio.format("HH:mm"),
                    fin: fin.format("HH:mm"),
                    inicioDD: parseInt(inicio.format('DD')),
                    inicioMM: parseInt(inicio.format("MM")),
                    inicioDay: parseInt(inicio.day()),
                    pedidos: item.pedidos,
                    pedidosCount: pedidosCount,
                    pedidosTot: pedidosCount
                }
            }else{
                tmpItem ={
                    ... tmpItem,
                    inicio2: inicio.format("HH:mm"),
                    fin2: fin.format("HH:mm"),
                    pedidos2: item.pedidos,
                    pedidosCount2: pedidosCount,
                    pedidosTot: tmpItem.pedidosTot + pedidosCount
                }
            }
            
        })
        if(tmpItem.inicio ) tmpData.push(tmpItem)

        setOpenData(tmpOpenData)
        setHorario(tmpData)
    }, [data])

    return {horario, setData, openData};


}

export default useHorario