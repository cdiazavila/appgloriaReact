import React from 'react'
const PanelBoton =(props)=>{

      const clickBoton1=()=>{
          props.setcontador(1);
      }
      const clickBoton2=()=>{
        props.setcontador(2);
    }
    const clickBoton3=()=>{
        props.setcontador(3);
    }
    const clickBoton4=()=>{
        props.setcontador(4);
    }
    const clickBoton5=()=>{
        props.setcontador(5);
    }
    const clickBoton6=()=>{
        props.setcontador(6);
    }
    
    const clickBoton7=()=>{
        props.setcontador(7); 
    }
    const clickBoton8=()=>{
        props.setcontador(8);   
    }
    const clickBoton9=()=>{
        props.setcontador(9);   
    }

    const clickTerminar=()=>{
        props.setcontador(10);    
    }
  let claseOcultar=`panelBoton ${props.ocultarPanel}`
    return(
        <div className={claseOcultar}>
         <div className="encabezado">
           <h2>NAVEGADOR DE PREGUNTAS</h2>
         </div>
        <div >
         <div className="boton1">
             <div className="enc1">
                
             </div>
         <button type="button" onClick={clickBoton1}>1</button>
         </div>
         <div className="boton2">
             <div className="enc2">
                
             </div>
             <button type="button" id="boton2" onClick={clickBoton2}>2</button>
         </div>
        
        
         <div className="boton3">
             <div className="enc3">
                
             </div>
             <button type="button" id="boton3" onClick={clickBoton3}>3 </button>
         </div>

         <div className="boton1">
             <div className="enc1">
                
             </div>
             <button type="button" id="boton4" onClick={clickBoton4}>4</button>
         </div>
        
       
         <div className="boton2">
             <div className="enc2">
                
             </div>
             <button type="button" id="boton5" onClick={clickBoton5}>5</button>
         </div>


         <div className="boton3">
             <div className="enc3">
                
             </div>
             <button type="button" id="boton6" onClick={clickBoton6}>6</button>
         </div>
       
        
         <div className="boton1">
             <div className="enc1">
                
             </div>
             <button type="button" id="boton7" onClick={clickBoton7}>7</button>
         </div>
        

         <div className="boton2">
             <div className="enc2">
                
             </div>
             <button type="button" id="boton8" onClick={clickBoton8}>8</button>
         </div>
        
         <div className="boton3">
             <div className="enc3">
                
             </div>
             <button type="button" id="boton9" onClick={clickBoton9}>9</button>
         </div>
       
         <div className="pie">
            <button type="button" onClick={clickTerminar}>Terminar</button>
         </div>
       </div>
       </div>
    )
}
export default PanelBoton;