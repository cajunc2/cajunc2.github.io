---
layout: layout.njk
title: Pentium MMX Gaming PC
---
# {{ title }}

Every vintage computer enthusiast needs a classic gaming PC.
For some, that means an XT class early DOS machine.
For others, a turn-of-the-milennium Windows 98 rig.

For me? That's a top-notch OG Pentium, Windows 95, and a 3Dfx Voodoo.

## Machine Specs:
- NCR Class 3259 Base System
- Intel Pentium 233 MMX
- 64MB EDO RAM
- 8GB IDE Hard Disk
- Floppy
- CD-Rom
- On-Board S3 ViRGE
- Diamond Monster 3D 3Dfx Voodoo 4MB
- ESS AudioDrive 1869F
- <a href="https://www.serdashop.com/X2GS" target="_blank">DreamBlaster X2GS Wavetable Card</a>
- Nokia 710C Flat CRT Monitor
- Filco Majestouch TKL Keyboard (Cherry MX Red)
- CH Products F-16 CombatStick Joystick
- Logitech Wingman Precision Gamepad

{% Gallery %}
	{% GalleryImage "pentium" "1.jpeg" %}
	{% GalleryImage "pentium" "2.jpeg" %}
	{% GalleryImage "pentium" "3.jpeg" %}
	{% GalleryImage "pentium" "4.jpeg" "xlarge" %}
{% endGallery %}

{% if collections.Pentium %}
## Articles
{% for post in collections.Pentium %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% endif %}