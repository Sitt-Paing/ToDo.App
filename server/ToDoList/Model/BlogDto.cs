namespace ToDoList.Model;

public class CreateBlogDto
{
    public string? Title { get; set; }
    public string Content { get; set; } = null!;
}

public class UpdateBlogDto
{
    public string? Title { get; set; }
    public string? Content { get; set; }
}
