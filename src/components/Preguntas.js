import {React,useState} from 'react'
const Preguntas=(props)=>{
   let p1,p2,p3,p4,p5,p6,p7,p8,p9,ocultarBonton;
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
  }
 
   //para la pregunta 1 
 const [punto1, setpunto1] = useState(0);
 
 const leerpunto1=(e)=>{
  if(e.target.value==='1.44'){
    setpunto1(0.5);

  }else{
    setpunto1(0);
  }
 }

   //para la pregunta 2
   const [punto2, setpunto2] = useState(0);
 
   const leerpunto2=(e)=>{
    if(e.target.value==='4'){
      setpunto2(0.5);
  
    }else{
      setpunto2(0);
    }
   }

   
   //parala pregunta 3 
   const [punto3, setpunto3] = useState(0);
 
   const leerpunto3=(e)=>{
    if(e.target.value==='3'){
      setpunto3(0.5);
     
    }else{
      setpunto3(0);
      
    }
   }

    //parala pregunta 4 
    const [punto4, setpunto4] = useState(0);
 
    const leerpunto4=(e)=>{
     if(e.target.value==='7'){
       setpunto4(0.5);
     
     }else{
       setpunto4(0);
     }
    }

     //parala pregunta 5 
     const [punto5, setpunto5] = useState(0);
 
     const leerpunto5=(e)=>{
      if(e.target.value==='2'){
        setpunto5(0.5);
       
      }else{
        setpunto5(0);
      }
     }

      //parala pregunta 6 
    const [punto6, setpunto6] = useState(0);
 
    const leerpunto6=(e)=>{
     if(e.target.value==='2'){
       setpunto6(0.5);
      
     }else{
       setpunto6(0);
     }
    }

     //parala pregunta 7
     const [punto7, setpunto7] = useState(0);
 
     const leerpunto7=(e)=>{
      if(e.target.value==='1'){
        setpunto7(0.5);
       
      }else{
        setpunto7(0);
      }
     }

      //parala pregunta 8 
    const [punto8, setpunto8] = useState(0);
 
    const leerpunto8=(e)=>{
     if(e.target.value==='1'){
       setpunto8(0.5);
       
     }else{
       setpunto8(0);
     }
    }

     //parala pregunta 9
     const [punto9, setpunto9] = useState(0);
 
     const leerpunto9=(e)=>{
      if(e.target.value==='3'){
        setpunto9(1);
        
      }else{
        setpunto9(0);
      }
     }

   
     // metodo que finaliza el tes y envia la definitiva 

     const definitiva=(e)=>{
      e.preventDefault();
      props.setcontador(props.contador+1);
      props.setnotadefinitiva(punto1+punto2+punto3+punto4+punto5+punto6+punto7+punto8+punto9);

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

    return(
        <div id="container">
          <section id="p" className={p1}>
            <h2>PREGUNTA 1 de 9</h2>
             <p> Cual es la √2 ?</p>
        
            <form action="post" name="radio">
            <input type="radio" name="opcion" id="opcion1" value="2.5"  onChange={leerpunto1}/><label for="1">2.5</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="1.44" onChange={leerpunto1}/><label for="2" id="label">1.44</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="1"    onChange={leerpunto1}/><label for="3">1</label>
           
        </form>
        <div id="r1">

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
        
           <form action="post" name="radio2">
            <input type="radio" name="opcion" id="opcion1" value="4" onChange={leerpunto2}/><label for="1">4</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="7" onChange={leerpunto2}/><label for="2" id="label">7</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="8" onChange={leerpunto2}/><label for="3">8</label>
           
        </form>
        <div id="r2">

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
        
           <form action="post" name="radio3">
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto3}/><label for="1">(-1,0)u(0,10)</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto3}/><label for="2" id="label">|R -{-1}</label> <br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto3}/><label for="3">(-1,∞)</label>
           
        </form>
        <div id="r3">

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
        
           <form action="post" name="radio4">
            <input type="radio" name="opcion" id="opcion1" value="0"  onChange={leerpunto4}/><label for="1">0</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="7"  onChange={leerpunto4}/><label for="2" id="label">7</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="10" onChange={leerpunto4}/><label for="3">10</label>
           
        </form>
        <div id="r4">

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
        
           <form action="post" name="radio5">
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto5}/><label for="1">Falso</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto5}/><label for="2" id="label">Verdadero</label><br/><br/>
            
        </form>
        <div id="r5">

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
        
           <form action="post" name="radio6">
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto6}/><label for="1">7</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto6}/><label for="2" id="label">|R</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto6}/><label for="3">[2,9]</label>
           
        </form>
        <div id="r6">

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
        
           <form action="post" name="radio7">
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto7}/><label for="1">10000000</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto7}/><label for="2" id="label">1000000</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto7}/><label for="3">20000000</label>
           
        </form>
        <div id="r7">

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
        
           <form action="post" name="radio8">
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto8}/><label for="1">0.0001</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto8}/><label for="2" id="label">1.56</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto8}/><label for="3">0.001</label>
           
        </form>
        <div id="r8">

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
        
           <form action="post" name="radio9">
            <input type="radio" name="opcion" id="opcion1" value="1" onChange={leerpunto9}/><label for="1">2700</label><br/><br/>
            <input type="radio" name="opcion" id="opcion2" value="2" onChange={leerpunto9}/><label for="2" id="label">270000</label><br/><br/>
            <input type="radio" name="opcion" id="opcion3" value="3" onChange={leerpunto9}/><label for="3">27000</label>
           
        </form>
        <div id="r9">

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