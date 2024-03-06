import Sidebar from "./components/Cart-Item/cart-item";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";
import CartbBlock from "./components/cart-block/Cart-block";
import ProfileStrength from "./components/react/React";


function App() {
  return (
    <div className="App">
       {/* <Sidebar /> */}
      {/* { / *<ProfileStrength /> */} 
      <Header />
      <Main />
      <Section />
      <CartbBlock />
    </div>
  );
}

export default App;
