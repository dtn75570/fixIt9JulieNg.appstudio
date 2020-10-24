
describeYou.onclick=function(){

// get the text of the option chosen by the user
   let userChoice = $("input[name=rdoCharacteristics]:checked").prop("value")
   console.log(`You picked ${userChoice}`)
   console.log(`The value property of the control is ${rdoCharacteristics.value}`)
   lblCharacteristics.value = (`I would agree that you are a ${userChoice} person too!`)
}





btnfavExercisesNext.onclick=function(){
  ChangeForm(favExercises)
}
