import Home from './Home';
import Navbar from './Navbr';

function App() {

  const title = 'Welcome to C.S.E blog';
  const likes = 50;
  const link = "https://www.google.co.uk/"

  return (
    <div className="App">
      <Navbar/>  {/*Using created component */}
      {/*<h1> {title} </h1>*/}
        <div className="content">  {/*Short cut is div.content * (for variable use, etc.)*/}

          <Home/>
        
          {/*Curly braces can use for many things as below 
          <p>Liked {likes} times.</p>
          <p>Here generates a random number : {Math.random()}</p>
          <a href={link}>Click to visit google.</a>
        */}
        </div>  
    </div>
  );
}

export default App;
