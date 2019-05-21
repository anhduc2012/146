package tools;

import java.text.SimpleDateFormat;
import java.util.Date;

import server.MapleItemInformationProvider;
import server.MapleTrade;
import client.MapleCharacter;
import client.inventory.Item;
import client.inventory.Item;
import handling.world.exped.MapleExpedition;

public class LogHelper {

	public static void logTrade(MapleTrade trade1, MapleTrade trade2) {
		String name1 = trade1.getChr().getName();
		String name2 = trade2.getChr().getName();
		String log = "\r\nGiao dich giua " + name1 + " AND " + name2 + "\r\n";
		//Trade 1 to trade 2
                if(trade1.getExchangeMesos() > 0){
                    log += trade1.getExchangeMesos() + " mesos tu " + name2 + " cho " + name1 + " \r\n";
                }
		for (Item item : trade1.getItems()){
			String itemName = MapleItemInformationProvider.getInstance().getName(item.getItemId()) + "(" + item.getItemId() + ")";
			log += item.getQuantity() + " " + itemName + " tu "  + name1 + " cho " + name2 + " \r\n";;
		}
		//Trade 2 to trade 1
                if(trade2.getExchangeMesos() > 0){
                    log += trade2.getExchangeMesos() + " mesos tu " + name1 + " cho " + name2 + " \r\n";
                }
		for (Item item : trade2.getItems()){
			String itemName = MapleItemInformationProvider.getInstance().getName(item.getItemId()) + "(" + item.getItemId() + ")";
			log += item.getQuantity() + " " + itemName + " tu " + name2 + " cho " + name1 + " \r\n";;
		}
		log += "\r\n\r\n";
		FilePrinter.print("giaodich.txt", log);

	}

	/*public static void logExpedition(MapleExpedition expedition) {
		//Server.getInstance().broadcastGMMessage(CField.serverNotice(6, expedition.getType().toString() + " «» bÅ h¢ gîc bäi trïäng nhóm " + expedition.getLeader().getName() + " vÜi thßi gian " + getTimeString(expedition.getStartTime())));

		String log = expedition.getType().toString() + " EXPEDITION\r\n";
		log += getTimeString(expedition.getStartTime()) + "\r\n";

		for (MapleCharacter member : expedition.getMembers()){
			log += ">>" + member.getName() + "\r\n";
		}
		log += "BOSS KILLS\r\n";
		for (String message: expedition.getBossLogs()){
			log += message;
		}
		log += "\r\n\r\n";
		FilePrinter.print("killboss.txt", log);
	}
	*/
	public static String getTimeString(long then){
		long duration = System.currentTimeMillis() - then;
		int seconds = (int) (duration / 1000) % 60 ;
		int minutes = (int) ((duration / (1000*60)) % 60);
		return minutes + " Minutes and " + seconds + " Seconds";
	}

	public static void logLeaf(MapleCharacter player, boolean gotPrize, String operation) {
		String timeStamp = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss").format(new Date());
		String log = player.getName() + (gotPrize ? " used a maple leaf to buy " + operation : " redeemed " + operation + " VP for a leaf") + " - " + timeStamp + "\r\n";
		FilePrinter.print("doixu10dola.txt", log);
	}
	
	public static void logGacha(MapleCharacter player, int itemid, String map) {
		String itemName = MapleItemInformationProvider.getInstance().getName(itemid);
		String timeStamp = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss").format(new Date());
		String log = player.getName() + " nhan duoc " + itemName + "(" + itemid + ") from the " + map + " gachapon. - " + timeStamp + "\r\n";
		FilePrinter.print("gachapon.txt", log);
	}
}
