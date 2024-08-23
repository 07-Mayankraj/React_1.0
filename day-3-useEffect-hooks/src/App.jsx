import './App.css'
import Counter from './Components/Counter'
import Profile from './Components/Profile'





function App() {

  const user = {
    name : 'AYushi',
    image: 'https://avatars.githubusercontent.com/u/112810259?v=4',
    skills : ['js' , 'react','node']

  }

  return (
    <div className='App'>
     {/* <Counter/> */}
     <Profile image={user.image} name={user.name} skills={user.skills} />
    </div>
  )
}

export default App
