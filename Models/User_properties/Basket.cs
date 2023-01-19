using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Project2.Models;

namespace ORM
{
public class Basket
{
[Key]
  public int Basketid { get; set; } 
  public ICollection<Ticket> Tickets { get; set; }

  [ForeignKey("CustomerId")]
  public virtual ApplicationUser Customer { get; set;}
  
}
}