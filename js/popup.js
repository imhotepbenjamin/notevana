document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('#modal');
  const moreModalContentCenter = document.querySelector('.more-modal-content-center');
  const moreButton = document.querySelector('.more-notes');
  const pastNotesModalContentCenter = document.querySelector('.past-notes-modal-content-center');
  const pastNotesButton = document.querySelector('.past-notes');
  const exitModal = document.querySelector('.modal-exit, .exit-container');
  const notesContainer = document.querySelector('#notes-container');
  const mainButtons = document.querySelectorAll('.button');
  const pastButtons = document.querySelectorAll('.buttons-past')
  const notesTextArea = document.querySelector('#notes-text');
  const charCount = document.querySelector('#char-count');
  const wordCount = document.querySelector('#word-count');
  const modalSelections = document.querySelectorAll('.modal-selection');
  const themesButton = document.querySelector('#themes-button');
  const themes = document.querySelector('#themes');
  const themeBoxes = document.querySelectorAll('.theme-box');
  const moreThemesContainer = document.querySelector('#more-themes-container');
  const SettingsButton = document.querySelector('#settings-button');
  const moreSettingsContainer = document.querySelector('#more-settings-container');
  const helpButton = document.querySelector('#help-button');
  const moreHelpContainer = document.querySelector('#more-help-container');
  const aboutMeButton = document.querySelector('#about-me-button');
  const moreAboutMeContainer = document.querySelector('#more-about-me-container');
  const helpSections = document.querySelectorAll('.help-section');
  const fontBoxes = document.querySelectorAll('.font-box');
  const newNoteButton = document.querySelector('.new-note');
  const pastNotesBoxWrapper = document.querySelector('.past-notes-box-wrapper');
  const pastNotesPreviewBox = document.querySelector('.past-notes-preview-box');
  const pastNotesPreviewOpen = document.querySelector('.past-open');
  const pastNotesPreviewDelete = document.querySelector('.past-notes-preview-delete');
  const pastNotesPreviewDeleteAskIfSure = document.querySelector('.past-notes-preview-delete-ask-if-sure');
  const askIfSureContainer = document.querySelector('.ask-if-sure-container');
  const askIfSure = document.querySelector('.ask-if-sure');
  const yesNoButtons = document.querySelectorAll('.yes-no-button');
  const yesNoYes = document.querySelector('.yes');
  const yesNoNo = document.querySelector('.no');
  const pastNotesSpaceContainer = document.querySelector('#past-notes-space-container');
  const pastNotesTrashContainer = document.querySelector('.past-notes-trash-container');
  const pastNotesTrashButton = document.querySelector('.past-notes-trash-button');
  const pastNotesTrash = document.querySelector('.past-notes-trash');
  const pastNotesTrashBoxes = document.querySelectorAll('.past-notes-trash-box');

  // function that changes button color
  function buttonColorChange(buttons) {
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.background = '#0000006b';
      });
      button.addEventListener('mouseout',  () => {
        button.style.background = '#0000009f';
      });
    });
  }
  buttonColorChange(mainButtons);
  buttonColorChange(pastButtons);

  // function for showing the modal and past notes modal content
  function showPastNotesModal() {
    modal.style.display = 'flex';
    pastNotesModalContentCenter.style.display = 'flex';
  }
  // when past notes button is clicked, show the modal and past notes modal content
  pastNotesButton.addEventListener('click', showPastNotesModal);
  // function for showing the modal and more modal content
  function showMoreModal() {
    modal.style.display = 'flex';
    moreModalContentCenter.style.display = 'flex';
  }

  // when more button is clicked, show the modal and more modal content
  moreButton.addEventListener('click', showMoreModal);
  // HIDE MODAL
  // hides the modal and modal-content-centers
  function hideModal() {
    modal.style.display = 'none';
    moreModalContentCenter.style.display = 'none';
    pastNotesModalContentCenter.style.display = 'none';
  }
  exitModal.addEventListener('click', hideModal);
  // modal.addEventListener('click', hideModal);

  //placeholder suggestion messages
  const placeholderSuggestions = [
  "What's on your mind?", 
  "Type with intent; ideas flourish.",
  "Procrastination is the thief of time. Start now!",
  "Jot your thoughts for the day...", 
  "Ideas in, brilliance out!", 
  "Conquer chaos with clear notes.",
  "Write it down, make it happen.", 
  "Tell your story in this blank canvas.", 
  "Inspiration strikes here. Type away!", 
  "Type, tap, think! Your notes start now.",
  "Ctrl+Alt+Defeat Writer's Block.", 
  "Compose your symphony of thoughts right here.", 
  "The more you note, the more you know.",
  "Let your fingers dance across the keys!",
  "Note-taking: the real superhero work."
];
  // initialize currentIndex... start at first index(0)
  let currentIndex = 0;
    // funnction that uses modulo to cycle through the placeholderSuggestions array
    /*Modulo so that currentIndex goes back to 0 when it hits the end of the array and never reaches the value of placeHolderSuggestions.length */
    function updatePlaceholder () {
     notesTextArea.placeholder = placeholderSuggestions[currentIndex];
     currentIndex = (currentIndex + 1) % placeholderSuggestions.length;
  }
  //update placeholder every 10 seconds
  setInterval(updatePlaceholder, 10000);
  //calls and starts the updatePlaceholder function
  updatePlaceholder();


