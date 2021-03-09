namespace API.DTO
{
    public class MovieUpdateDto
    {
        public string MovieName { get; set; }
        public int Like { get; set; }
        public int Dislike { get; set; }
        public int MovieId { get; set; }
    }
}