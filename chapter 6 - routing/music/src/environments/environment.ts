import { SpotifyApiKey } from './spotifyApiKey';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // Here's our Spotify API token you can use for testing. Acquiring one of these tokens
  // is beyond the scope of this book. See spotify's developer docs for details
  // See the scripts/spotifyKey.js script for updating this file
  spotifyApiKey: SpotifyApiKey
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
