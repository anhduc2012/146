var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (cm.getPlayer().getMapId() == 931000011) {
	cm.dispose();
	return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel00=1") == -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
    	if (status == 0) {
    	    cm.sendNext("? l¢i!");
    	} else if (status == 1) {
	    cm.sendNextPrevS("Ai nói chuy½n vÜi b¢n?B¢n là ai!", 2);
        } else if (status == 2) {
	    cm.sendNextPrev("Look up.");
        } else if (status == 3) {
	    cm.updateInfoQuest(23007, "vel00=1");
	    cm.showWZEffect("Effect/Direction4.img/Resistance/ClickVel");
	    cm.dispose();
	}
    } else if (cm.getInfoQuest(23007).indexOf("vel00=1") != -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
    	if (status == 0) {
    	    cm.sendNext("Tên tôi là #bVita #k. Tôi là mØt trong nhøng «Ñi tïæng th÷ nghi½m #k cça #rDoctor Gelimer. Nhïng «i¹u «ó không quan trÎng ngay bây giß. B¢n ph¡i ra khÇi «ây trïÜc khi ai «ó nh¾n th¬y b¢n!");
    	} else if (status == 1) {
	    cm.sendNextPrevS("Ðæi «», b¢n «ang nói g¾ v±y? Ai «ó «ang làm thí nghi½m cho b¢n?! Và ai là Gelimer?", 2);
        } else if (status == 2) {
	    cm.sendNextPrev("Shhh! B¢n có nghe th¬y «i¹u «ó không? Ai «ó «ang «ªn! Nó ph¡i là Doctor Gelimer! ? không!");
        } else if (status == 3) {
	    cm.updateInfoQuest(23007, "vel00=2");
	    cm.warp(931000011,0);
	    cm.dispose();
	}
    } else if (cm.getInfoQuest(23007).indexOf("vel01=1") != -1) {
    	if (status == 0) {
    	    cm.sendNext("? «âu, mØt cái g¾ «ó ph¡i có phân tâm chúng. Bây giß là cÛ hØi cça b¢n. GO!");
    	} else if (status == 1) {
	    cm.sendNextPrevS("#b(Vita nh¤m m¤t l¢i nhï thº cô ¬y «» tö bÇ. B¢n nên làm g¾? Làm thª nào v¹ cÑ g¤ng «º phá vå wad?)#k", 2);
        } else if (status == 2) {
	    cm.sendNextPrev("#b(B¢n «» cÑ g¤ng «º «¢t watt vÜi t¬t c¡ sñc m¢nh cça b¢n, nhïng bàn tay cça b¢n trïæt!)#k");
        } else if (status == 3) {
	    cm.gainExp(60);
	    cm.warp(931000013,0);
	    cm.dispose();
	}
    }
}