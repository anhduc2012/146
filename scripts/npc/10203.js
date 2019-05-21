/*
	NPC Name: 		Dark Lord
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
	    cm.sendNext("Nªu b¢n muÑn tr¡i nghi½m nhøng g¾ nó giÑng nhï mØt Du Hi½p, «ªn g¶p tôi mØt l®n nøa.");
	    cm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	cm.sendNext("K² trØm là mØt sû pha trØn hoàn h¡o cça may m¤n, khéo léo, và sñc m¢nh mà là l»o luy½n t¢i các cuØc t¬n công b¬t ngß chÑng l¢i k² thù b¬t lûc. Mñc «Ø tránh và tÑc «Ø cao cho phép k² trØm t¬n công k² «Åch b¥ng các góc khác nhau.");
    } else if (status == 1) {
	cm.sendYesNo("B¢n muÑn xem k¸ n£ng cça Thief?");
    } else if (status == 2) {
	cm.MovieClipIntroUI(true);
	cm.warp(1020400, 0); // Effect/Direction3.img/rouge/Scene00
	cm.dispose();
    }
}