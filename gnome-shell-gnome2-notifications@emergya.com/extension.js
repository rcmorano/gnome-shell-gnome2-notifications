const StatusIconDispatcherOrig = imports.ui.statusIconDispatcher;
const Main = imports.ui.main;
const Panel = imports.ui.panel;

const Lang = imports.lang;
const Shell = imports.gi.Shell;
const Signals = imports.signals;
const St = imports.gi.St;

const MessageTray = imports.ui.messageTray;
const NotificationDaemon = imports.ui.notificationDaemon;
const Util = imports.misc.util;

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
	


//	Main.statusIconDispatcher._traymanager.connect('tray-icon-added', function (o, icon) {
//	    let wmClass = (icon.wm_class || 'unknown').toLowerCase();
//	    global.log(wmClass);
//	    });
            //Main.statusIconDispatcher.emit('status-icon-added', icon, "role");
//	    Main.panel._onTrayIconAdded(o, icon, "role");

//	    icon.height = Main.Panel.PANEL_ICON_SIZE;
//
//            let position = Main.Panel.STANDARD_TRAY_ICON_ORDER.indexOf("role");
//	    icon._rolePosition = position;
//
//            let children = Main.panel._trayBox.get_children();
//	    let i;

            // Walk children backwards, until we find one that isn't
            // well-known, or one where we should follow
//            for (i = children.length - 1; i >= 0; i--) {
//                let rolePosition = children[i]._rolePosition;
//                if (!rolePosition || position > rolePosition) {
//                    Main.panel._trayBox.insert_actor(icon, i + 1);
//                    break;
//                }
//            }
//            if (i == -1) {
//                // If we didn't find a position, we must be first
//                Main.panel._trayBox.insert_actor(icon, 0);
//            }
//	    Main.panel._trayBox.insert_actor(icon, 1);
//	    global.log("ADDED");
//	    Main.panel._trayBox.show();
//
//
//	});

//	Main.statusIconDispatcher._traymanager.connect('tray-icon-removed', function (o, icon) {
//  	    Main.statusIconDispatcher._onTrayIconRemoved(o, icon);
//	    Main.statusIconDispatcher.emit('status-icon-removed', icon, "role");
//	});


//	icon = new St.Icon({ icon_name: 'dialog-password-symbolic' });
//	icon.height = Main.Panel.PANEL_ICON_SIZE;
//	Main.panel._trayBox.insert_actor(icon, 1);
//	Main.panel._trayBox.show();	
};
