import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {
    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores } = props
    const obj = {
        backgroundColor: colorSecundario
    }
    console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                 type ='color'
                 className="input-color"
                 value={colorSecundario}
                 onChange={(evento)=> {
                console.log (evento.target.value)
                 }
                
                }



                 />



                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo