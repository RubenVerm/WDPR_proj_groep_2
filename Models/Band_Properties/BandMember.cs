using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ORM
{
public class BandMember
{
  [Key]
  public int Id { get; set; }
  [Required]
  public string FirstName { get; set; }
  [Required]
  public string LastName { get; set; }

  // Navigation property
  [ForeignKey("BandId")]
  public virtual Band Band { get; set; }

}
}