import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <img src={logo} className="App-logo" alt="logo" />
      </section>
      <Footer />
    </div>
  );
}

export default App;
