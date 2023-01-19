using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Project2.Models;
namespace ORM
{
public class Agenda
{
  [Key]
  public int Agendaid { get; set; }

  [ForeignKey("CustomerId")]
  public ApplicationUser Customer { get; set;}

  
  
}
}