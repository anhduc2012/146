var status = -1;

function action(mode, type, selection) {
	if (cm.getMap().getAllMonstersThreadsafe().size() > 0) {
		cm.dispose();	
		return;
	}
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		cm.sendNextNoESC("nh¾n k¾a, «ó là #h0#? Chuyªn «i cça b¢n thª nào? Nó có «áng giá không tuân l½nh? Và gia «¾nh b¢n thª nào? Heh heh...", 2159308);
    } else if (status == 1) {
		cm.sendPlayerToNpc("Tôi không có thßi gian cho b¢n. Tránh sang mØt bên.");
    } else if (status == 2) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/14");
		//cm.sendDirectionStatus(0, 325);
		cm.showMapEffect("demonSlayer/31111003");
		cm.sendDirectionInfo("Skill/3111.img/skill/31111003/effect");
		cm.sendDirectionStatus(1, 1000);
		cm.sendNextNoESC("Th±t sao? Ðây là mØt ph¡n quÑc, b¢n biªt «¬y! B¢n có thûc sû yªu «ªn mñc m¬t «i gia «¾nh khiªn b¢n làm «i¹u này không? Th¡m h¢i!", 2159308);
	} else if (status == 3) {
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/15");
		//cm.sendDirectionStatus(0, 365);
		cm.showMapEffect("demonSlayer/31121001");
		cm.sendDirectionInfo("Skill/3112.img/skill/31121001/effect");
		cm.sendDirectionStatus(1, 1000);
		cm.sendNextNoESC("B¢n làm tôi th¬t vÎng. B¢n không hiºu Black Mage! Lo¢i bÇ k² ph¡n bØi!", 2159308);
	} else if (status == 4) {
		//cm.sendDirectionStatus(4, 0);
		cm.EnableUI(0);
		cm.DisableUI(false);
		cm.spawnMonster(9300455, 3);
		cm.forceStartQuest(23205);
		cm.showWZEffect("Effect/Direction6.img/DemonTutorial/Scene4");
		cm.dispose();
	}
}