---
layout: layout.njk
title: Interis Project
---
# {{ title }}

Interis 64 is my homebrew computer project.

{% FullWidthImage "interis" "render.jpg" %}

### Interis 64 Core Features
- Zilog Z80 processor at 7.4MHz
- 64KB RAM
- 32KB ROM
- Integrated Peripherals:
  - RS-232 Serial Port
  - PS/2 Keyboard Interface
  - Realtime Clock/NVRAM
- Four expansion slots (3 standard and 1 enhanced)
- System monitor in ROM

### Interis 64 Expansion Cards
- TMS9928A Video Card
- Yamaha OPL-2 Sound Card
- WD37C65C Floppy Controller
- 320x240 Graphic LCD Interface Card


{% if collections.Interis %}
## Articles
{% for post in collections.Interis %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}