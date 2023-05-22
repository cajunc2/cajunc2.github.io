---
layout: layout.njk
title: Getting Video Out
permalink: "pro-83/{{ title | slugify }}/"
eleventyExcludeFromCollections: false
tags:
- PRO-83
- PRO-VIDEO
- z80
---
# {{ title }}

Previously, I was able to confirm that the PRO-VIDEO did have additional ROMs mapped into normal address space.
Better yet, it looked like they had some program code.
I tried pointing the program counter register at the addresses at the beginning of those ROMs and executing the code, but nothing meaningful happened.
If anything was happening, I was going to need working video output to see it.

Since I didn't have access to equipment that would receive an analog RF television signal, I did what anyone would do.
I hit the data sheets for the video chips (MC6847P and MC1372P) and found an example circuit for composite video output.
A few (read: so so many) hours in KiCad and a week or two waiting for PCBs to ship from China and I had my own custom adapter board with a composite video jack.

{% FullWidthImage "pro-83/03-tvoutput" "installed.jpg" %}

Assembly was quick and a test-fit was successful. Time to get it hooked up to a TV!

It's only moderately embarrassing to admit that I didn't have a good way to output composite video at this point in my "career."
I did have a TV in the bedroom with a composite input though, so I lugged the whole pile upstairs, hooked it all up, powered it on, and.................

{% FullWidthImage "pro-83/03-tvoutput" "firstlight.jpg" %}

Um, okay. Well it's clearly WORKING... sort of? It's awfully green.
I checked my connections and everything looked good.
No missed or bad solder joints.
I guess troubleshooting could wait until after I've explored things a bit.
(Yes, I know any TRS-80 CoCo owners are screaming right now. Just bear with me for the sake of the narrative!)

I decided to run the program that was on the ROM chip labeled "JEU" at address 0x7000, so I got to work entering commands:

- REX
- 5 (PC)
- 70
- NEX
- 00
- NEX
- EXE

{% FullWidthImage "pro-83/03-tvoutput" "balle.jpg" %}

My suspicion that the author was french-speaking ("jeu" being French for "game") was confirmed.
"Balle au Mur" translates to "Wall Ball" in English.

It took a bit of fiddling to figure out how to properly connect the included keyboard and figure out what keys do what, but indeed it's a clone of Breakout!

{% FullWidthImage "pro-83/03-tvoutput" "balle2.jpg" %}

For those who are curious, it's on the crude side, as far as the gameplay is concerned. And after the ball hits the paddle the first time, the game accelerates to a ludicrously difficult speed.

Pretty exciting stuff, I have to say! I did do some more research on the MC6847P and realized that, of course, the color palette is completely normal and everything with the adapter board is working perfectly.

Next, we'll explore the rest of what's on this card and get into something really deep...

---

[Back to PRO-83](/pro-83/)
