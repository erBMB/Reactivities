using Domain;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController:BaseApiController
    {


    [HttpGet]//api/activities
    public async Task<ActionResult<List<Activity>>>GetActivities(CancellationToken ct) {
        return await Mediator.Send(new List.Query(),ct); 
    }

    [HttpGet("{id}")]//api/activities/dfsaf
    public async Task<ActionResult<Activity>> GetActivity(Guid id) {
        return await Mediator.Send(new Details.Query{Id=id});
    }



     [HttpGet("GetCityActivities")]
     public async Task<ActionResult<List<Activity>>> GetCityActivities() 
     {
            return await Mediator.Send(new EditedList.Query()); 

     }

      [HttpGet("GetDateActivities")]
     public async Task<ActionResult<List<Activity>>> GetDateActivities() 
     {
            return await Mediator.Send(new EditedDateList.Query()); 

     }


    [HttpPost]
    public async Task<IActionResult> CreateActivity(Activity activity) 
    {
        await Mediator.Send(new Create.Command{Activity=activity});
        return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult>EditActivity(Guid id, Activity activity)
    {
        activity.Id=id;
        await Mediator.Send(new Edit.Command{Activity=activity});
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult>DeleteActivity(Guid id){

        await Mediator.Send(new Delete.Command{Id=id});
        return Ok();
    }


 [HttpGet("datetime")]
    public IActionResult GetDateTime()
    {
        // Get the current date and time
        DateTime currentDateTime = DateTime.Now;

         string formattedDateTime = currentDateTime.ToString("yyyy_MM_dd@HH_mm_ss");

        // Return the current date and time as a JSON response
        return Ok(new { DateTime = formattedDateTime });
    }

    }
}