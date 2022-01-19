import {
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/Home';
import Control from './pages/Control';
import Login from './pages/Login';
import WhoWeAre from './pages/WhoWeAre';
import NewUse from './pages/NewUse';
import ResetPassword from './pages/ResetPassword';

export default function MainRotes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quemsomos" element={<WhoWeAre />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Control" element={<Control />} />
            <Route path="/novousuario" element={<NewUse /> } />
            <Route path="/recuperarSenha" element={<ResetPassword />} />
            <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
    );
}
