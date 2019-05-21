var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		//cm.sendDirectionStatus(3, 1);
		cm.sendPlayerToNpc("Chào möng b¢n «ªn vÜi MapleLove.Chúc b¢n chÛi game vui v²");
    } else if (status == 1) {
		cm.showLumiVid();
		cm.dispose();
    } 
}