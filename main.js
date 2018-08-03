cursedPost = document.getElementById("cursed")

cursedPost.addEventListener("mousemove",function() {
	if(cursedPost.innerHTML == "hey")
		cursedPost.innerHTML = "ok";
	else
		cursedPost.innerHTML = "hey";
})