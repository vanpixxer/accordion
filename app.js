const accordion = document.getElementsByClassName('content-container');

// we need a for loop to access all of the .content-container classes
// we'll need to put an Event Listener on all of these classes
// in the function in the Event Listener we'll need to reference the object that currently calls the function (ie. the accordion) - we do this by using the 'this' keyword
// we set a class of 'active' on all of the content-containers
for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {

        this.classList.toggle('active');
    })
};