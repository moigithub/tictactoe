var mychoice="";
var computerchoice="";
var start = false;
var game=["","","","","","","","",""];
var userpick=-1;

$(document).ready(function(){
  $("#X").click(function(){ 
    mychoice="X";
    computerchoice="O";
    $(".choicexo").css("display","none");
    start=true;
    computerplay();
  });
  $("#O").click(function(){ 
    mychoice="O";
    computerchoice="X";
    $(".choicexo").css("display","none");
    start=true;
    computerplay();
  });
  
  $("#restart").click(function(){
    reset();
    showpickchoicedlg();  
    displaydata();
    console.log("choices:",mychoice,computerchoice);
  });
  
  // buttons handlers
  $("#b0").click(function(){
    if(game[0]===""){
      game[0]=mychoice;
      userpick =0;
      computerplay();
    }
  });
  $("#b1").click(function(){
    if(game[1]===""){
      game[1]=mychoice;
      userpick =1;
      computerplay();
    }
  });
  $("#b2").click(function(){
    if(game[2]===""){
      game[2]=mychoice;
      userpick =2;
      computerplay();
    }
  });
  $("#b3").click(function(){
    if(game[3]===""){
      game[3]=mychoice;
      userpick =3;
      computerplay();
    }
  });
  $("#b4").click(function(){
    if(game[4]===""){
      game[4]=mychoice;
      userpick =4;
      computerplay();
    }
  });
  $("#b5").click(function(){
    if(game[5]===""){
      game[5]=mychoice;
      userpick =5;
      computerplay();
    }
  });
  $("#b6").click(function(){
    if(game[6]===""){
      game[6]=mychoice;
      userpick =6;
      computerplay();
    }
  });
  $("#b7").click(function(){
    if(game[7]===""){
      game[7]=mychoice;
      userpick =7;
      computerplay();
    }
  });
  $("#b8").click(function(){
    if(game[8]===""){
      game[8]=mychoice;
      userpick =8;
      computerplay();
    }
  });
  $("#b9").click(function(){
    if(game[9]===""){
      game[9]=mychoice;
      userpick =9;
      computerplay();
    }
  });

  // init values
  reset();
  showpickchoicedlg();
});

function reset(){
  mychoice="";
  computerchoice="";
  game=["","","","","","","","",""];
}
function showpickchoicedlg(){
  $(".choicexo").css("display","block");
}

