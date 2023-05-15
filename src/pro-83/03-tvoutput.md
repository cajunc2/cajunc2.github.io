---
layout: layout.njk
title: Getting Video Out
permalink: "pro-83/{{ title | slugify }}/"
eleventyExcludeFromCollections: true
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
A few hours in KiCad and a week or two waiting for PCBs to ship from China and I had my own custom adapter board with a composite video jack.

{% FullWidthImage "pro-83/03-tvoutput" "composite-pcb.jpg" %}
