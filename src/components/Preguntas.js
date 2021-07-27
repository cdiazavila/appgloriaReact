import {React,useState} from 'react'
const Preguntas=(props)=>{
   let p1,p2,p3,p4,p5,p6,p7,p8,p9,ocultarBonton;
   const [punto1, setpunto1] = useState(0);
   const [punto2, setpunto2] = useState(0);
   const [punto3, setpunto3] = useState(0);
   const [punto4, setpunto4] = useState(0);
   const [punto5, setpunto5] = useState(0);
   const [punto6, setpunto6] = useState(0);
   const [punto7, setpunto7] = useState(0);
   const [punto8, setpunto8] = useState(0);
   const [punto9, setpunto9] = useState(0);
   // Mensaje para los estados de las preguntas 
   const [mensaje1, setmensaje1] = useState('');
   const [mensaje2, setmensaje2] = useState('');
   const [mensaje3, setmensaje3] = useState('');
   const [mensaje4, setmensaje4] = useState('');
   const [mensaje5, setmensaje5] = useState('');
   const [mensaje6, setmensaje6] = useState('');
   const [mensaje7, setmensaje7] = useState('');
   const [mensaje8, setmensaje8] = useState('');
   const [mensaje9, setmensaje9] = useState('');
   // color para las pregunta 

   const [color1, setcolor1] = useState('');
   const [color2, setcolor2] = useState('');
   const [color3, setcolor3] = useState('');
   const [color4, setcolor4] = useState('');
   const [color5, setcolor5] = useState('');
   const [color6, setcolor6] = useState('');
   const [color7, setcolor7] = useState('');
   const [color8, setcolor8] = useState('');
   const [color9, setcolor9] = useState('');
  
  // con este metodo me permite ir a la siguente pregunta 
  const siguente=()=>{
 props.setcontador(props.contador+1);
    
  }
// con este metodo voy a la preguta anterior 
 const anterior=()=>{
  props.setcontador(props.contador-1);
 }
  
  if(props.contador===1){
    p1="mostrar";
    p2="ocultar";
    p3="ocultar";
    p4="ocultar";
    p5="ocultar";
    p6="ocultar";
    p7="ocultar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===2){
    p1="ocultar";
    p2="mostrar";
    p3="ocultar";
    p4="ocultar";
    p5="ocultar";
    p6="ocultar";
    p7="ocultar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===3){
    p1="ocultar";
    p2="ocultar";
    p3="mostrar";
    p4="ocultar";
    p5="ocultar";
    p6="ocultar";
    p7="ocultar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===4){
    p1="ocultar";
    p2="ocultar";
    p3="ocultar";
    p4="mostrar";
    p5="ocultar";
    p6="ocultar";
    p7="ocultar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===5){
    p1="ocultar";
    p2="ocultar";
    p3="ocultar";
    p4="ocultar";
    p5="mostrar";
    p6="ocultar";
    p7="ocultar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===6){
    p1="ocultar";
    p2="ocultar";
    p3="ocultar";
    p4="ocultar";
    p5="ocultar";
    p6="mostrar";
    p7="ocultar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===7){
    p1="ocultar";
    p2="ocultar";
    p3="ocultar";
    p4="ocultar";
    p5="ocultar";
    p6="ocultar";
    p7="mostrar";
    p8="ocultar";
    p9="ocultar";
  }else if(props.contador===8){
    p1="ocultar";
    p2="ocultar";
    p3="ocultar";
    p4="ocultar";
    p5="ocultar";
    p6="ocultar";
    p7="ocultar";
    p8="mostrar";
    p9="ocultar";
  }else if(props.contador===9){
    p1="ocultar";
    p2="ocultar";
    p3="ocultar";
    p4="ocultar";
    p5="ocultar";
    p6="ocultar";
    p7="ocultar";
    p8="ocultar";
    p9="mostrar";
  }else{
    p1="mostrar";
    p2="mostrar";
    p3="mostrar";
    p4="mostrar";
    p5="mostrar";
    p6="mostrar";
    p7="mostrar";
    p8="mostrar";
    p9="mostrar";
    ocultarBonton="ocultar";
    props.setclase('mostrar');
    props.setocultarPanel('ocultar');
    props.setdesabilitarRadio('deshabilitar-Radio');
    props.setnotadefinitiva(punto1+punto2+punto3+punto4+punto5+punto6+punto7+punto8+punto9);
  }
 
   //para la pregunta 1 

 
 const leerpunto1=(e)=>{
  if(e.target.value==='1.44'){
    setpunto1(0.5);
    setmensaje1('Correcto');
    setcolor1('color-verde')

  }else{
    setpunto1(0);
    setmensaje1('Incorrecto, la pregunta correcta es: 1.44');
    setcolor1('colorRed');
  }
 }

   //para la pregunta 2
 
   const leerpunto2=(e)=>{
    if(e.target.value==='4'){
      setpunto2(0.5);
      setmensaje2('Correcto');
      setcolor2('color-verde')
  
    }else{
      setpunto2(0);
      setmensaje2('Incorrecto, la pregunta correcta es: 4');
      setcolor2('colorRed');
    }
   }

   
   //parala pregunta 3 
 
 
   const leerpunto3=(e)=>{
    if(e.target.value==='3'){
      setpunto3(0.5);
      setmensaje3('Correcto');
      setcolor3('color-verde')
    }else{
      setpunto3(0);
      setmensaje3('Incorrecto, la pregunta correcta es: (-1,∞)');
      setcolor3('colorRed');
      
    }
   }

    //parala pregunta 4 
 
 
    const leerpunto4=(e)=>{
     if(e.target.value==='7'){
       setpunto4(0.5);
       setmensaje4('Correcto');
       setcolor4('color-verde')
     
     }else{
       setpunto4(0);
       setmensaje4('Incorrecto, la pregunta correcta es:7');
       setcolor4('colorRed');
     }
    }

     //parala pregunta 5 
    
 
     const leerpunto5=(e)=>{
      if(e.target.value==='2'){
        setpunto5(0.5);
        setmensaje5('Correcto');
        setcolor5('color-verde')
      }else{
        setpunto5(0);
        setmensaje5('Incorrecto, la pregunta correcta es: Verdadero');
        setcolor5('colorRed');
      }
     }

      //parala pregunta 6 
 
 
    const leerpunto6=(e)=>{
     if(e.target.value==='2'){
       setpunto6(0.5);
       setmensaje6('Correcto');
       setcolor6('color-verde')
     }else{
       setpunto6(0);
       setmensaje6('Incorrecto, la pregunta correcta es: |R');
       setcolor6('colorRed');
     }
    }

     //parala pregunta 7
  
 
     const leerpunto7=(e)=>{
      if(e.target.value==='1'){
        setpunto7(0.5);
        setmensaje7('Correcto');
        setcolor7('color-verde')
      }else{
        setpunto7(0);
        setmensaje7('Incorrecto, la pregunta correcta es: 10000000');
        setcolor7('colorRed');
      }
     }

      //parala pregunta 8 
  
 
    const leerpunto8=(e)=>{
     if(e.target.value==='1'){
       setpunto8(0.5);
       setmensaje8('Correcto');
       setcolor8('color-verde')
       
     }else{
       setpunto8(0);
       setmensaje8('Incorrecto, la pregunta correcta es:0.0001');
       setcolor8('colorRed');
     }
    }

     //parala pregunta 9
    
 
     const leerpunto9=(e)=>{
      if(e.target.value==='3'){
        setpunto9(1);
        setmensaje9('Correcto');
        setcolor9('color-verde')
      }else{
        setpunto9(0);
        setmensaje9('Incorrecto, la pregunta correcta es: 27000');
        setcolor9('colorRed');
      }
     }

   
     // metodo que finaliza el tes y envia la definitiva 

     const definitiva=(e)=>{
      e.preventDefault();
      props.setcontador(props.contador+1);
     }
 
 // miramos si el estudiante reprobo o aprobo
 if(props.notadefinitiva>=3){
   props.setmensaje('Aprobo')
   props.setcolor('color-verde')
 }else{
  props.setmensaje('Reprobo')
  props.setcolor('colorRed')
 }
 

 //contamos el numero de preguntas correctas 
 if(props.notadefinitiva===0.5){
  props.setpreguntasCorrectas(1);
 }else if(props.notadefinitiva===1){
  props.setpreguntasCorrectas(2);
 }else if(props.notadefinitiva===1.5){
  props.setpreguntasCorrectas(3);
 }else if(props.notadefinitiva===2){
  props.setpreguntasCorrectas(4);
 }else if(props.notadefinitiva===2.5){
  props.setpreguntasCorrectas(5);
 }else if(props.notadefinitiva===3){
  props.setpreguntasCorrectas(6);
 }else if(props.notadefinitiva===3.5){
  props.setpreguntasCorrectas(7);
 }else if(props.notadefinitiva===4 || props.notadefinitiva===4.5 ){
  props.setpreguntasCorrectas(8);
 }else if(props.notadefinitiva===5){
  props.setpreguntasCorrectas(9);
 }
let claseclor1=`${props.clase} ${color1}`;
let claseclor2=`${props.clase} ${color2}`;
let claseclor3=`${props.clase} ${color3}`;
let claseclor4=`${props.clase} ${color4}`;
let claseclor5=`${props.clase} ${color5}`;
let claseclor6=`${props.clase} ${color6}`;
let claseclor7=`${props.clase} ${color7}`;
let claseclor8=`${props.clase} ${color8}`;
let claseclor9=`${props.clase} ${color9}`;

    return(
        <div id="container">
          <section id="p" className={p1}>
            <h2>PREGUNTA 1 de 9</h2>
             <p> Cual es la √2 ?</p>
        
            <form action="post" name="radio" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="2.5"  onChange={leerpunto1}/><label for="1">2.5</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="1.44" onChange={leerpunto1}/><label for="2" id="label">1.44</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="1"    onChange={leerpunto1}/><label for="3">1</label>
           
        </form>
        <div id="r1" className={claseclor1}>
           {mensaje1}
        </div>
        
            <div id="menu1">
                <ul  className={ocultarBonton}>
             
              <li onClick={siguente}>Siguiente</li>
            </ul> 
            </div>
       </section>    
            <section id="p" className={p2}>
        <h2>PREGUNTA 2 de 9</h2>
        <p> Cuanto es 34-30 ?</p>
        
           <form action="post" name="radio2" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="4" onChange={leerpunto2}/><label for="1">4</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="7" onChange={leerpunto2}/><label for="2" id="label">7</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="8" onChange={leerpunto2}/><label for="3">8</label>
           
        </form>
        <div id="r2" className={claseclor2}>
             {mensaje2}
        </div>
        <div id="menu2">
            <ul className={ocultarBonton}>
          <li onClick={anterior} >Anterior</li>
          <li onClick={siguente} >Siguiente</li>
        </ul> 
      </div>
    </section>

        <section id="p" className={p3}>
        <h2>PREGUNTA 3 de 9</h2>
        <p> Cual es el dominio de la Raiz x+1 ?</p>
        
           <form action="post" name="radio3" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto3}/><label for="1">(-1,0)u(0,10)</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto3}/><label for="2" id="label">|R -{-1}</label> <br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto3}/><label for="3">(-1,∞)</label>
           
        </form>
        <div id="r3"className={claseclor3}>
        {mensaje3}
        </div>
        <div id="menu3">
            <ul className={ocultarBonton}>
          <li onClick={anterior}>Anterior</li>
          <li onClick={siguente}>Siguiente</li>
        </ul> 
      </div>
    </section>

    <section id="p" className={p4}>
        <h2>PREGUNTA 4 de 9</h2>
        <p> Cual de estos numero es primo?</p>
        
           <form action="post" name="radio4" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="0"  onChange={leerpunto4}/><label for="1">0</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="7"  onChange={leerpunto4}/><label for="2" id="label">7</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="10" onChange={leerpunto4}/><label for="3">10</label>
           
        </form>
        <div id="r4" className={claseclor4}>
        {mensaje4}
        </div>

        <div id="menu4">
            <ul className={ocultarBonton}>
          <li onClick={anterior}>Anterior</li>
          <li onClick={siguente}>Siguiente</li>
        </ul> 
      </div>
    </section>
    <section id="p5" className={p5}>
        <h2>PREGUNTA 5 de 9</h2>
        <p> La variable x perteneciente al dominio de la función recibe el nombre de variable independiente. ?</p>
        
           <form action="post" name="radio5" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto5}/><label for="1">Falso</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto5}/><label for="2" id="label">Verdadero</label><br/><br/>
            
        </form>
        <div id="r5" className={claseclor5}>
        {mensaje5}
        </div>

        <div id="menu5">
            <ul className={ocultarBonton}>
          <li onClick={anterior}>Anterior</li>
          <li onClick={siguente}>Siguiente</li>
        </ul> 
      </div>
    </section>

    <section id="p6" className={p6}>
        <h2>PREGUNTA 6 de 9</h2>
        <p> Hallar el dominio de la  f(x)=(x^{2}-25)/5 ?</p>
        
           <form action="post" name="radio6" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto6}/><label for="1">7</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto6}/><label for="2" id="label">|R</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto6}/><label for="3">[2,9]</label>
           
        </form>
        <div id="r6" className={claseclor6}>
        {mensaje6}
        </div>
        <div id="menu6">
            <ul className={ocultarBonton}>
          <li onClick={anterior}>Anterior</li>
          <li onClick={siguente}>Siguiente</li>
        </ul> 
      </div>

    </section>

    <section id="p7" className={p7}>
        <h2>PREGUNTA 7 de 9</h2>
        <p> Cual es el valor 10^7 ?</p>
        
           <form action="post" name="radio7" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto7}/><label for="1">10000000</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto7}/><label for="2" id="label">1000000</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto7}/><label for="3">20000000</label>
           
        </form>
        <div id="r7" className={claseclor7}>
        {mensaje7}
        </div>
        <div id="menu7">
            <ul className={ocultarBonton}>
          <li onClick={anterior}>Anterior</li>
          <li onClick={siguente}>Siguiente</li>
        </ul> 
      </div>
    </section>
      
    <section id="p8" className={p8}>
        <h2>PREGUNTA 8 de 9</h2>
        <p> ¿ A cuánto equivale la siguiente expresión 10^-4?</p>
        
           <form action="post" name="radio8" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto8}/><label for="1">0.0001</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto8}/><label for="2" id="label">1.56</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto8}/><label for="3">0.001</label>
           
        </form>
        <div id="r8" className={claseclor8}>
        {mensaje8}
        </div>
        <div id="menu8">
            <ul className={ocultarBonton}>
          <li onClick={anterior}>Anterior</li>
          <li onClick={siguente}>Siguiente</li>
        </ul> 
      </div>
    </section>

    <section id="p9" className={p9}>
        <h2>PREGUNTA 9 de 9</h2>
        <p>¿Cuál es el resultado de la siguiente expresión 27x10^3?</p>
        
           <form action="post" name="radio9" className={props.desabilitarRadio}>
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto9}/><label for="1">2700</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto9}/><label for="2" id="label">270000</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto9}/><label for="3">27000</label>
           
        </form>
        <div id="r9" className={claseclor9} >
        {mensaje9}
        </div>
        <div id="menu9">
            <ul className={ocultarBonton}>
              <li onClick={anterior}>Anterior</li>
              <li onClick={definitiva}>Terminar</li>
         
           </ul> 
      </div>
    </section>


        </div>
    )
}

export default Preguntas;