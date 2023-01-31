using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ORM;
using Project2.Data;
using Microsoft.AspNetCore.Authorization;
namespace MyApp.Controllers
{
  
  [Route("api/[controller]")]
  [ApiController]
  public class ShowController : ControllerBase
  {
    private readonly TheaterContext _context;

    public ShowController(TheaterContext context)
    {
      _context = context;
    }

    // GET: api/Show
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Show>>> GetShows()
    {
      if (_context.Shows == null)
      {
        return NotFound();
      }
      return await _context.Shows.ToListAsync();
    }

    // GET: api/Show/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Show>> GetShow(int id)
    {
      if (_context.Shows == null)
      {
        return NotFound();
      }
      var show = await _context.Shows.FindAsync(id);

      if (show == null)
      {
        return NotFound();
      }

      return show;
    }
    
    // PUT: api/Show/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    
    [HttpPut("{id}")]
    public async Task<IActionResult> PutShow(int id, Show show)
    {
      if (id != show.ShowId)
      {
        return BadRequest();
      }

      _context.Entry(show).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ShowExists(id))
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

    // POST: api/Show
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Show>> PostShow(Show show)
    {
      if (_context.Shows == null)
      {
        return Problem("Entity set 'TheaterContext.Shows'  is null.");
      }
      _context.Shows.Add(show);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetShow", new { id = show.ShowId }, show);
    }

    // DELETE: api/Show/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteShow(int id)
    {
      if (_context.Shows == null)
      {
        return NotFound();
      }
      var show = await _context.Shows.FindAsync(id);
      if (show == null)
      {
        return NotFound();
      }

      _context.Shows.Remove(show);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool ShowExists(int id)
    {
      return (_context.Shows?.Any(e => e.ShowId == id)).GetValueOrDefault();
    }
  }
}
