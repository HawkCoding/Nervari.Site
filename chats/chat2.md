# Font Change

_Started 2026-04-24 12:41 UTC_

---

## User

With our current system Can we change the font.

## Assistant

_[tool: grep]_

_[tool: questions_v2]_

Sure! Which font would you like to switch to? Here are some great options that would work well with your dark, tech-forward aesthetic:

## User

Questions timed out; go with defaults

## Assistant

_[tool: str_replace_edit]_

Going with **Space Grotesk** for headings and **Inter** for body text — a sharp, modern pairing that suits the dark tech aesthetic well.

_[tool: run_script]_

Now let me update all the font references throughout the file:

_[tool: done]_

Fonts updated! The site now uses **Space Grotesk** for all headings and display text, and **Inter** for body copy. Let me know if you'd like to try a different pairing or make any other adjustments.

## User

Handle these each 1 at a time. And tell me when each 1 is done so we know where we are.

Address these comments from my teammates:

**Hancke** (on SALES Sales Automations Capture more leads, follow up faste…):
Thes blocks of the different pre built packages are not well sectioned off. I want something that indicates the end of an section.

**Hancke** (on NOT SURE WHICH PACKAGE? Book a Call and We'll Point You in …):
I love this block and the colour. I want to add animation that makes it pull a users eyes more.

**Hancke** (on 28%):
This should be larger. More animated and maybe we look at something else that is more than just a loading bar. Lets get it more dramatic and out there with a cool idea.

**Hancke** (on AI AUTOMATION FOR SMALL BUSINESSES Stop Leaving Money on th…):
I want over the whole website to get a overall font increase. It needs to be more bold. Easy to read and stand out.

**Hancke** (on Nervari):
I would like an animation that happens when you hover over the name.

**Hancke** (on 🎯 Tailored to Your Workflow No generic templates. The solu…):
Make this blockslarger to catch your eye. And decress the word count - and get the same message across.

**Hancke** (on COMMON CONCERN Custom Doesn't Mean Complicated or Expensive…):
Should decrease the amount of words and focus. So lets talk mainly about the cost in a black and then we add one of the other points as to why we should get this and how not getting it is costing you more. Then with this idea redesign this block

**Hancke** (on Custom software and automation are often less expensive tha…):
Take this and add it in to a block like on the right hand size

**Hancke** (on BESPOKE AUTOMATION Custom Solutions Built Around Your Busin…):
Both buttons at the bottom go to the same place. We need to find a way to eaither add value or remove a button.

**Hancke** (on Built Around Your Business):
I like it more to say. Built for your business.

**Hancke** (on We Built This Because We Saw the Problem Firsthand.):
The idea is correct but I dont love the wording. Also make it a bit less words to help it stand out

**Hancke** (on How It Works):
This is a good idea. Let's create a page for this. The page should be refrence at the bottom of pre-built page.

**Hancke** (on HOW IT WORKS A Clear Process. No Surprises. Seven structure…):
I would like to view this in a simple left to right format.

**Hancke** (on Questions Before You Book):
Rename this.

**Hancke** (on SPOTS BOOKED THIS MONTH 12 / 15 booked 3 spots remaining th…):
For this booked counter. I want it to reflect When a user has clicked the book a call and successfully made a booking, I wanted to add, but we need to be sure that this can't be exploited by booking a few calls. So only one call should be booked and it should register that somewhere and just have that plus one for the session's duration. Perhaps if it picks up the ID or something for the day or something and knows that it should be one more but I'm okay with just as long as the session persists that the book counter is one more

**Hancke** (on Name* Business Name* Email* Phone / WhatsApp* Enquiring Abo…):
I want to reduce the amount of field you need to fill in. So lets try and remove some field not as valuble. The cellphone number and email is the most important. Then name. Then business email. Then enquireing about then notes. So lets see how we can reduce this to less friction.

**Hancke** (on Book a Call →):
The book a call option on prebuilt and on the home page. I want it directly to open a popup where they can fill in information for a call.

**Hancke** (on ⏱ 4–6 hrs/week):
This does not show that it has the value to save this much. We need to find a new way to make that clear.

**Hancke** (on LIMITED AVAILABILITY Save Your Spot We work with a limited …):
For this section where we have limited space. I want to specify that booking meetings and getting persoanl attention with your business problem is something we want to dedicate our time to. There for its limited and t ensure you get our complete focus you need to book a spot. Just say the idea of this in less words.

**Hancke** (on Contact):
Change this to: something like talk to us. Or something that is more discriptive and tells them through this can book with us.

**Hancke** (on VS):
I would like this to stand out a bit more

**Hancke** (on TRUSTED BY BUSINESSES ACROSS Retail Professional Services T…):
This section falls away a bit and cant easily be read. I would like to do a scan over the site for similar areas where the information is hard to read.

## Assistant

_[tool: update_todos]_

Got it — tackling them one at a time. Let me first get a full picture of the files involved.

_[tool: list_files]_

Let me read the relevant files and start on item 1.

_[tool: read_file]_

_[tool: str_replace_edit]_

Starting on **Item 1 — Section dividers for pre-built packages**.

The sections currently only differ by a very subtle background shift. I'll add a clear visual end-cap — a full-width gradient rule with a centred glow node — so each category section reads as a distinct block.

_[tool: run_script]_

Now adding the section divider and updating fonts throughout:

_[tool: str_replace_edit]_

Now adding the section divider component and wiring it in:Now wire the divider into each category section:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: str_replace_edit]_

Need to wrap section + divider in a fragment:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 1 done** — Section dividers added to pre-built packages. Each category now ends with a glowing gradient rule labelled with the next section's name.

---

Moving to **Item 2 — 'Not Sure Which Package?' block: eye-catching animation.**

Let me read the current state of that CTA section:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll add animated floating rings, a breathing glow border, and orbiting particles to make this block pull the eye:Now replace the static CTA section with the animated version:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 2 done** — The "Not Sure Which Package?" block now has orbiting glowing dots, pulsing expanding rings, a breathing glow border, and a shimmer gradient button.

---

Moving to **Item 3 — '28%' stat: larger, more dramatic, creative treatment.**

Let me find where this lives:

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Let me search more specifically for "28%" in the files:

_[tool: read_file]_

_[tool: grep]_

_[tool: str_replace_edit]_

Found it — that's the **scroll progress indicator** on the pre-built page (the thin sidebar bar showing %). Hancke wants it larger, more dramatic, and more creative. I'll replace it with a bold circular arc progress ring with a glowing number:

_[tool: done]_

_[tool: update_todos]_

✅ **Item 3 done** — Scroll progress is now a circular arc ring with a glowing gradient fill and a bold number in the centre. The glow intensifies as you scroll deeper.

---

Moving to **Item 4 — Overall font size increase: bolder, more readable across the whole site.**

I'll increase base body text, headings, labels and supporting copy across all pages + shared.jsx:

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll update shared.jsx first (nav, footer, atoms), then sweep all HTML files:

_[tool: run_script]_

Now sweep all HTML files for font size bumps:

_[tool: run_script]_

Also update the Google Fonts links on all pages that still use the old fonts:

_[tool: run_script]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 4 done** — Font sizes bumped across all pages and shared components. Body text, headings, labels and nav all read larger and bolder.

---

Moving to **Item 5 — 'Nervari' logo: hover animation.**

The logo is in `shared.jsx`. I'll add a hover effect — each letter staggers in with a colour shift and slight lift when you hover the name:

_[tool: str_replace_edit]_

Now close the nav div properly — need to check the rest of the nav block is still intact:

_[tool: read_file]_

Good — the structure looks clean. Let me verify and show the result:

_[tool: done]_

_[tool: update_todos]_

✅ **Item 5 done** — Hovering "Nervari" now staggers each letter with alternating blue/cyan colours, a sine-wave lift, and a soft glow. The background N also brightens.

---

Moving to **Item 6 — Feature blocks: larger, fewer words.**

The comment is on the "🎯 Tailored to Your Workflow" block in `custom.html`. Let me read those feature cards:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll make the blocks larger, punchier, and cut the copy way down:

_[tool: done]_

_[tool: update_todos]_

✅ **Item 6 done** — Feature blocks are larger, bolder, and cut to 1 punchy line each. Added a top accent bar and increased padding for impact.

---

Moving to **Items 7 & 8 together** — they're on the same block in `custom.html`: redesign the "Common Concern" section around cost, and move the cost copy into a right-side block. Let me read it:

_[tool: grep]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I'll redesign this block — cost-focused headline on the left, a bold cost-breakdown card on the right, minimal copy:

_[tool: done]_

_[tool: update_todos]_

✅ **Items 7 & 8 done** — "Common Concern" is now a bold two-column layout: left has a punchy cost headline + a "💡 why act" callout, right has a dark card with 3 big cost stats (hrs lost, leads lost, owner dependency). Much tighter copy.

---

Moving to **Item 9 — Bespoke page: fix duplicate buttons.**

Both buttons at the bottom of `custom.html` go to `contact.html`. Let me check them and give the second one distinct value:

_[tool: grep]_

_[tool: run_script]_

The ghost button is a duplicate — I'll give it real value by pointing to the Pre-Built options as an alternative path (useful for users not ready to commit to custom):

_[tool: done]_

_[tool: update_todos]_

✅ **Item 9 done** — The ghost button now reads "Explore Pre-Built Options →" and links to `pre-built.html`, giving users a clear alternative path instead of two buttons going to the same place.

---

Moving to **Items 10 & 11 together** — both are quick copy changes in `custom.html`:
- "Built Around Your Business" → "Built for Your Business"  
- Reword + shorten the "We Built This" heading section in `who-we-are.html`

_[tool: grep]_

_[tool: grep]_

Two quick copy edits:

_[tool: str_replace_edit]_

Now the "We Built This" heading in who-we-are.html:

_[tool: str_replace_edit]_

_[tool: read_file]_

Let me check the paragraph is closed properly:The old text tail is still there. Let me fix that:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Items 10 & 11 done** — "Built for Your Business" updated, and the who-we-are headline is now short and punchy: *"We saw the problem. So we built the fix."*

---

Moving to **Items 12 & 13 together** — Create a dedicated "How It Works" page with a left-to-right format, and link to it from the pre-built page.

The 7-step process currently lives in `custom.html`. I'll extract it into its own `how-it-works.html` page with a horizontal left-to-right stepper layout:

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: write_file]_

