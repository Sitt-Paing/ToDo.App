using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Entities;

[Table("Blog")]
public partial class Blog
{
    [Key]
    public int Id { get; set; }

    [StringLength(200)]
    public string? Title { get; set; }

    public string Content { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? DeletedAt { get; set; }

    [StringLength(450)]
    public string AuthorId { get; set; } = null!;

    [JsonIgnore]
    [ForeignKey("AuthorId")]
    [InverseProperty("Blogs")]
    public virtual AspNetUser Author { get; set; } = null!;
    
    [JsonIgnore]
    [InverseProperty("Post")]
    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
