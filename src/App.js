import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App container py-3">
      <Navbar />

      <AppRouter />
    </div>
  );
}

export default App;
