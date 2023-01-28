
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM;
using Project2.Data;
using Microsoft.AspNetCore.Authorization;
namespace MyApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class BandMemberController : ControllerBase
    {
        private readonly TheaterContext _context;

        public BandMemberController(TheaterContext context)
        {
            _context = context;
        }

        // GET: api/BandMember
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BandMember>>> GetBandMembers()
        {
          if (_context.BandMembers == null)
          {
              return NotFound();
          }
            return await _context.BandMembers.ToListAsync();
        }

        // GET: api/BandMember/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BandMember>> GetBandMember(int id)
        {
          if (_context.BandMembers == null)
          {
              return NotFound();
          }
            var bandMember = await _context.BandMembers.FindAsync(id);

            if (bandMember == null)
            {
                return NotFound();
            }

            return bandMember;
        }

        // PUT: api/BandMember/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBandMember(int id, BandMember bandMember)
        {
            if (id != bandMember.Id)
            {
                return BadRequest();
            }

            _context.Entry(bandMember).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BandMemberExists(id))
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

        // POST: api/BandMember
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BandMember>> PostBandMember(BandMember bandMember)
        {
          if (_context.BandMembers == null)
          {
              return Problem("Entity set 'TheaterContext.BandMembers'  is null.");
          }
            _context.BandMembers.Add(bandMember);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBandMember", new { id = bandMember.Id }, bandMember);
        }

        // DELETE: api/BandMember/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBandMember(int id)
        {
            if (_context.BandMembers == null)
            {
                return NotFound();
            }
            var bandMember = await _context.BandMembers.FindAsync(id);
            if (bandMember == null)
            {
                return NotFound();
            }

            _context.BandMembers.Remove(bandMember);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BandMemberExists(int id)
        {
            return (_context.BandMembers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
