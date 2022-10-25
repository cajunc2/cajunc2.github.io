---
layout: layout.njk
title: Interis Project
---
# {{ title }}

Interis is my design for a Zilog Z80-based home computer. The design prioritizes flexibility and expandability.

### Features
- Zilog Z80 processor at 7.4MHz
- 64KB RAM (expandable to 4MB)
- 32KB ROM
- Integrated Peripherals:
  - RS-232 Serial Port
  - PS/2 Keyboard Interface
  - Realtime Clock
- Machine language monitor and BASIC interpreter in ROM
- Fully CP/M compatible with only a disk expansion card

{% if collections.Interis %}
## Articles
{% for post in collections.Interis %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}