import { Grid, GridColumn} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "./details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";


interface Props{
    activities:Activity[];
    selectedActivity:Activity|undefined;
    selectActivity:(id:string)=>void;
    cancelSelectActivity:()=>void;
    editMode:boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;
    createOrEdit:(activity:Activity)=>void;
    datetime:string;
    deleteActivity:(id:string)=>void;

}

export default function ActivityDashboard({activities,selectActivity,selectedActivity,cancelSelectActivity,editMode,openForm,closeForm,createOrEdit,datetime,deleteActivity}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} datetime={datetime}/>}
            </GridColumn>
        </Grid>
    )
}