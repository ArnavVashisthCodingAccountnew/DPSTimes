const firebaseConfig = {
  apiKey: "AIzaSyB82t4lDTALPY0EAobHvcorHXTImp8BB08",
  authDomain: "genzcodehub-c-cplus-plus-c.firebaseapp.com",
  databaseURL: "https://genzcodehub-c-cplus-plus-c-default-rtdb.firebaseio.com",
  projectId: "genzcodehub-c-cplus-plus-c",
  storageBucket: "genzcodehub-c-cplus-plus-c.appspot.com",
  messagingSenderId: "790584566205",
  appId: "1:790584566205:web:a44e045f13fa429be632d4",
  measurementId: "G-0N9W0B9GH1"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Namaste  " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  room_name = room_name.split(" ").join("");
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    window.location = "pagec.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       Room_names1 =  wordSpacing(Room_names);

       console.log("Room Name - " + Room_names);
      row = "<div class='divofroom' class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names1 +'</div><hr>';
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "pagec.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "genzcodehub.html";
}
function wordSpacing(camelCase){

  var tmp = camelCase[0];
 
 
 
             for (i = 1; i < camelCase.length; i++)
             {
                 var hasNextCap = false;
                 var hasPrevCap = false;
 
                 var charValue = camelCase.charCodeAt(i);
                 if (charValue > 64 && charValue < 91)
                 {
                     if (camelCase.length > i + 1)
                     {
                         var next_charValue = camelCase.charCodeAt(i + 1);
                         if (next_charValue > 64 && next_charValue < 91)
                             hasNextCap = true;
                     }
 
                     if (i - 1 > -1)
                     {
                         var prev_charValue =  camelCase.charCodeAt(i - 1);
                         if (prev_charValue > 64 && prev_charValue < 91)
                             hasPrevCap = true;
                     }
 
 
                     if (i < camelCase.length-1 &&
                         (!(hasNextCap && hasPrevCap || hasPrevCap)
                         || (hasPrevCap && !hasNextCap)))
                         tmp += " ";
                 }
                 tmp += camelCase[i];
             }
 
 return tmp}