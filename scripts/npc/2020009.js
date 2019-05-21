/* Robeira
	Magician 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = -1;
var job;

function start() {
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
	if (!(cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230)) { // CLERIC
	    cm.sendOk("B¢n dïßng nhï có ti¹m n£ng, luy½n t±p nhi¹u hÛn và mØt ngày nào «ó có l³ tôi s³ xem xét «ào t¢o b¢n");
	    cm.dispose();
	    return;
	}
	if ((cm.getJob() == 210 || cm.getJob() == 220 || cm.getJob() == 230) && cm.getPlayerStat("LVL") >= 70) {
	    if (cm.getPlayerStat("RSP") > (cm.getPlayerStat("LVL") - 70) * 3) {
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
	    if (cm.getPlayerStat("LVL") >= 70 && cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3) {
	    if (cm.getJob() == 210) { // FP
		cm.changeJob(211); // FP MAGE
		cm.sendOk("B¢n muÑn trä thành mØt a #bFire/Poison Mage#k");
		cm.dispose();
	    } else if (cm.getJob() == 220) { // IL
		cm.changeJob(221); // IL MAGE
		cm.sendOk("B¢n muÑn trä thành mØt an #bIce/Lightning Mage#k.");
		cm.dispose();
	    } else if (cm.getJob() == 230) { // CLERIC
		cm.changeJob(231); // PRIEST
		cm.sendOk("B¢n muÑn trä thành mØt a #bPriest#k.");
		cm.dispose();
	    }
	    } else {
		cm.sendOk("Quay l¢i khi b¢n ä c¬p 70 và s÷ dîng Ðiºm k¸ n£ng.");
		cm.dispose();
	    }
    }
}