/* Author: Xterminator
	NPC Name: 		Regular Cab
	Map(s): 		Victoria Road : Henesys (100000000)
	Description: 		Henesys Cab
*/

var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("B¢n muÑn «i «âu h»y t¾m tôi");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("Xin chào, tôi lái chiªc taxi thông thïßng. Nªu b¢n muÑn «i mØt cách an toàn và nhanh chóng tö thÅ tr¬n «ªn thÅ tr¬n, sau «ó «i xe taxi cça chúng tôi. Chúng tôi s³ s§n sàng «ïa b¢n «ªn «ích cça b¢n vÜi mØt mñc giá hæp lü.");
    } else if (status == 1) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    var selStr = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (100 mesos)#l";
		}
	    }
	} else {
	    var selStr = "Choose your destination, for fees will change from place to place.";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "# (1000 mesos)#l";
		}
	    }
	}
	cm.sendSimple(selStr);
    } else if (status == 2) {
	var job = cm.getJob();
	if (job == 0 || job == 1000 || job == 2000 || job == 3000 || job == 2001 || job == 2002 || job == 3001) {
	    sCost = 100;
	    show = 100;
	} else {
	    sCost = 1000;
	    show = 1000;
	}
	cm.sendYesNo("You don't have anything else to do here, huh? Do you really want to go to #m" + maps[selection] + "##k? It'll cost you #b" + show + " mesos#k.");
	selectedMap = selection;
    } else if (status == 3) {
	if (cm.getMeso() < sCost) {
	    cm.sendNext("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
	} else {
	    cm.gainMeso(-sCost);
	    cm.warp(maps[selectedMap]);
	}
	cm.dispose();
    }
}