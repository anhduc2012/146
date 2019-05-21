/* Dawnveil
    [Maple Castle] A Tall Order
	Cygnus
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
		if (status == 0) {
			qm.sendNextS("B¢n «» quyªt «Ånh chïa? Quyªt «Ånh s³ là quyªt «Ånh cuÑi cùng, v¾ v±y h»y suy nghÄ c¯n th±n trïÜc khi quyªt «Ånh ph¡i làm g¾. B¢n có ch¤c ch¤n muÑn trä thành mØt Demon Slayer.",1);
		} else if (status == 1) {
			qm.sendNextPrevS("Tôi vöa «úc cÛ thº cça b¢n «º làm cho nó hoàn h¡o cho mØt Ác quÏ. Nªu b¢n muÑn trä nên m¢nh hÛn, h»y s÷ dîng Stat Window (S) «º t£ng sÑ li½u thÑng kê thích hæp. Nªu b¢n không ch¤c ch¤n nhøng g¾ «º nâng cao,h»y ¬n Auto!", 1);
		} else if (status == 2) {
			qm.sendNextPrevS("Tôi s³ mä rØng hành lü trang bÅ cça b¢n.H»y cÑ g¤ng cho hành tr¾nh tiªp theo.!",1);	
		} else if (status == 3) {
			if (qm.getJob() == 3100) {
				qm.expandInventory(1, 4);
				qm.expandInventory(2, 4);
				qm.expandInventory(4, 4);
				qm.teachSkill(31100007, 1, 1);
				qm.changeJob(3110);
				qm.dispose();
			}
		}
	}
}