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

}

export default function ActivityDashboard({activities,selectActivity,selectedActivity,cancelSelectActivity}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <GridColumn width='6'>
                {selectedActivity &&
                <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
                <ActivityForm/>
            </GridColumn>
        </Grid>
    )
}