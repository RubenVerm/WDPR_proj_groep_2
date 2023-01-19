using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Project2.Models;
namespace ORM
{
public class Order
{
  [Key]
  public int OrderId { get; set; }
  public DateTime OrderDate { get; set; }

  [ForeignKey("CustomerId")]
  public virtual ApplicationUser Customer { get; set;}

  //Tickets die de order bevatten
  public ICollection<Ticket> Tickets { get; set; }
  
}
}