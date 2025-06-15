document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const guestList = document.getElementById('guest-list');
  const alert = document.getElementById('alert'); 
  const maxGuests = 10;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const guestName = input.value.trim();

    if (guestName) {
      if (guestList.children.length < maxGuests) {
        addGuest(guestName);
        input.value = '';
        alert.classList.add('hidden');
      } else {
        alert.classList.remove('hidden'); 
      }
    }
  });

  function addGuest(name) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${name}</span>
      <button class="toggle">Not Attending</button>
      <button class="remove">Remove</button>
    `;

    const toggleButton = li.querySelector('.toggle');
    const removeButton = li.querySelector('.remove');

    toggleButton.addEventListener('click', () => {
      toggleRSVP(toggleButton);
    });

    removeButton.addEventListener('click', () => {
      removeGuest(li);
    });

    guestList.appendChild(li);
  }

  function toggleRSVP(button) {
    if (button.textContent === 'Not Attending') {
      button.textContent = 'Attending';
      button.style.backgroundColor = '#5bc0de';
    } else {
      button.textContent = 'Not Attending';
      button.style.backgroundColor = '#0275d8';
    }
  }

  function removeGuest(guestItem) {
    guestItem.remove();
    if (guestList.children.length < maxGuests) {
      alert.classList.add('hidden');
    }
  }
});
