var status = -1;

function action(mode, type, selection) {
    if (cm.getQuestStatus(21002) == 0) {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendNext("Ôi Aran, anh t¿nh rÓi! Ch¬n thïÛng thª nào? ... Cái g¾? B¢n có muÑn biªt nhøng g¾ «ang x¡y ra ngay bây giß?");
	} else if (status == 1) {
	    cm.sendNextPrev("Chúng tôi «» s§n sàng và s§n sàng rßi khÇi nÛi này. Chúng tôi có t¬t c¡ mÎi ngïßi trên tàu, và Chim thiêng «ïæc «¹ nghÅ b¡o v½ hÆm cça chúng tôi trong suÑt chuyªn bay, v¾ v±y b¢n không c®n ph¡i lo l¤ng g¾. Khi chúng tôi hoàn t¬t mÎi thñ, chúng tôi s³ tiªp tîc và trÑn thoát «ªn ?¡o Victoria.");
	} else if (status == 2) {
	    cm.sendNextPrev("?Óng chí cça Aran ...? Chà ... hÎ «» «i qua «º chiªn «¬u vÜi Phù thçy «en. HÎ quyªt «Ånh nh±n Black Wizard trong khi chúng tôi trÑn thoát. G¾? B¢n muÑn tham gia cùng hÎ trong tr±n chiªn? Không không «ßi nào! B¢n bÅ thïÛng! B¢n nên lên tàu ngay bây giß!");
	} else if (status == 3) {
	    cm.forceStartQuest(21002, "1");
	    // Ahh, Oh No. The kid is missing
	    cm.showWZEffect("Effect/Direction1.img/aranTutorial/Trio");
	    cm.dispose();
	}
    } else {
	if (mode == 1) {
	    status++;
	} else {
	    status--;
	}
	if (status == 0) {
	    cm.sendSimple("We're in a state of emergency. What would you like to know? \r #b#L0#Where's the Black Wizard?#l \r #b#L1#How's the preparation for the escape?#l \r #b#L2#How about the comrades?#l");
	} else if (status == 1) {
	    switch (selection) {
		case 0:
		    cm.sendOk("Tôi nghe nói r¥ng Phù thçy «en ä g®n nÛi chúng ta «ang ä hi½n t¢i. Chúng tôi th±m chí không thº trÑn thoát trong röng v¾ sû «i¹u khiºn cça Black Wizard. ?ó là lü do t¢i sao chúng tôi nghÄ ra chiªc thuy¹n là lÑi thoát cça chúng tôi. Cách duy nh¬t chúng ta có thº rßi khÇi nÛi này là bay v¹ phía «¡o Victoria.");
		    break;
		case 1:
		    cm.sendOk("Chúng tôi có t¬t c¡ mÎi ngïßi trên tàu, và chúng tôi «» s§n sàng và s§n sàng thoát khÇi nÛi này. Chúng tôi ch¿ c®n thêm mØt vài thñ trên tàu, và chúng tôi s³ «ªn «¡o Victoria. Trong chuyªn bay cça chúng tôi, Chim th®n «ïa ra sû b¡o v½, th¬y r¥ng cô ¬y không có ai «º b¡o v½ t¢i Erev vào thßi «iºm này.");
		    break;
		case 2:
		    cm.sendOk("Các «Óng «Øi cça b¢n ... «» rßi khÇi «ây «º tû m¾nh chiªn «¬u vÜi Phù thçy «en, mua mØt ít thßi gian khi chúng tôi trÑn thoát. HÎ quyªt «Ånh không l¬y b¢n, v¾ b¢n bÅ thïÛng và t¬t c¡. Khi chúng tôi cñu «ña tr², b¢n nên lên tàu và rßi «i vÜi chúng tôi, Aran!");
		    break;
	    }
	    cm.safeDispose();
	}
    }
}