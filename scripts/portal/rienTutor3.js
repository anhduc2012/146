function enter(pi) {
    if (pi.getQuestStatus(21012) == 2) {
	pi.playPortalSE();
	pi.warp(140090400, 1);
    } else {
	pi.playerMessage(5, "B¢n h»y hoàn thành nhi½m vî trïÜc khi di chuyºn sang b¡n «Ó mÜi.");
    }
}