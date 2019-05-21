/** 
	Tylus: Warrior 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 1) {
	cm.sendOk("H»y quyªt «Ånh và ghé th£m tôi l®n nøa.");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (!(cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110)) {
	    if (cm.getQuestStatus(6192) == 1) {
		if (cm.getParty() != null) {
		    var ddz = cm.getEventManager("ProtectTylus");
		    if (ddz == null) {
			cm.sendOk("Unknown error occured");
		    } else {
			var prop = ddz.getProperty("state");
			if (prop == null || prop.equals("0")) {
			    ddz.startInstance(cm.getParty(), cm.getMap());
			} else {
			    cm.sendOk("Ngïßi khác «» cÑ g¤ng b¡o v½ Tylus, vui lÆng th÷ l¢i sau mØt lát.");
			}
		    }
		} else {
		    cm.sendOk("H»y thành l±p mØt nhóm «º b¡o v½ Tylus!");
		}
	    } else if (cm.getQuestStatus(6192) == 2) {
		cm.sendOk("B¢n «» b¡o v½ tôi. C¡m Ûn b¢n. Tôi s³ d¢y b¢n k¸ n£ng l±p trïßng.");
		if (cm.getJob() == 112) {
			if (cm.getPlayer().getMasterLevel(1121002) <= 0) {
				cm.teachSkill(1121002, 0, 10);
			}
		} else if (cm.getJob() == 122) {
			if (cm.getPlayer().getMasterLevel(1221002) <= 0) {
				cm.teachSkill(1221002, 0, 10);
			}
		} else if (cm.getJob() == 132) {
			if (cm.getPlayer().getMasterLevel(1321002) <= 0) {
				cm.teachSkill(1321002, 0, 10);
			}
		}
	    } else {
		cm.sendOk("B¢n dïßng nhï có ti¹m n£ng, luy½n t±p nhi¹u hÛn và mØt ngày nào «ó có l³ tôi s³ xem xét «ào t¢o b¢n");
	    }
	    cm.dispose();
	    return;
	}
	if ((cm.getJob() == 110 || cm.getJob() == 120 || cm.getJob() == 130 || cm.getJob() == 2110 ) && cm.getPlayerStat("LVL") >= 70) {
	    if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
	        if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
		    cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
		    cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 70) * 3);
	        } else {
	    	    cm.sendOk("Hmm ... B¢n có quá nhi¹u #bÐiºm k¸ n£ng #k. B¢n không thº thûc hi½n tiªn tr¾nh công vi½c vÜi quá nhi¹u Ðiºm k¸ n£ng cÆn l¢i.");
	        }
		cm.safeDispose();
	    } else {
	        cm.sendNext("B¢n thûc sû là mØt ngïßi m¢nh m³.");
	    }
	} else {
	    cm.sendOk("Vui lÆng «¡m b¡o r¥ng b¢n «ç «i¹u ki½n cho tiªn tr¾nh công vi½c. (level 70+)");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	    if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
	    if (cm.getJob() == 110) { // FIGHTER
		cm.changeJob(111); // CRUSADER
		cm.sendOk("B¢n muÑn trä thành #bCrusader(Kiªm SÄ)#k.");
		cm.dispose();
	    } else if (cm.getJob() == 120) { // PAGE
		cm.changeJob(121); // WHITEKNIHT
		cm.sendOk("B¢n muÑn trä thành #bWhite Knight (K¨ sÄ)#k.");
		cm.dispose();
	    } else if (cm.getJob() == 130) { // SPEARMAN
		cm.changeJob(131); // DRAGONKNIGHT
		cm.sendOk("B¢n muÑn trä thành #bDragon Knight(ThïÛng SÄ)#k");
		cm.dispose();
	    } else if (cm.getJob() == 2110) { // ARAN
		cm.changeJob(2111); // ARAN
		if (cm.canHold(1142131,1)) {
		    cm.forceCompleteQuest(29926);
		    cm.gainItem(1142131,1); //temp fix
		}
		cm.sendOk("You are now a #bAran#k.");
		cm.dispose();
	    }
	    } else {
		cm.sendOk("Quay l¢i khi b¢n ä c¬p 70 và s÷ dîng Ðiºm k¸ n£ng.");
		cm.dispose();
	    }
    }
}