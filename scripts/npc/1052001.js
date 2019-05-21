/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
 */

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 2) {
		cm.sendOk("B¢n biªt không có lûa chÎn nào khác...");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.getJob() >= 400 && cm.getJob() <= 434
				&& cm.getQuestStatus(2351) == 1) {
			cm.forceCompleteQuest(2351);
			cm.gainItem(1032076, 1); // owl earring
		}
		if (cm.getJob() == 0) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0)
				cm.sendNext("V¾ v±y, b¢n quyªt «Ånh trä thành mØt #rDu Hi½p#k?");
			else {
				cm.sendOk("Ðào t¢o nhi¹u hÛn mØt chút và tôi có thº ch¿ cho b¢n cách train cça ##rDu Hi½p#k.")
				cm.dispose();
			}
		} else {
			if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400) {
				if (cm.getQuestStatus(100009) >= 1) {
					cm.completeQuest(100011);
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
					cm.sendOk("Ðïæc rÓi, bây giß h»y nói chuy½n vÜi #bArec#k.");
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
				cm.sendNext("V¾ v±y, b¢n quyªt «Ånh trä thành mØt #rDu Hi½p#k?");
	} else if (status == 3) {
		if (cm.getJob() == 0) {
			cm.resetStats(4, 25, 4, 4);
			cm.expandInventory(1, 4);
			cm.expandInventory(4, 4);
			cm.gainSp(1);
			cm.changeJob(400); // THIEF
			if (cm.getQuestStatus(2351) == 1) {
				cm.forceCompleteQuest(2351);
				cm.gainItem(1032076, 1); // owl earring
			}
		}
		cm.gainItem(1332063, 1);
		cm.gainItem(1472000, 1);
		cm.gainItem(2070015, 500);
		cm.sendOk("V¾ v±y, «ïæc nó! Bây giß «i, và «i vÜi ni¹m kiêu h»nh.");
		cm.dispose();
	} else if (status == 11) {
		cm.sendNextPrev("Tiªp theo b¢n s³ «ïæc lûa chÎn #rThích Khách#k ho¶c #rL»ng Khách#k.");
	} else if (status == 12) {
		cm.askAcceptDecline("Nhïng trïÜc tiên tôi ph¡i kiºm tra k¸ n£ng cça b¢n. B¢n «» s§n sàng chïa?");
	} else if (status == 13) {
		cm.forceStartQuest(100009);
		//cm.gainItem(4031011, 1);
		cm.sendOk("H»y nói chuy½n vÜi tôi mØt l®n nøa.");
		cm.dispose();
		
    } else if (status == 31) {
		cm.warp(910370000, 0);
		cm.dispose();
		
	} else if (status == 21) {
		cm.sendSimple("B¢n muÑn lûa chÎn?#b\r\n#L0#Thích Khách#l\r\n#L1#L»ng Khách#l#k");
	} else if (status == 22) {
		var jobName;
		if (selection == 0) {
			jobName = "Assassin";
			job = 410; // ASSASIN
		} else {
			jobName = "Bandit";
			job = 420; // BANDIT
		}
		cm.sendYesNo("B¢n s³ «ïæc chuyºn thành #r" + jobName + "#k?");
	} else if (status == 23) {
		cm.changeJob(job);
		cm.gainSp(1);
		cm.removeAll(4031013);
		cm.sendOk("V¾ v±y, «ïæc nó! Bây giß «i, và «i vÜi ni¹m kiêu h»nh.");
		cm.dispose();
	}
}
