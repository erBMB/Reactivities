import { useEffect, useState } from 'react';
import './App.css'
import DuckItem from './DuckItem'
import { ducks } from './demo'
import axios from 'axios';
import { Header,List } from 'semantic-ui-react';

function App() {

  const[activites,setActivities]=useState([]);
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(()=>{
    axios.get('http://192.168.1.169:5000/api/activities')
      .then(response=>{
        console.log(response);
        setActivities(response.data)
      })
  },[])


  useEffect(()=>{
    axios.get('http://192.168.1.169:5000/api/activities/datetime')
      .then(response=>{
        console.log(response);
        setDateTime(response.data.dateTime);
      })
  },[])

  return (
    <div>
   <Header as='h2' icon='users' content='Reactivities'/>


   <div>data e {dateTime}</div>

   {
      ducks.map(duck=>(
       <DuckItem key={duck.name} duck={duck}/>
          
      ))}


    
<List>
  {activites.map((activity:any)=>(
    <ul>
      <List.Item key={activity.id}>
        {activity.title}
        <ul>
          <li>{activity.id}</li>
          <li>{activity.date}</li>
          <li>{activity.description}</li>
          <li>{activity.category}</li>
          <li>{activity.city}</li>
          <li>{activity.venue}</li>
        </ul>
      </List.Item>
    </ul>
  ))}
</List>

    </div>
  )
}

export default App