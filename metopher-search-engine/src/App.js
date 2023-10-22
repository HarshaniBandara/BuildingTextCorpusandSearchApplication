import './App.css';
import FloatingWords from './components/floatingwords/FloatingWords';
import MenuBar from './components/menu_bar/MenuBar';
import PageSearch from './components/pageSearch/PageSearch';
import SideBar from './components/side_bar/SideBar';
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <FloatingWords/>
    
      <PageSearch></PageSearch>
    </div>
  );
}

export default App;
