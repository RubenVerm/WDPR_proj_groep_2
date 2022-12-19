using Microsoft.EntityFrameworkCore;
namespace ORM
{
  public class TheaterContext : DbContext
    {
        public TheaterContext(DbContextOptions<TheaterContext> options)
            : base(options)
        {
        }

        public DbSet<Hall> Halls { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Band> Bands { get; set; }
        public DbSet<BandMember> BandMembers { get; set; }
        public DbSet<Show> Shows { get; set; }
    }
}