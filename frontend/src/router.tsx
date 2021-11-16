import {
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/Home';
import Control from './pages/Control';
import Login from './pages/Login';
import WhoWeAre from './pages/WhoWeAre';
import NewUse from './pages/NewUse';

export default function MainRotes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Control" element={<Control />} />
            <Route path="/NewUse" element={<NewUse /> } />
            <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
    );
}
