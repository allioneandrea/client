import { useEffect, useState } from "react"
import HorarioListItem from "./HorarioListItem"
import moment from 'moment'
import useHorario from "./useHorario"

const dayName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const mothName = ['','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function addZero(num){
    return num < 10 ? `0${num}` : num
}
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
                    <div>Mes {mothName[item.month]} {item.totHMonth.horas}:{item.totHMonth.minutes}H {(item.totHMonth.horas * 7.9).toFixed(2)}€</div> : 
                    
                    <div key={crypto.randomUUID} className="itemHorario" onClick={(e) => toggleOpen(e)}>
                        <div className="itemHeading">
                            <div><small>{dayName[item.inicioDay]} {item.inicioDD}</small></div>
                           <div> {item.pedidosTot}<small>pedidos</small></div>
                           <div><small> en </small>{item.diffTotH ? addZero(item.diffTotH): addZero(item.diffH)}:{addZero(item.diffTotM) ? addZero(item.diffTotM): addZero(item.diffM)}H</div>
                        </div>
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