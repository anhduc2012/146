/*
	NPC Name: 		Dances with Balrog
	Map(s): 		Maple Road : Spilt road of choice
	Description: 		Job tutorial, movie clip
*/

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendNext("Nªu b¢n muÑn tr¡i nghi½m nhøng g¾ nó giÑng nhï mØt Chiªn Binh, «ªn g¶p tôi mØt l®n nøa.");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("Các chiªn binh có sñc m¢nh to lÜn vÜi sñc chÅu «ûng «º lùi l¢i, và hÎ tÇa sáng rûc rå trong mØt t¾nh huÑng c±n chiªn. Các «Æn t¬n công thông thïßng r¬t m¢nh «º b¤t «®u, và «ïæc trang bÅ các k¸ n£ng phñc t¢p, công vi½c là hoàn h¡o cho các cuØc t¬n công bùng nÖ.");
    } else if (status == 1) {
	cm.sendYesNo("B¢n muÑn xem k¸ n£ng cça Warrior?");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020100, 0); // Effect/Direction3.img/swordman/Scene00
	cm.dispose();
    }
}