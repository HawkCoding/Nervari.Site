# WhatsApp Contact Button

_Started 2026-05-01 11:07 UTC_

---

## User

Something I would like to incorporate is when you go to the talk to us. this should be an option for a whatsapp like just a whatsapp icon or whatsapp button but it should match our theme in a way and with this it will open a whatsapp message for our business to send a message it's not going to be a valid one now but you can use the following number in the WhatsApp command. We don't showcase this number but it's a placeholder. It's 063-097-7801.

## Assistant

_[tool: read_file]_

Let me look at the shared.jsx to understand the `SiteNav`, `SiteFooter`, and other shared components to find the "Talk to Us" section.

_[tool: read_file]_

Now I can see the full picture. The "Talk to Us" link goes to `contact.html`. I need to find where that page is and add a WhatsApp button to it. Let me check if it exists, and also look at the nav — the "Talk to Us" nav link is the right place to add a WhatsApp option alongside the existing contact flow.

The user wants a WhatsApp button added to the "Talk to Us" / contact experience. Let me check if contact.html exists:

_[tool: list_files]_

_[tool: read_file]_

Now I have the full picture. I'll add a WhatsApp button to the contact page — it should sit naturally alongside the "Book a Call" form section as an alternative contact option. I'll style it to match the dark purple theme while keeping WhatsApp's recognisable green identity subtly present.

_[tool: str_replace_edit]_

Now let me show you the result:

_[tool: done]_

Clean! Here's what was added to the **Talk to Us** page:

- A **"Chat on WhatsApp"** button sits below the three info points (response time, call duration, no obligation), separated by a subtle divider
- Uses the real WhatsApp deep link format (`wa.me/27630977801`) with a pre-filled opening message — tapping it on mobile opens WhatsApp directly into a conversation with your number
- The button uses **WhatsApp green** (`#25D366`) as a subtle tint on the border, background, and icon — enough to be recognisable, but dark and restrained enough to match the Nervari theme
- Hover state brightens the green glow slightly
- The label **"— we reply fast"** adds a light trust nudge without being pushy

The number (`063-097-7801` → `27630977801`) is baked into the link. Swap it for the real number whenever you're ready.

