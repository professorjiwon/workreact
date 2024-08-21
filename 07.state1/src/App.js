import './App.css';
import Counter from './component/Counter';
import Light_on_off from './component/Light-on-off';
import Member_enroll from './component/Member-enroll';

function App() {
  return (
    <div className="App">
      <Counter /><hr/>
      <Light_on_off /><hr/>
      <Member_enroll />
    </div>
  );
}

export default App;
