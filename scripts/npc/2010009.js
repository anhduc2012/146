/*
	This file is part of the OdinMS Maple Story Server
	Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
					   Matthias Butz <matze@odinms.de>
					   Jan Christian Meyer <vimes@odinms.de>

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as
	published by the Free Software Foundation version 3 as published by
	the Free Software Foundation. You may not use, modify or distribute
	this program under any other version of the GNU Affero General Public
	License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Guild Alliance NPC
 */

var status;
var choice;
var guildName;
var partymembers;

function start() {
	//cm.sendOk("The Guild Alliance is currently under development.");
	//cm.dispose();
	partymembers = cm.getPartyMembers();
	status = -1;
	action(1,0,0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendSimple("Xin chào! Tôi là #bLenario#k\r\n#b#L0#B¢n có thº cho biªt Liên minh hØi là g¾ không#l\r\n#L1#Làm sao «º t¢o Liên Minh HØi?#l\r\n#L2#Tôi muÑn t¢o Liên Minh HØi.#l\r\n#L3#Tôi muÑn t£ng kh¡ n£ng cça Liên Minh HØi.#l\r\n#L4#Tôi muÑn rßi khÇi Liên Minh HØi.#l");
	} else if (status == 1) {
		choice = selection;
	    if (selection == 0) {
		    cm.sendOk("Liên minh hØi cëng giÑng nhï nó nói, mØt liên minh cça mØt sÑ hØi «º t¢o thành. Tôi chÅu trách nhi½m qu¡n lü các Liên minh hØi.");
			cm.dispose();
		} else if (selection == 1) {
			cm.sendOk("Ðº t¢o Liên minh hØi tôi c®n 2 chç hØi ä trong mØt nhóm.");
			cm.dispose();
		} else if(selection == 2) {
			if (cm.getPlayer().getParty() == null || partymembers == null || partymembers.size() != 2 || !cm.isLeader()) {
				cm.sendOk("B¢n không thº t¢o liên minh nªu trong nhóm không có «ç 2 thành viên chç hØi"); //Not real text
				cm.dispose();
			} else if (partymembers.get(0).getGuildId() <= 0 || partymembers.get(0).getGuildRank() > 1) {
				cm.sendOk("B¢n không ph¡i là chç mØt hØi");
				cm.dispose();
			} else if (partymembers.get(1).getGuildId() <= 0 || partymembers.get(1).getGuildRank() > 1) {
				cm.sendOk("B¢n không ph¡i là thành viên cça nhóm.");
				cm.dispose();
			} else {
				var gs = cm.getGuild(cm.getPlayer().getGuildId());
				var gs2 = cm.getGuild(partymembers.get(1).getGuildId());
				if (gs.getAllianceId() > 0) {
					cm.sendOk("B¢n không thº t¢o liên minh nªu b¢n «ang liên kêt vÜi mØt Liên minh khác.");
					cm.dispose();
				} else if (gs2.getAllianceId() > 0) {
					cm.sendOk("Thành viên trong nhóm cça b¢n «ang có mØt liên minh khác.");
					cm.dispose();
				} else if (cm.partyMembersInMap() < 2) {
					cm.sendOk("Tôi c®n ngïßi trog nhóm có m¶t trong b¡n «Ó này.");
					cm.dispose();
				} else
                			cm.sendYesNo("B¢n có quan tâm tÜi thành l±p Liên Minh hØi?");
			}
		} else if (selection == 3) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("Nâng tính n£ng cça Liên minh hØi vÜi chi phí 10,000,000 mesos. B¢n có muÑn tiªp tîc ?"); //ExpandGuild Text
			} else {
			    cm.sendOk("Chç liên minh mÜi «ïæc s÷ dîng tính n£ng này.");
				cm.dispose();
			}
		} else if(selection == 4) {
			if (cm.getPlayer().getGuildRank() == 1 && cm.getPlayer().getAllianceRank() == 1) {
				cm.sendYesNo("b¢n có muÑn rßi khÇi liên minh?");
			} else {
				cm.sendOk("Ch¿ có chç liên minh mÜi «ïæc hçy Liên minh.");
				cm.dispose();
			}
		}
	} else if(status == 2) {
	    if (choice == 2) {
		    cm.sendGetText("H»y nh±p tên hØi mÜi cça b¢n. (max. 12 letters)");
		} else if (choice == 3) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("B¢n không thº t£ng liên minh không tÓn t¢i.");
				cm.dispose();
			} else {
				if (cm.addCapacityToAlliance()) {
					cm.sendOk("B¢n «» thêm sÑ lïæng thành viên vào liên minh.");
				} else {
					cm.sendOk("SÑ lïæng tÑi «a trong liên minh là 5 hØi.");
				}
				cm.dispose();
			}
		} else if (choice == 4) {
			if (cm.getPlayer().getGuildId() <= 0) {
				cm.sendOk("B¢n không thº gi¡i tán Liên minh không tÓn t¢i.");
				cm.dispose();
			} else {
				if (cm.disbandAlliance()) {
					cm.sendOk("Your Guild Union has been disbanded");
				} else {
					cm.sendOk("An error occured when disbanding the Guild Union");
				}
				cm.dispose();
			}
		}
	} else if (status == 3) {
		guildName = cm.getText();
	    cm.sendYesNo("Tên #b"+ guildName + "#k là tên cça Liên minh hØi?");
	} else if (status == 4) {
			if (!cm.createAlliance(guildName)) {
				cm.sendNext("H»y chÎn mØt tên khác"); //Not real text
				status = 1;
				choice = 2;
			} else
				cm.sendOk("B¢n «» t¢o thành công.");
			cm.dispose();
	}
}