//COUNTER SECTION FUNCTION
function counter() {
  // gets the value of all the contents of the notesTextArea(#notes-text)
  const notesTextAreaContent = notesTextArea.value;
  function updateCharCounter() {
    // creates object that equals value of the length (number of characters) of all the text in text area
    const charCounterLength = notesTextAreaContent.length;
    // function that makes character count update
    charCount.textContent = `${charCounterLength}`;
  };
  // calls updateCharCounter function
  updateCharCounter();
  function updateWordCounter() {
    let word = [];
    // replaces symbols with spaces then makes list of words that is split by spaces (" ")
    let notesTextAreaWithSymbolsReplaced = notesTextAreaContent.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    // iterates over the notesTextAreaWithSymbolsReplaced list
    notesTextAreaWithSymbolsReplaced.map((eachWord) => {
      // removes whitespace on both ends of each word
      let trimmedWords = eachWord.trim();
      // if the trimmed word is not empty, it is pushed to the word list
      if (trimmedWords.length > 0) {
        word.push(trimmedWords);
      }
    });
    let count = word.length;
    wordCount.textContent = `${count}`;
  };
  updateWordCounter();
};
  // CHARACTER COUNTER
  // Calls the updateCharCounter function on different events
  notesTextArea.addEventListener('input', counter);
  notesTextArea.addEventListener('keyup', counter);
  notesTextArea.addEventListener('keydown', counter);
  notesTextArea.addEventListener('paste', counter);
  notesTextArea.addEventListener('cut', counter);
  notesTextArea.addEventListener('drop', counter);
  notesTextArea.addEventListener('change', counter);
  notesTextArea.addEventListener('blur', counter);


  function saveNote() {
    // gets the value of all the contents of the notesTextArea as string and trims off whitespace before and after
    const notesTextAreaContent = notesTextArea.value.trim();
  
    // Check if notesTextAreaContent has a length greater than 0
    if (notesTextAreaContent.length > 0) {
      // creates a new div
      const newPastNotesBox = document.createElement('div');
      // the class of the new div is past-notes-box
      newPastNotesBox.className = 'past-notes-box';
      // if over 10 characters, title ends with an ellipsis.
      // if under 10 characters, the title will display up to the first 10
      const title = notesTextAreaContent.length > 10 ? notesTextAreaContent.slice(0,10) + '...' : notesTextAreaContent.slice(0,10);
      // if over 30 characters, body ends with an ellipsis.
      // if under 30 characters, body will display up to the first 30
      const body = notesTextAreaContent.length > 30 ? notesTextAreaContent.slice(11,30) + '...' : notesTextAreaContent.slice(11,30);
      const date = new Date();
      const formattedDate = date.toLocaleString().replace(/-/g, '.');
      newPastNotesBox.innerHTML = 
      `
      <div class="past-notes-box-title">${title}</div>
      <div class="past-notes-box-body">${body}</div>
      <div class="past-notes-box-date">${formattedDate}</div>
      `;
      // pastNotesBoxWrapper.appendChild(newPastNotesBox);
      // places new note boxes before the previous first note box
      pastNotesBoxWrapper.insertBefore(newPastNotesBox, pastNotesBoxWrapper.firstChild);
      newPastNotesBox.style.display = 'flex';
      pastNotesPreviewBox.textContent = notesTextAreaContent;
      notesTextArea.value = "";
    }
  }
  
  newNoteButton.addEventListener('click', saveNote);
  

