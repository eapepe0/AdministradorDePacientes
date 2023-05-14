import { useState , useEffect } from "react"
import { Formulario , Header , ListadoPacientes } from "./components"


function App() {

  const [listaPacientes, setListaPacientes] = useState([]) //* aca guardamos la lista de pacientes que se veran en la parte derecha de la pantalla
  const [paciente, setPaciente] = useState({}) //* aca guardamos el paciente el cual se editara

  useEffect(() => { //* usamos un useEffect sin dependecia el cual se ejecutara una sola vez cuando se cargue el componente App
    //* funcion que obtiene del localstorage un JSON que convierte en un objeto , ese array convertido en string , ese objeto lo poemos en listaPacientes
    const obtenerLocalStorage = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(typeof(localStorage.getItem('pacientes')))
      console.log(localStorage.getItem('pacientes'))
      setListaPacientes(pacientesLS)
    } 
    obtenerLocalStorage();
  }, [])

  useEffect(() => { //* cada vez que cambia la lista de pacientes lo guardamos conviertiendo el array en una string , ya que no se pueden guardar arrays en localstorage
    localStorage.setItem('pacientes',JSON.stringify (listaPacientes)) 
  }, [listaPacientes])




  //* funcion que elimina pacientes, recibe el id del paciente a borrar
  const eliminarPaciente =  id  => {
    const pacientesActualizados =  listaPacientes.filter( elemento => elemento.id !== id)  //* creamos un array y filtramos el id de la lista con el id que nos mandaron a borrar
    setListaPacientes(pacientesActualizados) //* los pacientes filtrados los guardamos en la lista de pacientes
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
