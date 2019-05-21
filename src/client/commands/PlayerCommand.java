package server.commands;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleQuestStatus;
import client.MapleStat;
import client.Skill;
import client.SkillEntry;
import client.SkillFactory;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import constants.GameConstants;
import constants.ServerConstants;
import constants.ServerConfig;
import constants.ServerConstants.PlayerGMRank;
import handling.channel.ChannelServer;
import static java.lang.System.getProperty;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import scripting.EventInstanceManager;
import scripting.EventManager;
import scripting.NPCScriptManager;
import server.MapleItemInformationProvider;
import server.commands.CommandExecute.TradeExecute;
import server.life.MapleLifeFactory;
import server.life.MapleMonster;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.SavedLocationType;
import server.quest.MapleQuest;
import tools.FileoutputUtil;
import tools.StringUtil;
import tools.packet.CField;
import tools.packet.CField.NPCPacket;
import tools.packet.CWvsContext;

/**
 *
 *  Emilyx3
 */
public class PlayerCommand {

    public static PlayerGMRank getPlayerLevelRequired() {
        return PlayerGMRank.NORMAL;
    }


    public static class Dispose extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.getSession().write(CWvsContext.enableActions());
            c.getPlayer().dropMessage(5, "S÷a l×i thành công.");
            return 1;
        }
    }
    public static class Sualoi extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.getSession().write(CWvsContext.enableActions());
            c.getPlayer().dropMessage(5, "S÷a l×i thành công.");
            return 1;
        }
    }
    public static class PinkZak extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            final EventManager eem = c.getChannelServer().getEventSM().getEventManager("PinkZakumEntrance");
            final EventInstanceManager eim = eem.getInstance(("PinkZakumEntrance"));
            if (eem.getProperty("entryPossible").equals("true")) {
                NPCScriptManager.getInstance().start(c, 9201160, null);
            }
            if (eem.getProperty("entryPossible").equals("false")) {
                c.getPlayer().dropMessage(5, "Entry to the [Pink Zakum] Event is currently closed please wait patiently for the next entrance!");
            }
            return 1;
        }
    }

