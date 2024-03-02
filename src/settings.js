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