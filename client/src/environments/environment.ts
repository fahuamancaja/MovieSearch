// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api/',
  baseUrl: 'https://api.themoviedb.org/3/search/movie?language=en-US',
  baseMovieUrl: 'https://api.themoviedb.org/3/movie/',
  authkey: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzZlM2ZkNTM4ZjljYzliZGI0MTVjMGVmOWMxMjVhMiIsInN1YiI6IjVmYjFiZDAxMTJjNjA0MDA0MmI2MjBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y25P_8fFEuTyXpqLl97DBWs5PIpIhfm719xB8G6lzVQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
