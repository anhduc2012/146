/* Author: Xterminator
	NPC Name: 		Kyrin
	Map(s): 		The Nautilus : Navigation Room (120000101)
	Description: 		H¡i T¶c Instructor
*/

var status = 0;
var requirements = false;
var text;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (((status == 0 || status == 1 || status == 9) && mode == 0) || ((status == 8 || status == 12 || status == 16 || status == 18 || status == 21) && mode == 1)) {
	cm.dispose();
	return;
    } else if (status == 2 && mode == 0 && requirements) {
	cm.sendNext("Tôi hiºu ... Vâng, vi½c chÎn mØt công vi½c mÜi là mØt quyªt «Ånh r¬t quan trÎng. Nªu b¢n «» s§n sàng, h»y cho tôi biªt!");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.getMapId() == 912010200) {
	    status = 100;
	    cm.sendNext("Không t½ chút nào! H»y th¡o lu±n «i¹u này bên ngoài!");
	} else {
	    var tosent = "B¢n có g¾ «º nói không? #b\r\n#L0#Tôi muÑn t¾m hiºu thêm v¹ VË sï...#l";
	    if (cm.getQuestStatus(6370) == 1 || cm.getQuestStatus(6330) == 1) {
		tosent += "\r\n#L1#Tôi «» s§n sàng chiªn «¬u chÑng l¢i b¢n.#l"
	    }
	    cm.sendSimple(tosent);
	}
    } else if (status == 1) {
	if (cm.getJob() == 510 || cm.getJob() == 520 || cm.getJob() == 530) {
	    if (cm.getPlayerStat("LVL") < 70) {
		if (cm.getJob() == 510) {
		    cm.sendNext("Ohhh, «ó là b¢n. Làm thª nào giÑng nhï mØt VË sï? B¢n trông cao c¬p hÛn nhi¹u và «ánh bóng hÛn l®n cuÑi cùng tôi nh¾n th¬y b¢n. Hy vÎng nhøng «i¹u tuy½t vßi dành cho b¢n trong tïÛng lai.");
		} else if (cm.getJob() == 530) {
		    cm.sendNext("Ohhh, «ó là b¢n. Làm thª nào giÑng nhï mØt VË sï? B¢n trông cao c¬p hÛn nhi¹u và «ánh bóng hÛn l®n cuÑi cùng tôi nh¾n th¬y b¢n. Hy vÎng nhøng «i¹u tuy½t vßi dành cho b¢n trong tïÛng lai.");
		} else {
		    cm.sendNext("Ohhh, «ó là b¢n. Làm thª nào giÑng nhï mØt VË sï? B¢n trông cao c¬p hÛn nhi¹u và «ánh bóng hÛn l®n cuÑi cùng tôi nh¾n th¬y b¢n. Hy vÎng nhøng «i¹u tuy½t vßi dành cho b¢n trong tïÛng lai.");
		}
	    } else {
			cm.sendNext("Ði g¶p Th®y H¡i T¶c ä Làng Tuyªt. Anh ¬y s³ giúp b¢n trä nên m¢nh m³ hÛn.");
		}
	    cm.dispose();
	} else if (cm.getJob() == 500) {
	    if (cm.getPlayerStat("LVL") < 30) {
		status = 9;
		cm.sendSimple("B¢n có «i¹u g¾ khiªn b¢n khao khát trä thành H¡i t¶c...?#b\r\n#L0#Các tính n£ng cÛ b¡n cça H¡i t¶c là g¾??#l\r\n#L1#Vë khí mà h¡i t¶c s÷ dîng là g¾?#l\r\n#L2#Trang bÅ mà h¡i t¶c mang trên ngïßi?#l\r\n#L3#K¸ n£ng cça H¡i t¶c nhï thª nào?");
	    } else if (cm.getPlayerStat("LVL") >= 30) {
		status = 22;
		cm.sendSimple("B¢n có muÑn biªt thêm v¹ VË sï và Th®n súng không? Nó s³ là tÑt «º biªt trïÜc, v¾ v±y b¢n s³ có mØt h¾nh ¡nh rË ràng v¹ nhøng g¾ b¢n muÑn trä thành cho tiªn bØ công vi½c cça b¢n...\r\n#b#L0# H»y gi¡i thích cho tôi v¹ VË sï.#k#l\r\n#b#L1# H»y gi¡i thích cho tôi v¹ th®n súng.#k#l");
	    }
	} else if (cm.getJob() == 501) {
		if (cm.getPlayerStat("LVL") < 30) {
			status = 9;
			cm.sendSimple("B¢n có «i¹u g¾ khiªn b¢n khao khát trä thành H¡i t¶c...?#b\r\n#L0#Các tính n£ng cÛ b¡n cça H¡i t¶c là g¾??#l\r\n#L1#Vë khí mà h¡i t¶c s÷ dîng là g¾?#l\r\n#L2#Trang bÅ mà h¡i t¶c mang trên ngïßi?#l\r\n#L3#K¸ n£ng cça H¡i t¶c nhï thª nào?");
		} else if (cm.getPlayerStat("LVL") >= 30) {
			status = 44;
			cm.sendSimple("B¢n có muÑn biªt thêm v¹ Cannoneers? Nó s³ là tÑt «º biªt trïÜc, v¾ v±y b¢n s³ có mØt h¾nh ¡nh rË ràng v¹ nhøng g¾ b¢n muÑn trä thành cho tiªn bØ công vi½c cça b¢n...\r\n#b#L0# Please explain to me what being a Cannoneer is all about.#k#l");
	    }
	} else if (cm.getJob() == 0 || cm.getJob() == 1) {
	    cm.sendNext("B¢n có muÑn trä thành mØt H¡i T¶c? B¢n s³ c®n ph¡i «áp ñng bØ tiêu chu¯n cça chúng tôi nªu b¢n muÑn trä thành mØt trong sÑ chúng tôi. Tôi c®n b¢n ít nh¬t là #b Level 10, vÜi khéo léo ä mñc 20 ho¶c cao hÛn. #k H»y xem...");
	} else {
	    if (selection == 0) {
		cm.sendNext("B¢n không muÑn c¡m th¬y tû do phát ra tö biºn? B¢n không muÑn sñc m¢nh, sû nÖi tiªng, và mÎi thñ khác «i kèm vÜi nó? Sau «ó, b¢n nên tham gia vÜi chúng tôi và t±n hïäng nó cho m¾nh.");
		cm.dispose();
	    } else if (selection == 1 && (cm.getQuestStatus(6370) == 1 || cm.getQuestStatus(6330) == 1)) {
		status = 99;
		cm.sendNext("B¢n «» s§n sàng, ph¡i không? Bây giß cÑ g¤ng chÑng l¢i các cuØc t¬n công cça tôi trong 2 phút. Tôi s³ không d¼ dàng vÜi b¢n. Chúc may m¤n, bäi v¾ b¢n s³ c®n nó.");
	    }
	}
    } else if (status == 2) {
	if (cm.getPlayerStat("LVL") >= 10) {
	    requirements = true;
	    cm.sendYesNo("B¢n nh¾n nhi¹u hÛn «ç «i¹u ki½n! Tuy½t vßi, b¢n «» s§n sàng «º trä thành mØt trong sÑ chúng tôi?");
	} else {
	    cm.sendNext("Hmm ... Tôi không nghÄ b¢n «» «ào t¢o «ç rÓi. Hµn g¶p tôi khi b¢n m¢nh hÛn.");
	}
    } else if (status == 3) {
	if (requirements)
	    cm.sendNext("Chào möng «ªn vÜi ban nh¢c H¡i T¶cs! B¢n có thº ph¡i dành thßi gian làm ngïßi lang thang lúc «®u, nhïng ngày tÑt hÛn ch¤c ch¤n s³ b¾nh minh cho b¢n, sÜm hÛn b¢n nghÄ! Trong thßi gian chß «æi, h»y «º tôi chia s² mØt sÑ kh¡ n£ng cça tôi vÜi b¢n.");
	else
	    cm.dispose();
    } else if (status == 4) {
	if (cm.getJob() == 1 || (cm.getJob() == 0 && cm.getPlayer().getSubCategoryField() > 1)) {
	    cm.changeJob(501);
	    cm.resetStats(4, 4, 4, 4);
		cm.gainItem(1532000, 1);
		cm.gainSp(1);
	} else if (cm.getJob() == 0) {
	    cm.changeJob(500);
	    cm.resetStats(4, 20, 4, 4);
	    cm.gainItem(1482014, 1);
	    cm.gainItem(1492014, 1);
	    cm.gainItem(2330006, 600);
	    cm.gainItem(2330006, 600);
	    cm.gainItem(2330006, 600);
	    cm.gainSp(1);
	}
	cm.sendNext("Tôi vöa t£ng sÑ lïæng ô trÑng trong túi «Ó cça b¢n và v.v. hành lü. B¢n cëng «» nh±n «ïæc mØt chút m¢nh m³ hÛn. B¢n có c¡m nh±n «ïæc không? Bây giß b¢n có thº chính thñc gÎi m¾nh là H¡i T¶c, h»y tham gia cùng chúng tôi trong nhi½m vî phiêu lïu và tû do cça chúng tôi!");
    } else if (status == 5) {
	cm.sendNext("Tôi ch¿ cho b¢n mØt chút # bSP #k. H»y xem #bSkill menu #k «º t¾m mØt sÑ k¸ n£ng và s÷ dîng SP cça b¢n «º hÎc các k¸ n£ng. H»y coi chöng r¥ng không ph¡i t¬t c¡ các k¸ n£ng «¹u có thº «ïæc t£ng cïßng tö khi b¤t «®u. Có mØt sÑ k¸ n£ng mà b¢n ch¿ có thº có «ïæc sau khi làm chç các k¸ n£ng cÛ b¡n.");
    } else if (status == 6) {
	cm.sendNext("MØt «i¹u nøa. Bây giß b¢n «» tÑt nghi½p tö Ranks cça mØt ngïßi mÜi b¤t «®u thành mØt H¡i T¶c, b¢n s³ ph¡i ch¤c ch¤n r¥ng b¢n không chªt sÜm. Nªu b¢n m¬t t¬t c¡ sñc khÇe cça m¾nh, b¢n s³ m¬t EXP «áng giá mà b¢n «» kiªm «ïæc. Nó s³ không bÑc mùi «º làm m¬t EXP khó kiªm «ïæc b¥ng cách chªt?");
    } else if (status == 7) {
	cm.sendNext("Ðây là t¬t c¡ nhøng g¾ tôi có thº d¢y cho b¢n. Tôi cëng «» cung c¬p cho b¢n mØt sÑ vë khí høu ích «º làm vi½c vÜi, do «ó, nó thuØc vào b¢n bây giß «º «ào t¢o vÜi hÎ. Thª giÜi là cça b¢n «º tham gia, v¾ v±y h»y s÷ dîng tài nguyên cça b¢n mØt cách khôn ngoan, và khi b¢n c¡m th¬y nhï b¢n «» «¢t «ªn «¿nh cao, h»y cho tôi biªt. Tôi s³ có mØt cái g¾ «ó tÑt hÛn cho b¢n trong c÷a hàng...");
    } else if (status == 8) {
	cm.sendNext("Oh, và ... nªu b¢n có thêm câu hÇi v¹ vi½c là mØt H¡i T¶c, ho¶c nªu b¢n c®n mØt sÑ con trÇ ... b¢n luôn có thº hÇi tôi. Tôi s³ g¶p b¢n...");
    } else if (status == 10) {
	if (selection == 0) {
	    status = 11;
	    text = "Ðây là nhøng g¾ b¢n c®n biªt v¹ vi½c trä thành mØt tên VË sï. B¢n có thº nghÄ r¥ng H¡i T¶c là mØt con «ïßng lÜn cung c¬p nhi¹u con «ïßng. Nªu b¢n muÑn thÑng trÅ quái v±t vÜi sñc m¢nh vë phu, h»y t±p trung vào vi½c c¡i thi½n Sñc m¢nh. Nªu b¢n muÑn outsmart nhøng con quái v±t vÜi các cuØc t¬n công t®m xa, tôi «¹ nghÅ b¢n t±p trung vào vi½c c¡i thi½n Khéo léo.";
	} else if (selection == 1) {
	    status = 13;
	    text = "Không giÑng nhï các công vi½c khác, H¡i T¶c s³ cho phép b¢n chiªn «¬u vÜi quái v±t b¥ng n¤m tay tr®n. Tuy nhiên, nªu b¢n muÑn tÑi «a hóa kh¡ n£ng t¬n công cça m¾nh, tôi khuyên b¢n nên s÷ dîng Tay «¬m ho¶c Súng.";
	} else if (selection == 2) {
	    status = 17;
	    text = "H¡i T¶c thïßng là H¢m «Øi nÖi, s÷ dîng nhanh chóng «º t¬n công các «Ñi thç kinh ng¢c. Vâng, «i¹u này cëng có nghÄa là áo giáp cëng ph¡i nhµ. Ðây là lü do t¢i sao h®u hªt qu®n áo cho H¡i T¶c «ïæc làm tö v¡i.";
	} else {
	    status = 19;
	    text = "ÐÑi vÜi H¡i T¶c, có nhøng k¸ n£ng h× træ tính chính xác và tránh «ïæc c®n thiªt «º có hi½u qu¡. MØt sÑ k¸ n£ng t¬n công ch¿ liên quan «ªn n¤m «¬m tr®n ho¶c súng, v¾ v±y b¢n có thº muÑn chÎn mØt trong hai phïÛng pháp t¬n công và dính vào nó khi t£ng c¬p k¸ n£ng cça b¢n.";
	}
	cm.sendNext(text);
    } else if (status == 11) {
	cm.sendNext(text);
    } else if (status == 12) {
	cm.sendNext("Ðó là mØt công vi½c thay «Öi dûa trên nhøng g¾ b¢n làm vÜi nó. B¢n nên suy nghÄ v¹ phía trïÜc và xác «Ånh nhøng g¾ b¢n muÑn trä thành sau này, v¾ v±y b¢n có thº b¤t «®u t±p trung vào hai sÑ li½u thÑng kê b¢n muÑn c¡i thi½n, STR ho¶c DEX. Nªu b¢n muÑn trä thành mØt  H¡i t¶c «¬m h»y t£ng Sñc m¢nh.Th®n súng, t£ng Khéo léo.");
    } else if (status == 13) {
	cm.sendNext(text);
    } else if (status == 14) {
	cm.sendNext("Nªu b¢n muÑn tham gia vào các cuØc t¬n công c±n chiªn và gây choáng quái v±t, h»y s÷ dîng Knuckler. Nó trông giÑng nhï móng vuÑt mà nhøng tên trØm s÷ dîng, nhïng nó «ïæc làm b¥ng v±t li½u ch¤c ch¤n hÛn nhi¹u «º mô phÇng và b¡o v½ n¤m «¬m.");
    } else if (status == 15) {
	cm.sendNext("Nªu b¢n muÑn «Ñi thç t®m xa, h»y s÷ dîng Gun. T¬t nhiên, b¡n thân Gun s³ không làm «i¹u «ó cho b¢n. B¢n s³ c®n «¢n. B¢n có thº mua chúng ä b¬t kÿ c÷a hàng ti½n læi nào g®n «ó.");
    } else if (status == 16) {
	cm.sendNext("Nªu b¢n muÑn «Ñi thç t®m xa, h»y s÷ dîng Gun. T¬t nhiên, b¡n thân Gun s³ không làm «i¹u «ó cho b¢n. B¢n s³ c®n «¢n. B¢n có thº mua chúng ä b¬t kÿ c÷a hàng ti½n læi nào g®n «ó....");
    } else if (status == 17) {
	cm.sendNext(text);
    } else if (status == 18) {
	cm.sendNext("Phong cách t¬n công cça b¢n s³ khác nhau tùy thuØc vào Vë khí b¢n chÎn, v¾ v±y h»y suy nghÄ c¯n th±n trïÜc khi chÎn. T¬t nhiên, vë khí b¢n s÷ dîng cëng có thº xác «Ånh nhøng g¾ b¢n s³ trä thành xuÑng «ïßng...!");
    } else if (status == 19) {
	cm.sendNext(text);
    } else if (status == 20) {
	cm.sendNext("Nªu b¢n muÑn s÷ dîng súng, sau «ó tôi «¹ nghÅ b¢n s÷ dîng k¸ n£ng #bB¤n 2 viên #k. B¤n 2 viên cho phép b¢n b¤n 2 viên «¢n cùng mØt lúc, «i¹u này s³ cho phép b¢n t¬n công quái v±t tö t®m xa.");
    } else if (status == 21) {
	cm.sendNext("Nªu b¢n «ang s÷ dîng n¤m tay tr®n ho¶c G£ng «¬m, h»y t±p trung vào #bSommersault Kick #k và / ho¶c #bFlash Fist #k. Thay thª hai k¸ n£ng này «º tÑi «a hóa kh¡ n£ng t¬n công cça b¢n. B¢n cëng có thº s÷ dîng nhøng k¸ n£ng này trong khi mang theo mØt kh¯u súng, nhïng nó không hi½u qu¡ b¥ng cách s÷ dîng G£ng «¬m.");
    } else if (status == 23) {
	if (selection == 0) {
	    status = 24;
	    text = "Tôi s³ gi¡i thích cho b¢n nhøng g¾ mØt VË Sï. VË Sï là dëng c¡m vÜi n¤m «¬m tr®n và knucklers. Kº tö khi VË Sï có n£ng lïæng Chç yªu trong Melee Battles, tÑt nh¬t b¢n nên s÷ dîng các k¸ n£ng t¬n công khác nhau «º stun nhøng con quái v±t «®u tiên trïÜc khi tiªp tîc t¬n công m¢nh hÛn. S÷ dîng #q5101002 ##k «º làm choáng k² thù «¥ng sau b¢n và #q5101003 ##k «º làm choáng k² thù trïÜc m¶t b¢n.";
	} else {
	    status = 26;
	    text = "I'll explain to you what being a Gunslinger is all about. Gunslingers are H¡i T¶cs that can attack enemies from long range with high accuracy. Use #b#q5201001##k or #b#q5201002##k to attack multiple monsters at once.";
	}
	cm.sendNext(text);
    } else if (status == 24) {
	cm.sendNext(text);
    } else if (status == 25) {
	cm.sendNext("One Brawler skill is called #b#q5101007##k. This skill is useful when you use it to leave the area without being detected by the monsters. Basically, it's you disguised as an Oak Barrel, and walking away from danger. Sometimes, a quick-thinking monster may catch you, but the higher your skill level gets, the less possibility of you getting caught red-handed and having to fight your way out.");
    } else if (status == 26) {
	cm.sendNext("Next, we'll talk about #b#q5101005##k. It's a skill that allows you to regain MP at the expense of a bit of HP. Other than the Warriors, Brawlers have the highest HP of all, so losing a bit of HP doesn't affect them as much. It's especially useful when you're in the middle of combat, and you've run out of MP potions. Of course, you'll need to be aware of your HP level and the risks you'll be taking by using the skill.");
	status = 34;
    } else if (status == 27) {
	cm.sendNext("One Gunslinger skill is called #b#q5201006##k. This skill uses the recoil of the gun to let you jump backwards and attack monsters from behind. This skill is especially effective when you are trapped in the middle of monsters and need to escape. Just make sure you have a monster behind you before using this, okay?");
    } else if (status == 28) {
	cm.sendNext("Next, we'll talk about #b#q5201005##k. This skill allows you to jump without being affected by Maple's law of gravity. This will allow you to stay afloat longer, and land on the ground later than regular jumps. If you use #b#q5201005##k from a high place, don't you think you'll be able to attack monsters in midair?");
	status = 39;
    } else if (status == 35) {
	cm.sendNext("B¢n muÑn trä thành #bVË Sï#k.");
    } else if (status == 36) {
	if (cm.getJob() == 500) {
	    cm.changeJob(510);
	    cm.gainSp(1);
	}
	cm.sendNext("Ðïæc rÓi, tö «ây trä «i, b¢n là #bVË Sï #k. Brawlers cai trÅ thª giÜi b¥ng sñc m¢nh cça n¤m tay tr®n cça hÎ ... có nghÄa là hÎ c®n ph¡i luy½n t±p cÛ thº cça hÎ nhi¹u hÛn nhøng ngïßi khác. Nªu b¢n g¶p khó kh£n trong vi½c «ào t¢o, tôi s³ r¬t s§n lÆng træ giúp.");
    } else if (status == 37) {
	cm.sendNext("Tôi vöa «ïa cho b¢n mØt cuÑn sách k¸ n£ng «Æi hÇi k¸ n£ng chÛi brawler, b¢n s³ th¬y nó r¬t høu ích. B¢n cëng «» nh±n «ïæc thêm ch× cho các mîc s÷ dîng, mØt thûc tª «®y «ç. Tôi cëng «» t£ng MaxHP và MaxMP cça b¢n. Tû m¾nh kiºm tra.");
    } else if (status == 38) {
	cm.sendNext("Tôi «» «ïa cho b¢n mØt chút #bSP#k, v¾ v±y tôi «¹ nghÅ b¢n mä menu #bskill#k ngay bây giß.B¢n s³ có thº nâng cao k¸ n£ng làm vi½c thñ 2 cça m¾nh. H»y c¯n th±n r¥ng không ph¡i t¬t c¡ các k¸ n£ng «¹u có thº Có mØt sÑ k¸ n£ng mà b¢n ch¿ có thº có «ïæc sau khi làm chç các k¸ n£ng cÛ b¡n....");
    } else if (status == 39) {
	cm.sendNext("Brawlers c®n ph¡i là mØt lûc lïæng m¢nh m³, nhïng «i¹u «ó không có nghÄa là hÎ có quy¹n b¤t n¢t k² yªu. True Brawlers s÷ dîng sñc m¢nh to lÜn cça hÎ theo nhøng cách tích cûc, «ó là khó hÛn là ch¿ «ào t¢o «º «¢t «ïæc sñc m¢nh. Tôi hy vÎng b¢n làm theo Creed này khi b¢n «º l¢i d¬u ¬n cça b¢n trong thª giÜi này nhï mØt Brawler. Tôi s³ g¶p b¢n khi b¢n «» hoàn thành mÎi thñ b¢n có thº làm Brawler. Tôi s³ «æi b¢n ä «ây.");
	cm.safeDispose();
    } else if (status == 40) {
	cm.sendNext("B¢n muÑn trä thành #bTh®n súng#k.");
    } else if (status == 41) {
	if (cm.getJob() == 500) {
	    cm.changeJob(520);
	    cm.gainSp(1);
	}
	cm.sendNext("T¬t nhiên bây giß b¢n là #bTh®n súng#k."); // Not complete
    } else if (status == 42) {
	cm.sendNext("Tôi vöa «ïa cho b¢n mØt cuÑn sách k¸ n£ng «Æi hÇi k¸ n£ng cça Gunslinger, b¢n s³ th¬y nó r¬t høu ích. B¢n cëng «» nh±n «ïæc thêm ch× cho các mîc s÷ dîng, mØt thûc tª «®y «ç. Tôi cëng «» t£ng MaxHP và MaxMP cça b¢n. Tû m¾nh kiºm tra.");
    } else if (status == 43) {
	cm.sendNext("Tôi «» «ïa cho b¢n mØt chút #bSP#k, v¾ v±y tôi «¹ nghÅ b¢n mä menu #bskill#k ngay bây giß.B¢n s³ có thº nâng cao k¸ n£ng làm vi½c thñ 2 cça m¾nh. H»y c¯n th±n r¥ng không ph¡i t¬t c¡ các k¸ n£ng «¹u có thº Có mØt sÑ k¸ n£ng mà b¢n ch¿ có thº có «ïæc sau khi làm chç các k¸ n£ng cÛ b¡n....");
    } else if (status == 44) {
	cm.sendNext("I'll be waiting for you here."); // Not complete
	cm.safeDispose();
    } else if (status == 45) {
	cm.sendNext("Okay, as promised, you will now become a #bCannoneer#k.");
    } else if (status == 46) {
	if (cm.getJob() == 501) {
	    cm.changeJob(530);
	}
	cm.sendNext("Okay, from here on out, you are a #bCannoneer#k."); // Not complete
    } else if (status == 47) {
	cm.sendNext("I have just given you a skill book that entails Cannoneer skills, you'll find it very helpful. You have also gained additional slots for Use items, a full row in fact. I also boosted your MaxHP and MaxMP. Check it out for yourself.");
    } else if (status == 48) {
	cm.sendNext("I have given you a little bit of #bSP#k, so I suggest you open the #bskill menu#k right now. You'll be able to enhance your newly-acquired 2nd Job skills. Beware that not all skills can be enhanced from the get go. There are some skills that you can only acquire after mastering basic skills.");
    } else if (status == 49) {
	cm.sendNext("I'll be waiting for you here."); // Not complete
	cm.safeDispose();
    } else if (status == 100) {
	if (cm.getQuestStatus(6370) == 1) { // Captain
	    var dd = cm.getEventManager("KyrinTrainingGroundC");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("An unknown error occured.");
	    }
	} else if (cm.getQuestStatus(6330) == 1) { // Viper
	    var dd = cm.getEventManager("KyrinTrainingGroundV");
	    if (dd != null) {
		dd.startInstance(cm.getPlayer());
	    } else {
		cm.sendOk("An unknown error occured.");
	    }
	}
	cm.dispose();
    } else if (status == 101) {
	if (cm.getQuestStatus(6370) == 1) { // Captain
	    cm.teachSkill(5221006, 0, 10);
//	    cm.forceCompleteQuest(6371);
	    cm.forceCompleteQuest(6370);
	} else if (cm.getQuestStatus(6330) == 1) { // Viper
	    cm.teachSkill(5121003, 0, 10);
//	    cm.forceCompleteQuest(6331);
	    cm.forceCompleteQuest(6330);
	}
	cm.warp(120000101, 0);
	cm.dispose();
    }
}