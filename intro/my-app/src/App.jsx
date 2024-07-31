import './App.css';
import Button from './Components/Button';
import Avatar from './Components/Avatar';

function App() {

  function handleButtonClick(){
    alert('something got clicked')
  }
  const userData = [
    {id : 1,name : "Mayank Raj" , image : "https://avatars.githubusercontent.com/u/87657007?v=4"},
    {id : 2,name:"Ayushi Soni" , image : "https://avatars.githubusercontent.com/u/112810259?v=4" }
  ]
  const userAvatars = userData.map(user=> <Avatar key = {user.id} name = {user.name} image = {user.image} />)
  return (
    <div className="App">
      <h1> Hi There </h1>
      {userAvatars}
      <Button text="GitHub"
        handle = {handleButtonClick}
      />
    </div>
  );
}

export default App;
