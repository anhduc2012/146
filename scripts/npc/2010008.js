/* guild emblem npc */
var status = 0;
var sel;

function start() {
    status = -1;
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
	cm.sendSimple("B¢n muÑn tôi giúp g¾?\r\n#b#L0#T¢o/Thay «Öi biºu tïæng HØi#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GRANK") == 1)
		cm.sendYesNo("T¢o biºu tïæng ho¶c thay «Öi vÜi chi phí #b1,500,000 mesos#k, B¢n có muÑn tiªp tîc?");
	    else
		cm.sendOk("B¢n ch¿ có thº làm công vi½c này nªu b¢n là chç HØi.");
	}
				
    } else if (status == 2) {
	if (sel == 0) {
	    cm.genericGuildMessage(17);
	    cm.dispose();
	}
    }
}
