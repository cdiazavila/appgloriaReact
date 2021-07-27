import {React,useState} from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer';
import Preguntas from './components/Preguntas';
import Barra from './components/Barra';
import PanelBoton from './components/PanelBoton';

function App() {
  // capturamos los datos del formulario desde el padre 
  const [nombres, setnombres] = useState('');
  const [apellidos, setapellidos] = useState('');
  const [datosPersonales, setdatosPersonales] = useState('')
  const [contador, setcontador] = useState(1);
  const [notadefinitiva, setnotadefinitiva] = useState(0);
  const [mensaje, setmensaje] = useState('');
  const [clase, setclase] = useState('ocultar');
  const [color, setcolor] = useState('');
  const [ocultarPanel, setocultarPanel] = useState('mostrar')
  const [preguntasCorrectas, setpreguntasCorrectas] = useState(0)
  const [desabilitarRadio, setdesabilitarRadio] = useState('');
 
  // variable para mostrar el contenido 
  var contenido;
  var navegador,panelBoton;
  if(datosPersonales===''){
  contenido= <Login nombres={nombres} setnombres={setnombres} apellidos={apellidos} setapellidos={setapellidos} datosPersonales={datosPersonales}
  setdatosPersonales={setdatosPersonales}/>
   }else{
  
  contenido = <Preguntas contador={contador} setcontador={setcontador} notadefinitiva={notadefinitiva}
                setnotadefinitiva={setnotadefinitiva} setmensaje={setmensaje} setclase={setclase}
                setcolor={setcolor} setpreguntasCorrectas={setpreguntasCorrectas} setocultarPanel={setocultarPanel} 
                setdesabilitarRadio={setdesabilitarRadio} desabilitarRadio={desabilitarRadio}  clase={clase}
               />
    navegador= <Barra datosPersonales={datosPersonales} notadefinitiva={notadefinitiva}
                 mensaje={mensaje} clase={clase} color={color} preguntasCorrectas={preguntasCorrectas} />

    panelBoton=<PanelBoton setcontador={setcontador} ocultarPanel={ocultarPanel} />
   }

  
   
   
  return (
    <div>
       <Header/>
       {navegador}
       {contenido}
       {panelBoton}
      
       <Footer />
    </div>
  );
}

export default App;
