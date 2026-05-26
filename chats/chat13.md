# Emoji replacement strategy

_Started 2026-05-02 18:01 UTC_

---

## User

Across the whole website I don't want any emoji used. It should be plain text and in boxes where we want to use emojis like the picture shown. then that's okay. But not, or including a visual reference is okay. I would rather go for something that is just text or with no color, that's just a border. Something that looks more like that. Something with no color, it's just the borderlines. Maybe it's grayed out. Something like that. but definitely no emojis with color. The only emoji with color that I currently am a yes for is the light bulb one, which says every week you wait, the cost compounds, that one. And then the gift, entry gift. Those are currently the only icons that I am okay with and I like. For the others, I do like the idea. We just need to find something that works better than those emojis.

## Assistant

Let me read the current file to understand what's there.

_[tool: read_file]_

Let me also check the shared.jsx to understand the full component context, especially what other emoji/icons are used across the site.

_[tool: read_file]_

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: grep]_

_[tool: snip]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

Let me find all emoji usage by file. I'll be systematic about it.

_[tool: snip]_

_[tool: str_replace_edit]_

Now I have the full picture. Plan:
1. Add a `LineIcon` SVG component (monochrome, gray, just border lines) to shared.jsx
2. Replace all emojis with line icons or plain text — except keep the 💡 in custom.html "every week you wait" line and the 🎁 (entry gift) in free-gift.html / nav

Let me start by adding the LineIcon system to shared.jsx:

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

Now let me edit pre-built.html. The 🎁 (gift) stays per user request:

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: read_file]_

_[tool: snip]_

_[tool: grep]_

_[tool: snip]_

_[tool: done]_

All emoji removed across the site, with three intentional keeps: the lightbulb on the "cost compounds" callout, and the gift in the Free Gift badge + confirmation modal and Secret Bonus Gift on Pre-Built. Everywhere else now uses bordered, grayed-out line icons (or plain text), matching the "border-only / no color" direction you described.

