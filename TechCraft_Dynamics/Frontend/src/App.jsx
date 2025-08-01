// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LayoutGeneral from "./layouts/LayoutGeneral";

// Páginas principales
import Login from "./pages/Login";
import AdminPrincipal from "./pages/admin/AdminPrincipal";
import SupervisorPrincipal from "./pages/supervisor/SupervisorPrincipal";
import StaffPrincipal from "./pages/staff/StaffPrincipal";

// Módulos del admin (compartidos)
import Ventas from "./pages/admin/ventas/Ventas";
import Compras from "./pages/admin/ventas/Compras";
import ReportesAdmin from "./pages/admin/reportes/Reportes";
import Proyeccion from "./pages/admin/reportes/Proyeccion";
import VentasReportes from "./pages/admin/reportes/Ventas";

// Módulos de usuarios
import Usuarios from "./pages/Usuarios";
import CrearUsuario from './components/usuarios/crearUsuario';
import EditarUsuario from './components/usuarios/editarUsuario';
import CambiarContrasena from './components/usuarios/CambiarContrasena';

// Proveedores
import Proveedores from "./pages/admin/Proveedores/Proveedores";
import ListarProveedores from "./components/Proveedores/ListarProveedores";
import CrearProveedor from "./components/Proveedores/CrearProveedor";
import ActualizarProveedor from "./components/Proveedores/ActualizarProveedor";
import PerfilUsuario from "./components/Perfil/Perfil";

// Componentes principales de Categorias 
import Categorias from "./components/Categorias/Categorias";
import ListarCategorias from "./components/Categorias/listarCategorias";
import Subcategoria from "./components/Categorias/Subcategorias";
// Componentes padres de Agregar y Editar para todos los formularios de los principales
import Agregar from "./components/Categorias/formsAdd/Agregar";
import Editar from "./components/Categorias/formsEdit/Editar";


// ✅ Wrapper para obtener el ID del usuario autenticado y pasarlo al componente PerfilUsuario
function PerfilConAuth() {
  const { user } = useAuth();
  if (!user) return <div>Cargando usuario...</div>;
  return <PerfilUsuario userId={user.id} />;
}

// ✅ Función para normalizar roles
function normalizeRole(role) {
  const normalizedRole = role?.toLowerCase();
  // Mapear "personal" a "staff" para consistencia
  return normalizedRole === 'personal' ? 'staff' : normalizedRole;
}

// ✅ Rutas protegidas con roles múltiples
function RutasProtegidas({ allowedRoles = [], children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Cargando...</div>;
  if (!user) return <Navigate to="/login" />;

  // ✅ Normalizar el rol ANTES de hacer cualquier verificación
  const normalizedUserRole = normalizeRole(user.rol);
  
  // ✅ Verificar si el rol del usuario está permitido
  if (allowedRoles.length > 0 && !allowedRoles.includes(normalizedUserRole)) {
    // ✅ Redirigir según el rol normalizado
    return <Navigate to={`/${normalizedUserRole}`} />;
  }

  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={<Login />} />

          {/* 🔓 Compartido para todos los roles */}
          <Route
            path="/admin/*"
            element={
              <RutasProtegidas allowedRoles={["admin", "supervisor", "staff"]}>
                <LayoutGeneral />
              </RutasProtegidas>
            }
          >
            <Route index element={<AdminPrincipal />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="compras" element={<Compras />} />
            <Route path="reportes" element={<ReportesAdmin />} />
            <Route path="reportes/proyeccion" element={<Proyeccion />} />
            <Route path="reportes/ventas" element={<VentasReportes />} />
            <Route path="proveedores" element={<Proveedores />} />
            <Route path="proveedores/registrar" element={<CrearProveedor />} />
            <Route path="proveedores/actualizar/:id" element={<ActualizarProveedor />} />
            <Route path="proveedores/listar" element={<ListarProveedores />} />
            <Route path="perfil" element={<PerfilConAuth />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="editarUsuario/:id" element={<EditarUsuario />} />
            <Route path="crearUsuario" element={<CrearUsuario />} />
            <Route path="cambiarContrasena/:id" element={<CambiarContrasena />} />

            {/* Rutas para los componentes principales */}
            <Route path="Categorias" element={<Categorias />} />
            <Route path="Categorias/Listado" element={<ListarCategorias />} />
            <Route path="Subcategorias" element={<Subcategoria />} />
            {/* Ruta para ir a la subcategoria deseada */}
            <Route path="Categoria/:idCategoria" element={<Subcategoria />} />
            {/* Ruta para elejir el formulario adecuado Agregar o Editar */}
            <Route path="agregar/:tipo" element={<Agregar />} />
            <Route path="editar/:tipo/:id" element={<Editar />}/>
          </Route>

          {/* Ruta inicial para supervisor */}
          <Route
            path="/supervisor/*"
            element={
              <RutasProtegidas allowedRoles={["supervisor"]}>
                <LayoutGeneral />
              </RutasProtegidas>
            }
          >
            <Route index element={<SupervisorPrincipal />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="compras" element={<Compras />} />
            <Route path="reportes" element={<ReportesAdmin />} />
            <Route path="reportes/proyeccion" element={<Proyeccion />} />
            <Route path="reportes/ventas" element={<VentasReportes />} />
            <Route path="proveedores" element={<Proveedores />} />
            <Route path="proveedores/registrar" element={<CrearProveedor />} />
            <Route path="proveedores/actualizar/:id" element={<ActualizarProveedor />} />
            <Route path="proveedores/listar" element={<ListarProveedores />} />
            <Route path="perfil" element={<PerfilConAuth />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="editarUsuario/:id" element={<EditarUsuario />} />
            <Route path="crearUsuario" element={<CrearUsuario />} />
            <Route path="cambiarContrasena/:id" element={<CambiarContrasena />} />
          </Route>

          {/* Ruta inicial para staff (incluye personal) */}
          <Route
            path="/staff/*"
            element={
              <RutasProtegidas allowedRoles={["staff"]}>
                <LayoutGeneral />
              </RutasProtegidas>
            }
          >
            <Route index element={<StaffPrincipal />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="compras" element={<Compras />} />
            <Route path="reportes" element={<ReportesAdmin />} />
            <Route path="reportes/proyeccion" element={<Proyeccion />} />
            <Route path="reportes/ventas" element={<VentasReportes />} />
            <Route path="proveedores" element={<Proveedores />} />
            <Route path="proveedores/registrar" element={<CrearProveedor />} />
            <Route path="proveedores/actualizar/:id" element={<ActualizarProveedor />} />
            <Route path="proveedores/listar" element={<ListarProveedores />} />
            <Route path="perfil" element={<PerfilConAuth />} />
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="editarUsuario/:id" element={<EditarUsuario />} />
            <Route path="crearUsuario" element={<CrearUsuario />} />
            <Route path="cambiarContrasena/:id" element={<CambiarContrasena />} />
          </Route>

          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}