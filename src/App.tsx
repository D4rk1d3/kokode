import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
