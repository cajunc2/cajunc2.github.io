---
layout: layout.njk
title: Protec Microsystèmes PRO-83
---
# {{ title }}

The PRO-83 is a Z80 microprocessor trainer produced by the Canadian company Protec Microsystèmes Inc.

### Features
- Zilog Z80 CPU at 1.x MHz


## Articles
{% for post in collections.PRO-83 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
