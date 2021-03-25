//handle the panels when the user clicks on them
let allTabs=document.querySelectorAll('.tab');
//vist all allTabs
for (let i=0; i <allTabs.length; i++){
  allTabs[i].onclick=function(event){
    console.log(event.currentTarget);
    //remove
    let currentActive=document.querySelector('.active');
    currentActive.classList.remove('active');
    event.currentTarget.classList.add('active');
    //hide every panel on page
    let allPanels=document.querySelectorAll('.panel');
    for (let j = 0; j < allPanels.length; j++) {
      allPanels[j].classList.add('hidden');
    }

    //show currect panels
    let myPanel=event.currentTarget.dataset.mypanel;
    console.log(myPanel);
    document.getElementById(myPanel).classList.remove('hidden');
  }
}

//grab ref to each button off page
let allButtons=document.querySelectorAll('button');
for (let i =0; i<allButtons.length; i++){
  allButtons[i].onclick=function(event){
    console.log('you clicked me');
    let tempNote=document.createElement('div');
    tempNote.classList.add('note');

    let buttoncolor=event.currentTarget.dataset.mycolor;
    tempNote.style.backgroundColor=buttoncolor;

    //grab text from previous sibling
    let noteText=event.currentTarget.previousElementSibling.value;
    tempNote.innerHTML=noteText;
    //put note in corkboard
    document.querySelector('#corkboard').appendChild(tempNote);
  }

}
