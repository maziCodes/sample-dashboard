import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import MainContainer from './components/mainContainer/mainContaniner';


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MainContainer />

      </div>
    </div>
  );
}

export default App;
