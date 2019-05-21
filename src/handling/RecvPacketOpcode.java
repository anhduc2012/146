package handling;

import constants.GameConstants;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public enum RecvPacketOpcode implements WritableIntValueHolder {

    /*
     * General Oopcodes.
     * Used for general purposes.
     */
    RSA_KEY(false),

    STRANGE_DATA,

    LOGIN_REDIRECTOR(false),
// (short) 0x01),

    CRASH_INFO(false),
// (short) 0x2E),

    PONG(false),
// (short) 0x46),
//2F
    /*
     * Login Opcodes.
     * Used for login packets.
     */
    GUEST_LOGIN(true),
// (short) 0x16),

    SERVERSTATUS_REQUEST(false),
// (short) 0x1D),

    TOS(true),
// (short) 0x1D),

    VIEW_SERVERLIST(false),
// (short) 0x21),

    SERVERLIST_REQUEST(false),
// (short) 0x22),

    REDISPLAY_SERVERLIST(true),
// (short) 0x23),

    CHAR_SELECT_NO_PIC(false),
// (short) 0x25),

    PLAYER_LOGGEDIN(false),
// (short) 0x27),

    CHECK_CHAR_NAME(true),
// (short) 0x28),

    DELETE_CHAR(true),
// (short) 0x2C),

    AUTH_REQUEST(false),
// (short) 0x30),

    CHAR_SELECT(true),
// (short) 0x31),

    VIEW_REGISTER_PIC(true),
// (short) 0x32),

    CHANGE_PIC_REQUEST(true),
// (short) 0x33),

    VIEW_SELECT_PIC(true),
// (short) 0x35),

    CLIENT_START(false),
// (short) 0x38),

    CLIENT_FAILED(false),
// (short) 0x39),

    PART_TIME_JOB(true),
// (short) 0x3B),

    CHARACTER_CARD(true),
// (short) 0x3C),

    ENABLE_LV50_CHAR(true),
// (short) 0x3D),

    CREATE_LV50_CHAR(true),
// (short) 0x3E),

    ENABLE_SPECIAL_CREATION(true),
// (short) 0x3E),

    CLIENT_HELLO(false),
// (short) 0x3F),

    LOGIN_PASSWORD(false),
// (short) 0x40),

    CREATE_SPECIAL_CHAR(true),
// (short) 0x41),

    CHARLIST_REQUEST(false),
// (short) 0x43),

    CREATE_CHAR(false),
// (short) 0x45),

    CREATE_ULTIMATE(false),
// (short) 0x999),
//46
    AUTH_SECOND_PASSWORD(true),
// (short) 0x47),

    WRONG_PASSWORD(false),
// (short) 0x49),
//v145
    CLIENT_ERROR(false),
// (short) 0x4A),

    /*
     * Channel Opcodes.
     * Used for in-game packets.
     */
    CHANGE_MAP(true),
// (short) 0x51),

    CHANGE_CHANNEL(true),
// (short) 0x52),

    ENTER_CASH_SHOP(true),
// (short) 0x54),

    ENTER_FARM(true),
// (short) 0x57),

    ENTER_AZWAN(true),
// (short) 0x4D),

    ENTER_AZWAN_EVENT(true),
// (short) 0x4A),

    LEAVE_AZWAN(true),
// (short) 0x4B),

    ENTER_PVP(true),
// (short) 0x5C),

    ENTER_PVP_PARTY(true),
// (short) 0x5C),

    LEAVE_PVP(true),
// (short) 0x999),

    MOVE_PLAYER(true),
// (short) 0x5E),

    CANCEL_CHAIR(true),
// (short) 0x60),

    USE_CHAIR(true),
// (short) 0x61),

    CLOSE_RANGE_ATTACK(true),
// (short) 0x62),

    RANGED_ATTACK(true),
// (short) 0x63),

    MAGIC_ATTACK(true),
// (short) 0x64),

    PASSIVE_ENERGY(true),
// (short) 0x65),

    TAKE_DAMAGE(true),
// (short) 0x68),

    PVP_ATTACK(true),
// (short) 0x69),

    GENERAL_CHAT(true),
// (short) 0x6A),

    CLOSE_CHALKBOARD(true),
// (short) 0x6B),

    FACE_EXPRESSION(true),
// (short) 0x6C),

    FACE_ANDROID(true),
// (short) 0x6D),

    USE_ITEMEFFECT(true),
// (short) 0x6E),

    WHEEL_OF_FORTUNE(true),
// (short) 0x6F),

    USE_TITLE(true),
// (short) 0x72),
//70
    ANGELIC_CHANGE(true),
// (short) 0x73),
//71
    CHANGE_CODEX_SET(true),
// (short) 0x7A),
//79
    CODEX_UNK(true),
// (short) 0x7B),

    MONSTER_BOOK_DROPS(true),
// (short) 0x7D),
//7C
    NPC_TALK(true),
// (short) 0x7F),
//7E
    NPC_TALK_MORE(true),
// (short) 0x81),
//80
    NPC_SHOP(true),
// (short) 0x82),
//81
    STORAGE(true),
// (short) 0x84),
//83
    USE_HIRED_MERCHANT(true),
// (short) 0x85),
//84
    MERCH_ITEM_STORE(true),
// (short) 0x86),
//85
    PACKAGE_OPERATION(true),
// (short) 0x7F),
//87
    MECH_CANCEL(true),
// (short) 0x89),
//87
    HOLLY(true),
// (short) 0xF0),

    OWL(true),
// (short) 0x8C),
//8A
    OWL_WARP(true),
// (short) 0x8D),
//8A
    ITEM_SORT(true),
// (short) 0x92),
//90
    ITEM_GATHER(true),
// (short) 0x93),
//91
    ITEM_MOVE(true),
// (short) 0x94),
//92
    MOVE_BAG(true),
// (short) 0x95),
//93
    SWITCH_BAG(true),
// (short) 0x96),
//94
    USE_ITEM(true),
// (short) 0x98),
//96
    CANCEL_ITEM_EFFECT(true),
// (short) 0x99),
//97
    USE_SUMMON_BAG(true),
// (short) 0x9B),
//99
    PET_FOOD(true),
// (short) 0x9C),
//9A
    USE_MOUNT_FOOD(true),
// (short) 0x9D),
//9B
    USE_SCRIPTED_NPC_ITEM(true),
// (short) 0x9E),
//9C
    USE_RECIPE(true),
// (short) 0x9F),
//9D
    USE_NEBULITE(true),
// (short) 0xA0),
//9E
    USE_ALIEN_SOCKET(true),
// (short) 0xA1),
//9F
    USE_ALIEN_SOCKET_RESPONSE(true),
// (short) 0xA2),
//A0
    USE_NEBULITE_FUSION(true),
// (short) 0xA3),
//A1
    USE_CASH_ITEM(true),
// (short) 0xA4),
//A2
    USE_CATCH_ITEM(true),
// (short) 0xA6),
//A4
    USE_SKILL_BOOK(true),
// (short) 0xAB),
//A9
    USE_EXP_POTION(true),
// (short) 0xAE),
//A8
    TOT_GUIDE(true),
// (short) 0xB5),

    USE_OWL_MINERVA(true),
// (short) 0xBC),
//+1 (v144)
    USE_TELE_ROCK(true),
// (short) 0xBD),
//+1 (v144)
    USE_RETURN_SCROLL(true),
// (short) 0xBE),
//+1 (v144)
    USE_UPGRADE_SCROLL(true),
// (short) 0xC0),
//+1 (v144)
    USE_FLAG_SCROLL(true),
// (short) 0xC1),
//+1 (v144)
    USE_EQUIP_SCROLL(true),
// (short) 0xC2),
//+1 (v144)
    USE_POTENTIAL_SCROLL(true),
// (short) 0xC6),
//C3
    USE_BONUS_POTENTIAL(true),
// (short) 0xC8),
 //UNHANDLED
    USE_ABYSS_SCROLL(true),
// (short) 0xC7),
//C4
    USE_CARVED_SEAL(true),
// (short) 0xC9),
//C5
    USE_BAG(true),
// (short) 0xC9),

    USE_CRAFTED_CUBE(true),
// (short) 0xCA),

    USE_MAGNIFY_GLASS(true),
// (short) 0xCD),
//CA
    DISTRIBUTE_AP(true),
// (short) 0xD0),
//CD
    AUTO_ASSIGN_AP(true),
// (short) 0xD1),
//CE
    HEAL_OVER_TIME(true),
// (short) 0xD2),
//CF
    LINK_SKILL(true),
// (short) 0xD4),
//Confirmed
        IDK_1(true),
// (short) 0x49),

    IDK_2(true),
// (short) 0x70),

    IDK_3(true),
// (short) 0x71),

    IDK_4(true),
// (short) 0xE2),

    DISTRIBUTE_SP(true),
// (short) 0xD5),
//D2
    SPECIAL_MOVE(true),
// (short) 0xD6),
//D3
    CANCEL_BUFF(true),
// (short) 0xD7),
//D4
    SKILL_EFFECT(true),
// (short) 0xD8),
//D5
    MESO_DROP(true),
// (short) 0xD9),
//D6
    GIVE_FAME(true),
// (short) 0xDA),
//D7
    CHAR_INFO_REQUEST(true),
// (short) 0xDC),
//D9
    SPAWN_PET(true),
// (short) 0xDD),
//DA
    GET_BOOK_INFO(true),
// (short) 0xDF),
//DC
    USE_FAMILIAR(true),
// (short) 0xE0),
//DD
    SPAWN_FAMILIAR(true),
// (short) 0xE1),
//DE
    RENAME_FAMILIAR(true),
// (short) 0xE2),
//DF
    PET_BUFF(true),
// (short) 0xE3),
//E0
    CANCEL_DEBUFF(true),
// (short) 0xE4),
//E1
    CHANGE_MAP_SPECIAL(true),
// (short) 0xE5),
//e2
    USE_INNER_PORTAL(true),
// (short) 0xE6),
//E3
    TROCK_ADD_MAP(true),
// (short) 0xE7),
//e4
    LIE_DETECTOR(true),
//E5
    LIE_DETECTOR_SKILL(true),
//E6
    LIE_DETECTOR_RESPONSE(true),
//E7
    REPORT(true),
//E9
    QUEST_ACTION(true),
//EA
    REISSUE_MEDAL(true),
//EB
//    BUFF_RESPONSE(true),
//EC
    SKILL_MACRO(true),
//was 0xF3
    REWARD_ITEM(true),
//F2
    ITEM_MAKER(true),

    REPAIR_ALL(true),
//C7
    REPAIR(true),
//C8
    SOLOMON(true),

    GACH_EXP(true),

    FOLLOW_REQUEST(true),

    PQ_REWARD(true),

    FOLLOW_REPLY(true),

    AUTO_FOLLOW_REPLY(true),

    USE_TREASURE_CHEST(true),

    PROFESSION_INFO(true),

    USE_POT(true),
//D6
    CLEAR_POT(true),

    FEED_POT(true),

    CURE_POT(true),

    REWARD_POT(true),

    AZWAN_REVIVE(true),

    ZERO_TAG(true),

    USE_COSMETIC(true),

    INNER_CIRCULATOR(true),

    PVP_RESPAWN(true),

    GAIN_FORCE(true),

    ADMIN_CHAT(true),
//119
    PARTYCHAT(true),
//120
    COMMAND(true),
//121
    SPOUSE_CHAT(true),
//122
    MESSENGER(true),
//123
    PLAYER_INTERACTION(true),
//124
    PARTY_OPERATION(true),
//125
    DENY_PARTY_REQUEST(true),
//126
    ALLOW_PARTY_INVITE(true),
//127
    EXPEDITION_OPERATION(true),
//128
    EXPEDITION_LISTING(true),
//129
    GUILD_OPERATION(true),
//12A
    DENY_GUILD_REQUEST(true),
//12B
    ADMIN_COMMAND(true),
//12C
    ADMIN_LOG(true),
//12D
    BUDDYLIST_MODIFY(true),
 //12E
    NOTE_ACTION(true),
//127
    USE_DOOR(true),
//131
    USE_MECH_DOOR(true),
//132
    CHANGE_KEYMAP(true),
 //134
    RPS_GAME(true),

    RING_ACTION(true),

    WEDDING_ACTION(true),

    ALLIANCE_OPERATION(true),

    DENY_ALLIANCE_REQUEST(true),

    REQUEST_FAMILY(true),
//13D
    OPEN_FAMILY(true),
//13E
    FAMILY_OPERATION(true),

    DELETE_JUNIOR(true),

    DELETE_SENIOR(true),

    ACCEPT_FAMILY(true),

    USE_FAMILY(true),

    FAMILY_PRECEPT(true),

    FAMILY_SUMMON(true),

    BBS_OPERATION(true),
//10B
    SOLOMON_EXP(true),
//10C
    NEW_YEAR_CARD(true),

    XMAS_SURPRISE(true),

    TWIN_DRAGON_EGG(true),

    ARAN_COMBO(true),
//0x152
    REMOVE_ARAN_COMBO(true),

    TRANSFORM_PLAYER(true),

    CYGNUS_SUMMON(true),

    CRAFT_DONE(true),
//157
    CRAFT_EFFECT(true),
//158
    CRAFT_MAKE(true),
//159
    CHANGE_ROOM_CHANNEL(true),
//15D
    EVENT_CARD(true),

    CHOOSE_SKILL(true),
//0x16B
    SKILL_SWIPE(true),
 //0x16C
    VIEW_SKILLS(true),
//0x16D
    CANCEL_OUT_SWIPE(true),

    YOUR_INFORMATION(true),
//163
    FIND_FRIEND(true),
//164
    PINKBEAN_CHOCO_OPEN(true),
//165
    PINKBEAN_CHOCO_SUMMON(true),
//166
    CASSANDRAS_COLLECTION(true),
//new v145
    BUY_SILENT_CRUSADE(true),

    BUDDY_ADD(true),

    MOVE_PET(true),
//1A8
    PET_CHAT(true),
//1A9
    PET_COMMAND(true),
//1AA
    PET_LOOT(true),
//1AB
    PET_AUTO_POT(true),
//1AC
    PET_IGNORE(true),
//1AD
    MOVE_HAKU(true),
//1B1
    CHANGE_HAKU(true),
//1B2
    //HAKU_1D8(true),
//test
    //HAKU_1D9(true),
//test
    MOVE_SUMMON(true),
//1b8
    SUMMON_ATTACK(true),
//1B9
    DAMAGE_SUMMON(true),
//1BA
    SUB_SUMMON(true),
//1BB
    REMOVE_SUMMON(true),
//1BC
    PVP_SUMMON(true),
//1BE
    MOVE_DRAGON(true),
//1C0
    USE_ITEM_QUEST(true),
//1C4
    MOVE_ANDROID(true),
//1C5
    UPDATE_QUEST(true),
//1C7//+16
    QUEST_ITEM(true),
//1C8
    MOVE_FAMILIAR(true),
//1CC
    TOUCH_FAMILIAR(true),
//1CD
    ATTACK_FAMILIAR(true),
//1CE
    REVEAL_FAMILIAR(true),
//1CF
    QUICK_SLOT(true),

    PAM_SONG(true),

    MOVE_LIFE(true),
//1EC
    AUTO_AGGRO(true),

    FRIENDLY_DAMAGE(true),
//1ef
    MONSTER_BOMB(true),

    HYPNOTIZE_DMG(true),

    MOB_BOMB(true),

    MOB_NODE(true),

    DISPLAY_NODE(true),

    MONSTER_CARNIVAL(true),

    NPC_ACTION(true),
//203
    ITEM_PICKUP(true),
//208
    DAMAGE_REACTOR(true),
//v145 Confirmed
    TOUCH_REACTOR(true),
//v145 Confirmed
    CLICK_REACTOR(true),
//v145 Confirmed
    MAKE_EXTRACTOR(true),
//v145 Confirmed
    RECEIVE_GIFT_EFFECT(true),
//new v145
    UPDATE_ENV(true),

    SNOWBALL(true),
//0x182
    LEFT_KNOCK_BACK(true),

    CANDY_RANKING(true),
//
    START_EVOLUTION(true),

    COCONUT(true),

    SHIP_OBJECT(true),

    PARTY_SEARCH_START(true),

    PARTY_SEARCH_STOP(true),

    START_HARVEST(true),
//22F
    STOP_HARVEST(true),
//230
    QUICK_MOVE(true),

    CS_UPDATE(true),
//v145 was 28A
    BUY_CS_ITEM(true),
//v145
    COUPON_CODE(true),
//v145
    CASH_CATEGORY(true),
//v145
    PLACE_FARM_OBJECT(false),

    FARM_SHOP_BUY(false),

    FARM_COMPLETE_QUEST(false),

    FARM_NAME(false),

    HARVEST_FARM_BUILDING(false),

    USE_FARM_ITEM(false),

    RENAME_MONSTER(false),
//0x294
    NURTURE_MONSTER(false),
    CS_SURPRISE(false),

    EXIT_FARM(false),

    FARM_QUEST_CHECK(false),

    FARM_FIRST_ENTRY(false),

    GOLDEN_HAMMER(true),
//1BB
    VICIOUS_HAMMER(true),

    PYRAMID_BUY_ITEM(true),

    CLASS_COMPETITION(true),

    MAGIC_WHEEL(true),

    REWARD(true),
    BLACK_FRIDAY(true),

    UPDATE_RED_LEAF(true),

    SPECIAL_STAT(false),
    UPDATE_HYPER(true),
    RESET_HYPER(true),
    DRESSUP_TIME(true),
    DF_COMBO(true),
    BUTTON_PRESSED(true),
    OS_INFORMATION(true),
    LUCKY_LOGOUT(true),

    MESSENGER_RANKING(true);
    private short code = -2;
    
    private boolean CheckState;

    @Override
    public void setValue(short code) {
        this.code = code;
    }

    @Override
    public final short getValue() {
        return (short) code;
    }

    private RecvPacketOpcode() {
        this.CheckState = true;
    }

    private RecvPacketOpcode(boolean CheckState) {
        this.CheckState = CheckState;
    }

    public final boolean NeedsChecking() {
        return this.CheckState;
    }

    public static Properties getDefaultProperties() throws FileNotFoundException, IOException {
        Properties props = new Properties();
        FileInputStream fileInputStream = new FileInputStream(GameConstants.GMS ? "recvopsGMS.properties" : "recvops.properties");
        props.load(fileInputStream);
        fileInputStream.close();
        return props;
    }

    public static void reloadValues() {
        try {
            ExternalCodeTableGetter.populateValues(getDefaultProperties(), values());
        } catch (IOException e) {
            throw new RuntimeException("Failed to load recvops", e);
        }
    }
    public static String nameOf(short value) {
        for (RecvPacketOpcode header : RecvPacketOpcode.values()) {
            if (header.getValue() == value) {
                return header.name();
            }
        }
        return "UNKNOWN";
    }
    static {
        reloadValues();
    }
}
