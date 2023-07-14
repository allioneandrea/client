import moment from "moment"


function HorarioListItem({item}){

    return (
        <div className="horarioItemBody">
            <div>
                Inicio:{item.inicio} fin: {item.fin} <br />
                pedidos: {item.pedidos} <br />
                {item.pedidosCount} en {item.diffH}:{item.diffM}
            </div>
            {item.inicio2 && <div>
                Inicio:{item.inicio2} fin: {item.fin2} <br />
                pedidos: {item.pedidos2} = {item.pedidosCount2}<br />
                {item.pedidosCount2} en {item.diffH2}:{item.diffM2}
            </div>}
        </div>
    )
}

export default HorarioListItem