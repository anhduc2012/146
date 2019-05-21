/* RED 1st impact
    Maple Tree Hill
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendSelfTalk("Cô gái «ó là ai? T¢i sao cô ¬y bÇ ch¢y khi cô ¬y nh¾n th¬y tôi?");
	} else if (status == 1) {	
	    cm.sendSelfTalk("Có l³ tôi s³ theo cô ¬y..");
	} else if (status == 2) {
        cm.introEnableUI(0);
        cm.introDisableUI(false);
        cm.dispose();
    }
}