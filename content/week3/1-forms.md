---
title: "HTML Forms"
metaTitle: "All About Forms"
metaDescription: "All About Forms"
---

# Getting Started
Read Duckett, Chp. 7 on Forms before continuing.  

`youtube:9Esvj5MeF4g`

# Forms
- Refers to different HTML elements that allow you to collect information from web site users
- Best known form on the web? Post in the Week 3 channel if you know it!
- There are a number of form controls that allow you to collect information in different ways.
- We're going to go over a subset of form controls. To see all of them, check this out: <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input</a>. Be sure to check browser support!

# How do Forms Work?
1. User fills in information using the form controls
1. User presses a submit button
1. The name of each form control is sent along to the server along with the value the user enters or selects
1. The server responds with whether or not this succeeds. It could also send a success/failure page.

The reason it collects control name and value is so that the server knows which inputted piece of data corresponds with which form element.

Example: `firstName=Emily, email=ekauffman@washjeff.edu`

# Form Structure
- Forms live inside the `form` element.
- Every `<form>` element requires an `action` attribute.
- Action value is the URL for the page on the server that will receive the information when submitted.
- Forms can be sent using one of two methods: `get` or `post`
- `get` - values are appended to URL specified in the `action` attribute
- Use `get` for short forms (search boxes), retrieving data from the web (not submitting)
- `post` - sent using HTTP headers
- Use `post` when form involves uploading a file, contains sensitive data, adds/deletes information from a database
- If not specified, forms will use `get`

```html
<form action="submit.php" method="get">
	<p>Form controls go here</p>
</form>
```

## Text Inputs: text (single-line), password, textareas (multi-line)

```html
<form action="submit.php" method="get">
	<label> Full name:<br/>
		<input type="text" name="fullName" />
	</label>
	<label>Password:<br/>
		<input type="password" name="password" />
	</label>
	<label>Description:<br/>
		<textarea name="description"></textarea>
	</label>
</form>
```

## Making choices: radio, checkbox, drop-down boxes
```html
<form action="submit.php" method="get">
	<label>Please select your favorite genre:<br/>
		<input type="radio" name="genre" value="rock"> Rock
		<input type="radio" name="genre" value="jazz"> Jazz
		<input type="radio" name="genre" value="pop"> Pop
	</label>
	<label>Please select your favorite genre:<br/>
		<input type="checkbox" name="genre" value="rock"> Rock
		<input type="checkbox" name="genre" value="jazz"> Jazz
		<input type="checkbox" name="genre" value="pop"> Pop
	</label>
	<label>Which streaming service do you use?
		<select name="devices">
			<option>I don't use one</option>
			<option value="spotify">Spotify</option>
			<option value="apple">Apple Music</option>
			<option value="pandora">Pandora</option>
		</select>
	</label>
	<label>Which streaming services(s) do you use?<br/>
		<select name="devices" multiple="multiple">
			<option>None</option>
			<option value="spotify">Spotify</option>
			<option value="apple">Apple Music</option>
			<option value="pandora">Pandora</option>
		</select>
	</label>
</form>
```

## Submitting Forms
You can either use an input with a type "submit" or a button with type of "submit".

```html
<!-- option 1: input -->
<form action="submit.php" method="get">
	<label>Subscribe to our email list: <br/>
		<input type="text" name="email" />
		<input type="submit" name="Subscribe" value="Subscribe" />
	</label>
</form>
```

```html
<!-- option 2: button -->
<form action="submit.php" method="get">
	<label>Subscribe to our email list: <br/>
		<input type="text" name="email" />
		<button type="submit">Subscribe</button>
	</label>
</form>
```

*Accessibility concern! Be able to use the form entirely using keyboard

## Other Controls:
- hidden inputs
- generic buttons
- image buttons
- file upload button
- date input
- email and URL input
- search input
- hidden controls, generic buttons
- <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input</a>

## Labels
Each form control should have its own `<label>` element to make the form accessible.

Two ways to use a label:
1. Wrap the label around the input:
```html
<!-- method 1 -->
<label>Age: <input type="text" name="age" /></label>
```

1. Keep the label separate from the input and use `for` and `id` attribute to associate them:
```html
<!-- method 2 -->
Please select your favorite genre:<br/>
<input id="rock" type="radio" name="genre" value="rock">
<label for="rock">Rock</label>
<input id="jazz" type="radio" name="genre" value="jazz">
<label for="jazz">Jazz</label>
```

## Grouping Form Elements
Group related form elements together.

```html
<fieldset>
	<legend>Music Details</legend>
	<label>Please select your favorite genre:<br/>
		<input type="radio" name="genre" value="rock"> Rock
		<input type="radio" name="genre" value="jazz"> Jazz
		<input type="radio" name="genre" value="pop"> Pop
	</label>
</fieldset>
```

## Form Validation
Form Validation was traditionally done by JavaScript, but HTML5 introduced some validation. At first, not all browsers supported it. Most do now: https://caniuse.com/#feat=form-validation

It's done by adding attributes to form controls:
- `required` - Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength` and `maxlength` - Specifies the minimum and maximum length of textual data (strings)
- `min` and `max` - Specifies the minimum and maximum values of numerical input types
- `type` - Specifies whether the data needs to be a number, an email address, or some other specific preset type. 
- `pattern` - Specifies a regular expression that defines a pattern the entered data needs to follow.

```html
<form action="http://www.example.org/search.php">
	<label>Email:<br/>
		<input required type="email" name="email" />
	</label>
	<button type="submit">Subscribe</button>
</form>
```

# Resources
1. _Duckett, John. Html &amp; CSS: Design and Build Websites. John Wiley and Sons, 2014._
1. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation">https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation</a>