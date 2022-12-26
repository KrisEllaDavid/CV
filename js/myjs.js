var i = 0;
var j;
function next(){
    if(i>3){
        i=0;
    }
    i=i%4;
    j=(i+1)%4;
    

    document.getElementById(i).classList.add("next");
    document.getElementById(i).classList.add("off");

    document.getElementById(j).classList.remove("next");
    document.getElementById(j).classList.remove("off");

    i++;
    if(i>3){
        i=0;
    }
    console.log(i);
    console.log(j);
}

function back(){
    if(i>3){
        i=3;
    }

    document.getElementById(i).classList.add("next");
    document.getElementById(i).classList.add("off");

    i=(i+3)%4;

    if(i>3){
        i=3;
    }
    document.getElementById(i).classList.remove("next");
    document.getElementById(i).classList.remove("off");

    console.log(i);

}