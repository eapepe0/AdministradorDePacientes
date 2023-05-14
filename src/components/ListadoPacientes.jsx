import { Pacientes } from "./Pacientes"

export const ListadoPacientes = ({ listaPacientes , setPaciente , eliminarPaciente }) => {
   
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {
            listaPacientes.length > 0  ? (  
            <>
                <h2 className="font-bold text-3xl text-center">ListadoPacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {" "}
                    <span className="text-indigo-600 font-bold"> 
                        Pacientes y Citas
                    </span>
                </p>
                {
                    listaPacientes.map( paciente  =>  (<Pacientes key={ paciente.id } paciente = { paciente } setPaciente= { setPaciente } eliminarPaciente = { eliminarPaciente }/> ))
                }
            </> 
         )
        :<>  
            <h2 className="font-bold text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes {" "}
                <span className="text-indigo-600 font-bold"> 
                    y apareceran en este lugar.
                </span>
            </p>
        </>}
            
           
    </div>
  )
}
/**
 * linea 9 : si en la lista hay contendio , hacemos un mapeo del array listaPacientes, y por cada paciente devolvemos un componente paciente
 *           con los datos cargadso
 * 
 * linea 23 : si la lista de pacientes esta vacia , renderizamos Comienza agregando pacientes
 */