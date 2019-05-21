var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("This is an important decision to make.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    //if (!qm.getPlayer().isGM()) { //not available, sry
	//qm.dispose();
	//return;
    //}
    if (status == 0) {
	qm.sendYesNo("B¢n «» quyªt «Ånh chïa? Quyªt «Ånh s³ là quyªt «Ånh cuÑi cùng, v¾ v±y h»y suy nghÄ c¯n th±n trïÜc khi quyªt «Ånh ph¡i làm g¾. B¢n có ch¤c ch¤n muÑn trä thành mØt Mechanic?");
    } else if (status == 1) {
	qm.sendNext("I have just molded your body to make it perfect for a Mechanic. If you wish to become more powerful, use Stat Window (S) to raise the appropriate stats. If you arn't sure what to raise, just click on #bAuto#k.");
	if (qm.getJob() == 3000) {
	    qm.gainItem(1492014,1); //1492065 desert eagle
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(3500);
	    //30001061 = capture, 30001062 = call, 30001068 = mech dash
	    qm.teachSkill(30001068,1,0);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Resistance to carry.");
    } else if (status == 3) {
	qm.sendNextPrev("Now... I want you to go out there and show the world how the Resistance operate.");
	qm.safeDispose();
    }
}