var status = -1;
var items;
var itemsq;
var itemsa;
var itemse;

function start() {
	if (cm.isGMS()) { //- fishing items, + hand cannon scroll
		items = Array(5062000, 5062000, 5062001, 5050000, 5050000, 2022179, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2045301, 2045201, 2040317, 5610000, 5610000, 5610001, 5610001, 3011000, 5640000, 1122121, 2531000, 2530000);
		itemsq = Array(1, 10, 1, 1, 10, 1, 10, 1, 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1);
		itemsa = Array(2550, 25500, 50000, 2050, 20500, 2550, 25500, 50000, 30000, 10000, 12000, 15000, 15000, 16000, 16000, 18000, 18000, 18000, 18000, 18000, 18000, 18000, 6000, 30000, 9000, 45000, 4500, 80000, 150000, 100000, 50000);
		itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,-1,  -1, -1, -1, -1, -1, -1, -1, -1, 14, -1, 30, -1, -1);
	} else {
		items = Array(5062000, 5062000, 5062001, 5050000, 5050000, 2022179, 2022179, 2340000, 4020009, 2040804, 2040029, 2040532, 2040516, 2040513, 2040501, 2040025, 2040321, 2040301, 2043401, 2040317, 5610000, 5610000, 5610001, 5610001, 5340000, 5340001, 5350000, 5640000, 1122121, 2531000, 2530000);
		itemsq = Array(1, 10, 1, 1, 10, 1, 10, 1, 15, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1);
		itemsa = Array(2550, 25500, 50000, 2050, 20500, 2550, 25500, 50000, 30000, 10000, 12000, 15000, 15000, 16000, 16000, 18000, 18000, 18000, 18000, 18000, 6000, 30000, 9000, 45000, 4500, 7000, 5000, 80000, 150000, 100000, 50000);
		itemse = Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 14, 14, 14, -1, 30, -1, -1);
	}
	action(1, 0, 0);
}

function action(mode, type, selection) {
	status++;
	if (status == 0) {
		cm.sendSimple("Black Mages Hell BPQ will be opening soon! The bosses will be stronger, give more EXP, and give more Battle Points. This will be available only on hell channels, ch 10-12. Start training.... You will need all your power");
	} else if (status == 1) {
		var selStr = "Maybe you could trade me some #rCash#k? I have lots of great items for you...#b\r\n\r\n";
		for (var i = 0; i < items.length; i++) {
			selStr += "#L" + i + "##v" + items[i] + "##t" + items[i] + "# x " + itemsq[i] + " #r(" + (cm.isGMS() ? (itemsa[i] / 2) : itemsa[i]) + " Cash)#b#l\r\n";
		}
		cm.dispose();
	}
}