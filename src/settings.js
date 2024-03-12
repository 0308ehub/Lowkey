document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const tabTexts = document.querySelectorAll('.tab-text');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const currentTab = e.target.closest('.tab');
            const activeTab = document.querySelector('.tab.active');
            const currentTabText = currentTab.getAttribute('id').replace('-tab', '');

            if (activeTab) {
                activeTab.classList.remove('active');
            }
            currentTab.classList.add('active');

            tabTexts.forEach(text => {
                if (text.dataset.tab === currentTabText) {
                    text.classList.add('active');
                } else {
                    text.classList.remove('active');
                }
            });
        });
    });
});

const input = document.getElementById('display-name');
const counter = document.getElementById('char-counter');
const maxLength = 30;

// Add event listener for input event
input.addEventListener('input', function() {
  let remaining = maxLength - input.value.length;

  // Ensure remaining count doesn't go below 0
  remaining = Math.max(0, remaining);

  // Update counter text
  counter.textContent = remaining + ' Characters remaining';

  // Change color if remaining characters are 0
  if (remaining === 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = '#707070'; // Reset color
  }
});

// Add event listener for keydown event
input.addEventListener('keydown', function(event) {
  const remaining = maxLength - input.value.length;

  // Prevent typing if character limit is reached
  if (remaining <= 0 && event.key !== 'Backspace' && event.key !== 'Delete') {
    event.preventDefault();
  }
});

const input2 = document.getElementById('about-content');
const counter2 = document.getElementById('char-counter1');
const maxLength2 = 200;

// Add event listener for input event
input2.addEventListener('input', function() {
  let remaining2 = maxLength2 - input2.value.length;

  // Ensure remaining count doesn't go below 0
  remaining2 = Math.max(0, remaining2);

  // Update counter text
  counter2.textContent = remaining2 + ' Characters remaining';

  // Change color if remaining characters are 0
  if (remaining2 === 0) {
    counter2.style.color = 'red';
  } else {
    counter2.style.color = '#707070'; // Reset color
  }
});

// Add event listener for keydown event
input2.addEventListener('keydown', function(event) {
  const remaining2 = maxLength2 - input2.value.length;

  // Prevent typing if character limit is reached
  if (remaining2 <= 0 && event.key !== 'Backspace' && event.key !== 'Delete') {
    event.preventDefault();
  }
});

const toggleSwitch = document.getElementById('toggleSwitch');
const toggleSwitch1 = document.getElementById('toggleSwitch1');
const toggleSwitch2 = document.getElementById('toggleSwitch2');
const toggleSwitch3 = document.getElementById('toggleSwitch3');
const toggleSwitch4 = document.getElementById('toggleSwitch4');
const toggleSwitch5 = document.getElementById('toggleSwitch5');
const toggleSwitch6 = document.getElementById('toggleSwitch6');
const toggleSwitch7 = document.getElementById('toggleSwitch7');
const toggleSwitch8 = document.getElementById('toggleSwitch8');
const toggleSwitch9 = document.getElementById('toggleSwitch9');
const toggleSwitch10 = document.getElementById('toggleSwitch10');
const toggleSwitch11 = document.getElementById('toggleSwitch11');
const toggleSwitch12 = document.getElementById('toggleSwitch12');
const toggleSwitch13 = document.getElementById('toggleSwitch13');
const toggleSwitch14 = document.getElementById('toggleSwitch14');
const toggleSwitch15 = document.getElementById('toggleSwitch15');
const toggleSwitch16 = document.getElementById('toggleSwitch16');
const toggleSwitch17 = document.getElementById('toggleSwitch17');
const toggleSwitch18 = document.getElementById('toggleSwitch18');
const toggleSwitch19 = document.getElementById('toggleSwitch19');
const toggleSwitch20 = document.getElementById('toggleSwitch20');
const toggleSwitch21 = document.getElementById('toggleSwitch21');
const toggleSwitch22 = document.getElementById('toggleSwitch22');
const toggleSwitch23 = document.getElementById('toggleSwitch23');
const toggleSwitch24 = document.getElementById('toggleSwitch24');
const toggleSwitch25 = document.getElementById('toggleSwitch25');
const toggleSwitch26 = document.getElementById('toggleSwitch26');
const toggleSwitch27 = document.getElementById('toggleSwitch27');
const toggleSwitch28 = document.getElementById('toggleSwitch28');
const toggleSwitch29 = document.getElementById('toggleSwitch29');
const toggleSwitch30 = document.getElementById('toggleSwitch30');
const toggleSwitch31 = document.getElementById('toggleSwitch31');
const toggleSwitch32 = document.getElementById('toggleSwitch32');
const toggleSwitch33 = document.getElementById('toggleSwitch33');
const toggleSwitch34 = document.getElementById('toggleSwitch34');
const toggleSwitch35 = document.getElementById('toggleSwitch35');
const toggleSwitch36 = document.getElementById('toggleSwitch36');
const toggleSwitch37 = document.getElementById('toggleSwitch37');
const toggleSwitch38 = document.getElementById('toggleSwitch38');
const toggleSwitch39 = document.getElementById('toggleSwitch39');
const toggleSwitch40 = document.getElementById('toggleSwitch40');
const toggleSwitch41 = document.getElementById('toggleSwitch41');
const toggleSwitch42 = document.getElementById('toggleSwitch42');


