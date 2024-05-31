import './App.css';
import profilePhoto from './@me.jpg';

function App() {
  return (
   <div class="app">
    <img class="profile" src={profilePhoto}></img>
    <h1>Joana's website</h1>
    <p>
      For me creativity is not a talent it is my passion
    </p>
   </div>
  );
}

export default App;
