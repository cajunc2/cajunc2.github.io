---
layout: layout.njk
title: My Kaypro II
---
# {{ title }}

## Articles
{% for post in collections.Kaypro %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
