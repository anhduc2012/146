/* Grendel the Really Old
	Magician Job Advancement
	Victoria Road : Magic Library (101000003)

	Custom Quest 100006, 100008, 100100, 100101
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("H»y làm «µp và tÜi g¶p tôi.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 8) {
		cm.sendNext("V¾ v±y, b¢n quyªt «Ånh trä thành mØt #rPhù Thçy#k?");
	    } else {
		cm.sendOk("Ðào t¢o nhi¹u hÛn mØt chút và tôi có thº ch¿ cho b¢n cách trä thành #rMagician#k.")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 200) { // MAGICIAN
			if (cm.getQuestStatus(100006) >= 1) {
				cm.completeQuest(100008);
				if (cm.haveItem(4031013, 30)) {
					status = 20;
					cm.sendNext("Tôi th¬y b¢n «» làm tÑt. Tôi s³ «º b¢n thûc hi½n bïÜc tiªp theo trên con «ïßng dài cça b¢n.");
				} else {
					status = 30;
					cm.sendNext("H»y thu th±p 30 viên #i4031013##t4031013#.")
				}
			} else {
				status = 10;
				cm.sendNext("Tiªn tr¾nh b¢n «» thûc hi½n là «áng kinh ng¢c.");
			}
	    } else if (cm.getQuestStatus(100100) == 1) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("Ðïæc rÓi, bây giß h»y làm «i¹u này #bRobeira#k.");
		} else {
		    cm.sendOk("Hey, #b#h0##k! Tôi c®n mØt #bBùa «en#k.B¢n có thº qua khu phù thçy bay t¾m l× hÖng không gian «º vào «ó l¬y cho tôi.Ði sang trái lÑi bên dïÜi «º t¾m nó.");
		    cm.forceStartQuest(100101);
		}
		cm.dispose();
	    } else {
		cm.sendOk("B¢n «» chÎn mØt cách khôn ngoan.");
		cm.dispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("Ðó là mØt lûa chÎn quan trÎng. B¢n s³ không thº quay l¢i.");
    } else if (status == 2) {
	cm.sendYesNo("B¢n muÑn trä thành #rPhù Thçy#k?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 4, 20, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.gainSp(1);
	    cm.changeJob(200); // MAGICIAN
	}
	cm.gainItem(1372005, 1);
	cm.sendOk("V¾ v±y, «ïæc nó! Bây giß «i, và «i vÜi ni¹m kiêu h»nh.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("B¢n có thº s§n sàng thûc hi½n bïÜc tiªp theo vÜi tï cách là mØt #rPhù thçy l÷a «Øc#k, #rPhù thçy b£ng s¬m#k or #rTu SÄ#k.");
    } else if (status == 12) {
	cm.askAcceptDecline("Nhïng trïÜc tiên tôi ph¡i kiºm tra k¸ n£ng cça b¢n. B¢n «» s§n sàng chïa?");
    } else if (status == 13) {
	cm.forceStartQuest(100006);
	//cm.gainItem(4031009, 1);
	cm.sendOk("H»y «i sang bên trái lÑi bên trên 2 b¡n «Ó.Leo lên trên cùng «º g¶p #rTh®y Phù Thçy#k.");
	cm.dispose();
    } else if (status == 31) {
		cm.warp(910140000, 0);
		cm.dispose();
    } else if (status == 21) {
		cm.sendSimple("B¢n muÑn trä thành?#b\r\n#L0#Phù thçy l÷a «Øc#l\r\n#L1#Phù thçy b£ng s¬m#l\r\n#L2#Tu SÄ#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "Fire/Poison Wizard";
	    job = 210; // FP
	} else if (selection == 1) {
	    jobName = "Ice/Lightning Wizard";
	    job = 220; // IL
	} else {
	    jobName = "Cleric";
	    job = 230; // CLERIC
	}
	cm.sendYesNo("B¢n muÑn trä thành mØt #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.removeAll(4031013);
	cm.gainSp(1);
	cm.sendOk("V¾ v±y, «ïæc nó! Bây giß «i, và «i vÜi ni¹m kiêu h»nh.");
	cm.dispose();
    }
}	
