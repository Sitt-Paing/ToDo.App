using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Entities;

[Table("Category")]
public partial class Category
{
    [Key]
    public int Id { get; set; }

    [StringLength(200)]
    public string Name { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? DeletedAt { get; set; }

    [StringLength(450)]
    public string? UserId { get; set; }

    [JsonIgnore]
    [InverseProperty("Category")]
    public virtual ICollection<Item> Items { get; set; } = new List<Item>();

    [ForeignKey("UserId")]
    [InverseProperty("Categories")]
    [JsonIgnore]
    public virtual AspNetUser? User { get; set; }
}
