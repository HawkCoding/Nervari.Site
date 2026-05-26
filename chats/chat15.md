# Hand-drawn money table animation

_Started 2026-05-12 07:19 UTC_

---

## User

I want to create something that has a little bit more visual impact on our main screen. And what I'm thinking is we say stop leaving money on the table with manual processes. As the screen waits for two three seconds I want a white line drawn or hand drawn table so only the outlines but it needs to look a little bit hand drawn with an animation to fly in from the side and then park itself like first quarter or third quarter of the screen and then i want money animations also white drawn outline not colored in so it's transparent only the white lines solid and then it falls down from the top of the screen and stacks on top of the table for a bit. Is this something you can build for me?

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Built the hand-drawn scene on the hero:

- **~2.5s after load**, the table flies in from the right and its outline strokes draw on in sequence (back edge → sides → front → back legs → front legs), like a sketch coming together.
- **~1.2s later**, five white-outline banknotes (just stroked $ signs with wobbly bill borders and corner ovals) tumble down from above the viewport, each with a different starting rotation, and stack on top of the table with a slight bounce.
- The whole scene sits at z-index 1 (behind the headline text), so "Stop Leaving Money on the Table" reads on top of the pile.
- After about 11s the scene fades out so it doesn't compete with the rest of the page on a long read.

Refresh the hero to replay.

## User

I want you to move the table to the side of the screen so it shouldn't be in the middle to be on the side of the screen it should fall behind the text and the table should be more illustrative of an actual table so it should have depth and feeling and then the money it doesn't have to show all money counts and rather that drop stacks of money down on the table that stack the top of each other. More like you'll see in just a table that creates a mountain of money almost. So just help with those changes.

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Here's what changed:

**Table** — now fully 3D with a proper 3/4 perspective: visible top surface, a front face showing the table's thickness, a left face for depth, and an apron rail connecting the legs. It flies in from the lower-right and strokes draw in sequentially (top surface → faces → back legs → front legs → apron). Positioned to the right side of the hero, partially behind the text.

**Money** — instead of scattered individual bills, 4 stacks of banded cash drop one at a time (~440ms apart) and pile on top of each other, building a growing mountain on the table. Each stack shows the perspective top face with a $ sign, plus bill-edge lines down the front showing the stack depth.

Refresh the page to replay from the start (2.5s delay, then stacks begin ~1.4s after the table lands). The whole scene fades at ~13s.

## User

Verifier agent check completed

## Assistant

All good — verifier confirmed the table is right-side, 3D, stacks are piling correctly, and everything sits behind the text. 

Refresh the hero to replay the full sequence anytime.

