using Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ActivitiesController:BaseApiController
    {
        private readonly DataContext _context;
      
        public ActivitiesController(DataContext context)
        {
            _context = context;
            
        }

    [HttpGet]//api/activities
    public async Task<ActionResult<List<Activity>>>GetActivities() {
        return await _context.Activities.ToListAsync(); 
    }

    [HttpGet("{id}")]//api/activities/dfsaf
    public async Task<ActionResult<Activity>> GetActivity(Guid id) {
        return await _context.Activities.FindAsync(id);
    }
 [HttpGet("datetime")]
    public IActionResult GetDateTime()
    {
        // Get the current date and time
        DateTime currentDateTime = DateTime.Now;

        // Return the current date and time as a JSON response
        return Ok(new { DateTime = currentDateTime });
    }

    }
}