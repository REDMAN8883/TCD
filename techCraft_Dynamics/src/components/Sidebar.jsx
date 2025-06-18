import { Link } from 'react-router-dom';
import '../css/Sidebar.css'; 

export default function Sidebar({isOpen}){
    return(
        <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
            <div className="sidebar-content">
                <div className="profile-section text-center">
                    <div className="circle-placeholder"></div>
                    <h6 className="mt-2">ROL</h6>
                </div>

                <ul className="nav flex-colum mt-3">
                    <li className="nav-item">
                        <Link className="nav-link" to="/perfil">Perfil</Link>
                    </li>
                    {/* <li className="nav-item"><Link className="nav-link" to="">Ventas</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Usuarios</Link></li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/Categorias">Categorías</Link>
                    </li>
                    {/* <li className="nav-item"><Link className="nav-link" to="">Proveedores</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Reportes</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Cerrar sesión</Link></li> */}
                </ul>

                <div className="branding mt-auto text-center">
                    <div className="logo-placeholder mt-3 mb-2"></div>
                    <p><strong>TECHCRAFT DYNAMICS</strong></p>
                </div>
            </div>
        </div>
    );
}



