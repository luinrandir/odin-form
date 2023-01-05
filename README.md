# :clipboard: Sign-up Form

## About

This sign-up form is a simple HTML component that was written to accomplish a project from [The Odin Project](https://www.theodinproject.com/)(TOP). The component uses only HTML and CSS to create a simple form. Then using a small amount of JavaScript to validate the passwords. Regex was also used as a way to help validate through HTML instead of Javascript, more below. **THIS IS FOR LEARNING PURPOSES ONLY. THE FORM DOES NOT WORK. PLEASE DO NOT ADD SENSITIVE INFORMATION WHEN USING THE FORM.**

## Regex

For this project, I decided to use Regex to help validate some of the form elements. This was also a chance for me to practice using Regex, which was a bit of a challenge. The following regex was used to help create the validation section in the form.

### Phone Number Matching

For phone numbers I wanted to make sure it would catch the following patterns:

- (111)222-3333
- (111)222.3333
- (111)222 3333
- 111.222.3333
- 111-222-3333
- 111 222 3333
- 1112223333

So the following expression was used:

```txt
\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})
```

Breaking down each expression we get:

- `\(?` - checks if we have an open parentheses. If we do not have one the expression is still valid. In order to get the open parentheses we must escape it, therefore it is written as `\(` and we add the `?` after to make it optional.
- `(\d{3})` - is a group that checks for three digits `[0-9]` and is required for the expression to be valid. Here the parentheses are read by Regex as a group symbol. The `{ }` is a quantifier in Regex. When we place a number in between the curly brackets, we are telling Regex to match it exactly to the number given. In this case, three.
- `\)?` - checks if we have an closed parentheses. If we do not have one the expression is still valid. In order to get the closed parentheses we must escape it, therefore it is written as `\)` and we add the `?` after to make it optional.
- `[-\.\s]` - checks if we have either a `-`, a `\.`, or a blank space. The brackets here tell Regex that we are trying to match at least one of the items in between then. Since the `.` is used as a Regex operator, we need to escape it like the parentheses, so we get the following `\.`. The same goes for a white space, in order to add it we need to escape it which is `\s`.
- `(\d{3})` - Same as before.
- `[-\.\s]` - Same as before.
- `(\d{4})` - Same as before with the exception that we are checking for four digits instead of three.

### Password Rules

With the form I wanted to implement some typical password rules:

- A minimum of eight characters
- One lowercase character
- One uppercase character
- One number
- One special character from the following: ! @ # $ % & \*

To accomplish this the following regex was used:

```txt
^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$%&\*])[A-Za-z\d!@#\$%&\*]{8,}$
```

Breaking down each expression we get:

- `^` - This tells Regex that it is the start of the string we are trying to pattern match.
- `(?=.*[A-Z])` - Here we have a more complex Regex idea, so lets break it down:
  - `.*[A-Z]` - Starting with the inner section, this Regex is comprised of our `.` function, our `*` function, then `[A-Z]`:
    - `.` - This operator tells Regex to match any character except line breaks.
    - `*` - This operator tells Regex to match zero or more of the preceding token. In this case if we combine them: `.*` then this means that Regex will match any character (except a line break) zero or more times.
    - `[A-Z]` - When we place anything inside of brackets, these are our character sets. Here we are telling Regex to match anything that is from A to Z, case sensitive.
  - `(?= )` - Wrapped around the inside part is something that looks a little similar to our group from earlier, but this is called a positive lookahead. This tells Regex to match it without including it in the result. Basically, Regex is checking to see if it is there in the string we are trying to search. So the above Regex of `(?=.*[A-Z])` is telling Regex to check to see if there is at least one uppercase letter.
- `(?=.*[a-z])` - The same as above except for lowercase letters.
- `(?=.*\d)` - The same as above except for any number 0-9.
- `(?=.*[!@#\$%&\*])` - The same as above except for the special characters we want. Since `$` and `*` are special characters that Regex uses, we need to escape them as such: `\$` and `\*`.
- `[A-Za-z\d!@#\$%&\*]` - Here we simply tell Regex to match anything in our character set (the brackets), which will be either an uppercase letter, a lowercase letter, a number that is 0-9, or a special character.
- `{8,}` - This is a quantifier. As mentioned above for the telephone expression, the number tells us the exact amount. However, we could be even more specific. By placing a comma after the first number we can tell Regex a range. For example `{2,4}` would mean Regex needs to match our item two to four times. However, since there is no number after the comma in `{8,}` then we are telling Regex eight or more times.
- `$` - Finally this tells Regex that is the end of the string we are trying to pattern match.

**I am not that great with Regex.** However, I felt that by trying them out and hopefully doing my best to explain them, it would help me understand them more as I continue to learn.

### Resources on Regex

Here is a few resources that I have used:

- [Rexegg](https://www.rexegg.com/) - A fun little site on learning Regex.
- [Regexr](https://regexr.com/) - An online tool that helps you put together Regex patterns while also helping you learn.

## Built Using

- HTML
- CSS
- JavaScript

## Live Demo

- [Live Demo of the Sign-up Page](https://luinrandir.github.io/odin-form/)
