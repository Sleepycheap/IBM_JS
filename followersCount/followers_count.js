let count = 0; // Intialize count to 0

function increaseCount() {
    count++; //increment the count by 1
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}
function checkCountValue(){
    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congratulation!");
    } else if (count === 20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
