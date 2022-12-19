using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ORM
{
public class Band
{
  [Key]
  public int Id { get; set; }
  [Required]
  public string Name { get; set; }
  [Required]
  public String Genre { get; set; }

  //Tussentabel met zaalnummer en shownummer
  public ICollection<Show> Shows { get; set; }
  public ICollection<BandMember> BandMembers { get; set; }
}
}