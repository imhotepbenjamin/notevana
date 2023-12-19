document.addEventListener('DOMContentLoaded', function () {
  // DOM elements
  const modal = document.querySelector('.modal');
  const moreModalContentCenter = document.querySelector('.more-modal-content-center');
  const moreButton = document.querySelector('.more-notes');
  const pastNotesModalContentCenter = document.querySelector('.past-notes-modal-content-center');
  const pastNotesButton = document.querySelector('.past-notes');
  const exitModal = document.querySelector('.modal-exit, .exit-container');
  const themesContainer = document.querySelector('.notes-container');
  const allButtons = document.querySelectorAll('.button');
  const modalSelection = document.querySelectorAll('.modal-selection');
  const themesButton = document.querySelector('#themes-button');
  const moreThemesContainer = document.querySelector('#more-themes-container');
  const fontsButton = document.querySelector('#fonts-button');
  const moreFontsContainer = document.querySelector('#more-fonts-container');
  const helpButton = document.querySelector('#help-button');
  const moreHelpContainer = document.querySelector('#more-help-container');
  const aboutMeButton = document.querySelector('#about-me-button');
  const moreAboutMeContainer = document.querySelector('#more-about-me-container');
  const helpSections = document.querySelectorAll('.help-section');
  const fontBoxes = document.querySelectorAll('.font-box');
  const newNoteButton = document.querySelector('.new-note');
  const notesTextArea = document.getElementById('notes-text');
  const pastNotesContainer = document.querySelector('.past-notes-boxes');

  // Changes color of button when hovered over
  allButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#0000006b';
    });

    button.addEventListener('mouseout', () => {
      button.style.backgroundColor = '#0000009f';
    });
  });

  // Makes the active option of the more modal display have an underline
  modalSelection.forEach(function (selection) {
    selection.addEventListener('click', function () {
      modalSelection.forEach(function (item) {
        item.classList.remove('underline');
      });
      this.classList.add('underline');
    });
  });

  // Event listener for theme boxes
  document.getElementById('themes').addEventListener('click', function (event) {
    const themeBox = event.target.closest('.theme-box');
    if (themeBox) {
      const themeClass = themeBox.classList[1]; // Assuming the second class is the theme class
      changeTheme(themeClass);
    }
  });

  // Event listener for font boxes
  document.getElementById('fonts').addEventListener('click', function (event) {
    const fontBox = event.target.closest('.font-box');
    if (fontBox) {
      const fontClass = fontBox.classList[1]; // Assuming the second class is the font class
      changeFont(fontClass);
    }
  });

  // Toggle display of containers based on button clicks
  themesButton.addEventListener('click', () => toggleContainers(moreThemesContainer));
  fontsButton.addEventListener('click', () => toggleContainers(moreFontsContainer));
  helpButton.addEventListener('click', () => toggleContainers(moreHelpContainer));
  aboutMeButton.addEventListener('click', () => toggleContainers(moreAboutMeContainer));

  // Event listeners for help section toggles
  helpSections.forEach(function (section) {
    const label = section.querySelector('.help-section-label');
    const content = section.querySelector('.help-section-content');

    label.addEventListener('click', function () {
      // Toggle current section
      if (content.style.display === 'flex') {
        content.style.display = 'none';
      } else {
        content.style.display = 'flex';
      }
    });
  });

  // Event listeners for modal interactions
  moreButton.addEventListener('click', () => showMoreModal());
  exitModal.addEventListener('click', () => hideModal());
  pastNotesButton.addEventListener('click', () => showPastModal());

  // Event listener for new-note button
  newNoteButton.addEventListener('click', function () {
    const notesTextValue = notesTextArea.value.trim();

    if (notesTextValue.length > 0) {
      const newPastNotesBox = document.createElement('div');
      newPastNotesBox.className = 'past-notes-box';

      const title = notesTextValue.substring(0, 15) + '...'; // Add ellipsis here
      const body = notesTextValue.substring(15, 50) + '...'; // Add ellipsis here
      const dateTime = getCurrentDateTime();

      newPastNotesBox.innerHTML = `
        <div class="past-notes-box-title">${title}</div>
        <div class="past-notes-box-body">${body}</div>
        <div class="past-notes-box-date">${dateTime}</div>
      `;

      pastNotesContainer.appendChild(newPastNotesBox);

      notesTextArea.value = '';

      // Show the past-notes-box
      newPastNotesBox.style.display = 'block'; // or 'flex' depending on your layout
    }
  });

  // Function to get the current date and time
  function getCurrentDateTime() {
    const options = { month: '2-digit', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = new Date().toLocaleString('en-US', options).replace(/,/g, ' at');
    return formattedDate.replace(/\//g, '.');
  }

  // Function to toggle the display of containers
  function toggleContainers(activeContainer) {
    const containers = [moreThemesContainer, moreFontsContainer, moreHelpContainer, moreAboutMeContainer];

    containers.forEach(container => {
      container.style.display = container === activeContainer ? 'flex' : 'none';
    });
  }

  // Function to handle theme change
  function changeTheme(themeClass) {
    themesContainer.className = `notes-container ${themeClass}`;
  }

  // Function to handle font change
  function changeFont(fontClass) {
    document.body.className = fontClass; // Change font for the entire document except more-fonts-container
  }

  // Function to show the modal
  function showMoreModal() {
    modal.style.display = 'flex';
    moreModalContentCenter.style.display = 'grid';
  }

  function showPastModal() {
    modal.style.display = 'flex';
    pastNotesModalContentCenter.style.display = 'grid';
  }

  // Function to hide the modal
  function hideModal() {
    modal.style.display = 'none';
    moreModalContentCenter.style.display = 'none';
    pastNotesModalContentCenter.style.display = 'none';
  }
});
