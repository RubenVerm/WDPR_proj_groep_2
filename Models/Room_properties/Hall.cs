using System.ComponentModel.DataAnnotations;
namespace ORM
{
    public class Hall
    {
        [Key]
        public int HallId { get; set; }
        public string Name { get; set; }
        public int? FirstClassSeats { get; set; }
        public int? SecondClassSeats { get; set; }
        public int? ThirdClassSeats { get; set; }

        //Tussentabel met zaalnummer en shownummer
        public ICollection<Show>? Shows { get; set; }
        public ICollection<Ticket>? Tickets { get; set; }
    }
}