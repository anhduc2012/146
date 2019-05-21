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
	cm.sendYesNo("T¢m bi½t.Chúc b¢n chÛi game vui v² t¢i MapleLove?");
    } else if (status == 1) {
	cm.warp(150010000);
	cm.dispose();
    }
}