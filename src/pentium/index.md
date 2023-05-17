---
layout: layout.njk
title: Pentium MMX Gaming PC
---
# {{ title }}

Every vintage computer enthusiast needs a classic gaming PC.
For some, that means an XT class early DOS machine.
For others, a turn-of-the-millennium Windows 98 rig.

For me, perfection is a Pentium processor, great-sounding MIDI music, and a 3Dfx Voodoo.

{% Gallery %}
	{% GalleryImage "pentium" "4.jpeg" "xlarge" %}
	{% GalleryImage "pentium" "1.jpeg" %}
	{% GalleryImage "pentium" "2.jpeg" %}
	{% GalleryImage "pentium" "3.jpeg" %}
{% endGallery %}

## Machine Specs:
- NCR Class 3259 Base System
- Intel Pentium 233 MMX Processor
- 64MB EDO RAM
- 8GB IDE Hard Disk
- Floppy
- CD-Rom
- On-Board S3 ViRGE Graphics
- Diamond Monster 3D (3Dfx Voodoo 4MB)
- ESS AudioDrive 1869F Sound Card
- <a href="https://www.serdashop.com/X2GS" target="_blank">DreamBlaster X2GS Wavetable Card</a>
- Nokia 710C 17" Flat CRT Monitor w/ Speakers
- Filco Majestouch 2 TKL Keyboard
- CH Products F-16 FighterStick Joystick
- InterAct MākoPad PC Gamepad

{% if collections.Pentium %}
---
## Articles
{% for post in collections.Pentium %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}