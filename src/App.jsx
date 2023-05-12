import { Formulario , Header , ListadoPacientes } from "./components"

function App() {
  return (
    <div className="container mx-auto mt-16">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario/>
        <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
