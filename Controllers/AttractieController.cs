using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace opdrachtarchitectuur.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AttractieController : ControllerBase
    {
        private readonly AttractieParkContext _context;

        public AttractieController(AttractieParkContext context)
        {
            _context = context;
        }

        // GET: Attractie
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attractie>>> GetAttractie()
        {
            return await _context.Attractie.ToListAsync();
        }

        // GET: Attractie/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Attractie>> GetAttractie(int id)
        {
            var attractie = await _context.Attractie.FindAsync(id);

            if (attractie == null)
            {
                return NotFound();
            }

            return attractie;
        }

        // PUT: Attractie/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAttractie(int id, Attractie attractie)
        {
            if (id != attractie.Id)
            {
                return BadRequest();
            }

            _context.Entry(attractie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AttractieExists(id))
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

        // POST: Attractie
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Attractie>> PostAttractie(Attractie attractie)
        {
            _context.Attractie.Add(attractie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAttractie", new { id = attractie.Id }, attractie);
        }

        // DELETE: Attractie/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAttractie(int id)
        {
            var attractie = await _context.Attractie.FindAsync(id);
            if (attractie == null)
            {
                return NotFound();
            }

            _context.Attractie.Remove(attractie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AttractieExists(int id)
        {
            return _context.Attractie.Any(e => e.Id == id);
        }
    }
}
