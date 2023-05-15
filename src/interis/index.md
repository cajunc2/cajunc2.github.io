---
layout: layout.njk
title: Interis Project
---
# {{ title }}

Interis is my family of homebrew computers. The computers are designed to provide a usable base system, while allowing for large amount of expandability and flexibility. The first (and so far only) model in the line is the Interis 64 8-bit computer.

### Interis 64 Core Features
- Zilog Z80 processor at 7.4MHz
- 64KB RAM
- 32KB ROM
- Integrated Peripherals:
  - RS-232 Serial Port
  - PS/2 Keyboard Interface
  - Realtime Clock/NVRAM
- Four expansion slots (3 standard and 1 enhanced)
- Microsoft BASIC in ROM
- CP/M compatible with a disk expansion card

### Interis 64 Expansion Cards
- 4MB Memory Expansion
- TMS9928A Video Card
- SN76489 Sound Card
- Yamaha OPL-2 Sound Card
- SD Card "Disk" Interface
- 320x240 Graphic LCD Interface Card


{% if collections.Interis %}
## Articles
{% for post in collections.Interis %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}