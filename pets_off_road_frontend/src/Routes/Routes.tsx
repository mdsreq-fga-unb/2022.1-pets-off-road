
import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Screens/Cadastro";
import { Login } from "../Screens/Login";
import { ProfileVonlunteer } from "../Screens/ProfileVonlunteer";
import { ProfileProject } from "../Screens/ProfileProject";

export function Rts() {
   return(
       <Routes>
            <Route element={ <Login /> }  path = "/"  />
            <Route element={ <Cadastro/> }  path = "/cadastro" />
            <Route element={ <ProfileVonlunteer /> } path = "/profile" />
            <Route element={ <ProfileProject /> } path = "/project/:id" />
       </Routes>
   )
}