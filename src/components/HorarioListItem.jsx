import moment from "moment"


function HorarioListItem({item}){

    return (
        <>
            <div>{item.inicio.format("HH:mm")} {item.fin.format("HH:mm")} {item.pedidos} </div>
        </>
    )
}

export default HorarioListItem