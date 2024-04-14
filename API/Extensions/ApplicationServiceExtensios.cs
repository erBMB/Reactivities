using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;
using Application.Activities;

namespace API.Extensions
{
    public static class ApplicationServiceExtensios
    {
        public static IServiceCollection AddAplicationServices(this IServiceCollection services,IConfiguration config){
            services.AddEndpointsApiExplorer();
services.AddSwaggerGen();
services.AddDbContext<DataContext>(opt=>{
    opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
});
services.AddCors(opt=>
    opt.AddPolicy("CorsPolicy", policy=>{
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://192.168.1.169:3000"); 
    })
);

services.AddMediatR(cfg=>cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
services.AddAutoMapper(typeof(MappingProfiles).Assembly);
return services;
        }   
    }
}