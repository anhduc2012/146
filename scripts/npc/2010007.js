/* guild creation npc */
var status = -1;
var sel;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("B¢n muÑn làm g¾?\r\n#b#L0#T¢o Bang HØi#l\r\n#L1#Xóa Bang HØi#l\r\n#L2#T£ng thành viên cça Bang HØi lên 100#l\r\n#L3#T£ng thành viên cça Bang HØi lên 200#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GID") > 0) {
		cm.sendOk("B¢n không thº t¢o hØi mÜi khi b¢n «ang có mØt hØi.");
		cm.dispose();
	    } else
		cm.sendYesNo("T¢o Bang HØi vÜi phí #b500,000 mesos#k, b¢n có muÑn tiªp tîc?");
	} else if (selection == 1) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("B¢n có thº hçy HØi nªu b¢n là chç HØi.");
		cm.dispose();
	    } else
		cm.sendYesNo("B¢n có muÑn tiªp tîc hçy hØi cça m¾nh.Ðiºm GP cça b¢n s³ m¬t hªt.");
	} else if (selection == 2) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("B¢n có thº t£ng tính n£ng cça HØi nªu b¢n là chç HØi.");
		cm.dispose();
	    } else
		cm.sendYesNo("Increasing your Guild capacity by #b5#k giá #b500,000 mesos#k, are you sure you want to continue?");
	} else if (selection == 3) {
	    if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
		cm.sendOk("You can only increase your Guild's capacity if you are the leader.");
		cm.dispose();
	    } else
		cm.sendYesNo("T£ng sÑ lïæng thành viên cça Bang HØi lên #b5#k giá #b25,000 GP#k, B¢n có muÑn tiªp tîc?");
	}
    } else if (status == 2) {
	if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
	    cm.genericGuildMessage(1);
	    cm.dispose();
	} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.disbandGuild();
	    cm.dispose();
	} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(false);
	    cm.dispose();
	} else if (sel == 3 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
	    cm.increaseGuildCapacity(true);
	    cm.dispose();
	}
    }
}