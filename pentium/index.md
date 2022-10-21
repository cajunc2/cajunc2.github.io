---
layout: layout.njk
title: Pentium MMX Gaming PC
---
# {{ title }}

## Articles
{% for post in collections.Pentium %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
