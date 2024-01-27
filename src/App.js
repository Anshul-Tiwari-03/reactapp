import './App.css';
import Home from './Pages/Home';
import ReactRouter from './ReactRouterV6/router';
import ContextApi from './components/ContextApi/contextApi';
import HeadingNavbar from './components/HeadingNavbar';
import Navbar from './components/Navbar';
import Condition from './components/condition';
import FormComponent from './components/controlledComponents/form';
import Maps_Loops from './components/maps_loops';
import UncontrolledFormComponent from './components/uncontrolledComponents/form';
import DropDown from './questions/countrycitydropdown';


function App() {
  return (
    <>
    
      <Navbar />
      <HeadingNavbar />


      <ReactRouter/>
      <Home/>
      <br></br>
      <Maps_Loops/>
      <Condition/>
      <FormComponent/>
      <UncontrolledFormComponent/>
      <ContextApi />
      <div className='container'>
        <br></br>
        <hr></hr>
        <br></br>
        <h2># <u>Strict mode Uses</u></h2>
        <br></br>
        <br></br>
        <div className='row'>
          <div className='col-sm'>
          <img src={process.env.PUBLIC_URL+"strictmode.png"} style={{width:"100%",height:"100%"}}/>
        
          </div>
          <div className='col-sm'>
          <img src={process.env.PUBLIC_URL+"strictmode2.png"} style={{width:"100%",height:"100%"}}/>
        
          </div>

        </div>
      </div>
      <div className='container'>
        <br></br>
        <img src={process.env.PUBLIC_URL+"whatnext.png"}/>
      </div>
      <div className='container'>
        <DropDown/>
      </div>
      <div style={{ height: "300px" }}></div>
    </>
  );
}

export default App;
