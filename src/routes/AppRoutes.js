import {Route, Routes} from "react-router-dom";
import {ROUTE_HOME} from "../constants/routes";
import Home from "../pages/Home";
import {HomeProvider} from "../contexts/pages/HomeProvider";

export default function AppRoutes(){
    return <Routes>
        <Route path={ROUTE_HOME} element={<HomeProvider><Home/></HomeProvider>}/>
        {/*you can add a new route in here*/}

    </Routes>
}