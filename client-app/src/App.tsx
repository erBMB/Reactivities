import { useEffect, useState } from 'react';
import './App.css'
import DuckItem from './DuckItem'
import { ducks } from './demo'
import axios from 'axios';

function App() {

  const[activites,setActivities]=useState([]);

  useEffect(()=>{
    axios.get('http://192.168.1.169:5000/api/activities')
      .then(response=>{
        setActivities(response.data)
      })
  },[])

  return (
    <div>
    <h1>Reactivities</h1>
    {
      ducks.map(duck=>(
       <DuckItem key={duck.name} duck={duck}/>
          
      ))}
    
<ul>
  {activites.map((activity:any)=>(
    <ul>
      <li key={activity.id}>
        {activity.title}
        <ul>
          <li>{activity.id}</li>
          <li>{activity.date}</li>
          <li>{activity.description}</li>
          <li>{activity.category}</li>
          <li>{activity.city}</li>
          <li>{activity.venue}</li>
        </ul>
      </li>
    </ul>
  ))}
</ul>

    </div>
  )
}

export default App
