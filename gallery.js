// start screen buttons variables

var slavko=document.getElementById("wrong1");
let mujo=document.getElementById("wrong2");
let mirko=document.getElementById("right");
let haso=document.getElementById("wrong3");

const newQuestionBtn=document.querySelector(".new-question");

// start screen buttons variables^^


const btnArray=[mirko,slavko,mujo,haso];

const container=document.getElementById("container1");
const questions=document.getElementById("question");
const quest2=document.createElement("p");




// question varibles first 3

quest2.setAttribute("id","question2");
quest2.textContent="What was the name of GN'R first studioalbum?";

// question varibles first 3


// changing question button variables
let BtnQuestion2=document.createElement("button");
BtnQuestion2.setAttribute("id","random2");
BtnQuestion2.textContent="QUESTION 2>>";







// recognizing the right answer by button ID

function getClickID(){
    var x=event.target.id;
    if(x==="right"){
        mirko.style.backgroundColor="green";
       
        
        
        


    }else{
    slavko.style.backgroundColor="red";
    mujo.style.backgroundColor="red";
    mirko.style.backgroundColor="green";
       haso.style.backgroundColor="red";
      

    }
    
    
     
}




// ^^recognizing the right answer by button ID^^


// changing button inner text randomly

// let randQuest=document.getElementById("random");
// var arrayMirko=["tyler","slash","roman"];
// var arrayMujo=["tara","marko","zeljko"];
// let newMirko=arrayMirko[Math.floor(Math.random()*arrayMirko.length)];
// let newMujo=arrayMujo[Math.floor(Math.random()*arrayMujo.length)];

// randQuest.addEventListener("click",()=>{
    // mirko.textContent=newMirko;
    // mujo.textContent=newMujo

    // ^^changing button inner text randomly^^


    // sending buttons to right container to ul



// });

let randQuest=document.getElementById("random");




const shuffleArray=array=>{
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    return(array);
}

// mixing the buttons after the answer

let answer1=document.getElementById("answer1");
let answer2=document.getElementById("answer2");
let answer3=document.getElementById("answer3");
let answer4=document.getElementById("answer4");


 let newBtnArray=shuffleArray(btnArray);
 randQuest.addEventListener("click",()=>{
     questions.firstElementChild.remove();
     questions.appendChild(quest2);
     newQuestionBtn.firstElementChild.remove();
     newQuestionBtn.appendChild(BtnQuestion2);
    
     
    mirko.remove();
    slavko.remove();
    mujo.remove();
    haso.remove();
    mirko.style.backgroundColor="white";
    slavko.style.backgroundColor="white";
    mujo.style.backgroundColor="white";
    haso.style.backgroundColor="white";
    mirko.textContent="LIES";
   
    let a=["live and let die","use your illusion 1","move to the city","basket case"];
    let b=["Let There Be Rock","Rock in a Hard Place","Appetite for destruction","High Voltage"];
    let c=["Spaghetti incident","Slave to the Grind"," Rocks","Use your illusion 2"];
    slavko.textContent= a[Math.floor(Math.random()*4)];
    mujo.textContent= b[Math.floor(Math.random()*4)];
    haso.textContent= c[Math.floor(Math.random()*4)];
   
   answer1.appendChild(newBtnArray[0]);
   answer2.appendChild (newBtnArray[1]);
   answer3.appendChild(newBtnArray[2]);
   answer4.appendChild(newBtnArray[3]);
   

 });
 

 // mixing the buttons after the answer^^

//  mixing buttons after 2nd answer

BtnQuestion2.addEventListener("click",()=>{
    mirko.remove();
    slavko.remove();
    mujo.remove();
    haso.remove();
    mirko.style.backgroundColor="white";
    slavko.style.backgroundColor="white";
    mujo.style.backgroundColor="white";
    haso.style.backgroundColor="white";

    answer1.appendChild(newBtnArray[1]);
    answer2.appendChild (newBtnArray[2]);
    answer3.appendChild(newBtnArray[3]);
    answer4.appendChild(newBtnArray[0]);

});







