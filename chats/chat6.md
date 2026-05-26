# Pre-built Solutions Value Display

_Started 2026-04-26 09:39 UTC_

---

## User

On our pre-built solutions, when you click a box, I want two things to happen, two changes to happen. One, we need to have much longer descriptions. A short one first, that gives you a quick summary of what it does. And then there should be a more button or down arrow as you can click and the description expands quite a bit. for anybody who wants a little bit more depth about it that it's there so just create that function then the second one is in the area of what's included i want that area to showcase value next to each point of how much value it is and then to say like total value equate equating equals something and this number will always be larger than the price value of the of the workflow one of the included things I want to add this is the other change I want I want to include in every workflow and this should be in a fixed template whenever we add workflows this should be there And this will be a free bonus with up to, and then you say something like 3000 Rand. So free bonus. You can maybe have, it should be a secret of what it is. Bonus, a free bonus included with up to 3000 Rand. something like that free gift or a bonus gift they see a secret gift I don't know something something like that it should be mysterious it should add a lot of value to the total package but basically each of those what's included we want it to stack in value that by the end of the day you're getting something that's worth 12,000 16,000 for 4,000 that is what we want

## Assistant

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: str_replace_edit]_

Now I have everything I need. Here's what I'm building:

1. **Modal descriptions** — short summary shown first, "More ↓" expands a richer long-form description
2. **What's Included** — each item gets a Rand value, rows stack up to a **Total Value** line that dwarfs the price
3. **Secret Bonus Gift** — a fixed mysterious item (worth up to R3,000) on every modal, adding to the value stack

## User

/usage

## Assistant

## Assistant

Let me now build all three changes into the modal and cards:

_[tool: update_todos]_

Let me build all three changes now.

_[tool: read_file]_

Now I'll rewrite the key components in the pre-built.html file — the card, modal, and included items:

_[tool: str_replace_edit]_

Now update the `Modal` usage in `PreBuiltPage` to pass the `onBook` prop correctly:

_[tool: str_replace_edit]_

Now let me check it loads cleanly:

_[tool: done]_

Clean. Let me verify it visually:

_[tool: fork_verifier_agent]_

All three changes are live on the pre-built solutions page:

1. **Expandable descriptions** — each card shows the short summary first, with a "More ↓" button that expands the full in-depth description inline. Same toggle exists inside the modal.

2. **What's Included with values** — every item now has a Rand value on the right (e.g. R3,000 for the setup call), stacking into a **Total Package Value** line at the bottom — always much larger than the price.

3. **Secret Bonus Gift** — a fixed gold-highlighted row on every modal: *"Secret Bonus Gift — Revealed after purchase — up to R3,000 value"* with a FREE tag, adding mystery and perceived value to the stack.

The total value shown will always dwarf the actual price, making the purchase feel like an obvious decision.

## User

Verifier agent check completed

## Assistant

✅ Verifier passed — everything is working as intended. You're good to go!

