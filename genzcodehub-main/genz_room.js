
  var firebaseConfig = {
    apiKey: "AIzaSyDkv0i8CQMU_Z-_vWIU1jfZ8NAJnkbj1ME",
    authDomain: "genzcodehub.firebaseapp.com",
    databaseURL: "https://genzcodehub-default-rtdb.firebaseio.com/",
    projectId: "genzcodehub",
    storageBucket: "genzcodehub.appspot.com",
    messagingSenderId: "484948727810",
    appId: "1:484948727810:web:3f23b7ecfada408d13ef1b",
    measurementId: "G-0LWL2P8987"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Namaste  " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  room_name = room_name.split(" ").join("");
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "community_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       Room_names1 = wordSpacing(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names1 +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "community_page.html";
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