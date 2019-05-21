/* RED 1st impact
    Ray of Light
    Made by Daenerys
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    cm.sendNextS("Nope, too scary...",16);
            cm.dispose();
        status--;
    }
    if(cm.isAllReactorState(1008010, 0) == false){
		if (status == 0) {
	    cm.sendYesNo("B¢n có muÑn rßi khÇi nÛi này và «i «ªn mØt thª giÜi mÜi không?");
    } else if (status == 1) {	
	    cm.sendNextS("T¢m bi½t!",16);
	} else if (status == 2) {	
	    cm.warp(4000002,0);
        cm.dispose();
    }
	}else{
		cm.topMsg("You cannot exit if you do not break the chains.");
		cm.dispose();
    
    }
}