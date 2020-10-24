var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
  /* add a loop here that adds all the desserts in the array 
     to the dropdown.
  */
   for (i = 0; i <= dessertList.length - 1; i++) 
        drpDesserts.addItem(dessertList[i])
}


// see what user clicked on in the drpBestMajor dropdown
// Notice I added an 's' parameter to the function as the event 
// returns the text of the chosen item to the event handler. 


drpDesserts.onclick=function(choice){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(choice) == "object")   
      return                    
    else {  // the user picked something
        /* add code here to get item user chose and output 
        it in a label, using a literal.
        */
      drpDesserts.value = choice   // make dropdown show the choice the user made
      lblOutputDessert.value = (`You picked ${choice} -that is a great choice!`)
    }
}

btnNextPage.onclick=function(){
  ChangeForm(describeYou)
}