toggleSwitch.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch1.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch2.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch3.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch4.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch10.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch11.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch12.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch13.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch14.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch15.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch16.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch17.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch18.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch19.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch20.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch21.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch22.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch23.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch24.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch25.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch26.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch27.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch28.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch29.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch30.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch31.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch32.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch33.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch34.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch35.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch36.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch37.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch38.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch39.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch40.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch41.addEventListener('click', function() {
    this.classList.toggle('blue');
});
toggleSwitch42.addEventListener('click', function() {
    this.classList.toggle('blue');
});

toggleSwitch5.addEventListener('click', function() {
    this.classList.toggle('blue');
    const contentElement = this.previousElementSibling;
    if (this.classList.contains('blue')) {
        contentElement.textContent = 'Allowed';
    } else {
        contentElement.textContent = 'Limited by you';
    }
});
toggleSwitch6.addEventListener('click', function() {
    this.classList.toggle('blue');
    const contentElement = this.previousElementSibling;
    if (this.classList.contains('blue')) {
        contentElement.textContent = 'Allowed';
    } else {
        contentElement.textContent = 'Limited by you';
    }
});
toggleSwitch7.addEventListener('click', function() {
    this.classList.toggle('blue');
    const contentElement = this.previousElementSibling;
    if (this.classList.contains('blue')) {
        contentElement.textContent = 'Allowed';
    } else {
        contentElement.textContent = 'Limited by you';
    }
});
toggleSwitch8.addEventListener('click', function() {
    this.classList.toggle('blue');
    const contentElement = this.previousElementSibling;
    if (this.classList.contains('blue')) {
        contentElement.textContent = 'Allowed';
    } else {
        contentElement.textContent = 'Limited by you';
    }
});
toggleSwitch9.addEventListener('click', function() {
    this.classList.toggle('blue');
    const contentElement = this.previousElementSibling;
    if (this.classList.contains('blue')) {
        contentElement.textContent = 'Allowed';
    } else {
        contentElement.textContent = 'Limited by you';
    }
});

const selectElement = document.getElementById('people-select');
selectElement.addEventListener('change', function() {
    // Check if the selected option is "Accounts Older Than 30 Days"
    if (this.value === 'ac') {
        // Add a class to the select element for "Accounts Older Than 30 Days"
        this.classList.add('ac');
    } else {
        // Remove the class for "Accounts Older Than 30 Days"
        this.classList.remove('ac');
    }

    // Check if the selected option is "Nobody"
    if (this.value === 'nb') {
        // Add a class to the select element for "Nobody"
        this.classList.add('nb');
    } else {
        // Remove the class for "Nobody"
        this.classList.remove('nb');
    }
});

const selectElement1 = document.getElementById('people-select1');
selectElement1.addEventListener('change', function() {
    // Check if the selected option is "Nobody"
    if (this.value === 'nb') {
        // Add a class to the select element for "Nobody"
        this.classList.add('nb');
    } else {
        // Remove the class for "Nobody"
        this.classList.remove('nb');
    }
});