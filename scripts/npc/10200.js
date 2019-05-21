/*
	NPC Name: 		Athena Pierce
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
	    cm.sendNext("Nªu b¢n muÑn tr¡i nghi½m nhøng g¾ nó giÑng nhï mØt Cung Thç, «ªn g¶p tôi mØt l®n nøa.");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("Cung Thç «ïæc ban phïÜc vÜi khéo léo và quy¹n lûc, chÅu trách nhi½m v¹ các cuØc t¬n công «ïßng dài, cung c¬p h× træ cho nhøng ngïßi ä hàng «®u cça tr±n chiªn. R¬t giÇi trong vi½c s÷ dîng c¡nh quan nhï mØt ph®n cça kho vë khí.");
    } else if (status == 1) {
	cm.sendYesNo("B¢n muÑn xem k¸ n£ng cça Bowman?");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020300, 0); // Effect/Direction3.img/archer/Scene00
	cm.dispose();
    }
}