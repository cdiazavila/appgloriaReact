import {React,Fragment} from 'react'

const  Barra=(props)=>{


  const salir=()=>{
    window.location.reload(true);
  }

  let clases=`${props.clase} ${props.color}`;
 
    return(
 <Fragment>
    <nav id="nav">
        <input type="button" value="Salir" id="salir" onClick={salir}/>
        <div id="informacion">{props.datosPersonales}</div>
         <div id="nota" className={clases}>su nota es: {props.notadefinitiva} / 5 {props.mensaje} El Test</div>
        <div id="idpregunta" className={clases}>Preguntas correctas {props.preguntasCorrectas} / 9</div>
    </nav>
    </Fragment>
    )
}

export default Barra;