---
title: 'Knowledge Check #3'
---

## In Class Exercises
We're going to review tables, lists, links, and then practice our forms. Today we'll work with a partner and do some **pair programming**. Choose one computer to do the work on, but switch back and forth who does the coding.

**Some questions to ask yourself when you think you're done with each part:**
1. Does it validate?
1. Are child elements indented?
1. Are my images accessible?
1. Do all of my tags have an opening and ending tag?
1. Are element choices semantically correct?
1. Is my text formatted correctly (strong, emphasized)?

**Scenario:**
You and your friends have decided that this is the semester you're going to be organized. What better way to do so than to make a website to hold all of your papers and schedule?

### Exercise 1: Home Page
1. Make a home page for your website. Remember your conventions: home page should be called `index.html`.
1. Set the title to "Home | My Organization Site".
1. Add a main heading (level one) that says "Welcome to my Organization Site".
1. Add a list of links to these sites: `contact.html`, `schedule.html`, and `assignments.html` (these pages don't exist...yet).
1. Next, add a paragraph that includes a corny, positive phrase. You know. For motivation.
1. Once completed, validate your code using the <a target="_blank" href="http://validator.w3.org/#validate_by_input">W3 Validator</a>. 
1. Show me when you're done! It should look something like this:
![Screenshot of a home page](../../../images/work.png)

### Exercise 2: Contact Page
You're anticipating that your website will be extremely successful and that people might want to reach out to you for help organizing their own lives.
1. Create a new page and save it as `contact.html`. The title should read "Contact | My Organization Site".
1. Add a list of links to match the one from index.html, but switch out the `contact.html` for `index.html`.
1. Create a contact form. Set the `action` attribute to "" and the `method` to "post". We don't actually have a server here!
1. Create a fieldset that collects the following: first name, last name, email, and age. Be careful to select the correct input field type for these types of data. Be sure to include all of the required attributes and label tags.
1. The legend should read "About You".
1. Make the first name, last name, and email required. You can test that your form validates by submitting with one of these fields empty.
1. Create a second fieldset that collects a description of their problem. Additionally, collect one more type of information of your choosing, but use radio buttons OR checkboxes for it. The legend should read "Your Problem".
1. Add a submit button that says "Send!".
1. Validate your page! Show me when you're done. It should look something like this:
![Screenshot of the contact page](../../../images/lec6form.png)

### Exercise 3: Schedule
You want to keep track of your class schedule on your website.
1. Create a new page and save it as `schedule.html`. The title should read "Schedule | My Organization Site".
1. Add a list of links to the top that link to the home page, contact page, and assignments page.
1. Add a style tag to the HEAD section that includes the following CSS:
```css
table, th, td {
		border: 1px solid black;
}
```
Don't worry about learning this code - it just makes the table structure easier to see.

1. Create a table that shows your weekly class schedule (and any other event you want to include). Pretend your classes start and end on the hour to make this easier.
1. It should include at least one cell that has a `rowspan` or `colspan` set.
1. Validate and show me! It might look something like this:
![screenshot of a class schedule by week](../../../images/schedule.png)

### Exercise 4: Assignments
1. For the homework due today, you had to markup three writing assignments for other classes. Take those and put them into the project workspace.
1. Create a new page and save it as `assignments.html`.
1. Add a list of links to the rest of your pages (contact, schedule, and home), just like you did in the other pages.
1. Add a heading that says "My Assignments".
1. Similarly to the homework, add a list of links to your marked up papers. **They should all be relative links.**
1. Since you're working as partners, this should include *all six* of your assignments. You'll have to email them to each other

---

## Next Class
- **Read**: Duckett, Chps. 8
- **Extra credit**: Visit a PAL tutor during hours. Have them sign a piece of paper with their name and date. Write down what they helped you with. Give it to me for a bonus point toward something.
- **Optional practice**: Make a codecademy.com account (free) and start the HTML track.

---

## Resources
1. _Duckett, John. Html &amp; CSS: Design and Build Websites. John Wiley and Sons, 2014._
1. <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation">https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation</a>