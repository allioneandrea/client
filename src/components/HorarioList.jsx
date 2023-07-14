import { useEffect, useState } from "react"
import HorarioListItem from "./HorarioListItem"
import moment from 'moment'
import useHorario from "./useHorario"

const dayName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']


function HorarioList(props) {

    const horario = useHorario()

    useEffect(() => {
        horario.setData(props.horario)
    },[props])


    function RenderHorario(){
        if(horario.horario.length > 0) {
            let newHorario = [...horario.horario].reverse()
            console.log('horario', horario.horario)
            console.log('new', newHorario)
            return(
               <>
               {newHorario.map((item) => 
                <div key={crypto.randomUUID} style={{border: '1px solid black', marginBottom:'20px'}}>
                    <div>{dayName[item.inicioDay]} {item.inicioDD} {item.pedidosTot}</div>
                    Inicio:{item.inicio} fin: {item.fin} <br />
                    pedidos: {item.pedidos} => {item.pedidosCount}
                    {item.inicio2 && <div>inicio2: {item.inicio2} fin2: {item.fin2} pedidos: {item.pedidosCount2}</div>}
                </div>
               )}
               </> 
            )
        }else{
            return(
                <>No hay na</>
            )
        }
    }

    return(
        <><RenderHorario /></>
    )
}

export default HorarioList