/*    public static class ExpFix extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().setExp(c.getPlayer().getExp() - GameConstants.getExpNeededForLevel(c.getPlayer().getLevel()) >= 0 ? GameConstants.getExpNeededForLevel(c.getPlayer().getLevel()) : 0);
            return 1;
        }
    }

    public static class ResetExp extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().setExp(0);
            return 1;
        }
    }
*/
 /*    public static class Mob extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            MapleMonster mob = null;
            for (final MapleMapObject monstermo : c.getPlayer().getMap().getMapObjectsInRange(c.getPlayer().getPosition(), 100000, Arrays.asList(MapleMapObjectType.MONSTER))) {
                mob = (MapleMonster) monstermo;
                if (mob.isAlive()) {
                    c.getPlayer().dropMessage(6, "Monster " + mob.toString());
                    break; //only one
                }
            }
            if (mob == null) {
                c.getPlayer().dropMessage(6, "No monster was found.");
            }
            return 1;
        }
    }


   public static class Save extends CommandExecute {

        @Override

        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().setExp(c.getPlayer().getExp() - GameConstants.getExpNeededForLevel(c.getPlayer().getLevel()) >= 0 ? GameConstants.getExpNeededForLevel(c.getPlayer().getLevel()) : 0);
            c.getPlayer().saveToDB(false, false);
            return 1;
        }
    }
    
     public static class DCash extends OpenNPCCommand {

     public DCash() {
     npc = 1;
     }
     }
     */

    public static class Event extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (c.getPlayer().isInBlockedMap() || c.getPlayer().hasBlockedInventory()) {
                c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                return 0;
            }
            NPCScriptManager.getInstance().start(c, 9000000, null);
            return 1;
        }
    }

    public static class KiemTra extends CommandExecute {
            @Override
            public int execute(MapleClient c, String[] splitted){
                 NPCScriptManager.getInstance().start(c, 9010000, "kiemtra"); 
                 return 0;
            }
            
    }
        
 
    public static class home extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (int i : GameConstants.blockedMaps) {
                if (c.getPlayer().getMapId() == i) {
                    c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                    return 0;
                }
            }
            if (c.getPlayer().getLevel() < 50 && c.getPlayer().getJob() != 200) {
                c.getPlayer().dropMessage(5, "You must be over level 50 to use this command.");
                return 0;
            }
            if (c.getPlayer().hasBlockedInventory() || c.getPlayer().getMap().getSquadByMap() != null || c.getPlayer().getEventInstance() != null || c.getPlayer().getMap().getEMByMap() != null || c.getPlayer().getMapId() >= 990000000/* || FieldLimitType.VipRock.check(c.getPlayer().getMap().getFieldLimit())*/) {
                c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                return 0;
            }

            if ((c.getPlayer().getMapId() >= 680000210 && c.getPlayer().getMapId() <= 680000502) || (c.getPlayer().getMapId() / 1000 == 980000 && c.getPlayer().getMapId() != 980000000) || (c.getPlayer().getMapId() / 100 == 1030008) || (c.getPlayer().getMapId() / 100 == 922010) || (c.getPlayer().getMapId() / 10 == 13003000)) {
                c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                return 0;
            }

            c.getPlayer().saveLocation(SavedLocationType.FREE_MARKET, c.getPlayer().getMap().getReturnMap().getId());
            MapleMap map = c.getChannelServer().getMapFactory().getMap(ServerConfig.HOME_MAP_ID);

            c.getPlayer()
                    .changeMap(map, map.getPortal(0));

            return 1;
        }
    }

    public static class modes extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (GameConstants.isBeastTamer(c.getPlayer().getJob())) {
                c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(110001510), (byte) 1, (byte) 1);
                c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(110001501), (byte) 1, (byte) 1);
                c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(110001502), (byte) 1, (byte) 1);
                c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(110001503), (byte) 1, (byte) 1);
                c.getPlayer().changeSingleSkillLevel(SkillFactory.getSkill(110001504), (byte) 1, (byte) 1);
                HashMap<Skill, SkillEntry> sa = new HashMap<>();
                for (Skill skil : SkillFactory.getAllSkills()) {
                    if (GameConstants.isApplicableSkill(skil.getId()) && skil.canBeLearnedBy(c.getPlayer().getJob()) && !skil.isInvisible()) { //no db/additionals/resistance skills
                        sa.put(skil, new SkillEntry((byte) skil.getMaxLevel(), (byte) skil.getMaxLevel(), SkillFactory.getDefaultSExpiry(skil)));
                    }
                }
                c.getPlayer().changeSkillsLevel(sa);
                c.getPlayer().dropMessage(6, "All modes are added");
                return 1;
            } else {
                c.getPlayer().dropMessage(6, "You are not beast tamer!");
                return 0;
            }
        }
    }

    public static class fm extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (int i : GameConstants.blockedMaps) {
                if (c.getPlayer().getMapId() == i) {
                    c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                    return 0;
                }
            }
            if (c.getPlayer().getLevel() < 10 && c.getPlayer().getJob() != 200) {
                c.getPlayer().dropMessage(5, "C¬p «Ø 10 s³ s÷ dîng «ïæc chñc n£ng này.");
                return 0;
            }
            if (c.getPlayer().hasBlockedInventory() || c.getPlayer().getMap().getSquadByMap() != null || c.getPlayer().getEventInstance() != null || c.getPlayer().getMap().getEMByMap() != null || c.getPlayer().getMapId() >= 990000000/* || FieldLimitType.VipRock.check(c.getPlayer().getMap().getFieldLimit())*/) {
                c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                return 0;
            }

            if ((c.getPlayer().getMapId() >= 680000210 && c.getPlayer().getMapId() <= 680000502) || (c.getPlayer().getMapId() / 1000 == 980000 && c.getPlayer().getMapId() != 980000000) || (c.getPlayer().getMapId() / 100 == 1030008) || (c.getPlayer().getMapId() / 100 == 922010) || (c.getPlayer().getMapId() / 10 == 13003000)) {
                c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                return 0;
            }

            c.getPlayer().saveLocation(SavedLocationType.FREE_MARKET, c.getPlayer().getMap().getReturnMap().getId());
            MapleMap map = c.getChannelServer().getMapFactory().getMap(910000000);

            c.getPlayer().changeMap(map, map.getPortal(0));

            return 1;
        }
    }
   

    public static class Check extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getPlayer().dropMessage(6, "You currently have " + c.getPlayer().getCSPoints(1) + " Cash, " + c.getPlayer().getEPoints() + " Event Points, " + c.getPlayer().getDPoints() + " Donation Points, " + c.getPlayer().getVPoints() + " voting points and " + c.getPlayer().getIntNoRecord(GameConstants.BOSS_PQ) + " Boss Party Quest points.");
            c.getPlayer().dropMessage(6, "The time is currently " + FileoutputUtil.CurrentReadable_TimeGMT() + " GMT. | EXP " + (Math.round(c.getPlayer().getEXPMod()) * 100) * Math.round(c.getPlayer().getStat().expBuff / 100.0) + "%, Drop " + (Math.round(c.getPlayer().getDropMod()) * 100) * Math.round(c.getPlayer().getStat().dropBuff / 100.0) + "%, Meso " + Math.round(c.getPlayer().getStat().mesoBuff / 100.0) * 100 + "%");
            c.getPlayer().dropMessage(6, "EXP: " + c.getPlayer().getExp() + " / " + c.getPlayer().getNeededExp());
            c.removeClickedNPC();
            NPCScriptManager.getInstance().dispose(c);
            c.getSession().write(CWvsContext.enableActions());
            return 1;
        }
    }



    public static class job extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (c.getPlayer().isInBlockedMap() || c.getPlayer().hasBlockedInventory()) {
                c.getPlayer().dropMessage(5, "B¢n không thº s÷ dîng t¢i «ây.");
                return 0;
            } else if (c.getPlayer().getLevel() < 30) {
                c.getPlayer().dropMessage(5, "B¢n c®n ph¡i có ít nh¬t lvl 30 «º th£ng tiªn.");
                return 0;
            } else {
                NPCScriptManager.getInstance().start(c, 2300001, null);
                return 1;
            }
        }
    }

    public static class Thamgia extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            c.getChannelServer().warpToEvent(c.getPlayer());
            return 1;
        }
    }

    /*public static class SpawnBomb extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            if (c.getPlayer().getMapId() != 109010100) {
                c.getPlayer().dropMessage(5, "You may only spawn bomb in the event map.");
                return 0;
            }
            if (!c.getChannelServer().bombermanActive()) {
                c.getPlayer().dropMessage(5, "You may not spawn bombs yet.");
                return 0;
            }
            c.getPlayer().getMap().spawnMonsterOnGroudBelow(MapleLifeFactory.getMonster(9300166), c.getPlayer().getPosition());
            return 1;
        }
    }*/

    public static class DropNx extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            NPCScriptManager.getInstance().start(c, 9010000, "CashDrop");
            return 1;
        }
    }

    public static class GM extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            for (final ChannelServer cserv : ChannelServer.getAllInstances()) {
                cserv.broadcastGMMessage(tools.packet.CField.multiChat("[GM Help] " + c.getPlayer().getName(), StringUtil.joinStringFrom(splitted, 1), 6));
            }
            c.getPlayer().dropMessage(5, "Tin nh¤n cça b¢n «» «ïæc g÷i.");
            return 1;
        }
    }
	public static class online extends CommandExecute {

		@Override
		public int execute(MapleClient c, String[] splitted) {
                    int[] players = new int[1] ;
                    int total = 0;
			//c.getPlayer().dropMessage(6, "Ngïßi chÛi «ang kªt nÑi t¢i kênh " + c.getChannel() + ":");
                        //if (!c.getPlayer().isGM()){
			//c.getPlayer().dropMessage(6, c.getChannelServer().getPlayerStorage().getOnlinePlayers(true));
			for(ChannelServer ch : ChannelServer.getAllInstances()){
				/*int size = ch.getPlayerStorage().getAllCharacters().size();
				total += size;
				String s = "(Kênh " + (ch.getChannel()) + " Trûc tuyªn: " + size + ") : ";
                                
				if (ch.getPlayerStorage().getAllCharacters().size() < 200) {
                                    
					for (MapleCharacter chr : ch.getPlayerStorage().getAllCharacters()) {
                                            if(!chr.isGM())
						s += MapleCharacter.makeMapleReadable(chr.getName()) + ", ";
					}
                                    
					c.getPlayer().message(s.substring(0, s.length() - 2));
				}*/ 
				c.getPlayer().dropMessage(5,"Ngïßi chÛi trûc tuyªn kênh " + (ch.getChannel())  + ":");
				for(MapleCharacter chr : ch.getPlayerStorage().getAllCharacters()){
					if(!chr.isGM()){
						c.getPlayer().dropMessage(5," - " + MapleCharacter.makeMapleReadable(chr.getName()) +" Lv."+ chr.getLevel() + " «ang ä b¡n «Ó : " + chr.getMap().getMapName() + ".");
					}
				}

			
			}
                    //}
                    return 0;
		}
	}

    public static class Help extends CommandExecute {

        @Override
        public int execute(MapleClient c, String[] splitted) {
            StringBuilder sb = new StringBuilder();
            //sb.append("\r\n@str, @dex, @int, @luk, @hp, @mp <amount to add or subtract>");
            //sb.append("\r\n@mob < Information on the closest monster >");
            //sb.append("\r\n@check < Displays various information; also use if you are stuck or unable to talk to NPC >");
            //sb.append("\r\n@npc < Universal NPC >");
            sb.append("\r\n@Gm < G÷i tin nh¤n tÜi GM.");
            sb.append("\r\n@Fm < Di chuyºn «ªn Chæ Tû Do >");
            sb.append("\r\n@DropNx < Vñt «Ó Nx ra khÇi túi >");
            sb.append("\r\n@job < Job advancements! >");
            //sb.append("\r\n@save < Fixes your experience and saves your character >");
            //sb.append("\r\n@joinevent < Join ongoing event >");
            //sb.append("\r\n@crescent < Universal Town Warp / Event NPC>");
            //sb.append("\r\n@dcash < Universal Cash Item Dropper >");
            //sb.append("\r\n@tsmega < Toggle super megaphone on/off >");
            //sb.append("\r\n@ea < If you are unable to attack or talk to NPC >");
            //sb.append("\r\n@clearslot < Cleanup that trash in your inventory >");
            sb.append("\r\n@Sualoi < S÷a l×i khi b¢n không click «ïæc Npc,v±t ph¯m >");
            sb.append("\r\n@Kiemtra < Kiºm tra «Ó rÛi ra tö quái v±t >");
            //sb.append("\r\n@style < Styler >");
            //sb.append("\r\n@advance < Job Advancer >");
            //sb.append("\r\n@bosswarp < Boss Warper >");
            //sb.append("\r\n@fly < Makes you fly if you're in the Free Market >");
            if (c.canClickNPC()) {
                NPCPacket.getNPCTalk(9010000, (byte) 0, sb.toString(), "00 00", (byte) 0);
            }
            for (String command : sb.toString().split("\r\n")) {
                c.getPlayer().dropMessage(5, command);
            }
            return 1;
        }
    }
    
}
