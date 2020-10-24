
hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){
    return
  } else {
    console.log(s)
       switch(s) {
            case "Dessert Voting":
                // add an item to the hamburger menu at runtime just for fun
                ChangeForm(dessertVoting)
                break
            case "Describe Me":
                // add an item to the hamburger menu at runtime just for fun
                ChangeForm(describeYou) 
                break
            case "Favorite Exercises":
                // add an item to the hamburger menu at runtime just for fun
                ChangeForm(favExercises)  
                break
       }  //switch
   } //else
}
