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
    public class SuggestieController : ControllerBase
    {
        private readonly AttractieParkContext _context;

        public SuggestieController(AttractieParkContext context)
        {
            _context = context;
        }

        private double Afstand(int x1, int y1, int x2, int y2) {
            return Math.Sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }

        // GET: suggestie
        [HttpGet("{x}/{y}")]
        public async Task<ActionResult<string>> GetSuggestie(int x, int y)
        {
            // deze methode voldoet helemaal niet aan de REST principes
            
            _context.Add(new GastPositie {X = x, Y = y}); 
            await _context.SaveChangesAsync();

            // liever bouw je dit in een enkele SQL query, omdat nu alles in het geheugen moet worden geladen
            var attracties = await _context.Attractie.ToListAsync();
            if (attracties.Count == 0)
                return "";
            var posities = await _context.GastPositie.ToListAsync();
            double besteScore = -9999;
            var besteAttractie = attracties[0];
            foreach (var a in attracties) {
                var score = -Afstand(a.X, a.Y, x, y);
                foreach (var positie in posities)
                    score += Afstand(positie.X, positie.Y, a.X, a.Y);
                if (score > besteScore) {
                    besteScore = score;
                    besteAttractie = a;
                }
            }

            return besteAttractie.Naam;
        }
    }
}
