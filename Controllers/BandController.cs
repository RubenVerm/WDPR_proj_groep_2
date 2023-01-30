using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM;
using Project2.Data;
using Microsoft.AspNetCore.Authorization;


namespace MyApp.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class BandController : ControllerBase
    {
        private readonly TheaterContext _context;

        public BandController(TheaterContext context)
        {
            _context = context;
        }

        // GET: api/Band
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Band>>> GetBands()
        {
          if (_context.Bands == null)
          {
              return NotFound();
          }
            return await _context.Bands.ToListAsync();
        }

        // GET: api/Band/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Band>> GetBand(int id)
        {
          if (_context.Bands == null)
          {
              return NotFound();
          }
            var band = await _context.Bands.FindAsync(id);

            if (band == null)
            {
                return NotFound();
            }

            return band;
        }

        // PUT: api/Band/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBand(int id, Band band)
        {
            if (id != band.BandId)
            {
                return BadRequest();
            }

            _context.Entry(band).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BandExists(id))
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

        // POST: api/Band
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Band>> PostBand(Band band)
        {
          if (_context.Bands == null)
          {
              return Problem("Entity set 'TheaterContext.Bands'  is null.");
          }
            _context.Bands.Add(band);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBand", new { id = band.BandId }, band);
        }

        // DELETE: api/Band/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBand(int id)
        {
            if (_context.Bands == null)
            {
                return NotFound();
            }
            var band = await _context.Bands.FindAsync(id);
            if (band == null)
            {
                return NotFound();
            }

            _context.Bands.Remove(band);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BandExists(int id)
        {
            return (_context.Bands?.Any(e => e.BandId == id)).GetValueOrDefault();
        }
    }
}
