import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

/*
// 1. 변수에 담긴값을 Body로 넘겨주기

function App() {
  const addr = "서초구 강남대로";
  const name = "이고잉";
  return (
    <div className="App">
      <Header />
      <section>
        <Body address={addr} user={name} />
      </section>
      <Footer />
    </div>
  );
}
*/

// 2. 객체형태로 넘기기
function App() {
  const userInfo = {
    name : "이고잉",
    addr : "서초구 강남대로",
    likeList : ["캐릭터","만화","웹툰"]
  }
  return (
    <div className="App">
      <Header />
      <section>
        {/* <Body userInfo={userInfo} />   // 2.1 */}
        {/*  <Body {...userInfo} />        // 2.2 */}
        <Body />                       {/* // 3.  */}
      </section>
      <Footer />
    </div>
  );
}
export default App;