function savetoJSON() {
const notesTextAreaContent = notesTextArea.value.trim;

if(notesTextAreaContent !== '') {
  const newNote = {
    title: notesTextAreaContent.length > 15 ? notesTextAreaContent.slice(0,15) + '...' : notesTextAreaContent.slice(0,15),
    body: notesTextAreaContent,
    date: new Date().toLocaleString().replace(/-/g, '.')
  
  }
}
}
/*function createNewPastNotesBox(notesTextValue) {
    const newPastNotesBox = document.createElement('div');
    newPastNotesBox.className = 'past-notes-box';
    newPastNotesBox.addEventListener('mouseover', function () {
      newPastNotesBox.classList.add('active-selection');
    });
    newPastNotesBox.addEventListener('mouseout', function () {
      newPastNotesBox.classList.remove('active-selection');
    });
    newPastNotesBox.addEventListener('click', function () {
      pastNotesPreviewBox.textContent = notesTextValue;
    });
    const title = notesTextValue.slice(0, 15);
    const body = notesTextValue.slice(15, 30);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString().replace(/-/g, '.');
    newPastNotesBox.innerHTML = `
      <div class="past-notes-box-title">${title}</div>
      <div class="past-notes-box-body">${body}</div>
      <div class="past-notes-box-date">${formattedDate}</div>
    `;
    pastNotesBoxWrapper.appendChild(newPastNotesBox);
    pastNotesPreviewBox.textContent = notesTextValue;
    notesTextArea.value = '';
  }*/
  // MODAL SELECTIONS
  // Select all elements with the class 'modalSelections' and iterate over each one
  modalSelections.forEach(selection => {
    // Add a click event listener to each 'modalSelections' element
    selection.addEventListener('click', () => {
      // 1. Remove t he 'active-selection' class from all 'modalSelections' elements
      modalSelections.forEach(allSelections => {
        allSelections.classList.remove('active-selection');
      });
      // 2. Add the 'active-selection' class to the clicked 'modalSelections' element
      selection.classList.add('active-selection');
    });
  });

  themesButton.addEventListener('click', () => toggleContainers(moreThemesContainer));
  SettingsButton.addEventListener('click', () => toggleContainers(moreSettingsContainer));
  helpButton.addEventListener('click', () => toggleContainers(moreHelpContainer));
  aboutMeButton.addEventListener('click', () => toggleContainers(moreAboutMeContainer));

  function toggleContainers(activeContainer) {
    const containers = [moreThemesContainer, moreSettingsContainer, moreHelpContainer, moreAboutMeContainer];

    containers.forEach(container => {
      container.style.display = container === activeContainer ? 'flex' : 'none';
    });
  }
  // HELP SECTION ACCORDIAN
  // makes help section accordian open and close
  // selects all help section elements
  helpSections.forEach(section => {
    // selects help-section-label element
    const label = section.querySelector('.help-section-label');
    // selects help-section-content element
    const content = section.querySelector('.help-section-content');
    // adds click event listener for specific section
    label.addEventListener('click', () => {

      if (content.style.display === 'flex') {
        content.style.display = 'none';
      }
      else {
        content.style.display = 'flex';
      }
    });
  });
  // THEME CHANGES
// selected theme-box changes notes-container theme
themeBoxes.forEach(theme => {
  theme.addEventListener('click', () => {
    // selects the theme which is the second class of the clicked theme box
    const selectedThemeClass = theme.classList[1];
    // removes all classes from the notes-container and past-notes-space. The only classes are for the theme
    notesContainer.classList = [];
    pastNotesSpaceContainer.classList = [];
    // add the clicked themebox to the notes container and past notes space
    notesContainer.classList.add(selectedThemeClass);
    pastNotesSpaceContainer.classList.add(selectedThemeClass);
  });
});
/*
  pastNotesPreviewDelete.addEventListener('click', function () {
    pastNotesPreviewDeleteAskIfSure.style.display = 'flex';
  });

  yesNoNo.addEventListener('click', function () {
    pastNotesPreviewDeleteAskIfSure.style.display = 'none';
  });

  newNoteButton.addEventListener('click', function () {
    const notesTextValue = notesTextArea.value.trim();
    if (notesTextValue !== '') {
      createNewPastNotesBox(notesTextValue);
    }
  });*/

  /*pastNotesPreviewOpen.addEventListener('click', function () {
    notesTextArea.value = pastNotesPreviewBox.textContent;
  });

  pastNotesTrashButton.addEventListener('click', function () {
    togglePastNotesTrash();
  });

  yesNoYes.addEventListener('click', function () {
    deleteSelectedPastNotesBox();
  });*/

  // Other functions...
  function togglePastNotesTrash() {
    if (pastNotesTrash.style.display === 'none') {
      pastNotesTrash.style.display = 'flex';
      pastNotesBoxWrapper.style.overflowY = 'hidden';
    } else {
      pastNotesTrash.style.display = 'none';
      pastNotesBoxWrapper.style.overflowY = 'auto';
    }
  }
});
