

const d = new Date();
document.getElementById("date").innerHTML = d;

let day = d.getDay();
//let day = 0;
document.getElementById("day").innerHTML = day;

const pics = ["https://i.pinimg.com/originals/c3/f9/9e/c3f99eef4e78314d68a5184fc3b0bb96.jpg","https://www.greatbigminds.com/wp-content/uploads/2020/10/monday-motivation-cover.jpg", "https://www.ourmindfullife.com/wp-content/uploads/2020/09/Inspirational-Tuesday-quotes.jpg", "https://www.ourmindfullife.com/wp-content/uploads/2020/06/Motivation-quotes-for-Wednesday.jpg", "https://www.ourmindfullife.com/wp-content/uploads/2021/07/Thursday-quotes-2.jpg", "https://www.ourmindfullife.com/wp-content/uploads/2020/07/funny-happy-Friday-quotes-12-1.jpg", "https://i.pinimg.com/736x/24/86/35/2486358355d2097e7949aaaa313d6756.jpg"];



document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';



document.getElementById("day_test_button").addEventListener("click", myFunction);

function myFunction (){

	day++;
	console.log(day);
	document.getElementById("day").innerHTML = day;
	//document.getElementById("calendar_image").innerHTML = '<img src="' + pics[day] +'">';
	if(day >= 7){

		day = -1;


	}
	if(day == 0){
	document.getElementById("calendar_image").innerHTML = '<img src="' + pics[0] +'">';
	document.body.style.backgroundColor = "#0048BA" ;
   

}
else if(day == 1){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[1] +'">';
     document.body.style.backgroundColor = "#8A2BE2";
  }

else if(day == 2){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[2] +'">';
    document.body.style.backgroundColor = "#CC5500" ;
}
else if(day == 3){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[3] +'">';
    document.body.style.backgroundColor = "#FFEF00";
}
else if(day == 4){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[4] +'">';
    document.body.style.backgroundColor = "#DC143C";
}
else if(day == 5){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[5] +'">';
    document.body.style.backgroundColor = "#9400D3" ;
}
else if(day == 6){
   document.getElementById("calendar_image").innerHTML = '<img src="' + pics[6] +'">';
    document.body.style.backgroundColor = "#E936A7";
}
}




