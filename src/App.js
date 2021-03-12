import React,{useState, useEffect} from 'react' 
import './App.css';
import Navigation from './components/Navigation'
import Search from './components/Search'
import logo from './img/logo.png'
import github from './img/github.png'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Card from 'react-bootstrap';

function App() {

  const allBreedsLink = 'https://dog.ceo/api/breeds/list/all'
    const [breeds,setBreeds] = useState([]);
    const getBreeds = async ()=>{
        const response = await fetch(allBreedsLink)
        const data = await response.json();
        setBreeds(data.message)
        console.log(data.message)
    }
    useEffect(()=>{
      getBreeds();
    },[])



  return (
    <body className="App">

    <Navigation
    image = {logo}
    github= {github}></Navigation>
    <Search 
    breeds={breeds} />
    </body>

  );
}

export default App;
