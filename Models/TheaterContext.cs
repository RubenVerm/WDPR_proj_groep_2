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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);
    modelBuilder.Entity<Show>()
    .HasOne(s => s.Band)
    .WithMany(b => b.Shows)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.BandId);

    modelBuilder.Entity<Show>()
    .HasOne(s => s.Hall)
    .WithMany(h => h.Shows)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.HallId);

    modelBuilder.Entity<Show>()
    .HasOne(s => s.Room)
    .WithMany(r => r.Shows)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.RoomId);
    
    modelBuilder.Entity<Order>()
    .HasOne(s => s.Customer)
    .WithMany(b => b.Orders)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.CustomerId);

    modelBuilder.Entity<Ticket>()
    .HasOne(s => s.Customer)
    .WithMany(b => b.Tickets)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.CustomerId);

    modelBuilder.Entity<Ticket>()
    .HasOne(s => s.Hall)
    .WithMany(h => h.Tickets)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.HallId);

    modelBuilder.Entity<Ticket>()
    .HasOne(s => s.Room)
    .WithMany(r => r.Tickets)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.RoomId);

    modelBuilder.Entity<Ticket>()
    .HasOne(s => s.Show)
    .WithMany(r => r.Tickets)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.ShowId);

    modelBuilder.Entity<Ticket>()
    .HasOne(s => s.Order)
    .WithMany(r => r.Tickets)
    .OnDelete(DeleteBehavior.ClientNoAction)
    .HasForeignKey(s => s.OrderId);

    modelBuilder.Entity<BandMember>()
    .HasOne(s => s.Band)
    .WithMany(r => r.BandMembers)
    .OnDelete(DeleteBehavior.Cascade)
    .HasForeignKey(s => s.BandId);
}

        public TheaterContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }
        // items
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<Agenda> Agendas { get; set; }
        public DbSet<Basket> Baskets { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Band> Bands { get; set; }
        public DbSet<BandMember> BandMembers { get; set; }
        public DbSet<Show> Shows { get; set; }

        
    }
}