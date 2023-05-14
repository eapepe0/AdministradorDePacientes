import { useState , useEffect } from "react"
import { Formulario , Header , ListadoPacientes } from "./components"


function App() {

  const [listaPacientes, setListaPacientes] = useState([]) //* aca guardamos la lista de pacientes que se veran en la parte derecha de la pantalla
  const [paciente, setPaciente] = useState({}) //* aca guardamos el paciente a 

  useEffect(() => {
    const obtenerLocalStorage = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setListaPacientes(pacientesLS)
    } 
    obtenerLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify (listaPacientes)) 
  }, [listaPacientes])





  const eliminarPaciente =  id  => {
    const pacientesActualizados =  listaPacientes.filter( elemento => elemento.id !== id) 
    setListaPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-16">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario setListaPacientes = {setListaPacientes} listado = { listaPacientes } paciente = { paciente } setPaciente = { setPaciente }/>
        <ListadoPacientes listaPacientes = { listaPacientes } setPaciente = { setPaciente } eliminarPaciente = { eliminarPaciente }/>
      </div>
    </div>
  )
}

export default App
