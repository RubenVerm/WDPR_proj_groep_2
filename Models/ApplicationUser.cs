using Microsoft.AspNetCore.Identity;
using ORM;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project2.Models
{
    public class ApplicationUser : IdentityUser
    {

        [Key]
        public string CustomerId { get; set; } = Guid.NewGuid().ToString().Substring(0,4);
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public ICollection<Ticket> Tickets { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}