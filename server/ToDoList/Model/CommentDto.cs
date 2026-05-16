namespace ToDoList.Model;

public class CreateCommentDto
{
    public string Content { get; set; } = null!;
    public int PostId { get; set; }
}

public class UpdateCommentDto
{
    public string Content { get; set; } = null!;
}
