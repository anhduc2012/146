var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNext("ChuØt nhÇ. Tôi nói, làm thª nào DARE b¢n cÑ g¤ng thoát khÇi nÛi này?");
    } else if (status == 1) {
	cm.sendNextPrevS("Shoot, we were spotted!", 2);
    } else if (status == 2) {
	cm.sendNextPrev("Bây giß, bây giß, tr² em. Ğöng làm «i¹u này khó hÛn nó c®n. Ch¿ c®n «i v¹ phía tôi, «µp và d¼ dàng ... Ğæi «», b¢n không ph¡i là mØt trong nhøng môn thi. B¢n là mØt trong nhøng ngïßi dân thÅ tr¬n, không ph¡i b¢n?");
    } else if (status == 3) {
	cm.sendNextPrevS("Ğúng v±y. Tôi là mØt cï dân cça Edelstein, không ph¡i là mØt chç «¹ th÷ nghi½m. B¢n không thº «ïa tôi «i vÆng quanh.", 2);
    } else if (status == 4) {
	cm.sendNextPrev("Ôi trßi, ôi. Tôi nói vÜi hÎ «º ch¤c ch¤n r¥ng nhøng ngïßi dân thÅ tr¬n giø con cái cça hÎ tránh xa các mÇ ... Than ôi, «» quá muØn rÓi. Tôi không thº cho phép b¢n nói vÜi b¬t cñ ai v¹ phÆng thí nghi½m này, v¾ v±y tôi «oán b¢n s³ ch¿ ph¡i ä l¢i «ây và ... giúp «å vÜi các thí nghi½m. *snicker*");
    } else if (status == 5) {
	cm.sendNextPrevS("Hmph. Tö lÜn, nhïng h»y xem b¢n có thº b¤t «ïæc tôi trïÜc không.", 2);
    } else if (status == 6) {
	cm.sendNextPrev("T¢i sao, b¢n x¬c láo, ít - Ahem, ahem, ahem. Lßi nói cça b¢n không quan trÎng. Ğ» «ªn lúc tôi rút súng lÜn. Tôi hy vÎng b¢n «» s§n sàng. Nªu không, b¢n s³ ph¡i chÅu «ûng.");
    } else if (status == 7) {
	cm.sendNextPrev("Tôi nói, có b¬t kÿ tö ngø lÜn hÛn, kiddo? Tôi s³ «¡m b¡o Gelimer thûc hi½n mØt sÑ thí nghi½m «¶c bi½t tàn b¢o v¹ b¢n. Nhïng tôi s³ r¬t tuy½t nªu b¢n «ªn vÜi tôi giÑng nhï yên tÄnh.");
    } else if (status == 8) {
	cm.sendNextPrevS("Giø nó ngay t¢i «ó!", 4, 2159010);
    } else if (status == 9) {
	cm.warp(931000021,1);
    	cm.dispose();
    }
}