var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextNoESC("Có ph¡i t¬t c¡ các ch¿ huy ä «ây không? TÑt, chúng ta h»y b¤t «®u.");
    } else if (status == 1) {
		cm.sendNextNoESC("Cho «ªn khi Black Mage hùng m¢nh hoàn thành kª ho¢ch cça m¾nh, chúng ta không «ïæc thï gi»n mØt lúc! Chúng ta v°n cÆn d¼ bÅ tÖn thïÛng. Bây giß, #h0#, tôi nghe nói b¢n «» phát hi½n ra thông tin thú vÅ.", 2159308);
    } else if (status == 2) {
		cm.sendPlayerToNpc("Vâng .. Tôi «» phát hi½n ra mØt nhóm kháng chiªn «» «ïæc h¾nh thành trong bí m±t và «ang xây dûng mØt lûc lïæng «º chÑng l¢i chúng tôi.");
	} else if (status == 3) {
		cm.sendNextNoESC("Kháng chiªn? Ha! Không ai cÆn l¢i trong thª giÜi này có thº chÑng l¢i chúng ta. Tôi th±m chí cÆn nghe th¬y mØt sÑ tiªng rên r¿ gÎi hÎ là #rHeroes#k. Không ph¡i là quü giá?", 2159308);
	} else if (status == 4) {
		cm.sendNextNoESC("Tôi hÛi vui khi th¬y hÎ tranh giành xung quanh trong ho¡ng sæ cça hÎ. HÎ ch¤c ch¤n «» không «ïa ra nhi¹u sñc «¹ kháng khi chúng tôi l¬y Ereve ho¶c khi tôi lo¢i bÇ Castellan.", 2159339);
	} else if (status == 5) {
		cm.sendNextNoESC("Tr±n chiªn ä Ereve th±t d¼ dàng v¾ Black Mage, không ph¡i b¢n, mØt «ña tr².", 2159308);
	} else if (status == 6) {
		cm.sendNextNoESC("Vâng, tôi không ph¡i s÷ dîng toàn bØ sñc m¢nh cça m¾nh. V¾ v±y, có.", 2159339);
	} else if (status == 7) {
		cm.sendPlayerToNpc("B¢n «ang làm g¾ ä «ây, Orchid? B¢n có «ang làm vi½c vÜi Lotus không??");
	} else if (status == 8) {
		cm.sendNextNoESC("Lotus «ang b±n v¾ cô ¬y luôn t¾m kiªm nhi¹u vi½c hÛn «º làm! B¢n không ph¡i làm phi¹n tôi v¹ nó.", 2159339);
	} else if (status == 9) {
		cm.sendNextNoESC("CuØc hÎp này s³ không «i «ªn «âu c¡.");
	} else if (status == 10) {
		cm.sendNextNoESC("B¬t cñ khi nào Orchid nói chuy½n, các cuØc hÎp cça chúng tôi «¹u döng l¢i! ÐÑi vÜi các anh hùng, tôi ch¤c ch¤n #h0# có mØt kª ho¢ch «º «Ñi phó vÜi hÎ. Tôi ch¤c ch¤n nhøng 'anh hùng' th¡m h¢i này s³ không phù hæp vÜi anh ta.", 2159308);
	} else if (status == 11) {
		cm.sendPlayerToNpc("Không giÑng nhï h®u hªt k² thù, các anh hùng chiªn «¬u cho ngïßi khác, không ph¡i b¡n thân hÎ ... hÎ là «¶c bi½t, bäi v¾ hÎ b¡o v½ thª giÜi. Ði¹u «ó làm cho chúng nguy hiºm. Ngoài ra, tôi ch¿ choáng váng Nø th®n. Black Mage là ngïßi «ánh b¢i cô.");
	} else if (status == 12) {
		cm.sendNextNoESC("Làm thª nào khiêm tÑn cça b¢n! B¢n yêu thích Black Mage nhï thª nào ... Tôi, Tôi, Tôi...", 2159308);
	} else if (status == 13) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("Ðç rÓi! C¡ hai b¢n.");
	} else if (status == 14) {
		cm.sendNextNoESC("T¢i sao? Tôi th¬y nó khá thú vÅ.", 2159339);
	} else if (status == 15) {
		cm.sendNextNoESC("Và tôi «ang khen ngæi HERO thûc sû cça các lûc lïæng cça chúng ta, MIGHTY #h0#! Ha ha ha...", 2159308);
	} else if (status == 16) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/10");
		cm.sendNextNoESC("Ðç rÓi! Ch¬p nh±n r¥ng #h0# Choáng váng Nø th®n, cho phép chiªn th¤ng cça chúng tôi. V¾ v±y, «óng góp cça ông là quan trÎng nh¬t. Ngoài ra, b¢n «ïæc ghi có «º làm chói m¤t Nø th®n. B¢n muÑn g¾ hÛn?");
	} else if (status == 17) {
		cm.sendNextNoESC("Ah, nhøng g¾ cça nhóm kháng chiªn cÆn l¢i sau «ó, nªu các anh hùng «ïæc ch£m sóc? Chúng ta ph¡i di chuyºn cùng vÜi cuØc hÎp.", 2159308);
	} else if (status == 18) {
		cm.sendNextNoESC("Theo ch¿ huy, hÎ «» bÅ lo¢i bÇ hoàn toàn.");
	} else if (status == 19) {
		cm.sendNextNoESC("?, tôi có mØt câu hÇi. T¢i sao Black Mage l¢i b¡o chúng ta phá hçy mÎi thñ? Nªu không cÆn g¾, không có g¾ «º cai trÅ.", 2159339);
	} else if (status == 20) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/18");
		cm.sendPlayerToNpc("Cái g¾? Black Mage «» ra l½nh này khi nào? Tôi chïa bao giß nghe nói v¹ «i¹u này.");
	} else if (status == 21) {
		cm.sendNextNoESC("À vâng. Tôi g®n nhï quên «¹ c±p «ªn các «Ûn «¶t hàng mÜi cho b¢n. Black Mage ra l½nh cho t¬t c¡ chúng tôi, ngo¢i trö b¢n, «º lo¢i bÇ mÎi thñ.", 2159308);
	} else if (status == 22) {
		cm.sendNextNoESC("Vâng. Ví dî, Leafre ch¿ bÅ «Ñt cháy thành ch¬t kªt dính..");
	} else if (status == 23) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendPlayerToNpc("(Röng th®n tho¢i?Ðó là g®n gia «¾nh tôi...!)");
	} else if (status == 24) {
		cm.sendNextNoESC("Tôi nghÄ chúng tôi «» làm tÑt. Ch¿ có mØt vài máy chç rÓng duy tr¾ giá kháng cû.", 2159308);
	} else if (status == 25) {
		cm.sendPlayerToNpc("Black Mage không hña s³ t¬n công Leafre? Ph®n nào «» bÅ phá hçy?");
	} else if (status == 26) {
		cm.sendNextNoESC("Ph®n? T¬t c¡ bÎn hÎ, t¬t nhiên rÓi! B¢n có v¬n «¹ g¾?", 2159308);
	} else if (status == 27) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/11");
		cm.sendPlayerToNpc("Làm Ûn cho tôi. Có «i¹u tôi ph¡i tham dû.");
	} else if (status == 28) {
		cm.sendNextNoESC("V°n ngÓi! Chïa có ai bác bÇ b¢n.", 2159308);
	} else if (status == 29) {
		cm.sendDirectionStatus(3, 2);
		cm.sendDirectionStatus(4, 0);
		cm.warp(924020010,0);
		cm.dispose();
	}
}