self.addEventListener("install", function(event) {
    console.log("The service worker is being installed.");
    event.waitUntil();
  });
  
  