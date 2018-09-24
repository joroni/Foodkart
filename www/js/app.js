// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      // set to either landscape
      // screen.orientation.lock('portrait');

      // allow user rotate
      // screen.orientation.unlock();

      /*window.addEventListener("orientationchange", function () {
        console.log(screen.orientation.type); // e.g. portrait*/

      if (!sessionStorage["loggedin_id"]) {
        //
       window.localtion = "/page4";
      } else {
        console.log("loggedin");
      }




    });

    /*
    document.addEventListener("offline", onOffline, false);

    function onOffline() {
       var stat = document.getElementById("stat");
       stat.innerHTML("<div class='appstatus'>Offline</div>")
    }


    document.addEventListener("online", onOnline, false);

    function onOnline() {
       var stat = document.getElementById("stat");
       stat.innerHTML("<div class='appstatus'>Online</div>")
    }

        });

    */



  })
