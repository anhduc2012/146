/* 
 * Cygnus 1st Job advancement - Soul 
 */

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
    if (status == 0) {
	qm.sendYesNo("B¢n «» quyªt «Ånh chïa? Quyªt «Ånh s³ là quyªt «Ånh cuÑi cùng, v¾ v±y h»y suy nghÄ c¯n th±n trïÜc khi quyªt «Ånh ph¡i làm g¾. B¢n có ch¤c ch¤n muÑn trä thành mØt Soul Master?");
    } else if (status == 1) {
	qm.sendNext("Tôi vöa «úc cÛ thº cça b¢n «º làm cho nó hoàn h¡o cho mØt Linh hÓn. Nªu b¢n muÑn trä nên m¢nh hÛn, h»y s÷ dîng Stat Window (S) «º t£ng «iºm ti¹m n£ng thích hæp. Nªu b¢n không ch¤c ch¤n nhøng g¾ «º nâng cao, ch¿ c®n nh¬p vào #bAuto#k.");
	if (qm.getJob() != 1100) {
		qm.resetStats(35, 4, 4, 4);
	    qm.gainItem(1302077, 1);
	    qm.gainItem(1142066, 1);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1100);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Knights to carry.");
    } else if (status == 3) {
	qm.sendNextPrev("I have also given you a hint of #bSP#k, so open the #bSkill Menu#k to acquire new skills. Of course, you can't raise them at all once, and there are some skills out there where you won't be able to acquire them unless you master the basic skills first.");
    } else if (status == 4) {
	qm.sendNextPrev("Unlike your time as a Nobless, once you become the Soul Master, you will lost a portion of your EXP when you run out of HP, okay?");
    } else if (status == 5) {
	qm.sendNextPrev("Now... I want you to go out there and show the world how the Knights of Cygnus operate.");
	qm.safeDispose();
    }
}