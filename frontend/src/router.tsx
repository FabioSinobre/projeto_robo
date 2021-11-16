import {
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/Home';
import Control from './pages/Control';
import Login from './pages/Login';
import WhoWeAre from './pages/WhoWeAre';

export default function MainRotes() {
    return (
        <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/Control" element={<Control/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/WhoWeAre" element={<WhoWeAre/>} />

                <Route path="*" element={<h1>Página não Encontrada</h1>} />
        </Routes>
    );
}
 