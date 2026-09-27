# Contact form without your own backend

You can make the existing form work with no custom backend by posting to a hosted form service.

## Quick recommendation

Use Formspree first:

- Free tier available
- Very fast setup
- Spam filtering and email notifications built in

## Option 1: Formspree (free + paid)

Website: https://formspree.io

### Steps

1. Create a form endpoint in Formspree.
2. Put the endpoint URL in your form action.
3. Set method to POST.
4. Keep your frontend validation and success message.

### HTML example

```html
<form
  class="contact-form"
  action="https://formspree.io/f/yourFormId"
  method="POST"
>
  <input name="name" type="text" required />
  <input name="email" type="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Verstuur</button>
</form>
```

Notes:

- Add a hidden `_subject` field if you want custom email subject lines.
- You can add a hidden honeypot field for extra spam reduction.

## Option 2: Netlify Forms (best if hosted on Netlify)

Website: https://www.netlify.com/products/forms/

### Steps

1. Host the site on Netlify.
2. Add `name` and `netlify` attributes to your form.
3. Netlify captures submissions automatically.

### HTML example

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <input name="name" type="text" required />
  <input name="email" type="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Verstuur</button>
</form>
```

## Option 3: Getform or Basin (cheap and simple)

Websites:

- https://getform.io
- https://usebasin.com

Both are similar to Formspree:

- Copy endpoint URL
- Add it to your form action
- Receive submissions by email/dashboard

## Option 4: Google Forms bridge (free, less polished)

You can post to Google Forms or use Google Apps Script as a lightweight endpoint.

Pros:

- Free
- Data lands in Google Sheets

Cons:

- Styling and workflow are less clean
- More manual setup

## What to change in this project

Current file: docs/script.js

Right now submit is prevented with JavaScript (`e.preventDefault()`).

You have two paths:

1. Keep AJAX-style submit:

- Submit with `fetch()` to the form provider endpoint.
- Show success/failure message in place.

2. Use plain HTML submit:

- Remove `e.preventDefault()`.
- Let browser post form directly to provider endpoint.

## Cost guidance

- Formspree: free starter is usually enough for low traffic.
- Netlify Forms: cheap if your site is already on Netlify.
- Getform/Basin: low-cost and good UX.

If you want, I can implement Formspree directly in the current codebase with graceful success and error states.
