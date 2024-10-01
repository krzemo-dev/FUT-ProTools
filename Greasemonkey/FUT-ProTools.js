// ==UserScript==
// @name         Expandable Sidebar Menu with Page Adjustment
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a collapsible sidebar menu that adjusts the page content size accordingly.
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the toggle button to show/hide the menu
    var toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '0';
    toggleButton.style.zIndex = '1001';
    toggleButton.style.padding = '10px';
    toggleButton.style.backgroundColor = '#333';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    // Create container for the sidebar menu
    var menuContainer = document.createElement('div');
    menuContainer.style.position = 'fixed';
    menuContainer.style.top = '0';
    menuContainer.style.right = '0';
    menuContainer.style.width = '0'; // Start with 0 width (hidden)
    menuContainer.style.height = '100%';
    menuContainer.style.backgroundColor = '#f4f4f9';
    menuContainer.style.borderLeft = '1px solid #ccc';
    menuContainer.style.zIndex = '1000';
    menuContainer.style.padding = '10px';
    menuContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    menuContainer.style.overflowX = 'hidden';
    menuContainer.style.transition = 'width 0.3s'; // Smooth transition
    document.body.appendChild(menuContainer);

    // Create header for the menu
    var menuHeader = document.createElement('h4');
    menuHeader.innerText = 'Custom Menu';
    menuHeader.style.margin = '0 0 10px 0';
    menuContainer.appendChild(menuHeader);

    // Create example button
    var button1 = document.createElement('button');
    button1.innerText = 'Button 1';
    button1.style.display = 'block';
    button1.style.marginBottom = '10px';
    menuContainer.appendChild(button1);

    button1.onclick = function() {
        alert('Button 1 clicked!');
    };

    // Create another example button
    var button2 = document.createElement('button');
    button2.innerText = 'Button 2';
    button2.style.display = 'block';
    button2.style.marginBottom = '10px';
    menuContainer.appendChild(button2);

    button2.onclick = function() {
        alert('Button 2 clicked!');
    };

    // Create dropdown (select list)
    var dropdown1 = document.createElement('select');
    dropdown1.style.display = 'block';
    dropdown1.style.marginBottom = '10px';
    menuContainer.appendChild(dropdown1);

    // Add options to dropdown
    var option1 = document.createElement('option');
    option1.value = 'option1';
    option1.innerText = 'Option 1';
    dropdown1.appendChild(option1);

    var option2 = document.createElement('option');
    option2.value = 'option2';
    option2.innerText = 'Option 2';
    dropdown1.appendChild(option2);

    dropdown1.onchange = function() {
        alert('Selected: ' + dropdown1.value);
    };

    // Create another dropdown
    var dropdown2 = document.createElement('select');
    dropdown2.style.display = 'block';
    dropdown2.style.marginBottom = '10px';
    menuContainer.appendChild(dropdown2);

    // Add options to the second dropdown
    var optionA = document.createElement('option');
    optionA.value = 'optionA';
    optionA.innerText = 'Option A';
    dropdown2.appendChild(optionA);

    var optionB = document.createElement('option');
    optionB.value = 'optionB';
    optionB.innerText = 'Option B';
    dropdown2.appendChild(optionB);

    dropdown2.onchange = function() {
        alert('Selected: ' + dropdown2.value);
    };

    // Toggle menu visibility
    var menuVisible = false;
    toggleButton.onclick = function() {
        if (menuVisible) {
            menuContainer.style.width = '0'; // Hide the menu
            toggleButton.style.right = '0'; // Move toggle button back
            document.body.style.marginRight = '0'; // Reset page content width
            menuVisible = false;
        } else {
            menuContainer.style.width = '25%'; // Show the menu (1/4 of screen width)
            toggleButton.style.right = '25%'; // Move toggle button to align with the menu
            document.body.style.marginRight = '25%'; // Adjust page content width to fit the menu
            menuVisible = true;
        }
    };
})();