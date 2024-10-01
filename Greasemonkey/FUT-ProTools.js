// ==UserScript==
// @name         Collapsible Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Create a collapsible sidebar on the right side of the screen
// @author       GitHub Copilot
// @match        *://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/krzemo-dev/FUT-ProTools/refs/heads/main/Greasemonkey/FUT-ProTools.js
// @downloadURL  https://raw.githubusercontent.com/krzemo-dev/FUT-ProTools/refs/heads/main/Greasemonkey/FUT-ProTools.js
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
    document.body.appendChild(sidebar);

    // Create the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.innerHTML = '☰';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.zIndex = '1001';
    document.body.appendChild(toggleButton);

    // Toggle sidebar function
    toggleButton.addEventListener('click', function() {
        if (sidebar.style.width === '0px' || sidebar.style.width === '') {
            sidebar.style.width = '25%';
            document.body.style.marginRight = '25%';
        } else {
            sidebar.style.width = '0';
            document.body.style.marginRight = '0';
        }
    });

    // Adjust the main content to not be obscured by the sidebar
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            transition: margin-right 0.5s;
        }
    `;
    document.head.appendChild(style);
})();