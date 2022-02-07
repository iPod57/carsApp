
import { Routes, Route, Navigate } from "react-router-dom";
import {BuyScreen} from "../components/buy/BuyScreen";
import { MainScreen } from "../components/main/MainScreen";
import { Navbar } from "../components/main/Navbar";
import { SellScreen } from "../components/main/SellScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div >
            <Routes>
                <Route path="/main" element={<MainScreen />} />
                <Route path="/buy" element={<BuyScreen />}/>
                <Route path="/sell" element={<SellScreen />}/>
                <Route path="/car/:carId" element={<BuyScreen />}/>

                <Route path="/*" element={<Navigate to='/main'/>} />
                
            </Routes>
            </div>
        </>
    )
}
