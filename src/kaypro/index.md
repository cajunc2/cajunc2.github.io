---
layout: layout.njk
title: My Kaypro II
---
# {{ title }}

Plenty of folks have a Kaypro.
They were common enough machines in the early 1980s.
Mine isn't particularly special, but it *is* mine!

{% Gallery %}
	{% GalleryImage "kaypro" "1.jpeg" "large" %}
	{% GalleryImage "kaypro" "2.jpeg" %}
	{% GalleryImage "kaypro" "3.jpeg" %}
	{% GalleryImage "kaypro" "4.jpeg" "wide" %}
	{% GalleryImage "kaypro" "5.jpeg" %}
	{% GalleryImage "kaypro" "6.jpeg" %}
	{% GalleryImage "kaypro" "7.jpeg" "wide" %}
{% endGallery %}

{% if collections.Kaypro %}
## Articles
{% for post in collections.Kaypro %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}