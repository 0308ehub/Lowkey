const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });

const imageUpload = document.getElementById('imageUpload');
const topSection = document.querySelector('.top-section');
const fileUploadBtn = document.querySelector('.file-upload-btn');

imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            topSection.style.backgroundImage = `url(${e.target.result})`;
            topSection.style.backgroundPosition = 'center'; // Set initial background position
            fileUploadBtn.classList.add('hidden');
        }
        reader.readAsDataURL(file);
    }
});

const profileImageUpload = document.getElementById('profile-image-upload');
const profilePicture = document.querySelector('.profile-picture');
const userIcon = document.getElementById('profile-image-icon')
// Function to handle changing the profile image
function changeProfileImage(file) {
    console.log('File selected:', file);
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicture.style.backgroundImage = `url(${e.target.result})`;
            profilePicture.style.backgroundPosition = 'center'; // Set initial background position
            userIcon.classList.add('hidden'); // Hide the profile picture
            console.log('Profile image changed successfully.');
        };
        reader.readAsDataURL(file);
    } else {
        console.log('No file selected.');
    }
}

// Event listener for changing the profile image when the file input changes
profileImageUpload.addEventListener('change', function() {
    const file = this.files[0];
    changeProfileImage(file);
});

// Event listener for clicking on the profile picture or the profile image icon
profilePicture.addEventListener('click', function() {
    profileImageUpload.click();
});


// Code to display the edit icon for the top section
const editIcon = document.querySelector('.bx-edit-alt');

// Show edit icon when hovering over the top section
topSection.addEventListener('mouseenter', function() {
    editIcon.classList.remove('hidden');
});

// Hide edit icon when mouse leaves the top section
topSection.addEventListener('mouseleave', function() {
    editIcon.classList.add('hidden');
});

// Click event on edit icon to trigger file input click event
editIcon.addEventListener('click', function() {
    imageUpload.click();
});

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