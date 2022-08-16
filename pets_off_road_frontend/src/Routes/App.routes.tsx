import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "../Screens/HomeScreen";
import { ProfileVonlunteer } from "../Screens/ProfileVonlunteer";
// import { Profile } from "../Screens/Profile";



export function AppRoutes() {
   return(
       <Routes>
            <Route element={<HomeScreen />} path="/home" />
            <Route element={<ProfileVonlunteer />} path="/profile" />
       </Routes>
   )
}