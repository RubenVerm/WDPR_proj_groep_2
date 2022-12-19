using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ORM
{
  public class Show
  {
    [Key]
    public int ShowId { get; set; }


    [Required]
    public string TypeShow { get; set; }  //normaal, Kleinschalige voorstellingen , Workshop
    [Required]
    public string ShowName { get; set; }
    public string Genre { get; set; }
    public int Duration { get; set; }
    public DateTime ShowDate { get; set; }




    // Navigation property
    [ForeignKey("Bandid")]
    public virtual Band Band { get; set; }
    [ForeignKey("Halldid")]
    public virtual Hall Hall { get; set; }
    [ForeignKey("Roomid")]
    public virtual Room Room { get; set; }

  }
}