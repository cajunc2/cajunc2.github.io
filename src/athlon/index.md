---
layout: layout.njk
title: Athlon Gaming PC
---
# {{ title }}

Wandering around the consignment area of VCF East 2023, I spotted something that's been on my wish list for YEARS.
An InWin S500 ATX mid-tower case. It was in decent shape too! Marked $30 with a bad PSU? No-brainer, it was mine.

Turns out the guts weren't half bad either.
I replaced the bad PSU with a Corsair CX430 (also picked up at VCF for a couple bucks) and upgraded the ATi Rage 128 Pro to a GeForce 3.
I kept the old hard drive, but plopped in a known-good one for a fresh start. That's all it needed. The rest of it just took some deep cleaning and we were ready to rock!

## Machine Specs:
- InWin S500 Chassis
- AMD Athlon 750MHz Slot-A CPU
- 384 MB SDRAM
- 120GB 7200 RPM Hard Drive
- 3.5" Floppy Drive
- CD-ROM
- Nvidia GeForce 3 Ti 200 Video Card
- Sound Blaster PCI 128 Sound Card
- Windows ME

{% Gallery %}
	{% GalleryImage "pentium" "1.jpeg" %}
	{% GalleryImage "pentium" "2.jpeg" %}
	{% GalleryImage "pentium" "3.jpeg" %}
	{% GalleryImage "pentium" "4.jpeg" "xlarge" %}
{% endGallery %}

{% if collections.Pentium %}
---
## Articles
{% for post in collections.Pentium %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}