import moment from "moment"


function HorarioListItem({item}){

    return (
        <div className="horarioItemBody">
            <div>
                <div>Inicio:{item.inicio} fin: {item.fin} </div>
                <div>pedidos: {item.pedidos} </div>
                <div>{item.pedidosCount} en {item.diffH != "NaN" ? item.diffh : "--"}:{item.diffM}</div>
            </div>
            {item.inicio2 && <div>
                <div>Inicio:{item.inicio2} fin: {item.fin2} </div>
                <div>pedidos: {item.pedidos2} = {item.pedidosCount2}</div>
                <div>{item.pedidosCount2} en {item.diffH2}:{item.diffM2}</div>
            </div>}
        </div>
    )
}

export default HorarioListItem
