import React from 'react'
const Login=(props)=>{
var nombre, apellido;
   const capturarNombres=(evento)=>{
   nombre=evento.target.value
   props.setnombres(nombre)
   }

   const capturarApellidos=(evento)=>{
    apellido=evento.target.value
    props.setapellidos(apellido)

   }

const capturarDatos=(evento)=>{
    evento.preventDefault();
   if(props.nombres==='' || props.apellidos===''){
    alert('LLene todo los campos.....');
   }else{
     let datosP=props.nombres+' '+props.apellidos;
   
    props.setdatosPersonales(datosP);
   }
}
    return(
    <div id="login">
        <form  id="formulario" onSubmit={capturarDatos}>
            <legend>INGRESE LOS DATOS</legend>
            <label for="name">Nombres</label>
            <input type="text" name="name" id="name" placeholder="Nombres" onChange={capturarNombres} data-validation="required"/><br/>
            <label for="ape">Apellidos</label>
            <input type="text" name="ape" id="ape" placeholder="Apellidos" onChange={capturarApellidos} data-validation="required"/><br/><br/>
    
            <input type="submit" value="Registrarse" id="registro"/>
        </form>
    
    </div>

    )
}

export default Login;