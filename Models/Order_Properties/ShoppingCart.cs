using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Project2.Models;

namespace ORM
{
    public class ShoppingCart
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Customer")]
        public string CustomerId { get; set; }

        // other properties
        public decimal TotalPrice
        {
            get
            {
                return Tickets.Sum(t => t.Price);
            }
        }
        
        public virtual ApplicationUser Customer { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; }
    }
}