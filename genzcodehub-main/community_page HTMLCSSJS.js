  // DO NOT TOUCH - GenZCodeHub's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQhLqf7IcXW2YUb9spXXWzqIndS_2wxpM",
  authDomain: "html-css-js-55883.firebaseapp.com",
  projectId: "html-css-js-55883",
  storageBucket: "html-css-js-55883.appspot.com",
  messagingSenderId: "891839249253",
  appId: "1:891839249253:web:277edeac1318a2a7febf8c",
  measurementId: "G-H41BXT58FN"
};//Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  
    user_name = localStorage.getItem("user_name");
    Room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(Room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  
  function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
           console.log(firebase_message_id);
           console.log(message_data);
           name = message_data['name'];
           message = message_data['message'];
           like = message_data['like'];
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           message_with_tag = "<pre class='message_h4'>" + message + "</pre>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
               
          row = name_with_tag + message_with_tag +like_button + span_with_tag;       
          document.getElementById("output").innerHTML += row;
  //End code
        } });  }); }
  getData();
  
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
  
    firebase.database().ref(Room_name).child(message_id).update({
      like : updated_likes  
     });
  
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("genzcodehub.html");
  }