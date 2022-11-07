// ordem de importação: react, componentes, estáticos
import Welcome from './components/Welcome';

import './App.css'

function App() {

  return (
    <div className="App">
  <h1>Quiz de programação</h1>     
    <Welcome />   
    </div>
  );
}

export default App;
