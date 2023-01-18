using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Project2.Models;
using ORM;
namespace Project2.Data
{
    public class TheaterContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public TheaterContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }
        // items
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Band> Bands { get; set; }
        public DbSet<BandMember> BandMembers { get; set; }
        public DbSet<Show> Shows { get; set; }
    }
}