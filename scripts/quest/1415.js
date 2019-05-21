var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("Wow. B¢n «» thûc sû phát triºn r¬t nhi¹u kº tö l®n cuÑi tôi nh¾n th¬y b¢n. Nhïng b¢n «» nghe v¹ công vi½c mÜi? ");
	} else if (status == 1) {
	    qm.sendNextPrev("Ôi trßi th±t tuy½t! Nó dành cho t¬t c¡ các pháp sï tö 30 trä lên!");
	} else if (status == 2) {
	    qm.askAcceptDecline("V¾ v±y ..... B¢n có muÑn kiºm tra k¸ n£ng cça b¢n chÑng l¢i k² thù m¢nh m³, và xem nªu b¢n có nhøng g¾ nó c®n? T¬t c¡ b¢n c®n là 30 Marbles tÑi tö nhøng con quái v±t! Cho phép «i.");
		qm.forceStartQuest();
	} else if (status == 3) {
	    if (!qm.haveItem(4031013, 30)) {
                qm.warp(910140000);//mage test
                qm.dispose();
	    }else {
		qm.dispose();
		}
            }
            }
            }

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    if (qm.haveItem(4031013, 30) ) {
			qm.removeAll(4031013);
			qm.sendOk("Xin chúc möng b¢n bây giß là mØt Fire / Poison!");
            qm.changeJob(210);
			//qm.gainSp(3);
			qm.forceCompleteQuest();
            qm.dispose();
	    }
	}
	}
}