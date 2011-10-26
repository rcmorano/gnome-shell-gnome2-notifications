# GNOME Shell "classic systray"

**gnome-shell-classic-systray** is YAGSE (Yet Another GNOME Shell extension) that tries to provide an "old-skool" gnome2 way of showing application's tray icons.

Most of the application's tray icons (in fact, all of them but some applets) are now located in GNOME Shell's notifications area, instead of being located at the old traybar.
This could be annoying since this area is hidden by default and you won't be able to easily see if any icon is trying to communicate something. You'll have to make the notifications area appear.

Pidgin is the best example for me. It was the main reason for me to develop this extension, I wasn't noticed when I had new message. Icon was blinking but it was hidden!

## Installation

The easiest way to maintain it updated is to clone the extension directly to one of the locations explained below and to 'git pull' periodically:

* git clone git@github.com:rcmorano/gnome-shell-gnome2-notifications.git $LOCATION

There are two possible locations to place the extension:

* ~/.local/share/gnome-shell/extensions (it will be loaded only by your user session)
* /usr/share/gnome-shell/extensions (it will be loaded by every user session)

You can also use the packaged version for Debian/Ubuntu. It is available for download from this PPA [1]. At this moment, any version will is compatible with any Debian/Ubuntu version that uses gnome-shell.
Note that the packaged version will use the second location so it will be loaded in every user session.

[1] https://launchpad.net/~emergya/+archive/ppa

## Enabling/Disabling the extension (via gnome-tweak-tool)

Currently, disabling the extension is not working. Once you have marked it as disabled, you'll have to reload gnome-shell (alt+f2 -> type 'r' -> press 'enter').

Enabling it works as supposed (every icon from message tray will be moved to "traybox").
