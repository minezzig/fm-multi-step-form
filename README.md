# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


<img src="./design/desktop-preview.jpg" alt="desktop" width="400"/>

## Table of contents
 
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Links

Live: [Multi-step form](https://fm-multi-step-form-gm.vercel.app/)
Code: [github repo](https://github.com/minezzig/fm-multi-step-form)

## My process

### Built with

- HTML
- JavaScript
- TypeScript
- Tailwind CSS
- React
- Mobile-first workflow

### What I learned
Wow, this was a whirlwind, and I learned a lot! This was the first time I worked on something like this. One thing I struggled with, which now seems quite simple, was the responsive layout navigation. I was determined to make it work solely using CSS. I had issues with overlapping and trying to use absolute positioning to take the elements out of the div, but also trying to have its parent div overlap. At the very end, I realized I could just conditionally render the components depending on the screen size!

Another thing that was new was working on a form over multiple pages. Initially, I was determined to make the "Next" button submit the information and start creating the order object. I then realized that I could just use onChange and update the object as the user fills out the form.

I also used this project as an opportunity to continue working on my TypeScript skills and file naming and management.
### Continued development
As my initial attempt was using only CSS to change the responsive layout, I'd like to go back and clean things up so that it is simply conditionally rendering the components. I've added some very simple transitions but would love to bring it to life a little more. Overall, I'm very happy with this project and feel like it is a good example of a real-world scenario.