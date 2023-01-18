using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace ORM
{
public class Hall
{
  [Key]
  public int HalldId { get; set; }
  public string Name { get; set; }
  public int? FirstClassSeats { get; set; }
  public int? SecondClassSeats { get; set; }
  public int? ThirdClassSeats { get; set; }

  //Tussentabel met zaalnummer en shownummer
  public ICollection<Show> Shows { get; set; }
}
}