using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BaseBallApi.Models;

public partial class BaseBallContext : DbContext
{
    public BaseBallContext()
    {
    }

    public BaseBallContext(DbContextOptions<BaseBallContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Baseballlogin> Baseballlogins { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Baseballlogin>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__baseball__3213E83FA3D9DCC1");

            entity.ToTable("baseballlogin");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Confirmpassword)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("confirmpassword");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Mobilenumber)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("mobilenumber");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

// using Microsoft.EntityFrameworkCore;
// using BaseBallApi.Models;

// public class BaseBallContext :DbContext
// {
//     public BaseBallContext(DbContextOptions options):base(options)
//     {

//     }
//     public DbSet<Baseballlogin> Baseballlogins {get;set;}
// }
