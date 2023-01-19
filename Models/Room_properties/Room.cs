using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ORM
{
public class Room
{
  [Key]
  public int RoomId { get; set; }
  [Required]
  public string Name { get; set; }
  public int Capacity { get; set; }

  //Tussentabel met zaalnummer en shownummer
  public ICollection<Show> Shows { get; set; }

}
}