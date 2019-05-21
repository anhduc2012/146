var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (cm.getPlayer().getMapId() == 931000011 || cm.getPlayer().getMapId() == 931000030) {
	cm.dispose();
	return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1) {
    	if (status == 0) {
    	    cm.sendNext("Whoa. Cái g¾ «» x¡y ra? Cái ly bÅ vå ... «» làm rung «Øng «ó trïÜc «ó phá vå nó?");
    	} else if (status == 1) {
	    cm.sendNextPrevS("Bây giß, không có g¾ ng£n c¡n b¢n ph¡i không? H»y ra khÇi «ây!", 2);
        } else if (status == 2) {
	    cm.sendNextPrevS("Sau «ó nhanh lên! Ði thôi!", 2);
        } else if (status == 3) {
	    cm.updateInfoQuest(23007, "vel00=2;vel01=2");
	    cm.warp(931000020,1);
	    cm.dispose();
	}
    } else if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1) {
    	if (status == 0) {
    	    cm.sendNext("Ð» lâu rÓi ... kº tö khi tôi ä ngoài phÆng thí nghi½m. Chúng ta «ang ä «âu?");
    	} else if (status == 1) {
	    cm.sendNextPrevS("Ðây là con «ïßng d°n «ªn Edelstein, nÛi tôi sÑng! H»y ra khÇi «ây trïÜc khi Black Wings theo chúng tôi.", 2);
        } else if (status == 2) {
	    cm.updateInfoQuest(23007, "vel00=2;vel01=3");
	    cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
	    cm.dispose();
	}
    } else {
	cm.sendOk("Ð» lâu rÓi ... kº tö khi tôi ä ngoài phÆng thí nghi½m.");
    	cm.dispose();
    }
}