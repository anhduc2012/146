/*
	NPC Name: 		Kyrin
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
	    cm.sendNext("Nªu b¢n muÑn tr¡i nghi½m nhøng g¾ nó giÑng nhï mØt H¡i T¶c, «ªn g¶p tôi mØt l®n nøa.");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("CïÜp «ïæc may m¤n vÜi sû khéo léo và sñc m¢nh xu¬t s¤c, s÷ dîng súng cça hÎ cho các cuØc t¬n công t®m xa trong khi s÷ dîng sñc m¢nh cça hÎ trên các t¾nh huÑng chiªn «¬u c±n chiªn. Gunslingers s÷ dîng «¢n dûa trên nguyên tÑ «º t£ng sát thïÛng, trong khi Infighters biªn thành mØt sinh v±t khác nhau cho hi½u ñng tÑi «a.");
    } else if (status == 1) {
	cm.sendYesNo("B¢n muÑn xem k¸ n£ng cça Pirate?");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020500, 0); // Effect/Direction3.img/pirate/Scene00
	cm.dispose();
    }
}