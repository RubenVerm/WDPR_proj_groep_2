using Microsoft.AspNetCore.Identity;
using ORM;
using System.ComponentModel.DataAnnotations;


namespace Project2.Models
{
    public class ApplicationUser : IdentityUser
    {

        [Key]
        public string CustomerId { get; set; } = Guid.NewGuid().ToString().Substring(0, 4);
        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; } = string.Empty;

        public ICollection<Ticket> Tickets { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}