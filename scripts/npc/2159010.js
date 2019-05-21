var status = -1;
function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
	status--;
    if (status == 0) {
    	cm.sendNextS("Có v² nhï chúng tôi «» m¬t anh ¬y. T¬t nhiên, tôi có thº d¼ dàng x÷ lü anh ta, nhïng v¬n «¹, nhïng tôi không ch¤c ch¤n tôi b¡o v½ b¢n kiddos cùng mØt lúc. * cïßi * Hai b¢n «ang làm g¾ ä «ây v±y? BÑ mµ cça b¢n không c¡nh báo b¢n tránh xa các mÇ?", 8);
    } else if (status == 1) {
	cm.sendNextPrevS("Ðó là l×i cça tôi! #h0# ch¿ «ang cÑ g¤ng giúp «å! #h0# «» cñu tôi!", 4, 2159007);
    } else if (status == 2) {
	cm.sendNextPrevS("Gi¡i cñu b¢n, eh? Hm, cô £n m¶c vui v², cô bé. Ooooh. B¢n là tù nhân cça Cánh «en?", 8);
    } else if (status == 3) {
	cm.sendNextPrevS("#b(Vita nhanh chóng gi¡i thích t¾nh h¾nh.)#k", 4, 2159007);
    } else if (status == 4) {
	cm.sendNextPrevS("Nhïng b¢n là ai? B¢n «ªn tö «âu? Và t¢i sao b¢n cñu chúng tôi?", 2);
    } else if (status == 5) {
	cm.sendNextPrevS("Tôi là mØt thành viên «áng tû hào cça phe Kháng chiªn, mØt nhóm bí m±t chiªn «¬u và phá ho¢i Cánh Ðen. Tôi không thº nói cho b¢n biªt tôi là ai, nhïng tôi «i theo tên m» cça J.", 8);
    } else if (status == 6) {
	cm.sendNextPrevS("Bây giß, xin vui lÆng trä l¢i thành phÑ và tránh xa các mÇ. ÐÑi vÜi b¢n, Vita, «i vÜi tôi. Nªu b¢n không «ïæc b¡o v½, tôi sæ Black Wings s³ «ªn t¾m b¢n. Không ai có thº giø cho b¢n an toàn nhï tôi có thº! Bây giß, h»y giø bí m±t lßi nói cça tôi. SÑ ph±n cça kháng chiªn phî thuØc vào quyªt «Ånh cça b¢n.", 8);
    } else if (status == 7) {
	cm.sendNextPrevS("Chß «», trïÜc khi b¢n «i, h»y nói cho tôi mØt «i¹u. Làm thª nào tôi có thº tham gia kháng chiªn?", 2);
    } else if (status == 8) {
	cm.sendNextPrevS("Ah, b¢n tr², b¢n muÑn chiªn «¬u vÜi Black Wings, ph¡i không? Trái tim cça b¢n là cao quü, nhïng có r¬t ít b¢n có thº làm «º giúp nhøng n× lûc cça chúng tôi cho «ªn khi b¢n «¢t Lv. 10. Quá nhi¹u, và tôi s³ có mØt ngïßi nào «ó tö Liên h½ kháng chiªn b¢n. Ðó là mØt lßi hña, kiddo. Bây giß, tôi ph¡i «i, nhïng có l³ chúng ta s³ g¶p l¢i mØt ngày nào «ó!", 8);
    } else if (status == 9) {
	cm.forceCompleteQuest(23007);
	cm.gainItem(2000000,3);
	cm.gainItem(2000003,3);
	cm.gainExp(4200);
	cm.MovieClipIntroUI(false);
	cm.warp(310000000,8);
    	cm.dispose();
    }
}