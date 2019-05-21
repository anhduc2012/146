/*
	NPC Name: 		Grendel the Really Old
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
	    cm.sendNext("Nªu b¢n muÑn tr¡i nghi½m nhøng g¾ nó giÑng nhï mØt Phù Thçy, «ªn g¶p tôi mØt l®n nøa.");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("Các nhà ¡o thu±t «ïæc trang bÅ các phép thu±t dûa trên yªu tÑ hào nhoáng và phép thu±t thñ c¬p h× træ cho c¡ nhóm. Sau công vi½c thñ hai, phép thu±t dûa trên nguyên tÑ s³ cung c¬p lïæng sát thïÛng lÜn cho k² «Åch cça yªu tÑ «Ñi l±p.");
    } else if (status == 1) {
	cm.sendYesNo("B¢n muÑn xem k¸ n£ng cça Magician?");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020200, 0); // Effect/Direction3.img/magician/Scene00
	cm.dispose();
    }
}