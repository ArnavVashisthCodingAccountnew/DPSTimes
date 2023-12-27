const firebaseConfig = {
  apiKey: "AIzaSyBAtjgCkWFBeqU3jjF5a2_F2_mi3EPXV9g",
  authDomain: "go-koltin.firebaseapp.com",
  projectId: "go-koltin",
  storageBucket: "go-koltin.appspot.com",
  messagingSenderId: "995028115976",
  appId: "1:995028115976:web:406be1726b038986be27bd",
  measurementId: "G-G0009J6C33"
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
      
      window.location = "community_page1.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         Room_names1 = wordSpacing(Room_names)
         console.log("Room Name - " + Room_names);
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
      window.location = "community_page1.html";
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