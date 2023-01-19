using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ORM
{
public class Actor
{
  [Key]
  public int ActorId { get; set; }
  [Required]
  public string FirstName { get; set; }
  [Required]
  public string LastName { get; set; }

    //shows
    public ICollection<Show>? Shows { get; set; }
  
}
}