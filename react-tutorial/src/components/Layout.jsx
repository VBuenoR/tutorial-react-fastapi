import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Layout.css'; // Estilos personalizados

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <header className="layout-header">
        <h1 onClick={() => navigate('/')} className="layout-logo">MyApp</h1>
        {user && (
          <button onClick={logout} className="layout-logout">
            Sair
          </button>
        )}
      </header>

      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}
