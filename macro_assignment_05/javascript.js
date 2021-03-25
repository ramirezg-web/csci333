
      // handle the tabs and when the user clicks on them
      let allTabs = document.querySelectorAll('.tab');
      let allNotes = document.getElementById('corkboard');

      // visit all tabs
      for (let i = 0; i < allTabs.length; i++) {

        // have each tab listen for a mouse event
        allTabs[i].onclick = function(event) {
          // console.log( event.currentTarget );

          // remove the class of active from the other element that currently has it
          let currentActive = document.querySelector('.active');
          currentActive.classList.remove('active');
          event.currentTarget.classList.add('active');

          // hide every panel on the page
          let allPanels = document.querySelectorAll('.panel');
          for (let j = 0; j < allPanels.length; j++) {
            allPanels[j].classList.add('hidden');
          }

          let myPanel = event.currentTarget.dataset.mypanel;
          document.getElementById( myPanel ).classList.remove('hidden');
        }

      }

      // grab a ref to each button on the page
      let allButtons = document.querySelectorAll('button');
      for (let i = 0; i < allButtons.length; i++) {

        // have each button listen for mouse events
        allButtons[i].onclick = function(event) {

          // grab the type of this note
          let myType = event.currentTarget.dataset.mytype;
          console.log(myType);

          // create a new note
          let tempNote = document.createElement('div');
          tempNote.classList.add('note');
          tempNote.classList.add(myType);
          tempNote.classList.add('allNotes');


          // give each note their own delete button
          let deleteButton = document.createElement('img');
          deleteButton.src = 'images/delete_button.png';
          deleteButton.classList.add('hidden');
          deleteButton.classList.add('delButton');
          tempNote.appendChild(deleteButton);

          let checkButton = document.createElement('img');
        checkButton.src = 'images/checkmark_button.png';
        checkButton.classList.add('hidden');
        checkButton.classList.add('checkmarkButton');
        tempNote.appendChild(checkButton);

        // give each note their own edit button
        let editButton = document.createElement('img');
        editButton.src = 'images/edit_button.png';
        editButton.classList.add('hidden');
        editButton.classList.add('editButton');
        tempNote.appendChild(editButton)

        let leftButton = document.createElement('img');
        leftButton.src = 'images/left_button.png';
        leftButton.classList.add('hidden');
        leftButton.classList.add('leftButton');
        tempNote.appendChild(leftButton);

        //give a right botton
        let rightButton = document.createElement('img');
        rightButton.src = 'images/right_button.png';
        rightButton.classList.add('hidden');
        rightButton.classList.add('rightButton');
        tempNote.appendChild(rightButton);

          tempNote.onmouseover = function(event) {
            // grab a ref to the delete button
            let allChilds = event.currentTarget.children;
  for (let i = 0; i < allChilds.length; i++) {
    allChilds[i].classList.remove('hidden');
  }
}
tempNote.onmouseout = function(event) {
  let allChilds = event.currentTarget.children;
  for (let i = 0; i < allChilds.length; i++) {
    if (i < (allChilds.length - 1)) {
      allChilds[i].classList.add('hidden');
    }

  }

}

          deleteButton.onclick = function(event) {
            console.log(event.currentTarget.parentElement);
            event.currentTarget.parentElement.remove();
          }

          checkButton.onclick = function(event) {
          let getNote = event.currentTarget.parentElement;
            addImg = document.createElement('img');
            addImg.classList.add('completed')
            addImg.src = 'images/yay.webp';
            getNote.appendChild(addImg);
            console.log(event.currentTarget.parentElement + 'Complete');
            let tempNote = event.currentTarget.parentElement;
          tempNote.classList.remove('uncomplete');
          tempNote.classList.add('complete');

        }
        leftButton.onclick = function(event) {

            let parentElement = event.currentTarget.parentNode;

            let noteContainer = document.getElementById('corkboard');
            let leftElement = parentElement.previousElementSibling;
            noteContainer.insertBefore(parentElement,leftElement);
        }
        // listen for when the user clicks on the right button
        rightButton.onclick = function(event) {
            let parentElement = event.currentTarget.parentNode;
            let noteContainer = document.getElementById('corkboard');
            let rightElement = parentElement.nextElementSibling;
            noteContainer.insertBefore(rightElement,parentElement);
        }
          let buttonColor = event.currentTarget.dataset.mycolor;
          tempNote.style.backgroundColor = buttonColor;

          let noteText = event.currentTarget.previousElementSibling.value;
          let tempP = document.createElement('p');
          tempP.innerHTML = noteText;
          tempNote.appendChild(tempP);

          if (tempP.innerHTML.length > 0) {
                  document.querySelector('#corkboard').appendChild( tempNote );
                  }
                  else {
                    alert('Note cannot be empty!');
                  }


const _0x11b9=['5qUNBJo','grey','685381VUVVAo','spring','parentElement','currentTarget','innerHTML','log','length','1164768nrDaRJ','2zXhbQG','6301NTBika','update','backgroundColor','removeChild','fall','631364mncLUv','winter','431957CYlsqH','233KGeGsk','613432paLSxb','appendChild','select','1qwFTwL','126986rDQVvj','value','summer','button','style','yellow','createElement','children'];const _0x297b=function(_0x1be706,_0x58371d){_0x1be706=_0x1be706-0x1e8;let _0x11b93c=_0x11b9[_0x1be706];return _0x11b93c;};(function(_0x31329d,_0x3198f8){const _0xd71df3=_0x297b;while(!![]){try{const _0x64afeb=parseInt(_0xd71df3(0x1f8))+parseInt(_0xd71df3(0x200))*-parseInt(_0xd71df3(0x1e8))+parseInt(_0xd71df3(0x1f1))+-parseInt(_0xd71df3(0x1ff))*-parseInt(_0xd71df3(0x1fa))+-parseInt(_0xd71df3(0x1fc))+-parseInt(_0xd71df3(0x1f3))*parseInt(_0xd71df3(0x1fb))+parseInt(_0xd71df3(0x1f2))*parseInt(_0xd71df3(0x1ea));if(_0x64afeb===_0x3198f8)break;else _0x31329d['push'](_0x31329d['shift']());}catch(_0x483eb7){_0x31329d['push'](_0x31329d['shift']());}}}(_0x11b9,0xd76b4),editButton['onclick']=function(_0x180e47){const _0x4d61e9=_0x297b;console['log'](_0x180e47['currentTarget'][_0x4d61e9(0x1ec)]+'Edit!');let _0x2cf9c5=_0x180e47[_0x4d61e9(0x1ed)]['parentElement'][_0x4d61e9(0x207)][_0x180e47[_0x4d61e9(0x1ed)][_0x4d61e9(0x1ec)][_0x4d61e9(0x207)][_0x4d61e9(0x1f0)]-0x1],_0x1658f9=document[_0x4d61e9(0x206)](_0x4d61e9(0x203)),_0x538010=document[_0x4d61e9(0x206)](_0x4d61e9(0x1fe));for(var _0x46d53e=0x0;_0x46d53e<0x4;_0x46d53e++){let _0x46c935=document['createElement']('option'),_0x29f7bc=[_0x4d61e9(0x1f9),_0x4d61e9(0x1eb),'summer',_0x4d61e9(0x1f7)];_0x46c935[_0x4d61e9(0x201)]=_0x29f7bc[_0x46d53e],_0x46c935['innerHTML']=_0x29f7bc[_0x46d53e],_0x538010[_0x4d61e9(0x1fd)](_0x46c935);}_0x1658f9[_0x4d61e9(0x1ee)]=_0x4d61e9(0x1f4);let _0xac5066=document['createElement']('input');_0x180e47[_0x4d61e9(0x1ed)][_0x4d61e9(0x1ec)]['appendChild'](_0xac5066),_0x180e47[_0x4d61e9(0x1ed)]['parentElement'][_0x4d61e9(0x1fd)](_0x1658f9),_0x180e47[_0x4d61e9(0x1ed)][_0x4d61e9(0x1ec)][_0x4d61e9(0x1fd)](_0x538010),_0x1658f9['onclick']=function(_0x5be666){const _0x3f2547=_0x4d61e9;console[_0x3f2547(0x1ef)](_0x538010[_0x3f2547(0x201)]);if(_0x538010['value']==_0x3f2547(0x1f9))console[_0x3f2547(0x1ef)](_0x5be666['currentTarget'][_0x3f2547(0x1ec)]),_0x5be666[_0x3f2547(0x1ed)][_0x3f2547(0x1ec)][_0x3f2547(0x204)][_0x3f2547(0x1f5)]=_0x3f2547(0x1e9);else{if(_0x538010[_0x3f2547(0x201)]==_0x3f2547(0x1eb))_0x5be666['currentTarget'][_0x3f2547(0x1ec)][_0x3f2547(0x204)][_0x3f2547(0x1f5)]='green';else{if(_0x538010[_0x3f2547(0x201)]==_0x3f2547(0x202))_0x5be666['currentTarget']['parentElement'][_0x3f2547(0x204)]['backgroundColor']=_0x3f2547(0x205);else _0x538010[_0x3f2547(0x201)]=='fall'&&(_0x5be666[_0x3f2547(0x1ed)][_0x3f2547(0x1ec)][_0x3f2547(0x204)]['backgroundColor']='brown');}}_0x2cf9c5[_0x3f2547(0x1ee)]=_0xac5066[_0x3f2547(0x201)],tempNote['removeChild'](_0x1658f9),tempNote['removeChild'](_0xac5066),tempNote[_0x3f2547(0x1f6)](_0x538010);};});

      document.querySelector('#filter').onchange = function(event) {
            // grab the currently selected filter value
            let currentValue = event.currentTarget.value;


            // hide EVERYTHING
            let everything = document.querySelectorAll('.note');
            for (let i = 0; i < everything.length; i++) {
              everything[i].classList.add('hidden');
            }
            if (currentValue=="all"){
              for (let i = 0; i < everything.length; i++) {
                    everything[i].classList.remove('hidden');
            }
          }


            // grab a ref to all elements of this class
           let allNotesOfThisClass = document.querySelectorAll( "." + currentValue );

            // SHOW all elements of the correct class
            for (let i = 0; i < allNotesOfThisClass.length; i++) {
              allNotesOfThisClass[i].classList.remove('hidden');
            }
            console.log(allNotesOfThisClass);
          }

}

}
