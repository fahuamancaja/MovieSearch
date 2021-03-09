using System.Threading.Tasks;
using API.Data;
using API.DTO;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class MovieController : BaseApiController
    {
        private readonly DataContext _context;

        public MovieController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("moviesearch")]
        public async Task<ActionResult<AppMovie>> CreateMovie(MovieUpdateDto movieUpdate)
        {
            if (await MovieExists(movieUpdate.MovieId)) 
            {
                return await UpdateMovie(movieUpdate); 
            }
            else 
            {
            var movie = new AppMovie
            {
                MovieName = movieUpdate.MovieName.ToLower(),
                Like = movieUpdate.Like,
                Dislike = movieUpdate.Dislike,
                MovieId = movieUpdate.MovieId
            };
            _context.AppMovies.Add(movie);
            await _context.SaveChangesAsync();

            return Ok(movie);
            }
        }

        private async Task<bool> MovieExists(int movieId)
        {
            return await _context.AppMovies.AnyAsync(x => x.MovieId == movieId);
        }

        public async Task<ActionResult<AppMovie>> UpdateMovie(MovieUpdateDto movieUpdateDto)
        {
            
            if(movieUpdateDto.Like == 1)
            {
                var movieId = movieUpdateDto.MovieId;
                var movie = await _context.AppMovies.FirstOrDefaultAsync(x => x.MovieId == movieId);

               movie.Like = movie.Like + 1;

                await _context.SaveChangesAsync();
                var movieUp = await _context.AppMovies.SingleOrDefaultAsync(x => x.MovieId == movieId);
                return movieUp;

            }

            else if(movieUpdateDto.Dislike == 1)
            {
                var movieId = movieUpdateDto.MovieId;
                var movie = await _context.AppMovies.FirstOrDefaultAsync(x => x.MovieId == movieId);

                movie.Dislike = movie.Dislike + 1;

                await _context.SaveChangesAsync();
                var movieUp = await _context.AppMovies.SingleOrDefaultAsync(x => x.MovieId == movieId);
                return movieUp;
            }

            else
            {
                var movieId = movieUpdateDto.MovieId;
                var movieUp = await _context.AppMovies.SingleOrDefaultAsync(x => x.MovieId == movieId);
                return movieUp;
            }
        }
    }
}