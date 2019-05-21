var status = -1;

function end(mode, type, selection) {
	start(mode,type,selection);
}

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
	qm.sendYesNo("B¢n «» quyªt «Ånh chïa? Quyªt «Ånh s³ là quyªt «Ånh cuÑi cùng, v¾ v±y h»y suy nghÄ c¯n th±n trïÜc khi quyªt «Ånh ph¡i làm g¾. B¢n có ch¤c ch¤n muÑn trä thành mØt Ác quÏ?");
    } else if (status == 1) {
	qm.sendNextPrevS("Tôi vöa «úc cÛ thº cça b¢n «º làm cho nó hoàn h¡o cho mØt Ác quÏ. Nªu b¢n muÑn trä nên m¢nh hÛn, h»y s÷ dîng Stat Window (S) «º t£ng sÑ li½u thÑng kê thích hæp. Nªu b¢n không ch¤c ch¤n nhøng g¾ «º nâng cao,h»y ¬n Auto!", 1);
	if (qm.getJob() == 3110) {
		qm.teachSkill(31110010, 1, 1);
	    qm.changeJob(3111);
		qm.teachSkill(30011109, 1, 1);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("B¢n h»y ch£m ch¿ luy½n t±p «º giÇi hÛn nhé.");
    } else if (status == 3) {
	qm.sendNextPrev("Bây giß b¢n có thº «i.");
	qm.safeDispose();
    }
}