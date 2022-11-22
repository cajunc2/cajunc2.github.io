---
layout: layout.njk
title: Protec Microsystèmes PRO-83
---
# {{ title }}

The PRO-83 is a Z80 microprocessor trainer produced by the Canadian company Protec Microsystèmes Inc.

I purchased this example at the <a href="https://vcfed.org/" target="_blank">VCF East</a> event in October of 2021, not knowing anything about it except what little the seller could tell me. 

### Features
- Zilog Z80 CPU at 1.x MHz
- 2KB DRAM
- Machine language monitor in ROM
- Six-digit display
- 24-key keypad
- Cassette interface
- 100-pin expansion slot (Not S-100 compatible)
- Two user I/O ports
- PRO-VIDEO Expansion Card
  - Additional 10KB system RAM
  - MC6847P Video Display Generator
  - 6KB Video RAM
  - Additional two-port I/O controller
  - Two 2532 EPROMs with editor and assembler programs
  - One EPROM socket for writing EPROMs (selectable 5v or 25v supply)
- QWERTY Matrix Keyboard (Apple II layout)

{% if collections.PRO-83 %}
## Articles
{% for post in collections.PRO-83 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}