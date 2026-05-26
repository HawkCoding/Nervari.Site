# Free Gift Landing Page

_Started 2026-04-26 09:36 UTC_

---

## User

something I want us to create is a new tab at the top that says free gift and it should be a new page and this page will have a free workflow or project it will rotate monthly and be a new one every month and all that users need to do is they need to input the email address to get it and it should just be a good title that catches the eye and quickly attention to say something like adding value at no cost or here's something free for you so you can start getting the benefits today and then it should there should just be a short description a place where they input the email and once they put their mail in and send yes then we say pop up a thank you message it says thank you an email will be sent to you remember to check back for the next workflow for the next upcoming workflow something like that I do want somewhere on the page it should be eye-catching it should there should be some eye candy perhaps you can have a little bit of animations on the page just to make it look like hey I want something the user needs to feel special in this page into this somewhere in the page I also want to say every month we'll have a new workflow and it's guaranteed to add value or a proven workflow that has added value to businesses. Something like that. I want that somewhere on the page.

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I have everything I need. Let me build the Free Gift page and add it to the nav.

_[tool: str_replace_edit]_

_[tool: write_file]_

Now let me build the Free Gift page:

_[tool: done]_

_[tool: fork_verifier_agent]_

The **Free Gift** page is live! Here's what was built:

- **Golden nav pill** — "Free Gift 🎁" stands out from the regular nav links with a warm yellow badge
- **Hero** — Animated gift box, shimmer headline, floating particles + spinning rings, and a pulsing CTA button
- **Email form** — Clean input with a gold submit button; submitting triggers a **thank-you popup** with the return reminder
- **This Month's Workflow card** — Shows the current month's featured workflow with a live badge and a sweep-shine animation
- **4 value cards** — Monthly refresh, proven in the wild, ready to run, built for business
- **Guarantee banner** — "A new workflow lands every month — guaranteed to add value" with its own sweep animation

To update the featured workflow each month, just edit the title and description inside the `WorkflowCard` component in `free-gift.html`.

## User

Something I want to say, I love the free gift and animations and everything. I really like it. Something I would like is, we shouldn't say what is the monthly gift that is included. Should be a simple page with not a lot of information on it. Just like, I love the first section up until the email. I love the no spam, but from this month's gift on, I can't really see. Okay, you can just remove this month's gift, that segment. The promise, that one we can keep. And then the bottom one we can keep. So I like those.

## Assistant

_[tool: str_replace_edit]_

_[tool: done]_

Done! The "This Month's Gift" section is removed — the page now flows cleanly from the hero + email form straight into The Promise cards and the guarantee banner. Nice and lean.

