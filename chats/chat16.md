# Coming Soon Banner

_Started 2026-05-13 14:27 UTC_

---

## User

On the pre-build solutions I want a giant banner that will cover the whole page saying coming soon or in development. So you should be able to scroll but you should not be able or it doesn't really matter but the whole point is everything Everything is there, it's just very faded so you can't read anything. And then everything is scratched out by, or this whole board page will be covered by a coming soon type thing. 

Make sure it looks prefessiona and keeps an exciting feeling

## Assistant

_[tool: read_file]_

_[tool: list_files]_

Let me check the pre-built solutions page first.

_[tool: read_file]_

_[tool: update_todos]_

_[tool: str_replace_edit]_

On it! Adding the overlay now.

_[tool: done]_

_[tool: fork_verifier_agent]_

Here's what was added to the Pre-Built Solutions page:

- **Page content faded to ~5% opacity** with a blur — all the packages, cards, and sections are still there underneath, just ghosted out
- **Fixed full-page overlay** that stays in place while the faded page can scroll behind it
- **Animated expanding rings** in the brand's blue/purple neon palette
- **Horizontal scan line** sweeping top to bottom on loop
- **"In Development" badge** with a pulsing live-dot
- **Giant "Coming Soon." headline** with a gradient shimmer on the period
- **Progress bar** holding at 72% — gives an exciting "almost there" feel
- **CTA button** linking back to the home page to book a call

Let me know if you'd like to adjust the copy, opacity level, or any of the visual details!

## User

Verifier agent check completed

## Assistant

All good — verifier confirmed everything looks clean. The Coming Soon overlay is live on the Pre-Built Solutions page. Let me know if you'd like any tweaks!

## User

There's some changes I want to make and that is this page should not be scrollable so it should just be the size that it is. The top bar should still be there though. For some reason the top bars were removed and I would just like that to come back. Also, can you change the in development to something else? I would like it to be a little bit more fun, more... I really want you to play around with that phrasing. It should be a lot more fun, approachable and very non-techy. So something like systemizing or construction in progress or Gone fishing will be back in 10 minutes Busy, I actually like it more the one that says Busy choosing flavors Something like that, I want it to be fun So yeah, make it one page, make sure the header bar and the footer is still available. But besides that I like the look. Also the book a call early access, that giant button, it moves and flashes too quickly. So I like the coming soon and that flashes and it works. The book a call is a little bit too laggy for me so that I would like resolved. And the circles that move out also lag a little bit. I like the idea. There's a chance it just lags because we are inside floor design. But just take a look at those for me.

## Assistant

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

Got it — all those changes coming up. Let me rework the overlay.

_[tool: done]_

Done! Here's what changed:

- **No scroll** — page is locked to the viewport size
- **Top nav restored** — sits above the overlay as expected
- **Footer pinned to the bottom** — visible without scrolling
- **Status badge is now playful and rotates** through 8 phrases every ~5.5s:
  - "Busy choosing flavors"
  - "Gone fishing — back soon"
  - "Tinkering in the workshop"
  - "Brewing something good"
  - "Sharpening the pencils"
  - "Out picking the best ones"
  - "Hammers down, almost there"
  - "Currently in the lab"
- **CTA button calmed down** — no more constant shimmer; soft solid gradient with a subtle hover lift instead
- **Rings made lighter and slower** — smaller size, linear timing, `will-change` hints so they're GPU-friendly and shouldn't lag in the design view

Let me know if you want different phrases, a different rotation speed, or a tweak to the button styling!

