const StatusIconDispatcherOrig = imports.ui.statusIconDispatcher;
const Main = imports.ui.main;
const Panel = imports.ui.panel;
const Signals = imports.signals;
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


function main(extensionMeta) {
	

    Main.statusIconDispatcher = new StatusIconDispatcher();
    Main.statusIconDispatcher.start(Main.messageTray.actor);
	
    for ( i = 0; i < Main.messageTray._summaryItems.length; i++ ) {
        icon = Main.messageTray._summaryItems[i].source._trayIcon;
        icon.reparent(Main.panel._trayBox);
    }
    Main.panel._trayBox.show();
    Main.messageTray._summary.destroy_children()

};