Now I'll build the dedicated How It Works page with a clean horizontal left-to-right layout:Now link to it from the pre-built page footer area — add a reference at the bottom of the packages section:

_[tool: str_replace_edit]_

Also update the footer nav to include "How It Works":

_[tool: str_replace_edit]_

Now check how-it-works.html loads cleanly:

_[tool: done]_

_[tool: update_todos]_

✅ **Items 12 & 13 done** — New `how-it-works.html` page created with a clean left-to-right two-row stepper (steps 1–4 top row, 5–7 bottom row). Clicking a step expands a detail panel. Linked from the pre-built page with "See How It Works →".

---

Moving to **Item 14 — Rename "Questions Before You Book"** in `index.html`:

_[tool: grep]_

_[tool: str_replace_edit]_

Also rename it in contact.html if it appears there:

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 14 done** — "Questions Before You Book" is now **"Good Questions. Honest Answers."** on both the home and contact pages.

---

Moving to **Item 15 — Spots booked counter: session-persistent +1 on booking.**

The logic: when a user successfully books a call, the counter increments by 1. It persists for the session (not exploitable by multiple bookings — tied to sessionStorage so it only counts once per session). Let me read the current counter in `contact.html`:

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I'll update the `ContactPage` to track a session booking and increment the counter by 1 on submit (once per session):Now update `handleSubmit` to increment the counter:

