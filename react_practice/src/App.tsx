import ListGroup from './components/ListGroup'
import './App.css'
 import Message from './Message'




 function App() {
  

  return (

   <div> <ListGroup
  heading="My List"
  items={["Lahore", "Dehli", "Ahmedabad", "Karachi", "Mumbai"]}
  onSelect={(item, i) => console.log("Selected:", item, i)}
/>
<Message/></div>
  )
}

export default App
