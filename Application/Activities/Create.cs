using MediatR;
using Domain;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command:IRequest
        {
            public Activity Activity { get; set;}
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
              public Handler(DataContext context)
        {
            _context = context;
            
        }
            public async Task Handle(Command request, CancellationToken cancellationToken) //change to Task<Unit> 
            {
                _context.Activities.Add(request.Activity);
                await _context.SaveChangesAsync();  
              // return Unit.Value;
            }
        }

      
    }
}