_[tool: str_replace_edit]_

Also update the success confirmation to mention the spot is now counted:

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 15 done** — Booking counter now increments by +1 on form submit, stored in sessionStorage keyed to the day. One count per session max — can't be exploited by repeat submissions.

---

Moving to **Item 16 — Contact form: reduce fields.**

Priority order per Hancke: email & phone most important, then name, then business name, then enquiring about, then notes. Let me read the current fields:

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll strip it down to 4 fields: Name, Email, Phone, and one optional "What's your biggest bottleneck?" — removing Business Name and the separate Enquiring About field:Now replace the form fields markup:

_[tool: str_replace_edit]_

Also fix the `half` prop — Name should be full width since we removed the adjacent Business Name field:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 16 done** — Form reduced from 6 fields to 4: Name, Email, Phone/WhatsApp, and one optional "What's your biggest bottleneck?" textarea. Much less friction.

---

Moving to **Item 17 — "Book a Call" opens a popup form on pre-built & home pages** instead of linking to contact.html.

I'll build a shared popup component in `shared.jsx` with the same slim 4-field form, then trigger it from "Book a Call" buttons on both pages:

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll add a `BookingPopup` component to shared.jsx and export it:Now wire the popup into `index.html` — add popup state and swap the "Book a Call" buttons:

