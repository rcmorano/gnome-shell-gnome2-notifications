/**
* extension.js
* Copyright (C) 2011, Roberto C. Morano <rcmova@gmail.com>
* 
* This software is free software; you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation; either version 2 of the License, or
* (at your option) any later version.
* 
* This software is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
* 
* You should have received a copy of the GNU General Public License
* along with this library; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
*
* As a special exception, if you link this library with other files to
* produce an executable, this library does not by itself cause the
* resulting executable to be covered by the GNU General Public License.
* This exception does not however invalidate any other reasons why the
* executable file might be covered by the GNU General Public License.
*/

const StatusIconDispatcherOrig = imports.ui.statusIconDispatcher;
const Main = imports.ui.main;
const Panel = imports.ui.panel;
const Signals = imports.signals;
const Config = imports.misc.config;
const versionCheck = imports.ui.extensionSystem.versionCheck;
//const NotificationDaemon = imports.ui.notificationDaemon;
//const Util = imports.misc.util;
//const Lang = imports.lang;
//const Shell = imports.gi.Shell;

const STANDARD_TRAY_ICON_IMPLEMENTATIONS = imports.ui.statusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS;

function StatusIconDispatcher() {
    this._init();
}

StatusIconDispatcher.prototype = {
    _init: StatusIconDispatcherOrig.StatusIconDispatcher.prototype._init,

    start: StatusIconDispatcherOrig.StatusIconDispatcher.prototype.start,

    _onTrayIconAdded: function(o, icon) {
        let wmClass = (icon.wm_class || 'unknown').toLowerCase();
        let role = STANDARD_TRAY_ICON_IMPLEMENTATIONS[wmClass];
        if (role) {
	    Main.panel._onTrayIconAdded(o, icon, role);
        } else {
            role = wmClass;
	    Main.panel._onTrayIconAdded(o, icon, role);
	}
    },

    _onTrayIconRemoved: function(o, icon) {
	Main.panel._onTrayIconRemoved(o, icon);
    }
};
Signals.addSignalMethods(StatusIconDispatcher.prototype);


function main(meta) {
	

    Main.statusIconDispatcher = new StatusIconDispatcher();
	
    if ( versionCheck(['3.0','3.1'], Config.PACKAGE_VERSION) ) {
        Main.statusIconDispatcher.start(Main.messageTray.actor);
        for ( let i = 0; i < Main.messageTray._summaryItems.length; i++ ) {
            icon = Main.messageTray._summaryItems[i].source._trayIcon;
            icon.reparent(Main.panel._trayBox);
        }

        Main.panel._trayBox.show();
        Main.messageTray._summary.destroy_children()
    }

}

function init(meta) {
	main(meta);
}

function enable() {
}

function disable() {
}
