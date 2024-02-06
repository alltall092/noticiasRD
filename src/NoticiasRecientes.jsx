import { useState,useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import Footer from './Footer';
import './noticiasrecientes.css';
const NoticiasRecientes=()=>{
const [datos,setDatos]=useState([]);
useEffect(()=>{

axios.get('https://noticiasnodejs2.onrender.com/api/v1/noticiasrecientes').then(res=>setDatos(res.data));



},[])
console.log(datos);
return(<>
<Header/>
<div className="container recientes">
<h2>Noticias Recientes</h2>
<hr/>

{datos.map(x=>(x.map((t,index)=>(
<div className="row">
<div className="col-md-6 col-ms-6">

<img src={t[index].url} height="300" width="550" className="news-image"
            alt="News Image"/>

</div>
<div className="col-md-6 col-ms-6">
<h4 className="news-title">{t[index].titulo}</h4>
<p  className="news-content">{t[index].contenido}</p>
</div>



</div>))))}

</div>
<br/>
<Footer/>
</>)

}
export default NoticiasRecientes;