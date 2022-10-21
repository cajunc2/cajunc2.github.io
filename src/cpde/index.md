---
layout: layout.njk
title: Cross-Platform Doom Editor
---
# {{ title }}

## Articles
{% for post in collections.CPDE %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
