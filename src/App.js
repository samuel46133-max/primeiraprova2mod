import logo from './logo.svg';
import './App.css';
import NovaPage from './nova/components/NovaPage';
import FrutasPage from './frutas/FrutasPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/new">Nova Fruta</Link>
          <Link to="/new">Novo Fruta</Link>
          <Link to="/new">Todas as Frutas</Link>
        </div>

        <Routes>
          <Route path="/" element={<navigate to="/new" replace/>}/>
          <Route path="/new" element={<NovaPage/>}/>
          <Route path="/all" element={<FrutasPage/>}/>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
