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
            const diffH = parseInt(fin.diff(inicio, 'hours'))
            const diffM = parseInt(fin.diff(inicio, 'minutes'))%60
            let pedidosCount = 0
            let pedidosArray = item.pedidos.split("")

            if(!item.fin){
                tmpOpenData = item
            }

            pedidosArray.forEach(item => {
                pedidosCount += parseInt(item)
            })
            if(tmpItem.inicioDD != parseInt(inicio.format('DD'))){
                const inicioMonth = parseInt(inicio.format("MM"))
                if(tmpItem.inicio ) tmpData.push(tmpItem)
                if(tmpItem.inicioMM != inicioMonth) tmpData.push({month: inicioMonth})
                tmpItem = {
                    inicio: inicio.format("HH:mm"),
                    fin: fin.format("HH:mm"),
                    inicioDD: parseInt(inicio.format('DD')),
                    inicioMM: inicioMonth,
                    inicioDay: parseInt(inicio.day()),
                    diffH: diffH,
                    diffM: diffM,
                    pedidos: item.pedidos,
                    pedidosCount: pedidosCount,
                    pedidosTot: pedidosCount
                }
            }else{
                const diffH2 = parseInt(fin.diff(inicio, 'hours'))
                const diffM2 = parseInt(fin.diff(inicio, 'minutes'))%60
                const diffTotH = tmpItem.diffH +diffH
                let diffTotM = 0
                let diffTotMToH = 0
                if(tmpItem.diffM +diffM2 >= 60){
                    diffTotMToH = parseInt((tmpItem.diffM +diffM2)/60)
                }
                    diffTotM = (tmpItem.diffM +diffM2)%60
                
                
                tmpItem ={
                    ... tmpItem,
                    inicio2: inicio.format("HH:mm"),
                    fin2: fin.format("HH:mm"),
                    pedidos2: item.pedidos,
                    pedidosCount2: pedidosCount,
                    pedidosTot: tmpItem.pedidosTot + pedidosCount,
                    diffH2: diffH2,
                    diffM2: diffM2,
                    diffTotH: diffTotH + diffTotMToH,
                    diffTotM: diffTotM
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