_[tool: grep]_

_[tool: grep]_

I'll add popup state to `HomePage` and pass it down, then swap the buttons to use `onClick` instead of `href`:

_[tool: str_replace_edit]_

Now swap the two Book a Call buttons to open the popup, and add the popup at the end of the component:

_[tool: str_replace_edit]_

Now add the popup render at the end of the HomePage return:

_[tool: grep]_

_[tool: grep]_

_[tool: str_replace_edit]_

Now do the same for pre-built.html — find the Book a Call buttons and wire up the popup:

_[tool: grep]_

_[tool: str_replace_edit]_

Now swap the CTA "Book a Call" anchor to open popup, and the Modal's button too:

_[tool: str_replace_edit]_

Now add the popup render at the end of PreBuiltPage:

_[tool: str_replace_edit]_

Also update the nav "Book a Call" button to trigger the popup in pre-built. Actually - since the nav button is in shared.jsx and is a global link, that's fine to keep going to contact.html. The key popup trigger pages are index and pre-built. Let me check both load cleanly:

_[tool: done]_

_[tool: show_html]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 17 done** — "Book a Call" on the home page and pre-built page now opens a sleek popup form with 4 fields. The package modal's button also triggers the popup. No redirect to contact.html needed.

---

Moving to **Item 18 — "⏱ 4–6 hrs/week" stat: reframe the value.**

The comment says it doesn't show enough value. Let me find it:

_[tool: grep]_

_[tool: str_replace_edit]_

I'll reframe both the "Time Lost" and "Time Reclaimed" KPI cards to show the monetary/business cost clearly, not just hours:Also check pre-built package cards — the `⏱ {pkg.time}` label there could also be reframed:

_[tool: grep]_

_[tool: str_replace_edit]_

The package card footer shows hours but not the monetary value. I'll swap the stat to show the estimated value recovered — far more compelling:

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 18 done** — "4–6 hrs/week" now shows as "saves X hrs/week" alongside "💰 R6k–R15k/mo value" on package cards. The home page KPI cards now frame time saved in terms of money and deals.

---

Moving to **Item 19 — "Limited Availability" section: shorter, sharper copy.**

Hancke wants the idea to be: booking meetings = dedicated personal attention = limited spots to ensure full focus. Less words:

_[tool: read_file]_

_[tool: str_replace_edit]_

Also find and update the "LIMITED AVAILABILITY" block on `index.html`:

_[tool: grep]_

Good — it's only on the contact page. Let me verify it's clean:

_[tool: done]_

_[tool: update_todos]_

✅ **Item 19 done** — Headline is now "Your Problem Deserves Our Full Attention." with tighter copy: limited spots = complete focus, not a rushed handoff.

---

Moving to **Item 20 — Rename "Contact" nav label to something more descriptive.**

Hancke wants something like "Talk to Us" or that tells users they can book through it. I'll update it in `shared.jsx`:

_[tool: str_replace_edit]_

Also update the `active` prop references across pages — pages that pass `active="Contact"` need updating:

_[tool: run_script]_

Also update the nav CTA button label so it doesn't duplicate — change it to "Talk to Us":

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Actually let me reconsider — having both "Book a Call" nav link and "Talk to Us" CTA is confusing. Better: nav link = "Talk to Us", CTA button = "Book a Call →":Now update active prop references again:

_[tool: run_script]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 20 done** — Nav now shows "Talk to Us" (descriptive, tells them they can book) with "Book a Call →" as the action CTA button.

---

Moving to **Item 21 — "VS" divider: make it stand out more.**

This is on `index.html` in the manual vs automated comparison:

_[tool: grep]_

I'll replace the faint vertical "VS" with a bold glowing badge:

_[tool: str_replace_edit]_

Also need the VS column to be `alignItems:'stretch'` so the lines fill properly:

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 21 done** — "VS" is now a bold glowing gradient pill (indigo→purple) with connecting lines above and below. Much more visible.

