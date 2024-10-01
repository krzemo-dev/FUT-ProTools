// ==UserScript==
// @name         Collapsible Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.0
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

    const logoutOption = document.createElement('button');
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
})();