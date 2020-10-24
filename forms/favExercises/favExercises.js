var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
favExercises.onshow=function(){
    selExercises.clear()   
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
}
btnGo.onclick=function(){
  if (selExercises.text[0] = "situps" && selExercises.text[1] == "plank") {
    lblMessage1.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
}  else {
    lblMessage1.value = "You did not pick the two core exercises."
  }
}
btnNextLast.onclick=function(){
  ChangeForm(mobileNav)
}