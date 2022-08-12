
import { Route, Routes } from "react-router-dom";
import { Cadastro } from "../Screens/Cadastro";
import { HomeScreen } from "../Screens/HomeScreen";
import { Login } from "../Screens/Login";
import { Profile } from "../Screens/Profile";



export function Rts() {
   return(
       <Routes>
            <Route element= { <Login /> }  path="/"  />
            <Route element={<Cadastro/> }  path="/cadastro" />
            <Route element={<HomeScreen />} path="/home" />
            <Route element={<Profile/>} path="/profile" />
       </Routes>
   )
}