import { useEffect, useState } from "react"
import moment from 'moment'
import './Button.css'

function Button({horario, updateHorario, insertHorario}){

    const [abierto, setAbierto] = useState(false)

    useEffect(() => {
        let tmpAbierto = false
        horario.map((item) => {
            if(!item.fin) tmpAbierto = item
        })
        setAbierto(tmpAbierto)
    })

    function handleClick(){
        if(abierto){
            let tmpItem = abierto
            tmpItem.fin=moment().format("YYYYMMDDHHmm")
            updateHorario(tmpItem)
        }else{
            insertHorario()
        }
    }

    return(
        <div onClick={handleClick} className="buttonStSt">
            {abierto ? 'Stop' : 'Start'}
        </div>
    )
}

export default Button