// ==UserScript==
// @name         Collapsible Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Create a collapsible sidebar on the right side of the screen with additional functionality
// @updateURL    https://raw.githubusercontent.com/krzemo-dev/FUT-ProTools/refs/heads/main/Greasemonkey/FUT-ProTools.js
// @downloadURL  https://raw.githubusercontent.com/krzemo-dev/FUT-ProTools/refs/heads/main/Greasemonkey/FUT-ProTools.js
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the sidebar element
    const sidebar = document.createElement('div');
    sidebar.id = 'gm-sidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.right = '0';
    sidebar.style.width = '0';
    sidebar.style.height = '100%';
    sidebar.style.backgroundColor = '#333';
    sidebar.style.overflowX = 'hidden';
    sidebar.style.transition = '0.5s';
    sidebar.style.zIndex = '1000';
    sidebar.style.paddingTop = '60px';
    document.body.appendChild(sidebar);

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '☰';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.zIndex = '1001';
    toggleButton.style.backgroundColor = '#2980b9';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.fontSize = '20px';
    document.body.appendChild(toggleButton);

    // Toggle sidebar function
    toggleButton.addEventListener('click', function() {
        if (sidebar.style.width === '0px' || sidebar.style.width === '') {
            sidebar.style.width = '300px';
            document.body.style.marginRight = '300px';
        } else {
            sidebar.style.width = '0';
            document.body.style.marginRight = '0';
        }
    });

    // Add logo
    const logo = document.createElement('div');
    logo.innerHTML = '<h1 style="color: white; text-align: center; margin: 0;">Game Bot</h1>';
    logo.style.padding = '20px';
    sidebar.appendChild(logo);

    // Add Help button
    const helpButton = document.createElement('button');
    helpButton.innerHTML = 'Help';
    helpButton.style.width = '100%';
    helpButton.style.padding = '15px';
    helpButton.style.border = 'none';
    helpButton.style.backgroundColor = '#34495e';
    helpButton.style.color = 'white';
    helpButton.style.textAlign = 'left';
    helpButton.style.cursor = 'pointer';
    helpButton.style.fontSize = '18px';
    helpButton.addEventListener('click', function() {
        alert('Help section coming soon!');
    });
    sidebar.appendChild(helpButton);
    
    // Add search input and button
    const searchContainer = document.createElement('div');
    searchContainer.style.padding = '10px';
    searchContainer.style.display = 'flex';
    searchContainer.style.justifyContent = 'center';
    sidebar.appendChild(searchContainer);
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.style.width = '70%';
    searchInput.style.padding = '10px';
    searchInput.style.border = 'none';
    searchInput.style.borderRadius = '4px';
    searchInput.style.marginRight = '10px';
    searchContainer.appendChild(searchInput);
    
    const searchButton = document.createElement('button');
    searchButton.innerHTML = 'Search';
    searchButton.style.padding = '10px';
    searchButton.style.border = 'none';
    searchButton.style.backgroundColor = '#2980b9';
    searchButton.style.color = 'white';
    searchButton.style.cursor = 'pointer';
    searchButton.style.borderRadius = '4px';
    searchContainer.appendChild(searchButton);
    
    // Search button event listener
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert('Searching for: ' + query);
            // Implement your search logic here
        }
    });

    // Add Account button with submenu
    const accountButton = document.createElement('button');
    accountButton.innerHTML = 'Account ▼';
    accountButton.style.width = '100%';
    accountButton.style.padding = '15px';
    accountButton.style.border = 'none';
    accountButton.style.backgroundColor = '#34495e';
    accountButton.style.color = 'white';
    accountButton.style.textAlign = 'left';
    accountButton.style.cursor = 'pointer';
    accountButton.style.fontSize = '18px';
    sidebar.appendChild(accountButton);

    const accountSubmenu = document.createElement('div');
    accountSubmenu.style.display = 'none';
    accountSubmenu.style.flexDirection = 'column';
    accountSubmenu.style.backgroundColor = '#3b5998';

    const dashboardOption = document.createElement('button');
    dashboardOption.innerHTML = 'Open Dashboard';
    dashboardOption.style.padding = '15px';
    dashboardOption.style.border = 'none';
    dashboardOption.style.backgroundColor = '#3b5998';
    dashboardOption.style.color = 'white';
    dashboardOption.style.textAlign = 'left';
    dashboardOption.style.cursor = 'pointer';
    dashboardOption.style.fontSize = '16px';
    dashboardOption.addEventListener('click', function() {
        alert('Opening Dashboard...');
    });
    accountSubmenu.appendChild(dashboardOption);

    const settingsOption = document.createElement('button');
    settingsOption.innerHTML = 'Settings';
    settingsOption.style.padding = '15px';
    settingsOption.style.border = 'none';
    settingsOption.style.backgroundColor = '#3b5998';
    settingsOption.style.color = 'white';
    settingsOption.style.textAlign = 'left';
    settingsOption.style.cursor = 'pointer';
    settingsOption.style.fontSize = '16px';
    settingsOption.addEventListener('click', function() {
        alert('Opening Settings...');
    });
    accountSubmenu.appendChild(settingsOption);

    const     userAvatar.style.height = '100px';
    userAvatar.style.borderRadius = '50%';
    userAvatar.style.marginBottom = '10px';
    userProfileSection.appendChild(userAvatar);
    
    // Add user name
    const userName = document.createElement('div');
    userName.innerHTML = 'John Doe'; // Replace with actual user name
    userName.style.color = 'white';
    userName.style.fontSize = '18px';
    userName.style.marginBottom = '10px';
    userProfileSection.appendChild(userName);
    
    // Add dark mode toggle
    const darkModeContainer = document.createElement('div');
    darkModeContainer.style.marginBottom = '10px';
    darkModeContainer.style.display = 'flex';
    darkModeContainer.style.alignItems = 'center';
    userProfileSection.appendChild(darkModeContainer);
    
    const darkModeLabel = document.createElement('label');
    darkModeLabel.innerHTML = 'Dark Mode';
    darkModeLabel.style.color = 'white';
    darkModeLabel.style.marginRight = '10px';
    darkModeContainer.appendChild(darkModeLabel);
    
    const darkModeToggle = document.createElement('input');
    darkModeToggle.type = 'checkbox';
    darkModeContainer.appendChild(darkModeToggle);
    
    // Dark mode toggle event listener
    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#ffffff';
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        }
    });
    
    // Add logout button
    const logoutButton = document.createElement('button');
    logoutButton.innerHTML = 'Logout';
    logoutButton.style.padding = '10px 20px';
    logoutButton.style.border = 'none';
    logoutButton.style.backgroundColor = '#e74c3c';
    logoutButton.style.color = 'white';
    logoutButton.style.cursor = 'pointer';
    logoutButton.style.borderRadius = '5px';
    logoutButton.addEventListener('click', function() {
        alert('Logging out...');
        // Implement logout logic here
    });
    userProfileSection.appendChild(logoutButton);
    
    // Add notification area
    const notificationArea = document.createElement('div');
    notificationArea.id = 'gm-notification-area';
    notificationArea.style.position = 'fixed';
    notificationArea.style.bottom = '10px';
    notificationArea.style.right = '10px';
    notificationArea.style.width = '250px';
    notificationArea.style.backgroundColor = '#444';
    notificationArea.style.color = 'white';
    notificationArea.style.padding = '10px';
    notificationArea.style.borderRadius = '5px';
    notificationArea.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';Option = document.createElement('button');
    logoutOption.innerHTML = 'Logout';
    logoutOption.style.padding = '15px';
    logoutOption.style.border = 'none';
    logoutOption.style.backgroundColor = '#3b5998';
    logoutOption.style.color = 'white';
    logoutOption.style.textAlign = 'left';
    logoutOption.style.cursor = 'pointer';
    logoutOption.style.fontSize = '16px';
    logoutOption.addEventListener('click', function() {
        alert('Logging out...');
    });
    accountSubmenu.appendChild(logoutOption);

    sidebar.appendChild(accountSubmenu);

    accountButton.addEventListener('click', function() {
        if (accountSubmenu.style.display === 'none') {
            accountSubmenu.style.display = 'flex';
        } else {
            accountSubmenu.style.display = 'none';
        }
    });

    // Adjust the main content to not be obscured by the sidebar
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            transition: margin-right 0.5s;
        }
        button:hover {
            background-color: #555;
        }
    `;
    document.head.appendChild(style);









        // Add user profile section


        userAvatar.style.height = '100px';
        userAvatar.style.borderRadius = '50%';
        userAvatar.style.marginBottom = '10px';
        userProfileSection.appendChild(userAvatar);
        
        // Add user name
        const userName = document.createElement('div');
        userName.innerHTML = 'John Doe'; // Replace with actual user name
        userName.style.color = 'white';
        userName.style.fontSize = '18px';
        userName.style.marginBottom = '10px';
        userProfileSection.appendChild(userName);
        
        // Add dark mode toggle
        const darkModeContainer = document.createElement('div');
        darkModeContainer.style.marginBottom = '10px';
        darkModeContainer.style.display = 'flex';
        darkModeContainer.style.alignItems = 'center';
        userProfileSection.appendChild(darkModeContainer);
        
        const darkModeLabel = document.createElement('label');
        darkModeLabel.innerHTML = 'Dark Mode';
        darkModeLabel.style.color = 'white';
        darkModeLabel.style.marginRight = '10px';
        darkModeContainer.appendChild(darkModeLabel);
        
        const darkModeToggle = document.createElement('input');
        darkModeToggle.type = 'checkbox';
        darkModeContainer.appendChild(darkModeToggle);
        
        // Dark mode toggle event listener
        darkModeToggle.addEventListener('change', function() {
            if (darkModeToggle.checked) {
                document.body.style.backgroundColor = '#121212';
                document.body.style.color = '#ffffff';
            } else {
                document.body.style.backgroundColor = '#ffffff';
                document.body.style.color = '#000000';
            }
        });
        
        // Add logout button
        const logoutButton = document.createElement('button');
        logoutButton.innerHTML = 'Logout';
        logoutButton.style.padding = '10px 20px';
        logoutButton.style.border = 'none';
        logoutButton.style.backgroundColor = '#e74c3c';
        logoutButton.style.color = 'white';
        logoutButton.style.cursor = 'pointer';
        logoutButton.style.borderRadius = '5px';
        logoutButton.addEventListener('click', function() {
            alert('Logging out...');
            // Implement logout logic here
        });
        userProfileSection.appendChild(logoutButton);
        
        // Add notification area
        const notificationArea = document.createElement('div');
        notificationArea.id = 'gm-notification-area';
        notificationArea.style.position = 'fixed';
        notificationArea.style.bottom = '10px';
        notificationArea.style.right = '10px';
        notificationArea.style.width = '250px';
        notificationArea.style.backgroundColor = '#444';
        notificationArea.style.color = 'white';
        notificationArea.style.padding = '10px';
        notificationArea.style.borderRadius = '5px';
        notificationArea.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';




    const userProfileSection = document.createElement('div');
    userProfileSection.style.padding = '20px';
    userProfileSection.style.borderBottom = '1px solid #555';
    userProfileSection.style.textAlign = 'center';
    sidebar.appendChild(userProfileSection);
    
    // Add user avatar
    const userAvatar = document.createElement('img');
    userAvatar.src = 'https://via.placeholder.com/100'; // Replace with actual avatar URL
    userAvatar.style.width = '100px';
    userAvatar.style.height = '100px';
    userAvatar.style.borderRadius = '50%';
    userAvatar.style.marginBottom = '10px';
    userProfileSection.appendChild(userAvatar);
    
    // Add user name
    const userName = document.createElement('div');
    userName.innerHTML = 'John Doe'; // Replace with actual user name
    userName.style.color = 'white';
    userName.style.fontSize = '18px';
    userName.style.marginBottom = '10px';
    userProfileSection.appendChild(userName);
    
    // Add logout button
    const logoutButton = document.createElement('button');
    logoutButton.innerHTML = 'Logout';
    logoutButton.style.padding = '10px 20px';
    logoutButton.style.border = 'none';
    logoutButton.style.backgroundColor = '#e74c3c';
    logoutButton.style.color = 'white';
    logoutButton.style.cursor = 'pointer';
    logoutButton.style.borderRadius = '5px';
    logoutButton.addEventListener('click', function() {
        alert('Logging out...');
        // Implement logout logic here
    });
    userProfileSection.appendChild(logoutButton);
        // Add notification area
    const notificationArea = document.createElement('div');
    notificationArea.id = 'gm-notification-area';
    notificationArea.style.position = 'fixed';
    notificationArea.style.bottom = '10px';
    notificationArea.style.right = '10px';
    notificationArea.style.width = '250px';
    notificationArea.style.backgroundColor = '#444';
    notificationArea.style.color = 'white';
    notificationArea.style.padding = '10px';
    notificationArea.style.borderRadius = '5px';
    notificationArea.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    notificationArea.style.display = 'none';
    document.body.appendChild(notificationArea);
    
    // Function to show notifications
    function showNotification(message) {
        notificationArea.innerHTML = message;
        notificationArea.style.display = 'block';
        setTimeout(() => {
            notificationArea.style.display = 'none';
        }, 3000);
    }
    
    // Add a sample notification button
    const notificationButton = document.createElement('button');
    notificationButton.innerHTML = 'Show Notification';
    notificationButton.style.width = '100%';
    notificationButton.style.padding = '15px';
    notificationButton.style.border = 'none';
    notificationButton.style.backgroundColor = '#34495e';
    notificationButton.style.color = 'white';
    notificationButton.style.textAlign = 'left';
    notificationButton.style.cursor = 'pointer';
    notificationButton.style.fontSize = '18px';
    notificationButton.addEventListener('click', function() {
        showNotification('This is a sample notification!');
    });
    sidebar.appendChild(notificationButton);
    
    })();
})();