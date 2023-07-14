import { useEffect, useState } from "react"


function ButtonsPedidos (props) {

    const [openItem, setOpenItem] = useState(false)

    useEffect(() => {
        let tmpOpen = false
        props.horario.map((item) => {
            if(!item.fin) tmpOpen = item
        })
        console.log(tmpOpen)
        setOpenItem(tmpOpen)
    }, [props])

    function handleClick(cant) {
        let tmpItem = openItem
        tmpItem.pedidos = tmpItem.pedidos + cant
        props.updateHorario(tmpItem)
        console.log(openItem)
    }

    return(
        <>
        {openItem ?<>
        <button onClick={() => handleClick(1)}>1</button>
            <button onClick={() => handleClick(2)}>2</button>
            <button onClick={() => handleClick(3)}>3</button>
        
        </> : <>No no</>}
        </>
    )
}

export default ButtonsPedidos