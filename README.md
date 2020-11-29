# Movie Search App!
## Screenshots
 Included in Screenshots folder.

## Description
 Search Movies and like and dislike movies. 

## Installation through Visual Studio Code
 1. Clone Repository
 2. Install .NET 5 Sdk (Dotnet 3 will not work!) 
 3. Install nodejs with npm
 4. Run in Terminal: dotnet tool install --global dotnet-ef (Make sure version 5+ installed)
 5. Drop Database: dotnet ef database drop
 6. Recreate Database: dotnet ef database update
 7. Start API from API folder by running from CLI: dotnet run. 
 8. Might need to run, as well: Dotnet dev-certs https --trust (This will create an approved local host for https api, remove any previous local host certs to avoid issues)
 9. In Angular side within client folder run: ng serve
 10. Data is automatically seeded to sqlite db
 11. Go to http://localhost:4200/ (DO NOT USE HTTPS - no certs available sadly)(Disclaimer - C# API call should be on https://localhost:5001/api/movie/ but if different port, adjust on client side in point.service.ts in dbUrl string)
 
## Project Status
 Complete for version 1.
 
## License
 [MIT](https://choosealicense.com/licenses/mit/)
 
## Known Bug
 You might get assembly errors if .NET 5 is not default or primary. Please ensure .NET 5.0+ is installed! If you are still having MSBuild issues and you have Visual Studio Community installed aside from Visual Studio Code, you might have to install Visual Studio Community 2019 Preview.
