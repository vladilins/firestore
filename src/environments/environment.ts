// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA0Adwj8KrVJaViasJvV7eMs8m5mmqlV_A",
    authDomain: "firestore-61bdd.firebaseapp.com",
    databaseURL: "https://firestore-61bdd.firebaseio.com",
    projectId: "firestore-61bdd",
    storageBucket: "firestore-61bdd.appspot.com",
    messagingSenderId: "585651487737"
  },
  dialogflow: {
    angularBot: "31215a71440540b9b2a14dc7cc1e4b5f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
