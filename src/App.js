import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import './components/Content.scss';

function App() {
  return (
    <div className='app-container'>
      <Navbar></Navbar>
      <Content></Content>
    </div>
  );
}

export default App;
