using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ORM
{
  public class Show
  {
    [Key]
    public int ShowId { get; set; }
    public string TypeShow { get; set; }  //normaal, Kleinschalige voorstellingen , Workshop
    public string ShowName { get; set; }
    public string Genre { get; set; }
    public int Duration { get; set; }
    public DateTime ShowDate { get; set; }




    // Navigation property
    [ForeignKey("BandId")]
    public virtual Band Band { get; set; }
    [ForeignKey("HalldId")]
    public virtual Hall Hall { get; set; }
    [ForeignKey("RoomId")]
    public virtual Room Room { get; set; }

  }
}