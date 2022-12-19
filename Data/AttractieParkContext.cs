using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

    public class AttractieParkContext : DbContext
    {
        public AttractieParkContext (DbContextOptions<AttractieParkContext> options)
            : base(options)
        {
        }

        public DbSet<GastPositie> GastPositie { get; set; }
        public DbSet<Attractie> Attractie { get; set; }
    }