---

Last one! **Item 22 — "Trusted By" section + readability scan across the site.**

Let me read the Trusted By section and then scan all pages for low-contrast/hard-to-read text:

_[tool: read_file]_

_[tool: str_replace_edit]_

I'll fix the Trusted By section first with better contrast, then sweep all files for low-opacity text:Now run a readability sweep across all files — bump any opacity below 0.3 in text elements up to at least 0.4:

_[tool: run_script]_

Also sweep shared.jsx for low contrast:

_[tool: run_script]_

_[tool: done]_

_[tool: update_todos]_

✅ **Item 22 done** — "Trusted By" industries are now readable pill tags with proper contrast. Site-wide readability sweep bumped all sub-0.3 opacity text up to legible levels across all 6 pages.

---

**All 22 items complete.** Here's a summary of everything done for Hancke:

| # | What changed |
|---|---|
| 1 | Pre-built section dividers with glowing gradient rules |
| 2 | "Not Sure" CTA: orbiting dots, pulsing rings, shimmer button |
| 3 | Scroll progress: circular arc ring with glow |
| 4 | Font sizes bumped site-wide (bolder, more readable) |
| 5 | "Nervari" logo: staggered letter hover animation |
| 6 | Feature blocks: larger, copy cut to 1 line each |
| 7 & 8 | "Common Concern" redesigned around cost with right-side data card |
| 9 | Duplicate buttons fixed → "Explore Pre-Built Options →" |
| 10 | "Built Around" → "Built for Your Business" |
| 11 | "We Built This" → "We saw the problem. So we built the fix." |
| 12 & 13 | New `how-it-works.html` page, left-to-right stepper, linked from pre-built |
| 14 | "Questions Before You Book" → "Good Questions. Honest Answers." |
| 15 | Booking counter: session-persistent +1, unexploitable |
| 16 | Contact form: 6 → 4 fields |
| 17 | "Book a Call" → popup form on home & pre-built pages |
| 18 | Time stat reframed to show monetary value (💰 R6k–R15k/mo) |
| 19 | "Limited Availability" → "Your Problem Deserves Our Full Attention." |
| 20 | "Contact" nav → "Talk to Us" |
| 21 | "VS" → bold glowing gradient pill |
| 22 | "Trusted By" → readable pill tags; low-contrast text sweep across all pages |

## User

Do 1 at a time please

Address these comments from my teammates:

**Hancke** (on AI AUTOMATION FOR SMALL BUSINESSES):
I want this to stand out a bit more. So make it a bit larger. And lets add some anumation to it. I want it to look like the sentence is being built.

**Hancke** (on READY TO START Stop Running the Business. Start Building It…):
Still would like some sort of animation here. Maybe like a bolt of electricity or something technology and ai. And it should only apear once on the scroll and then the effect should happen again if you hover the book a call button in this block.

**Hancke** (on TRUSTED BY BUSINESSES ACROSS Retail Professional Services T…):
It says scroll with pulsing effect. But does not make sense or match what we have.

**Hancke** (on Figures are illustrative directional estimates based on com…):
It still dissapears with the background. Need to fix

## Assistant

_[tool: grep]_

Got it — one at a time. Starting with **Item 1: "AI AUTOMATION FOR SMALL BUSINESSES" — larger + sentence-building animation.**

_[tool: read_file]_

I'll replace the static `<SLabel>` with a custom typewriter component that builds the label word by word with a cursor:Now I'll add the TypeBuilder component just before `HomePage` and wire it in:

_[tool: str_replace_edit]_

Now add the `cursorBlink` keyframe and replace the `<SLabel>` with `<TypeBuilder>`:

_[tool: str_replace_edit]_

Also remove the wrapping `fadeInUp` div since TypeBuilder handles its own reveal:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Let me bump the size to make it more prominent:

_[tool: done]_

✅ **Item 1 done** — "AI AUTOMATION FOR SMALL BUSINESSES" now types itself out character by character when the hero scrolls into view, with a blinking cursor that disappears when complete. Larger and more prominent than the old static label.

---

Ready for **Item 2** whenever you are — the "READY TO START" section animation (electricity/tech bolt on scroll, replay on hover).

