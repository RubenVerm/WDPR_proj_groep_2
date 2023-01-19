using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Project2.Models;

namespace ORM
{
public class Ticket
{
  [Key]
  public int TicketId { get; set; }
  public decimal Price { get; set;} 
  public int Rownumber {get; set;}
  public int Seatnumber {get; set;}

  public DateTime ShowDate { get; set; }

  [ForeignKey("CustomerId")]
  public virtual ApplicationUser Customer { get; set;}
  
  [ForeignKey("HallId")]
  public virtual Hall hall { get; set; }

  [ForeignKey("ShowId")]
  public virtual Show Show { get; set; } 

}
}