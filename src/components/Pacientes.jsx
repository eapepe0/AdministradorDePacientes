
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
export const Pacientes = ( { paciente , setPaciente , eliminarPaciente } ) => {

    //* si apretamos eliminar , nos sale el sweetalert2 , si el resultado es si , apretamos el boton confimar , llamamos a la funcion eliminar pacientes
    //* si apretamos No no hacemos nada
    const handleEliminar = () =>{
        Swal.fire({
            title: 'Cuidado!',
            text: '¿Quieres borrar el registro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
          }).then((result) => {
            if (result.value == true) {
                eliminarPaciente(id)
            } else {
                return;
            }
          })
        //
        
    }


    const { nombre , propietario , email , fecha , sintomas , id } = paciente
    return (
        <div className="m-3 bg-white shadow-md px-5 py-7 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {"  "}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {"  "}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            email: {"  "}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            fecha alta: {"  "}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomas: {"  "}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-8">
            <button type="button" onClick={() => setPaciente( paciente )} 
                    className="py-2 px-10 mx-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
                Editar
            </button>
            <button type="button" onClick= {handleEliminar}
                    className="py-2 px-8 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
                Eliminar
            </button>
        </div>
    </div>
    )
}
