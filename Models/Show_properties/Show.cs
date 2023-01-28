using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace ORM
{
    public class Show
    {
        [Key]
        public int ShowId { get; set; }
        public string ShowName { get; set; }
        public string Genre { get; set; }
        public int Duration { get; set; }
        public DateTime ShowDate { get; set; }
        public int? BandId { get; set; }
        public int? HallId { get; set; }
        public int? RoomId { get; set; }
        public int? ActorId { get; set; }
        public virtual Band? Band { get; set; }
        public virtual Hall Hall { get; set; }
        public virtual Room? Room { get; set; }
        public virtual Actor Actor { get; set; }

        public ICollection<Ticket> Tickets { get; set; }

        
    }
}