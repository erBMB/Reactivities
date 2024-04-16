import { Fragment, useEffect, useState } from 'react';
import DuckItem from '../../DuckItem'
import { ducks } from '../../demo'
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import{v4 as uuid}from 'uuid'; 

function App() {

  const[activites,setActivities]=useState<Activity[]>([]);
  const [dateTime, setDateTime] = useState<string>('');
  const [selectedActivity,setSelectedActivity]=useState<Activity|undefined>(undefined);
  const [editMode,setEditMode]=useState(false);

  useEffect(()=>{
    axios.get<Activity[]>('http://192.168.1.169:5000/api/activities')
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


function handleSelectActivity(id:string){
  setSelectedActivity(activites.find(x=>x.id===id))
}

function handleCancelSelectActiviy(){
  setSelectedActivity(undefined);
}

function handleFormOpen(id?:string){
  id ? handleSelectActivity(id):handleCancelSelectActiviy();
  setEditMode(true);
}

function handleFormClose(){
  setEditMode(false);
}

function handleCreateOrEditActivity(activity:Activity){
  activity.id? setActivities([...activites.filter(x=>x.id!==activity.id),activity])
  :setActivities([...activites,{...activity,id:uuid(),date:dateTime}]);
  setEditMode(false);
  selectedActivity(activity);
}

 function handleDeleteActivity(id:string){
    setActivities([...activites.filter(x=>x.id!==id)])
  }

  return (
    <Fragment>
   <NavBar openForm={handleFormOpen}/>

    <Container style={{marginTop:'7em'}}>
                <div>data e {dateTime}</div>

              {
                ducks.map(duck=>(
                  <DuckItem key={duck.name} duck={duck}/>
                    
                ))}

            <ActivityDashboard 
            activities={activites}
            selectedActivity={selectedActivity}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActiviy}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditActivity}
            datetime={dateTime}
            deleteActivity={handleDeleteActivity}
            />

    </Container>

    </Fragment>
  )
}

export default App