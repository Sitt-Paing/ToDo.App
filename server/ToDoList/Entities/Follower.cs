using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

namespace ToDoList.Entities;

[PrimaryKey("FollowerId", "TargetId")]
[Table("Follower")]
public partial class Follower
{
    [Key]
    public string FollowerId { get; set; } = null!;

    [Key]
    public string TargetId { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? FollowedAt { get; set; }

    [JsonIgnore]
    [ForeignKey("FollowerId")]
    [InverseProperty("FollowerFollowerNavigations")]
    public virtual AspNetUser FollowerNavigation { get; set; } = null!;

    [JsonIgnore]
    [ForeignKey("TargetId")]
    [InverseProperty("FollowerTargets")]
    public virtual AspNetUser Target { get; set; } = null!;
}
