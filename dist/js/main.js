$("document").ready(function(){
    console.log("Test");
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        $("#user").text(firebase.auth().currentUser.email);
      } else {
        console.log("No User");
      }
    });
    
    $("#login").click(function(){
       firebase.auth().signInWithEmailAndPassword("kirill.novik.csci@gmail.com", "testtest").catch(function(error) {
          // Handle Errors here.
          console.log(error);
        });   
    });
    
    $("#sign-up").click(function(){
      firebase.auth().createUserWithEmailAndPassword("kirill.novik.csci@gmail.com", "testtest").catch(function(error) {
          // Handle Errors here.
          console.log(error);
        });  
    });
    
    $("#sign-out").click(function(){
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      }, function(error) {
      // An error happened.
      }); 
    });
});
