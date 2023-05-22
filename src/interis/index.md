---
layout: layout.njk
title: Interis 64
---
# {{ title }}

Interis 64 is my homebrew computer project. Like so many before mine, it started ultra-simple on a breadboard and has grown to be a fully functioning system with tons of capability. It serves mostly as a platform for my own learning about computer architecture, hardware design, and low-level programming.

After countless prototypes and three finished PCB revisions, it's getting close to a point where I'd like to open-source the design and source code.
As of Spring 2023, it will boot from floppy disks or to an in-ROM system monitor.
Long-term, it should be able to run CP/M.

{% FullWidthImage "interis" "render.jpg" "Interis 64 Rev. C PCB (KiCad render)" %}

### Interis 64 Core Features
- Zilog Z80 processor at 7.4MHz
- 64KB RAM
- 32KB ROM
- Integrated Peripherals:
  - RS-232 Serial Port
  - PS/2 Keyboard Interface
  - Realtime Clock/NVRAM
- Four expansion slots (3 standard and 1 advanced)
- System monitor in ROM

### Interis 64 Expansion Cards
- TMS9928A Video Card
- Yamaha OPL-2 Sound Card
- WD37C65C Floppy Controller
- Others in the works...

{% if collections.Interis %}
---
## The Details
{% for post in collections.Interis %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}