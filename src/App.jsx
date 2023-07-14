import { useEffect, useState } from 'react'
import './App.css'
import HorarioList from './components/HorarioList'
import Button from './components/Button'
import axios from 'axios'
import moment from 'moment'
import ButtonsPedidos from './components/ButtonsPedidos'

const BASE_URL = 'https://server-psi-sand.vercel.app/api/'

function App() {

  const [horario, setHorario] = useState([])

  useEffect(() => {
    axios.get(BASE_URL+'horario')
    .then(data => {
      setHorario(data.data)})
  }, [])

  

  function updateHorario(item) {
    axios.post (BASE_URL+'updatehorario', item)
    .then(data => setHorario(data.data))
  }


  function insertHorario() {
    const item = {
      inicio: moment().format("YYYYMMDDHHmm"),
      fin:'',
      pedidos: ''
    }
    axios.post (BASE_URL+'inserthorario', item)
    .then(data => setHorario(data.data))
  }


  return (
    <>
    <Button horario={horario} updateHorario={updateHorario} insertHorario={insertHorario} />
    <ButtonsPedidos horario={horario} updateHorario={updateHorario} />
      <HorarioList horario={horario} />
    </>
  )
}

export default App
