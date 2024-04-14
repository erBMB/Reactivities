using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class EditedDateList
    {
       public class Query:IRequest<List<Activity>> {}
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context){
                _context = context;
            }
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                // Define the date range (April 14, 2024)
            DateTime startDate = new DateTime(2024, 4, 14);
            DateTime endDate = startDate.AddDays(1); // The next day

            // Retrieve activities from the context that fall within the specified date range
            var activities = await _context.Activities
                .Where(activity => activity.Date >= startDate && activity.Date < endDate)
                .ToListAsync();

              return  activities.ToList();
            }
        }
    }
}