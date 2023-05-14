import { useState , useEffect } from 'react';
import { Error } from './Error'

export const Formulario = ( { setListaPacientes , listado , paciente , setPaciente} ) => {

  const [nombre, setNombre] = useState(""); //* guardamos el nombre del animal
  const [propietario, setPropietario] = useState(""); //* guardamos el nombre del dueño
  const [email, setEmail] = useState(""); //* guardamos el email
  const [fecha, setFecha] = useState(""); //* guardamos la fecha
  const [sintomas, setSintomas] = useState(""); //* guardamos los sintomas
  
  const [ error , setError ] = useState(false) //* guardamos un valor booleano si hay un error o no

  const generarId = () =>{ //* funcion que sirve para generar un id aleatorio
    return Math.random().toString(36) + Date.now().toString(36)
  }

  const handleSubmit = (e) =>{ //* se dispara cuando apretamos agregar o editar paciente
    e.preventDefault(); 

    // validacion del formulario
    //* 

    if( [ nombre , propietario , email , fecha , sintomas ].includes('') ){ //* si hay algun campo vacio
        console.log('Hay al menos un campo vacio')
        setError(true) //* ponemos el valor en verdadero , hay un error
        return; //*  no hace nada el handleSubmit , cortamos el flujo de la funcion
    }

    setError(false) //* de lo contrario no hay error

    const objetoPaciente = {
        nombre,
        propietario , 
        email , 
        fecha , 
        sintomas,
    } //* creamos un objeto de como sera el paciente

    if(paciente.id){ //* si el paciente ya tiene un id , significa que lo estamos editando
       //* editando registro
       objetoPaciente.id = paciente.id; //* le damos al objeto el mismo id ya creado
    
       const pacientesActualizados = listado.map( el => {
        if (el.id === paciente.id){
            console.log("paciente ya existente")
            return objetoPaciente
        }else{
            //* paciente nuevo
            console.log("paciente nuevo")
            return el
        }
       })
       setListaPacientes(pacientesActualizados) //* cambiamos el valor de la lista de pacientes con los pagientes actualizados
       setPaciente({})
    }
    else{
        //* nuevo registro
        objetoPaciente.id = generarId(); //* le damos al id un id aleatorio
        setListaPacientes([...listado , objetoPaciente]) //* agregamos a la lista , lo que ya teniamos con el spread y le agreamos el registro nuevo 
    }
    

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

    //* volvemos todos los valores por defecto

  }

  useEffect(() => { 
    if ( Object.keys( paciente ).length > 0) { //* si el paciente existe
        setNombre(paciente.nombre )
        setPropietario(paciente.propietario )
        setEmail( paciente.email)
        setFecha(paciente.fecha )
        setSintomas(paciente.sintomas )
        //* cargamos el formulario con los datos
    }
  }, [paciente]) //* la lanzamos cada vez que se edita un paciente
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Formulario</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {" "}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form onSubmit={ handleSubmit } className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {error  && <Error>Todos los campos son obligatorios</Error> }

            {/* <-- input mascota --> */}
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
                    Nombre de Mascota
                </label>
                <input id="mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    type="text" 
                    placeholder="Nombre de la Mascota"
                    value={ nombre }
                    onChange={ ( e ) => setNombre( e.target.value ) }
                />
            </div>
            {/* <-- input propietario --> */}
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">
                    Propietario
                </label>
                <input 
                    id="propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    type="text" 
                    placeholder="Nombre del Propietario"
                    value={ propietario }
                    onChange={ ( e ) => setPropietario( e.target.value ) }
                />
            </div>

            {/* <-- input email --> */}
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
                    Email
                </label>
                <input 
                    id="email" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    type="email" 
                    placeholder="Correo electronico"
                    value={ email }
                    onChange={ ( e ) => setEmail( e.target.value ) }
                />
            </div>

            {/* <-- input fecha --> */}
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">
                    alta   
                </label>
                <input 
                    id="alta" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    type="date"
                    value={ fecha }
                    onChange={ ( e ) => setFecha( e.target.value ) }
                />
            </div>

            {/* <-- input sintomas --> */}
            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
                    sintomas   
                </label>
                <textarea 
                    id="sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    placeholder="Describe los sintomas ..."
                    value={ sintomas }
                    onChange={ ( e ) => setSintomas( e.target.value ) }
                />
            </div>

            <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
                value={paciente.id ? "Editar paciente" : "Agregar paciente"}
            />
            {/* EL VALOR DEL boton se vera modificado si existe un paciente a editar o no */}
        </form>
    </div>
  )
}
