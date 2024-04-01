
//propriedades ou props
const Titulo = (props) => {
    return(
        <h1 style={{color: props.cor}} >{props.texto}</h1>
       
    )
}

const Cabeçalho = (props) => {
    return(
        <h1>{props.children}</h1>
    )
}
const Subtitulo = ({texto, cor}) =>{
    return(
        <p style={{color:cor}}>{texto}</p>
       
    )
}

const App = () => {
    return(
        <>
       <Cabeçalho>
        <p>Esse é o Cabeçalho</p>
        </Cabeçalho>

        <Titulo cor='blue' texto="Meu titulo" />

        <Subtitulo cor='purple' texto='Essse é o subtitulo do meu primeiro titulo' />

        <Titulo cor='red' texto="Esse é meu outro titulo"/>

        <Titulo  cor='pink' texto="Esse é terceiro titulo"/>

        </>
        
    )
}

export default App;