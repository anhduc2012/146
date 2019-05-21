/* Arec
	Thief 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = -1;
var job;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	cm.sendOk("H»y quyªt «Ånh và ghé th£m tôi l®n nøa.");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432)) {
	    cm.sendOk("B¢n dïßng nhï có ti¹m n£ng, luy½n t±p nhi¹u hÛn và mØt ngày nào «ó có l³ tôi s³ xem xét «ào t¢o b¢n");
	    cm.safeDispose();
	    return;
	} if (cm.getJob() == 3612) {
        cm.sendOk("Who the fuq're you?");
	    cm.safeDispose();
	}if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432) && cm.getPlayerStat("LVL") >= 70) {
	    if (cm.getJob() != 432 && cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
	        if (cm.getPlayer().getAllSkillLevels() > cm.getPlayerStat("LVL") * 3) { //player used too much SP means they have assigned to their skills.. conflict
		    cm.sendOk("Có v² nhï b¢n có sÑ lïæng Ðiºm k¸ n£ng lÜn nhïng b¢n «» s÷ dîng «ç Ðiºm k¸ n£ng  cho k¸ n£ng cça b¢n rÓi. Ðiºm k¸ n£ng cça b¢n «» «ïæc «¶t l¢i. #eVui lÆng nói chuy½n vÜi tôi mØt l®n nøa «º thûc hi½n tiªn bØ công vi½c#n");
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
	    if (cm.getPlayerStat("LVL") >= 70 && (cm.getJob() == 432 || cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3)) {
	    	if (cm.getJob() == 410) { // ASSASIN
			cm.changeJob(411); // HERMIT
			cm.sendOk("You are B¢n muÑn trä thành mØt a #bHermit#k.");
			cm.safeDispose();
	    	} else if (cm.getJob() == 420) { // BANDIT
			cm.changeJob(421); // CDIT
			cm.sendOk("You are B¢n muÑn trä thành mØt a #bChief Bandit#.");
			cm.safeDispose();
		} else if (cm.getJob() == 432) { // 
			cm.changeJob(433); // 
			cm.sendOk("You are B¢n muÑn trä thành mØt a #bBlade Lord#k.");
			cm.safeDispose();
	    	}
	    } else {
		cm.sendOk("Quay l¢i khi b¢n ä c¬p 70 và s÷ dîng Ðiºm k¸ n£ng.");
		cm.dispose();
	    }
    }
}
