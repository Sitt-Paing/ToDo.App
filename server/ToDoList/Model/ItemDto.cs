namespace ToDoList.Model;

public class CreateItemDto
{
    public string Title { get; set; } = null!;
    public string? Description { get; set; }
    public int CategoryId { get; set; }
}

public class UpdateItemDto
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int? CategoryId { get; set; }
    public bool? IsCompleted { get; set; }
}
