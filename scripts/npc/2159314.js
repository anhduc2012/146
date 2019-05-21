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
		cm.sendNextNoESC("B¢n thûc sû có «ôi cánh...");
    } else if (status == 1) {
		cm.sendNextNoESC("B¢n là ai B¢n là mØt ph®n cça Black Wings? MØt «i½p viên? Thûc ra, chß «», không. Ði¹u «ó không có ü nghÄa...", 2159312);
    } else if (status == 2) {
		cm.sendNextNoESC("Giø b¡o v½ cça b¢n lên. Chúng tôi v°n không biªt g¾...", 2159313);
	} else if (status == 3) {
		cm.sendNextNoESC("B¢n là ai MÑi quan h½ cça b¢n vÜi «ôi cánh «en là g¾?", 2159315);
	} else if (status == 4) {
		cm.sendPlayerToNpc("Tôi không biªt Black Wings là ai. B¢n muÑn biªt g¾ v¹ tôi? Tôi th±m chí không ch¤c b¤t «®u tö «âu.");
	} else if (status == 5) {
		cm.sendNextNoESC("H»y b¤t «®u vÜi tên, tÖ chñc, n¹n t¡ng ... và nhøng «ôi cánh trên lïng cça b¢n.", 2159342);
	} else if (status == 6) {
		cm.sendPlayerToNpc("Tên tôi là #h0#. Tôi hi½n không ph¡i là thành viên cça b¬t kÿ tÖ chñc nào, m¶c dù tôi töng là mØt trong nhøng Ch¿ huy cça Black Mage. Tôi nÖi lo¢n chÑng l¢i anh ta, và chúng tôi «» chiªn «¬u, nhïng anh ta «» «ánh b¢i tôi. Khi tôi thñc d±y, tôi th¬y Cánh «en. Oh, và tôi «ïæc sinh ra vÜi «ôi cánh này. Tôi là quÏ.");
	} else if (status == 7) {
		cm.sendNextNoESC("B¢n là mØt ch¿ huy dïÜi Black Mage? Làm thª nào? Ông «» bÅ phong ¬n hàng tr£m n£m!", 2159315);
	} else if (status == 8) {
		cm.sendDirectionStatus(1, 2000);
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/3");
		cm.sendNextNoESC("Hmm .. anh ta có thº ¡o tïäng.");
	} else if (status == 9) {
		cm.sendPlayerToNpc("(Hàng tr£m n£m trïÜc? Nhïng, nÛi này th±t kÿ l¢. Tôi «» ngç «ïæc bao lâu rÓi? Các anh hùng có thº phong ¬n Black Mage không??)");
	} else if (status == 10) {
		cm.sendNextNoESC("Ði¹u này không có ü nghÄa. B¢n «ang nói dÑi?");
	} else if (status == 11) {
		cm.sendNextNoESC("SÑ Anh ta có thº «iên, nhïng anh ta không nói dÑi.", 2159345);
	} else if (status == 12) {
		cm.sendNextNoESC("V¾ v±y ... Anh ta «iên ho¶c nói sû th±t. Jack «en không bao giß sai.", 2159316);
	} else if (status == 13) {
		cm.sendNextNoESC("Anh ¬y «» töng ä trong quá khñ, trïÜc khi Black Mage bÅ phong ¬n. T¢i sao b¢n nÖi lo¢n, nªu b¢n là Tï l½nh?", 2159315);
	} else if (status == 14) {
		cm.sendPlayerToNpc("Ðó là cá nhân. Bây giß, b¢n tr¡ lßi câu hÇi cça tôi. B¢n là ai? Ðôi cánh «en?");
	} else if (status == 15) {
		cm.sendNextNoESC("Chúng tôi là kháng chiªn, mØt nhóm «ïæc h¾nh thành bí m±t «º b¡o v½ ngôi nhà cça chúng tôi, Edelstein, tö Black Wings. Nhøng ngïßi khó chÅu £n c¤p n£ng lïæng cça b¢n là Black Wings. HÎ «» tiêu hao n£ng lïæng tö thành phÑ tö mØt thßi gian trïÜc, và hÎ làm vi½c cho Black Mage.", 2159342);
	} else if (status == 16) {
		cm.sendPlayerToNpc("HÎ theo Black Mage? Không ph¡i là ông «» bÅ phong ¬n?");
	} else if (status == 17) {
		cm.sendNextNoESC("Anh ta, nhïng hÎ «ang cÑ g¤ng th¡ anh ta mØt l®n nøa.", 2159342);
	} else if (status == 18) {
		cm.sendPlayerToNpc("Black Mage «ang quay trä l¢i? Ðó là tin tuy½t vßi ... Ði¹u «ó có nghÄa là tôi v°n có thº tr¡ thù.");
	} else if (status == 19) {
		cm.sendNextNoESC("B¢n «ang «iên, nhïng chúng tôi «ang ä cùng mØt phía. T¢i sao b¢n không tham gia vÜi chúng tôi?", 2159342);
	} else if (status == 20) {
		cm.sendNextNoESC("B¢n «ang nói g¾ v±y? B¢n thûc sû tin anh ta? Ngay c¡ khi anh ta «ang nói sû th±t, anh ta là mØt Tï l½nh!", 2159315);
	} else if (status == 21) {
		cm.sendNextNoESC("Anh ta dïßng nhï ghét Black Mage nhi¹u nhï chúng tôi, nªu không nhi¹u hÛn. Ngay c¡ khi anh ta không «ïæc ch¿ huy, anh ta không cÆn nøa. Chúng tôi luôn có thº s÷ dîng nhi¹u thành viên hÛn, mi¼n là mîc tiêu cça chúng tôi là nhï nhau. Chúng ta có thº làm vi½c cùng nhau.", 2159342);
	} else if (status == 22) {
		cm.sendPlayerToNpc("Ðæi «», chuy½n g¾ «ang di¼n ra?");
	} else if (status == 23) {
		cm.sendNextNoESC("Không c®n ph¡i b¤t kÅp. Quyªt «Ånh «» «ïæc «ïa ra. Nªu b¢n muÑn chiªn «¬u vÜi Black Mage, b¢n ph¡i tr¡i qua Black Wings. H»y làm vi½c cùng nhau «º «ïa hÎ xuÑng.");
	} else if (status == 24) {
		cm.sendNextNoESC("Tôi không mong «æi b¢n hoàn toàn tin tïäng chúng tôi, nhïng chúng tôi có thº làm vi½c trên «ó, töng m¡nh mØt, nhï chúng tôi l¬y Black Wings ngoài.", 2159342);
	} else if (status == 25) {
		cm.sendPlayerToNpc("Ðúng. Tôi s³ tham gia cùng b¢n, bây giß ... H»y «º tôi c¡m Ûn b¢n v¾ «» cñu tôi.");
	} else if (status == 26) {
		cm.sendNextNoESC("Nghe th¬y «ó là mØt sû nhµ nhËm. B¢n «ïæc chào «ón.", 2159342);
	} else if (status == 27) {
		cm.sendPlayerToNpc("Tôi trung thành vÜi nhøng ngïßi trung thành vÜi tôi.");
	} else if (status == 28) {
		cm.sendNextNoESC("Làm vi½c cho tôi. Ðïæc rÓi, làm Ûn ä nhà.", 2159315);
	} else if (status == 29) {
		cm.EnableUI(0);
		cm.DisableUI(false);
		//cm.sendDirectionStatus(4, 0);
		cm.forceStartQuest(23209, "1");
		cm.forceCompleteQuest(23279);
		cm.forceCompleteQuest(7621);
		cm.forceCompleteQuest(29958);
		cm.gainItem(1142341, 1);
		cm.getPlayer().changeJob(3100);
		cm.warp(310010000,0);
		cm.dispose();
	}
}