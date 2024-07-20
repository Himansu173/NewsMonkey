import { Route, Routes } from "react-router-dom"
import General from "./General"
import Business from "./Business"
import Sports from "./Sports"
import Entertainment from "./Entertainment"
import Health from "./Health"
import Science from "./Science"
import Technology from "./Technology"

function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<General />} />
            <Route exact path="/general" element={<General />} />
            <Route exact path="/business" element={<Business />} />
            <Route exact path="/sports" element={<Sports />} />
            <Route exact path="/entertainment" element={<Entertainment />} />
            <Route exact path="/health" element={<Health />} />
            <Route exact path="/science" element={<Science />} />
            <Route exact path="/technology" element={<Technology />} />
        </Routes>
    )
}

export default AllRoutes