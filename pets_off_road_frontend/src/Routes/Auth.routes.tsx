
import { Route, Routes } from "react-router-dom";
import { AnimalForm } from "../Screens/AnimalForm";
import { Cadastro } from "../Screens/Cadastro";
import { HomeScreen } from "../Screens/HomeScreen";
import { Login } from "../Screens/Login";
import { ProfileVonlunteer } from "../Screens/ProfileVonlunteer";
// import { Profile } from "../Screens/Profile";



export function Rts() {
   return(
       <Routes>
            <Route element= { <Login /> }  path="/"  />
            <Route element={<Cadastro/> }  path="/cadastro" />
       </Routes>
   )
}