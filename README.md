# Movie Search App!
## Screenshots
 Included in Screenshots folder.

## Description
 Search Movies and like and dislike movies. 

## Installation through Visual Studio Code
 1. Clone Repository
 2. Install .NET 5 Sdk (Dotnet 3 will not work!) 
 3. Install nodejs with npm
 4. Run in Terminal in API folder: dotnet tool install --global dotnet-ef (Make sure version 5+ installed)
 5. Restore unresolved dependencies for C# API by executing restore command or generate assets and run npm install from client folder for frontEnd Dependencies
 6. Drop Database: dotnet ef database drop
 7. Recreate Database: dotnet ef database update
 8. Start API from API folder by running from CLI: dotnet run. 
 9. Might need to run, as well: Dotnet dev-certs https --trust (This will create an approved local host for https api, remove any previous local host certs to avoid issues)
 10. In Angular side within client folder run: ng serve
 11. Go to http://localhost:4200/ (DO NOT USE HTTPS - no certs available sadly)(Disclaimer - C# API call should be on https://localhost:5001/api/movie/ but if different port, adjust on client side in point.service.ts in dbUrl string)
 
## Project Status
 Complete for version 1.
 
## License
 [MIT](https://choosealicense.com/licenses/mit/)
 
## Known Bug
 You might get assembly errors if .NET 5 is not default or primary. Please ensure .NET 5.0+ is installed! If you are still having MSBuild issues and you have Visual Studio Community installed aside from Visual Studio Code, you might have to install Visual Studio Community 2019 Preview.
