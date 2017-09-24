var ref = firebase.database().ref().orderByChild("Age");
var box = document.getElementById("one");
ref.limitToLast(1).on("child_added", function(snap){
	var Name = snap.val().Name; 
	var Age = snap.val().Age;
	var Height = snap.val().Height;
	box.innerHTML = Name + " is " + Age + " hence the oldest and tallest at a height of: " + Height + " in the family";
});