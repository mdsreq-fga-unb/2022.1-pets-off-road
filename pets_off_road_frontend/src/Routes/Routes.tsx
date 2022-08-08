
import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Screens/Cadastro";
import { Login } from "../Screens/Login";



export function Rts() {
   return(
       <Routes>
            <Route element= { <Login /> }  path="/"  />
            <Route element ={<Cadastro/> }  path="/cadastro" />
       </Routes>
   )
}