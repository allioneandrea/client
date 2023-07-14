import { useEffect, useState } from "react"
import HorarioListItem from "./HorarioListItem"
import moment from 'moment'
import useHorario from "./useHorario"

const dayName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const mothName = ['','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


function HorarioList(props) {

    const horario = useHorario()

    useEffect(() => {
        horario.setData(props.horario)
    },[props])

    function toggleOpen(e) {
        e.currentTarget.classList.toggle('open')
    }

    function RenderHorario(){
        if(horario.horario.length > 0) {
            let newHorario = [...horario.horario].reverse()
            return(
               <>
               {newHorario.map((item) => 
                <>
                    {item.month ? 
                    <div>Mes {mothName[item.month]}</div> : 
                    
                    <div key={crypto.randomUUID} className="itemHorario" onClick={(e) => toggleOpen(e)}>
                        <div className="itemHeading"><small>{dayName[item.inicioDay]} {item.inicioDD}</small> {item.pedidosTot}<small>pedidos en</small>{item.diffTotH ? item.diffTotH: item.diffH}:{item.diffTotM ? item.diffTotM: item.diffM}</div>
                        <HorarioListItem item={item} />
                    </div>}
                    
                </>
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