# GNOME Shell "gnome2 notifications"

**gnome-shell-gnome2-notifications** is YAGSE (Yet Another GNOME Shell extension) that tries to provide an "old-skool" gnome2 way of showing application's tray icons.

Most of the application's tray icons (in fact, all of them but some applets) are now located in GNOME Shell's notifications area, instead of being located at the old traybar.
This could be annoying since this area is hidden by default and you won't be able to easily see if any icon is trying to communicate something. You'll have to make the notifications area appear.

Pidgin is the best example for me. It was the main reason for me to develop this extension, I wasn't noticed when I had new message. Icon was blinking but it was hidden!

## Installation

By the moment, the only way to install this extension is manually copying it to one of these locations:

* ~/.local/share/gnome-shell/extensions (it will be loaded only by your user session)
* /usr/share/gnome-shell/extensions (it will be loaded by every user session)

I pretend to package it for Debian/Ubuntu, although, it will use the second location so it will be loaded in every user session, so maybe you'll prefer to install it manually for your user by copying it to the first location.
