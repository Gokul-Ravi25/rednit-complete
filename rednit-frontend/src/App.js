import "./App.css"
import Header from './Header';
import Cards from './Cards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
    
     {/*Header*/}
     <Header />
     {/*Middle */}
     <Cards/>
     {/*SwipeButtons*/}
     <SwipeButtons/>

    </div>
  );
}


export default App;
