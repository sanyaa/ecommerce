
(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
      models: {
        home: {
          title: 'Home'
        },
        settings: {
          title: 'Settings'
        },
        contacts: {
          title: 'Contacts',
          ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
          }),
          alert: function(e) {
            alert(e.data.name);
          }
        }
      }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      //navigator.splashscreen.hide();
        
        
        var deviceName = device.platform;
        deviceUUID = device.uuid;
        alert(deviceName + ' - ' + deviceUUID);
        
        console.log(navigator.contacts);
        console.log(navigator.compass);

      app = new kendo.mobile.Application(document.body, {
        
        // you can change the default transition (slide, zoom or fade)
        transition: 'slide',
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        //skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/home.html'
      });
        
        
        // creating a customer: https://stripe.com/docs/api#create_customer
        stripe.customers.create(
            {
              description : "John Doe",
              email :  "john@telerik.com"
            },
            function (response) {alert("Customer created:\n\n" + JSON.stringify(response))},
            function(response) {alert(JSON.stringify(response))}  // error handler
        );
        
        
        
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
             var ref = window.open('http://apache.org', '_blank', 'location=yes');
             ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
             ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
             ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
             ref.addEventListener('exit', function(event) { alert(event.type); });
        } 
        
        

    }, false);

    
    

}());