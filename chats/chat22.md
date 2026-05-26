# Remove Scroll Element

_Started 2026-05-25 05:39 UTC_

---

## User

Can you remove this Scroll from the page

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

The "SCROLL" indicator has been removed. Let me know if there's anything else you'd like to change!

## User

Then also revert the COming soon on Pre built To what it was before and save that as its own page that we can redirect to.

## Assistant

_[tool: grep]_

_[tool: list_files]_

Let me check the existing `pre-built.html` file first.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

Got it. I'll:
1. Strip the Coming Soon overlay from `pre-built.html` so the full page works
2. Save the Coming Soon version as `pre-built-coming-soon.html` for redirect use

_[tool: read_file]_

_[tool: run_script]_

_[tool: done]_

Done! Here's what was done:

- **`pre-built.html`** — Coming Soon overlay removed, the full packages page is now live and working
- **`pre-built-coming-soon.html`** — The original Coming Soon version saved separately, ready to redirect to whenever needed

To redirect users to the Coming Soon page instead, just change any link pointing to `pre-built.html` to `pre-built-coming-soon.html`. Let me know if you need anything else!