function computerplay(){
  // display user pick n check if won
  displaydata(); 
  if (checkifwon(mychoice)){
    alert("congratz!! u won!!!");
    reset();
    displaydata();
    showpickchoicedlg();
    return; 
  }
  
  // pick an option
  var freesquares = game.reduce(function(a, x, i, arr){
    if (x==="") a.push(i);
    return a;
  },[]);  // ----> [1,4,8]
  console.log("free squares",freesquares);
  
  if(freesquares.length>0){
    var option = Math.floor(Math.random()* freesquares.length); // ---> random(3) == 2
    //game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
    console.log("userpik",userpick, "option", option);
    
    var option;
    var idx;
     ///////////////////////////////////////
    if (userpick===-1){
      // computer start
      console.log("computer starting...", computerchoice);
      game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
    }
    ///////////////////////////////////////
    else if (userpick===0){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // top row
      else if (checkindex(1,2)!==false) {
        game[checkindex(1,2)]=computerchoice;
      }
      // vertical left
      else if (checkindex(3,6)!==false) {
        game[checkindex(3,6)]=computerchoice;
      }
      // transversal topleft to bottom right
      else if (checkindex(4,8)!==false) {
        game[checkindex(4,8)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===1){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // top row
      else if (checkindex(0,2)!==false) { 
        game[checkindex(0,2)]=computerchoice;
      }
      // vertical mid
      else if (checkindex(4,7)!==false) {
        game[checkindex(4,7)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===2){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // top row
      else if (checkindex(0,1)!==false) {
        game[checkindex(0,1)]=computerchoice;
      }
      // vertical right
      else if (checkindex(5,8)!==false) {
        game[checkindex(5,8)]=computerchoice;
      }
      // transversal topright to bottom left
      else if (checkindex(4,6)!==false) {
        game[checkindex(4,6)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===3){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // top row
      else if (checkindex(0,6)!==false) {
        game[checkindex(0,6)]=computerchoice;
      }
      // horizontal mid
      else if (checkindex(4,5)!==false) {
        game[checkindex(4,5)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===4){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // vertical mid
      else if (checkindex(1,7)!==false) {
        game[checkindex(1,7)]=computerchoice;
      }
      // horizontal mid
      else if (checkindex(3,5)!==false) {
        game[checkindex(3,5)]=computerchoice;
      }
      // transversal toleft bottomright
      else if (checkindex(0,8)!==false) {
        game[checkindex(0,8)]=computerchoice;
      }
      // transversal bottomleft topright
      else if (checkindex(6,2)!==false) {
        game[checkindex(6,2)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===5){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // horizontal mid
      else if (checkindex(3,4)!==false) {
        game[checkindex(3,4)]=computerchoice;
      }
      // vertical right
      else if (checkindex(2,8)!==false) {
        game[checkindex(2,8)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===6){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // vertical left
      else if (checkindex(0,3)!==false) {
        game[checkindex(0,3)]=computerchoice;
      }
      // horizontal bottom
      else if (checkindex(7,8)!==false) {
        game[checkindex(7,8)]=computerchoice;
      }
      // transversal bottom left to top right
      else if (checkindex(4,2)!==false) {
        game[checkindex(4,2)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===7){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // vertical mid
      else if (checkindex(1,4)!==false) {
        game[checkindex(1,4)]=computerchoice;
      }
      // horizontal bottom
      else if (checkindex(6,8)!==false) {
        game[checkindex(6,8)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    ///////////////////////////////////////
    else if (userpick===8){
      winoption=checkwinnerspot();
      if (winoption!==-1) {
        game[winoption]=computerchoice;
      }
      // horizontal bottom
      else if (checkindex(6,7)!==false) {
        game[checkindex(6,7)]=computerchoice;
      }
      // vertical right
      else if (checkindex(2,5)!==false) {
        game[checkindex(2,5)]=computerchoice;
      }
      // transversal topleft to bottom right
      else if (checkindex(0,4)!==false) {
        game[checkindex(0,4)]=computerchoice;
      }
      else {
        game[freesquares[option]]=computerchoice;   // ----> freesquares[2] ==> 4  >>>> game[4] = "X"
      }
    }
    
    //console.log("compu choice",option);
  } 
  
  console.log(game);
  displaydata();
  
  if (checkifwon(computerchoice)){
    alert("Computer won!!!");
    reset();
    displaydata();
    showpickchoicedlg();
    return;
  }
  
  // check if gameover, then is a tie
  if (game.filter(function(x){return x===""}).length===0){
    // game over no more spaces to pick
    alert("its a TIE");
    reset();
    displaydata();
    showpickchoicedlg();
  }

}

function checkindex(i1, i2){
  if (game[i1]==="" && game[i2]===mychoice){
    return i1;
  }
  else if (game[i2]==="" && game[i1]===mychoice) {
    return i2;
  }
  return false;
}

function checkifwon(choice){
  var triplechoice=choice+choice+choice;
  if ((game[0]+game[1]+game[2]===triplechoice) || 
     (game[0]+game[3]+game[6]===triplechoice) || 
     (game[0]+game[4]+game[8]===triplechoice) || 
     (game[1]+game[4]+game[7]===triplechoice) || 
     (game[2]+game[4]+game[6]===triplechoice) || 
     (game[2]+game[5]+game[8]===triplechoice) || 
     (game[3]+game[4]+game[5]===triplechoice) || 
     (game[6]+game[7]+game[8]===triplechoice)) {
         return true;
  }
  return false;
}

function checkwinnerspot(){
  // computer posible winner choice
  var choice = computerchoice + computerchoice;
  if (game[0]+game[1]+game[2]===choice) {
    if (game[0]==="") return 0;
    if (game[1]==="") return 1;
    if (game[2]==="") return 2;
  }
  if (game[0]+game[3]+game[6]===choice) {
    if (game[0]==="") return 0;
    if (game[3]==="") return 3;
    if (game[6]==="") return 6;
  } 
  if (game[0]+game[4]+game[8]===choice) {
    if (game[0]==="") return 0;
    if (game[4]==="") return 4;
    if (game[8]==="") return 8;
  } 
  if (game[1]+game[4]+game[7]===choice) {
    if (game[1]==="") return 1;
    if (game[4]==="") return 4;
    if (game[7]==="") return 7;
  } 
  if (game[2]+game[4]+game[6]===choice) {
    if (game[2]==="") return 2;
    if (game[4]==="") return 4;
    if (game[6]==="") return 6;
  } 
  if (game[2]+game[5]+game[8]===choice) {
    if (game[2]==="") return 2;
    if (game[5]==="") return 5;
    if (game[8]==="") return 8;
  } 
  if (game[3]+game[4]+game[5]===choice) {
    if (game[3]==="") return 3;
    if (game[4]==="") return 4;
    if (game[5]==="") return 5;
  } 
  if (game[6]+game[7]+game[8]===choice) {
    if (game[6]==="") return 6;
    if (game[7]==="") return 7;
    if (game[8]==="") return 8;
  }
  return -1;
}


function displaydata(){
  $("#b0").html(game[0]);
  $("#b1").html(game[1]);
  $("#b2").html(game[2]);
  $("#b3").html(game[3]);
  $("#b4").html(game[4]);
  $("#b5").html(game[5]);
  $("#b6").html(game[6]);
  $("#b7").html(game[7]);
  $("#b8").html(game[8]);
  $("#b9").html(game[9]);
}