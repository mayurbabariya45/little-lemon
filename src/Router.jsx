import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ReservationConfirmation from "./pages/ReservationConfirmation";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/reservation-confirmation" element={<ReservationConfirmation />} />
            </Route>
        </Routes>
    )
}

export default Router
