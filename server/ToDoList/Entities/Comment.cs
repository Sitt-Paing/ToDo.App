using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Entities;

[Table("Comment")]
public partial class Comment
{
    [Key]
    public int Id { get; set; }

    public string Content { get; set; } = null!;

    public int PostId { get; set; }

    [Column("UserId ")]
    [StringLength(450)]
    public string UserId { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? CreatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? UpdatedAt { get; set; }

    [Column(TypeName = "datetime")]
    public DateTime? DeletedAt { get; set; }

    [JsonIgnore]
    [ForeignKey("PostId")]
    [InverseProperty("Comments")]
    public virtual Blog Post { get; set; } = null!;

    [JsonIgnore]
    [ForeignKey("UserId")]
    [InverseProperty("Comments")]
    public virtual AspNetUser User { get; set; } = null!;
}
