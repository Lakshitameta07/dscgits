import './App.css';
import Navbar from "./Components/Nav/Navbar";
import Body from "./Components/Body/Body"
import Team from "./Components/Team/Team"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Body/>
    <Team/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
