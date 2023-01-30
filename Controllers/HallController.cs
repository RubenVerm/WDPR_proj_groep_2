using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM;
using Project2.Data;
using Microsoft.AspNetCore.Authorization;
namespace MyApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class HallController : ControllerBase
    {
        private readonly TheaterContext _context;

        public HallController(TheaterContext context)
        {
            _context = context;
        }


        // GET: api/Hall
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hall>>> GetHalls()
        {
          if (_context.Halls == null)
          {
              return NotFound();
          }
            return await _context.Halls.ToListAsync();
        }
        
        // // GET: api/Hall
        // [HttpGet]
        // public ActionResult<IEnumerable<Hall>> GetHalls()
        // {
        //     // retrieve the data from the database
        //     var data = _context.Halls.ToList();

        //     return Ok(data);
        // }

        // GET: api/Hall/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hall>> GetHall(int id)
        {
          if (_context.Halls == null)
          {
              return NotFound();
          }
            var hall = await _context.Halls.FindAsync(id);

            if (hall == null)
            {
                return NotFound();
            }

            return hall;
        }

        // PUT: api/Hall/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHall(int id, Hall hall)
        {
            if (id != hall.HallId)
            {
                return BadRequest();
            }

            _context.Entry(hall).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HallExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Hall
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Hall>> PostHall(Hall hall)
        {
          if (_context.Halls == null)
          {
              return Problem("Entity set 'TheaterContext.Halls'  is null.");
          }
            _context.Halls.Add(hall);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHall", new { id = hall.HallId }, hall);
        }

        // DELETE: api/Hall/5
        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHall(int id)
        {
            if (_context.Halls == null)
            {
                return NotFound();
            }
            var hall = await _context.Halls.FindAsync(id);
            if (hall == null)
            {
                return NotFound();
            }

            _context.Halls.Remove(hall);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HallExists(int id)
        {
            return (_context.Halls?.Any(e => e.HallId == id)).GetValueOrDefault();
        }
    }
}
