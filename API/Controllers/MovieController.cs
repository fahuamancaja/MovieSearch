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
            if (await MovieExists(movieUpdate.MovieName)) 
            {
                return await UpdateMovie(movieUpdate); 
            }
            else 
            {
            var movie = new AppMovie
            {
                MovieName = movieUpdate.MovieName.ToLower(),
                Like = movieUpdate.Like,
                Dislike = movieUpdate.Dislike
            };
            _context.AppMovies.Add(movie);
            await _context.SaveChangesAsync();

            return Ok(movie);
            }
        }

        private async Task<bool> MovieExists(string movienName)
        {
            return await _context.AppMovies.AnyAsync(x => x.MovieName == movienName.ToLower());
        }

        public async Task<ActionResult<AppMovie>> UpdateMovie(MovieUpdateDto movieUpdateDto)
        {
            
            if(movieUpdateDto.Like == 1)
            {
                var movieName = movieUpdateDto.MovieName.ToLower();
                var movie = await _context.AppMovies.FirstOrDefaultAsync(x => x.MovieName == movieName);

               movie.Like = movie.Like + 1;

                await _context.SaveChangesAsync();
                var movieUp = await _context.AppMovies.SingleOrDefaultAsync(x => x.MovieName == movieName);
                return movieUp;

            }

            else if(movieUpdateDto.Dislike == 1)
            {
                var movieName = movieUpdateDto.MovieName.ToLower();
                var movie = await _context.AppMovies.FirstOrDefaultAsync(x => x.MovieName == movieName);

                movie.Dislike = movie.Dislike + 1;

                await _context.SaveChangesAsync();
                var movieUp = await _context.AppMovies.SingleOrDefaultAsync(x => x.MovieName == movieName);
                return movieUp;
            }

            else
            {
                var movieName = movieUpdateDto.MovieName.ToLower();
                var movieUp = await _context.AppMovies.SingleOrDefaultAsync(x => x.MovieName == movieName);
                return movieUp;
            }
        }
    }
}