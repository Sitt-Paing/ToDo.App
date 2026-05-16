using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Entities;

[Table("item")]
public partial class Item
{
    [Key]
    public int Id { get; set; }

    [StringLength(200)]
    public string Title { get; set; } = null!;

    public int CategoryId { get; set; }

    public bool IsCompleted { get; set; }

    public string? Description { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? DeletedAt { get; set; }

    [StringLength(450)]
    public string UserId { get; set; } = null!;

    [ForeignKey("CategoryId")]
    [InverseProperty("Items")]
    [JsonIgnore]
    
    public virtual Category Category { get; set; } = null!;

    [ForeignKey("UserId")]
    [InverseProperty("Items")]
    [JsonIgnore]
    public virtual AspNetUser User { get; set; } = null!;
}
