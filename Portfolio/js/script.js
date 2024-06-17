/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/**
 * LIGHT MODE AND DARK MDOE 
*/

    const buttonTheme = document.querySelector("button[data-theme-btn]");
    const HTML = document.querySelector("html");

    buttonTheme.addEventListener("click", () => {
        let currentTheme = HTML.getAttribute("data-theme");
        let newTheme = currentTheme === "light" ? "dark" : "light";
        HTML.setAttribute("data-theme", newTheme);
    });

/** 
 * TAB
*/

const tabBtn = document.querySelectorAll("button[data-tab-btn]");
const allTab = document.querySelectorAll("[data-tab-content]");

tabBtn.forEach(activeBtn => {
    activeBtn.addEventListener("click" ,() => {
        tabBtn.forEach(button => {button.classList.remove("active")});
        allTab.forEach(tab => {tab.classList.remove("active")});
        activeBtn.classList.add("active");
        document.querySelector(`[data-tab-content="${activeBtn.dataset.tabBtn}"]`).classList.add("active");
    })
})