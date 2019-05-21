/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)

	Custom Quest 100003, 100005
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
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0) {
		cm.sendNext("V¾ v±y, b¢n quyªt «Ånh trä thành mØt #rChiªn binh#k?");
	    } else {
		cm.sendOk("Ðào t¢o nhi¹u hÛn mØt chút và tôi có thº ch¿ cho b¢n cách train cça #rChiªn binh#k.");
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 100) { // WARROPR
		if (cm.getQuestStatus(100003) >= 1) {
		    cm.completeQuest(100005);
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
		cm.dispose();
	    } else if (cm.getQuestStatus(100100) == 1) {
		cm.completeQuest(100101);
		if (cm.getQuestStatus(100101) == 2) {
		    cm.sendOk("Ðïæc rÓi, bây giß h»y nói chuy½n vÜi #bTylus#k.");
		} else {
		    cm.sendOk("Hey, #b#h0##k! Tôi c®n mØt #bBùa «en#k.H»y «i t¾m l× hÖng không gian.Nó ch¿ «âu «ó quanh «ây.");
		    cm.forceStartQuest(100101);
		}
		cm.dispose();
	    } else {
		cm.sendOk("B¢n «» lûa chÎn khôn ngoan.");
		cm.dispose();
	    }
	}

    } else if (status == 1) {
		cm.sendNextPrev("Ðó là mØt lûa chÎn quan trÎng. B¢n s³ không thº quay l¢i.");
    } else if (status == 2) {
		cm.sendNext("V¾ v±y, b¢n quyªt «Ånh trä thành mØt #rChiªn binh#k?");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 4, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.gainSp(1);
	    cm.changeJob(100); // WARRIOR
	}
	cm.gainItem(1402001, 1);
	cm.sendOk("V¾ v±y, «ïæc nó! Bây giß «i, và «i vÜi ni¹m kiêu h»nh.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("Tiªp theo b¢n s³ «ïæc lûa chÎn #rKiªm SÄ#k, #rK¨ SÄ#k ho¶c #rThïÛng SÄ#k.")
    } else if (status == 12) {
	cm.askAcceptDecline("Nhïng trïÜc tiên tôi ph¡i kiºm tra k¸ n£ng cça b¢n. B¢n «» s§n sàng chïa?");
    } else if (status == 13) {
	//cm.gainItem(4031008, 1);
	cm.forceStartQuest(100003);
	cm.sendOk("H»y nói chuy½n vÜi tôi mØt l®n nøa.");
	cm.dispose();
	
    } else if (status == 31) {
		cm.warp(910230000, 0);
		cm.dispose();
	
    } else if (status == 21) {
	cm.sendSimple("B¢n muÑn lûa chÎn?#b\r\n#L0#Kiªm SÄ#l\r\n#L1#K¨ SÄ#l\r\n#L2#ThïÛng SÄ#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "Fighter";
	    job = 110; // FIGHTER
	} else if (selection == 1) {
	    jobName = "Page";
	    job = 120; // PAGE
	} else {
	    jobName = "Spearman";
	    job = 130; // SPEARMAN
	}
	cm.sendYesNo("B¢n s³ «ïæc chuyºn thành #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.removeAll(4031013);
	cm.gainSp(1);
	cm.sendOk("V¾ v±y, «ïæc nó! Bây giß «i, và «i vÜi ni¹m kiêu h»nh.");
	cm.dispose();
    }
}	
