var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {
	    cm.sendOk("Không có quái v±t trong b¡n «Ó.");
	    cm.dispose();
	    return;
	}
	var selStr = "H»y chÎn quái v±t bên dïÜi «º xem tÏ l½ rÛi «Ó.\r\n\r\n#b";
	var iz = cm.getMap().getAllUniqueMonsters().iterator();
	while (iz.hasNext()) {
	    var zz = iz.next();
	    selStr += "#L" + zz + "##o" + zz + "# - Id : "+ zz +"#l\r\n";
	} 
	cm.sendSimple(selStr);
    } else if (status == 1) {
	cm.sendNext(cm.checkDrop(selection));
	cm.dispose();
    }
}