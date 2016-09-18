function askQuestions () {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('how old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('user is an adult');
	} else if (age > 13) {
		console.log('user is a teenager')
	} else {
		console.log('user is a child');
	}
	var faveColour = prompt ('what is your favourite colour?');
	faveColour = faveColour.toLowerCase();
	if (faveColour == 'pink'||
		faveColour == 'purple'||
		faveColour == 'blue'||
		faveColour == 'grey') {
		$('h1').css('color', faveColour);
	}

	if (firstName.toLowerCase() == 'General' && lastName.toLowerCase () != 'Assembly') {
		console.log('This user is welcome');
	}

}

// when user clicks on the img, run askQuestions 
	$('img').on('click', askQuestions);


// when the page has loaded
$(function() {

	// when the user clicks an h3 element
	$('h3').on('click', function() {

		// toggle the next section
		$(this).next(). slideToggle(400);
	});



});