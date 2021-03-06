// let's create a re-usable factory that generates the $firebaseAuth instance
myApp.factory("Auth", ["$firebaseAuth", "FIREBASE_URL",
  function($firebaseAuth, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL);
    return $firebaseAuth(ref);
  }
]);