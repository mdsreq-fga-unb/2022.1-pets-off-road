import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../Screens/HomeScreen";
import { AnimalForm } from "../Screens/AnimalForm";
import { ProfileVonlunteer } from "../Screens/ProfileVonlunteer";
// import { Profile } from "../Screens/Profile";



export function AppRoutes() {
   return(
       <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<ProfileVonlunteer />} path="/profile" />
            <Route element={<AnimalForm />} path="/animalform" />
       </Routes>
   )
}