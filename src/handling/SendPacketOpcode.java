package handling;

import constants.GameConstants;
import constants.ServerConfig;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import tools.FileoutputUtil;
import tools.HexTool;

public enum SendPacketOpcode implements WritableIntValueHolder {

    // General
    PING,
// 0x12),//11
    AUTH_RESPONSE,
// 0x16),//15
    // Login
    LOGIN_STATUS,
// 0x00),
    SEND_LINK,
// 0x01),
    LOGIN_SECOND,
// 0x02),
    CHANNEL_SELECTED,
// 0x02),
    PIC_RESPONSE,
// 0x19),
    SERVERSTATUS,
// 0x04),
    GENDER_SET,
// 0x05),
    PIN_OPERATION,
// 0x06),
    PIN_ASSIGNED,
// 0x07),
    ALL_CHARLIST,
// 0x08),
    SERVERLIST,
// 0x09),
    CHARLIST,
// 0x0A),
    SERVER_IP,
// 0x0B),
    CHAR_NAME_RESPONSE,
// 0x0C),
    ADD_NEW_CHAR_ENTRY,
// 0x0D),
    DELETE_CHAR_RESPONSE,
// 0x0E),
    CHANGE_CHANNEL,
// 0x11),//10
    CS_USE,
// 0x13),//12
    RELOG_RESPONSE,
// 0x17),//16
    REGISTER_PIC_RESPONSE,
// 0x1A),//v143
    ENABLE_RECOMMENDED,
// 0x1D),//1C
    SEND_RECOMMENDED,
// 0x1E),//1D
    PART_TIME,
// 0x1F),//1E
    SPECIAL_CREATION,
// 0x20),//1F
    SECONDPW_ERROR,
// 0x25),//24
    CHANGE_BACKGROUND,
// 0x999),//12B
    // Channel
    CLIENT_START,
// 0x38),
    INVENTORY_OPERATION,
// 0x26),//25
    INVENTORY_GROW,
// 0x27),//26
    UPDATE_STATS,
// 0x28),//27
    GIVE_BUFF,
// 0x29),//28
    CANCEL_BUFF,
// 0x2A),//29
    TEMP_STATS,
// 0x2B),//2A
    TEMP_STATS_RESET,
// 0x2C),//2B
    UPDATE_SKILLS,
// 0x2D),//2C
    UPDATE_STOLEN_SKILLS,
// 0x2E),//2D
    TARGET_SKILL,
// 0x2F),//2E
    FAME_RESPONSE,
// 0x33),//32
    SHOW_STATUS_INFO,
// 0x34),//33
    FULL_CLIENT_DOWNLOAD,
// 0x35),//34
    SHOW_NOTES,
// 0x36),//35
    TROCK_LOCATIONS,
// 0x37),//36
    LIE_DETECTOR,
// 0x38),//37
    REPORT_RESPONSE,
// 0x3A),//39
    REPORT_TIME,
// 0x3B),//3A
    REPORT_STATUS,
// 0x3C),//3B
    UPDATE_MOUNT,
// 0x3E),//3d
    SHOW_QUEST_COMPLETION,
// 0x3F),//3E
    SEND_TITLE_BOX,
// 0x40),//3F
    USE_SKILL_BOOK,
// 0x41),//40
    SP_RESET,
// 0x42),//41
    AP_RESET,
// 0x43),//42
    DISTRIBUTE_ITEM,
// 0x44),//43
    EXPAND_CHARACTER_SLOTS,
// 0x45),//44
    FINISH_GATHER,
// 0x4B),//4D
    FINISH_SORT,
// 0x4C),//4B
    EXP_POTION,
// 0x43),
    REPORT_RESULT,
// 0x4E),
    TRADE_LIMIT,
// 0x50),
    UPDATE_GENDER,
// 0x51),//50
    BBS_OPERATION,
// 0x52),//51
    CHAR_INFO,
// 0x55),//v143
    PARTY_OPERATION,
// 0x56),//55
    MEMBER_SEARCH,
// 0x59),//5A
    PARTY_SEARCH,
// 0x5A),//5A
    BOOK_INFO,
// 0x5B),//5A
    CODEX_INFO_RESPONSE,
// 0x5C),//5b,
    EXPEDITION_OPERATION,
// 0x5D),//5c
    BUDDYLIST,
// 0x5E),//5d
    GUILD_OPERATION,
// 0x60),//5F
    ALLIANCE_OPERATION,
// 0x61),//60
    SPAWN_PORTAL,
// 0x62),//61
    MECH_PORTAL,
// 0x63),//62
    ECHO_MESSAGE,
// 0x64),//63
    SERVERMESSAGE,
// 0x66),//65
    ITEM_OBTAIN,
// 0x6A),//68
    PIGMI_REWARD,
// 0x6E),//6C
    OWL_OF_MINERVA,
// 0x6F),//6D
    OWL_RESULT,
// 0x70),//6E
    ENGAGE_REQUEST,
// 0x72),//6F
    ENGAGE_RESULT,
// 0x73),//70
    WEDDING_GIFT,
// 0x74),//71
    WEDDING_MAP_TRANSFER,
// 0x75),//72
    USE_CASH_PET_FOOD,
// 0x76),//74
    YELLOW_CHAT,
// 0x77),//75
    SHOP_DISCOUNT,
// 0x79),//76
    CATCH_MOB,
// 0x7A),//77
    MAKE_PLAYER_NPC,
// 0x7B),//78
    PLAYER_NPC,
// 0x7C),//79
    DISABLE_NPC,
// 0x7D),//7A
    GET_CARD,
// 0x7E),//7B
    CARD_UNK,
// 0x7F),//new143
    CARD_SET,
// 0x80),//7D
    BOOK_STATS,
// 0x81),//7E
    UPDATE_CODEX,
// 0x82),//7F
    CARD_DROPS,
// 0x83),//80
    FAMILIAR_INFO,
// 0x84),//81
    CHANGE_HOUR,
// 0x86),//83
    RESET_MINIMAP,
// 0x87),//84
    CONSULT_UPDATE,
// 0x88),//85
    CLASS_UPDATE,
// 0x89),//86
    WEB_BOARD_UPDATE,
// 0x8A),//87
    SESSION_VALUE,
// 0x8A),//88
    PARTY_VALUE,
// 0x8B),//89
    MAP_VALUE,
// 0x8C),//8A
    EXP_BONUS,
// 0x8D),//8C
    POTION_BONUS,
// 0x8E),//8D
    SEND_PEDIGREE,
// 0x90),//8E
    OPEN_FAMILY,
// 0x92),//143
    FAMILY_MESSAGE,
// 0x8E),
    FAMILY_INVITE,
// 0x999),
    FAMILY_JUNIOR,
// 0x93),//90
    SENIOR_MESSAGE,
// 0x94),//91
    FAMILY,
// 0x95),//94
    REP_INCREASE,
// 0x96),//95
    EVOLVING_ACTION,
// 0x98),
    FAMILY_LOGGEDIN,
// 0x99),//96
    FAMILY_BUFF,
// 0x9A),//97
    FAMILY_USE_REQUEST,
// 0x9B),//98
    LEVEL_UPDATE,
// 0x9C),//99
    MARRIAGE_UPDATE,
// 0x9D),//9A
    JOB_UPDATE,
// 0x9E),//9B
    MAPLE_TV_MSG,
// 0x8D),
    AVATAR_MEGA_RESULT,
// 0x107),//FF
    AVATAR_MEGA,
// 0x108),//100
    AVATAR_MEGA_REMOVE,
// 0x109),//101
    POPUP2,
// 0x9D),
    CANCEL_NAME_CHANGE,
// 0x9E),
    CANCEL_WORLD_TRANSFER,
// 0x9F),
    CLOSE_HIRED_MERCHANT,
// 0xA3),//A0
    GM_POLICE,
// 0xA4),//A1
    TREASURE_BOX,
// 0xA5),//A2
    NEW_YEAR_CARD,
// 0xA6),//A3
    RANDOM_MORPH,
// 0xA7),//A4
    CANCEL_NAME_CHANGE_2,
// 0xA9),//A6
    SLOT_UPDATE,
// 0xAC),//A7
    FOLLOW_REQUEST,
// 0xAD),//A8
    TOP_MSG,
// 0xAE),//A9
    MID_MSG,
// 0xB2),//AB
    CLEAR_MID_MSG,
// 0xB3),//AC
    SPECIAL_MSG,
// 0xB4),//AD
    MAPLE_ADMIN_MSG,
// 0xB4),//AE
    CAKE_VS_PIE_MSG,
// 0xB4),//AF
    GM_STORY_BOARD,
// 0xB5),//B0
    INVENTORY_FULL,
// 0xB6),//B1
    UPDATE_JAGUAR,
// 0xB7),//B1
    YOUR_INFORMATION,
// 0xB9),//B2
    FIND_FRIEND,
// 0xBA),//B3
    VISITOR,
// 0xBB),//B4
    PINKBEAN_CHOCO,
// 0xBC),//B5
    PAM_SONG,
// 0xBD),//B6
    AUTO_CC_MSG,
// 0xBE),//b7
    DISALLOW_DELIVERY_QUEST,
// 0xC2),//bb
    ULTIMATE_EXPLORER,
// 0xC3),//BC
    SPECIAL_STAT,
// 0xC4), //also profession_info //BD
    UPDATE_IMP_TIME,
// 0xC5),//BE
    ITEM_POT,
// 0xC6),//BF
    MULUNG_MESSAGE,
// 0xC9),//C2
    GIVE_CHARACTER_SKILL,
// 0xCA),//C3
    MULUNG_DOJO_RANKING,
// 0xCF),//C8
    UPDATE_INNER_ABILITY,
// 0xD4),//CD
    EQUIP_STOLEN_SKILL,
// 0xD5),//CE
    REPLACE_SKILLS,
// 0xD5),//CE
    INNER_ABILITY_MSG,
// 0xD6),//CF
    ENABLE_INNER_ABILITY,
// 0xD7),//D0
    DISABLE_INNER_ABILITY,
// 0xD8),//D1
    UPDATE_HONOUR,
// 0xD9),//D2
    AZWAN_UNKNOWN,
// 0xDA),//D3 //probably circulator shit?
    AZWAN_RESULT,
// 0xDB),//D4
    AZWAN_KILLED,
// 0xDC),//D5
    CIRCULATOR_ON_LEVEL,
// 0xDD),//D6
    SILENT_CRUSADE_MSG,
// 0xDE),//D7
    SILENT_CRUSADE_SHOP,
// 0xDF),//D8
    CASSANDRAS_COLLECTION,
// 0xEA),//new v145
    SET_OBJECT_STATE,
// 0xEF),//E8
    POPUP,
// 0xF0),//E9
    MINIMAP_ARROW,
// 0xF4),//ED
    UNLOCK_CHARGE_SKILL,
// 0xFA),//F2
    LOCK_CHARGE_SKILL,
// 0xFB),//F3
    CANDY_RANKING,
// 0xFF),//F8
    ATTENDANCE,
// 0x10A),//102
    MESSENGER_OPEN,
// 0x10B),//103
    EVENT_CROWN,
// 0x10D),//105
    MAGIC_WHEEL,
// 0x125),//109
    REWARD,
// 0x126),//10B
    SKILL_MACRO,
// 0x127),//10C //127 Outdated?
    WARP_TO_MAP,
// 0x128),//10D
    FARM_OPEN,
// 0x999),//10E
    CS_OPEN,
// 0x12B),//110
    REMOVE_BG_LAYER,
// 0x12E),//111
    SET_MAP_OBJECT_VISIBLE,
// 0x12F),//112
    RESET_SCREEN,
// 0x12C),//12E?
    MAP_BLOCKED,
// 0x12D),//12F?
    SERVER_BLOCKED,
// 0x130),//etc
    PARTY_BLOCKED,
// 0x131),//etc
    SHOW_EQUIP_EFFECT,
// 0x132),//etc
    MULTICHAT,
// 0x135),//118 <-- need to test this on v145 to confirm up to map effect. // cu~ la 0x134
    WHISPER,
// 0x137),//119 // cu~ la 0x138
    SPOUSE_CHAT,
// 0x139),//11B
    BOSS_ENV,
// 0x13A),//v145 Confirmed
    MOVE_ENV,
// 0x13B),//v145 Confirmed
    UPDATE_ENV,
// 0x13C),//v145 Confirmed
    MAP_EFFECT,
// 0x13E),//v145 Confirmed
    CASH_SONG,
// 0x14B),//v145 Guess
    GM_EFFECT,
// 0x141),//v145 , No d/c, but is it right?
    OX_QUIZ,
// 0x142),//v145 Guess
    GMEVENT_INSTRUCTIONS,
// 0x143),//v145, Confirmed!
    CLOCK,
// 0x144),//v145 Confirmed!
    BOAT_MOVE,
// 0x145),//v145 Guess
    BOAT_STATE,
// 0x147),//v145 Guess
    STOP_CLOCK,
// 0x148),//12D
    ARIANT_SCOREBOARD,
// 0x14A),//12F
    PYRAMID_UPDATE,
// 0x14E),//131
    PYRAMID_RESULT,
// 0x14F),//132
    QUICK_SLOT,
// 0x153),//134
    SMART_MOB_NOTICE,
// 0x158),
    MOVE_PLATFORM,
// 0x156),//135
    PYRAMID_KILL_COUNT,
// 0x154),//137,
    PVP_INFO,
// 0x157),//136
    DIRECTION_STATUS,
// 0x159),//139 //Also trusting 155 on this
    GAIN_FORCE,
// 0x15A),//CONFIRMED
    INTRUSION,
// 0x162),
    DIFFERENT_IP,
// 0x164),
    ACHIEVEMENT_RATIO,
// 0x159),//13B
    QUICK_MOVE,
// 0x15C),//13C
    SPAWN_OBTACLE_ATOM,
// 0x15D),
    SPAWN_PLAYER,
// 0x167),//144
    REMOVE_PLAYER_FROM_MAP,
// 0x168),//145
    CHATTEXT,
// 0x169),
    CHATTEXT_1,
// 0x16A),//170
    CHALKBOARD,
// 0x16B),//171
    UPDATE_CHAR_BOX,
// 0x16C),//149
    SHOW_CONSUME_EFFECT,
// 0x16D),//14a
    SHOW_SCROLL_EFFECT,
// 0x16E),//14b
    SHOW_MAGNIFYING_EFFECT,
// 0x170),//14c
    SHOW_POTENTIAL_RESET,
// 0x171),//14d
    SHOW_FIREWORKS_EFFECT,
// 0x172),//14e
    SHOW_NEBULITE_EFFECT,
// 0x172),//14f
    SHOW_FUSION_EFFECT,
// 0x174),//150
    PVP_ATTACK,
// 0x140),
    PVP_MIST,
// 0x141),
    PVP_COOL,
// 0x142),
    TESLA_TRIANGLE,
// 0x999),//17E need the right v145 one plox..
    FOLLOW_EFFECT,
// 0x15D),
    SHOW_PQ_REWARD,
// 0x15F),
    CRAFT_EFFECT,
// 0x182),//15F
    CRAFT_COMPLETE,
// 0x183),//160
    HARVESTED,
// 0x185),//161
    PLAYER_DAMAGED,
// 0x165),
    NETT_PYRAMID,
// 0x166),
    SET_PHASE,
// 0x167),
    PAMS_SONG,
// 0x168),
    SPAWN_PET,
// 0x192),//+2
    SPAWN_PET_2,
// 0x194),//+2
    MOVE_PET,
// 0x195),//+2
    PET_CHAT,
// 0x196),//+2
    PET_NAMECHANGE,
// 0x197),//+2
    PET_EXCEPTION_LIST,
// 0x198),//+2
    PET_COLOR,
// 0x199),//+2
    PET_SIZE,
// 0x19A),//+2
    PET_COMMAND,
// 0x19B),//+2
    DRAGON_SPAWN,
// 0x19C),//+2
    INNER_ABILITY_RESET_MSG,
// 0x175),//+2
    DRAGON_MOVE,
// 0x19D),//+2
    DRAGON_REMOVE,
// 0x19E),//+2
    ANDROID_SPAWN,
// 0x19F),//+2
    ANDROID_MOVE,
// 0x1A0),//+2
    ANDROID_EMOTION,
// 0x1A1),//+2
    ANDROID_UPDATE,
// 0x1A2),//+2
    ANDROID_DEACTIVATED,
// 0x1A3), //+2 
    SPAWN_FAMILIAR,
// 0x1AA),//+2
    MOVE_FAMILIAR,
// 0x1AB),//+2
    TOUCH_FAMILIAR,
// 0x1AC),//+2
    ATTACK_FAMILIAR,
// 0x1AD),//+2
    RENAME_FAMILIAR,
// 0x1AE),//+2
    SPAWN_FAMILIAR_2,
// 0x1AF),//+2
    UPDATE_FAMILIAR,
// 0x1B0),//+2
    HAKU_CHANGE_1,
// 0x1A4),//+2
    HAKU_CHANGE_0,
// 0x1A7),//+2
    HAKU_MOVE,
// 0x1B2),//+2
    HAKU_UNK,
// 0x1B3),//+2
    HAKU_CHANGE,
// 0x1B4),//+2
    SPAWN_HAKU,
// 0x1B7),//+2
    MOVE_PLAYER,
// 0x1BA),//+2
    CLOSE_RANGE_ATTACK,
// 0x1BC),//+2
    RANGED_ATTACK,
// 0x1BD),//+2
    MAGIC_ATTACK,
// 0x1BE),//+2
    ENERGY_ATTACK,
// 0x1BF),//+2
    SKILL_EFFECT,
// 0x1C0),//+2
    MOVE_ATTACK,
// 0x1C1),//+2
    CANCEL_SKILL_EFFECT,
// 0x1C2),//+2
    DAMAGE_PLAYER,
// 0x1C3),//+2
    FACIAL_EXPRESSION,
// 0x1C4),//+2
    SHOW_EFFECT,
// 0x1C6),//+2
    SHOW_TITLE,
// 0x1C8),//+2
    ANGELIC_CHANGE,
// 0x1C9),//+2
    SHOW_CHAIR,
// 0x1CC),//+2
    UPDATE_CHAR_LOOK,
// 0x1CD),//+2
    SHOW_FOREIGN_EFFECT,
// 0x1CE),//+2
    GIVE_FOREIGN_BUFF,
// 0x1CF),//+2
    CANCEL_FOREIGN_BUFF,
// 0x1D0),//+2
    UPDATE_PARTYMEMBER_HP,
// 0x1D1),//+2
    LOAD_GUILD_NAME,
// 0x1D2),//+2
    LOAD_GUILD_ICON,
// 0x1D3),//+2
    LOAD_TEAM,
// 0x1D4),//+2
    SHOW_HARVEST,
// 0x2BC),//1AE
    PVP_HP,
// 0x1D7),//1B0
    CANCEL_CHAIR,
// 0x1E6),//1BC
    DIRECTION_FACIAL_EXPRESSION,
// 0x1E7),//1BD
    MOVE_SCREEN,
// 0x1E8),//1BE
    SHOW_SPECIAL_EFFECT,
// 0x1E9),//1BF
    CURRENT_MAP_WARP,
// 0x1EA),//1C0
    MESOBAG_SUCCESS,
// 0x1EC),//1C2
    MESOBAG_FAILURE,
// 0x1EA),//1C3
    R_MESOBAG_SUCCESS,
// 0x1EB),//1C4
    R_MESOBAG_FAILURE,
// 0x1EC),//1C5
    MAP_FADE,
// 0x1F0),//1C6
    MAP_FADE_FORCE,
// 0x1F1),//1C7
    UPDATE_QUEST_INFO,
// 0x1F2),//1C8
    HP_DECREASE,
// 0x1F0),//1C9
    PLAYER_HINT,
// 0x1F2),//1CB
    PLAY_EVENT_SOUND,
// 0x1F3),//1CC
    PLAY_MINIGAME_SOUND,
// 0x1F4),//1CD
    MAKER_SKILL,
// 0x1F5),//1CE
    OPEN_UI,
// 0x1FB),//1D1
    OPEN_UI_OPTION,
// 0x1FD),//1D3
    INTRO_LOCK,
// 0x1FE),//1D4
    INTRO_ENABLE_UI,
// 0x1FF),//1D5
    INTRO_DISABLE_UI,
// 0x200),//1D6
    SUMMON_HINT,
// 0x201),//1D7
    SUMMON_HINT_MSG,
// 0x202),//1D8
    ARAN_COMBO,
// 0x203),//1D9
    ARAN_COMBO_RECHARGE,
// 0x204),//1DA
    RANDOM_EMOTION,
// 0x205),//1DB
    RADIO_SCHEDULE,
// 0x206),//1DC
    OPEN_SKILL_GUIDE,
// 0x207),//1DD
    GAME_MSG,
// 0x209),//1DF
    GAME_MESSAGE,
// 0x20A),//1E0
    BUFF_ZONE_EFFECT,
// 0x20C),//1E2
    GO_CASHSHOP_SN,
// 0x20D),//1E3
    DAMAGE_METER,
// 0x20E),//1E4
    TIME_BOMB_ATTACK,
// 0x20F),//1E5
    FOLLOW_MOVE,
// 0x210),//1E6
    FOLLOW_MSG,
// 0x211),//1E7
    AP_SP_EVENT,
// 0x215),//1E9
    QUEST_GUIDE_NPC,
// 0x214),//1EA
    REGISTER_FAMILIAR,
// 0x218),//1F1
    FAMILIAR_MESSAGE,
// 0x219),//1F2
    CREATE_ULTIMATE,
// 0x21C),//1F3
    HARVEST_MESSAGE,
// 0x21E),//1F5
    SHOW_MAP_NAME,
// 0x999),
    OPEN_BAG,
// 0x21D),//18B
    DRAGON_BLINK,
// 0x220),//18C // alpha
    PVP_ICEGAGE,
// 0x219),//18D
    DIRECTION_INFO,
// 0x223),//18E
    REISSUE_MEDAL,
// 0x222),//18F
    PLAY_MOVIE,
// 0x227),//1FD
    CAKE_VS_PIE,
// 0x225),//1FE
    PHANTOM_CARD,
// 0x229),//1FF
    LUMINOUS_COMBO,
// 0x22A),//202
    MOVE_SCREEN_X,
// 0x199),//199
    MOVE_SCREEN_DOWN,
// 0x19A),//19A
    CAKE_PIE_INSTRUMENTS,
// 0x19B),//
    COOLDOWN,
// 0x269),//was 263
    SPAWN_SUMMON,
// 0x26B),//+5
    REMOVE_SUMMON,
// 0x26C),//+5
    MOVE_SUMMON,
// 0x26D),//+5
    SUMMON_ATTACK,
// 0x26E),//+5
    PVP_SUMMON,
// 0x26F),//+5
    SUMMON_SKILL,
// 0x270),//+5
    SUMMON_SKILL_2,
// 0x271),//+5
    SUMMON_DELAY,
// 0x272),//+5
    DAMAGE_SUMMON,
// 0x273),//+5
    SPAWN_MONSTER,
// 0x277),//23D
    KILL_MONSTER,
// 0x278),//23E
    SPAWN_MONSTER_CONTROL,
// 0x279),//23F
    MOVE_MONSTER,
// 0x27B),//241
    MOVE_MONSTER_RESPONSE,
// 0x27C),//242
    APPLY_MONSTER_STATUS,
// 0x27E),//244
    CANCEL_MONSTER_STATUS,
// 0x27F),//245
    DAMAGE_MONSTER,
// 0x282),//248
    SKILL_EFFECT_MOB,
// 0x283),//249
    TELE_MONSTER,
// 0x999), //todo sniff
    MONSTER_SKILL,
// 0x284), //todo sniff
    MONSTER_CRC_CHANGE,
// 0x285),//24B
    SHOW_MONSTER_HP,
// 0x286),//24C
    SHOW_MAGNET,
// 0x287),//24D
    ITEM_EFFECT_MOB,
// 0x288),//24E
    CATCH_MONSTER,
// 0x289),//24F
    MONSTER_PROPERTIES,
// 0x1B9),
    REMOVE_TALK_MONSTER,
// 0x1BA),
    TALK_MONSTER,
// 0x28A),
    CYGNUS_ATTACK,
// 0x28F),
    MONSTER_RESIST,
// 0x290),//
    MOB_REACTION,
// 0x291),
    MOB_TO_MOB_DAMAGE,
// 0x1C6),
    AZWAN_MOB_TO_MOB_DAMAGE,
// 0x1C9),
    AZWAN_SPAWN_MONSTER,
// 0x22C),//1CA /0x22b?
    AZWAN_KILL_MONSTER,
// 0x22D),//1CB
    AZWAN_SPAWN_MONSTER_CONTROL,
// 0x999),//1CC
    SPAWN_NPC,
// 0x2A2),//268
    REMOVE_NPC,
// 0x2A3),//269
    SPAWN_NPC_REQUEST_CONTROLLER,
// 0x29F),//26B
    NPC_ACTION,
// 0x2A0),//26C
    NPC_TOGGLE_VISIBLE,
// 0x2A1),//26D
    INITIAL_QUIZ,
// 0x2A3),//26F
    NPC_UPDATE_LIMITED_INFO,
// 0x2A4),//270
    NPC_SET_SPECIAL_ACTION,
// 0x2A5),//271
    NPC_SCRIPTABLE,
// 0x2A6),//272
    RED_LEAF_HIGH,
// 0x2A7),//273
    SPAWN_HIRED_MERCHANT,
// 0x2B1),//277
    DESTROY_HIRED_MERCHANT,
// 0x2B2),//278
    UPDATE_HIRED_MERCHANT,
// 0x2B3),//279
    DROP_ITEM_FROM_MAPOBJECT,
// 0x2B4),//27A
    REMOVE_ITEM_FROM_MAP,
// 0x2B6),//27C
    SPAWN_KITE_ERROR,
// 0x2B7),//27D
    SPAWN_KITE,
// 0x2B8),
    DESTROY_KITE,
// 0x2B9),
    SPAWN_MIST,
// 0x2BA),//v145, seems right..
    REMOVE_MIST,
// 0x2BB),
    SPAWN_DOOR,
// 0x2BC),//v145, WRONG! 0x2B6
    REMOVE_DOOR,
// 0x2BD),
    BUTT_FUCKIN,
// 0x6969),
    MECH_DOOR_SPAWN,
// 0x2BE),//v145, confirmed.
    MECH_DOOR_REMOVE,
// 0x2BF),//v145, confirmed.
    REACTOR_HIT,
// 0x2C0),//2C0
    REACTOR_MOVE,
// 0x2C1),//2C1
    REACTOR_SPAWN,
// 0x2C2),//v145, confirmed.
    REACTOR_DESTROY,
// 0x2C4),//2C4
    SPAWN_EXTRACTOR,
// 0x2C5),//2C5
    REMOVE_EXTRACTOR,
// 0x2C6),//2C6
    ROLL_SNOWBALL,
// 0x2C7),//2C7
    HIT_SNOWBALL,
// 0x2D0),//28E0x218
    SNOWBALL_MESSAGE,
// 0x2D1),//28F
    LEFT_KNOCK_BACK,
// 0x2C4),//D1
    HIT_COCONUT,
// 0x2C5),//D2
    COCONUT_SCORE,
// 0x2C6),//D3
    MOVE_HEALER,
// 0x2C7),//D4
    PULLEY_STATE,
// 0x2C8),//294
    MONSTER_CARNIVAL_START,
// 0x2C9),//295
    MONSTER_CARNIVAL_OBTAINED_CP,
// 0x2CA),//296
    MONSTER_CARNIVAL_STATS,
// 0x2CB),////297
    MONSTER_CARNIVAL_SUMMON,
// 0x2CD),//299
    MONSTER_CARNIVAL_MESSAGE,
// 0x2CE),//29A
    MONSTER_CARNIVAL_DIED,
// 0x2CF),//29B
    MONSTER_CARNIVAL_LEAVE,
// 0x2D0),//29C
    MONSTER_CARNIVAL_RESULT,
// 0x2D1),//29D
    MONSTER_CARNIVAL_RANKING,
// 0x2D2),//29E
    ARIANT_SCORE_UPDATE,
// 0x300),
    SHEEP_RANCH_INFO,
// 0x301),
    SHEEP_RANCH_CLOTHES,
// 0x999),//0x302
    WITCH_TOWER,
// 0x999),//0x303
    EXPEDITION_CHALLENGE,
// 0x999),//0x304
    ZAKUM_SHRINE,
// 0x305),
    CHAOS_ZAKUM_SHRINE,
// 0x306),
    PVP_TYPE,
// 0x307),
    PVP_TRANSFORM,
// 0x308),
    PVP_DETAILS,
// 0x309),
    PVP_ENABLED,
// 0x30A),
    PVP_SCORE,
// 0x30B),
    PVP_RESULT,
// 0x30C),
    PVP_TEAM,
// 0x30D),
    PVP_SCOREBOARD,
// 0x30E),
    PVP_POINTS,
// 0x310),
    PVP_KILLED,
// 0x311),
    PVP_MODE,
// 0x312),
    PVP_ICEKNIGHT,
// 0x313),//
    HORNTAIL_SHRINE,
// 0x2E1),
    CAPTURE_FLAGS,
// 0x2E2),
    CAPTURE_POSITION,
// 0x2E3),
    CAPTURE_RESET,
// 0x2E4),
    PINK_ZAKUM_SHRINE,
// 0x2E5),
    NPC_TALK,
// 0x33D),//0x2E6
    OPEN_NPC_SHOP,
// 0x33E),//2E7
    CONFIRM_SHOP_TRANSACTION,
// 0x33F),//2E8
    OPEN_STORAGE,
// 0x34A),//2F1
    MERCH_ITEM_MSG,
// 0x34B),//2F2
    MERCH_ITEM_STORE,
// 0x34C),//2F3
    RPS_GAME,
// 0x34D),//2F4
    MESSENGER,
// 0x34E),////2F5
    PLAYER_INTERACTION,
// 0x34F),//2F6
    VICIOUS_HAMMER,
// 0x2F4),
    LOGOUT_GIFT,
// 0x2FB),
    TOURNAMENT,
// 0x236),
    TOURNAMENT_MATCH_TABLE,
// 0x237),
    TOURNAMENT_SET_PRIZE,
// 0x238),
    TOURNAMENT_UEW,
// 0x239),
    TOURNAMENT_CHARACTERS,
// 0x23A),
    SEALED_BOX,
// 0x23C),
    WEDDING_PROGRESS,
// 0x236),
    WEDDING_CEREMONY_END,
// 0x237),
    PACKAGE_OPERATION,
// 0x353),//v143
    CS_CHARGE_CASH,
// 0x2CA),
    CS_EXP_PURCHASE,
// 0x23B),
    GIFT_RESULT,
// 0x23C),
    CHANGE_NAME_CHECK,
// 0x23D),
    CHANGE_NAME_RESPONSE,
// 0x23E),
    CS_UPDATE,
// 0x35B),//355
    CS_OPERATION,
// 0x35C),//356
    CS_MESO_UPDATE,
// 0x35F),//359
    //0x314 int itemid int sn
    CASH_SHOP,
// 0x372),//v145 confirmed
    CASH_SHOP_UPDATE,
// 0x373),//v145 seems OK
    GACHAPON_STAMPS,
// 0x253),
    FREE_CASH_ITEM,
// 0x254),
    CS_SURPRISE,
// 0x255),
    XMAS_SURPRISE,
// 0x256),
    ONE_A_DAY,
// 0x258),
    NX_SPEND_GIFT,
// 0x25A),
    RECEIVE_GIFT,
// 0x25A),//new v145
    KEYMAP,
// 0x37C),//320
    PET_AUTO_HP,
// 0x377),//321
    PET_AUTO_MP,
// 0x378),//322
    PET_AUTO_CURE,
// 0x379),//323
    START_TV,
// 0x324),
    REMOVE_TV,
// 0x325),
    ENABLE_TV,
// 0x326),
    GM_ERROR,
// 0x26D),
    ALIEN_SOCKET_CREATOR,
// 0x341),
    GOLDEN_HAMMER,
// 0x279),
    BATTLE_RECORD_DAMAGE_INFO,
// 0x27A),
    CALCULATE_REQUEST_RESULT,
// 0x27B),
    BOOSTER_PACK,
// 0x999),
    BOOSTER_FAMILIAR,
// 0x999),
    BLOCK_PORTAL,
// 0x999),
    NPC_CONFIRM,
// 0x999),
    RSA_KEY,
// 0x999),
    LOGIN_AUTH,
// 0x999),
    PET_FLAG_CHANGE,
// 0x999),
    BUFF_BAR,
// 0x999),
    GAME_POLL_REPLY,
// 0x999),
    GAME_POLL_QUESTION,
// 0x999),
    ENGLISH_QUIZ,
// 0x999),
    FISHING_BOARD_UPDATE,
// 0x999),
    BOAT_EFFECT,
// 0x999),
    FISHING_CAUGHT,
// 0x999),
    SIDEKICK_OPERATION,
// 0x999),
    FARM_PACKET1,
// 0x35C),
    FARM_ITEM_PURCHASED,
// 0x35D),
    FARM_ITEM_GAIN,
// 0x358),
    HARVEST_WARU,
// 0x35A),
    FARM_MONSTER_GAIN,
// 0x35B),
    FARM_INFO,
// 0x368),
    FARM_MONSTER_INFO,
// 0x369),
    FARM_QUEST_DATA,
// 0x36A),
    FARM_QUEST_INFO,
// 0x36B),
    FARM_MESSAGE,
// 0x36C),//36C
    UPDATE_MONSTER,
// 0x36D),
    AESTHETIC_POINT,
// 0x36E),
    UPDATE_WARU,
// 0x36F),
    FARM_EXP,
// 0x374),
    FARM_PACKET4,
// 0x375),
    QUEST_ALERT,
// 0x377),
    FARM_PACKET8,
// 0x378),
    FARM_FRIENDS_BUDDY_REQUEST,
// 0x37B),
    FARM_FRIENDS,
// 0x37C),
    FARM_USER_INFO,
// 0x388),
    FARM_AVATAR,
// 0x38A),
    FRIEND_INFO,
// 0x38D),
    FARM_RANKING,
// 0x38F), //+69
    SPAWN_FARM_MONSTER1,
// 0x393),
    SPAWN_FARM_MONSTER2,
// 0x394),
    RENAME_MONSTER,
// 0x395),
    STRENGTHEN_UI,
// 0x408),//39D
    //Unplaced:
    MAPLE_POINT,
// 0xED),//E6
    DEATH_COUNT,
// 0x206),

    REDIRECTOR_COMMAND,
// 0x1337), 
    
    SHOW_DAMAGE_SKIN;
// 0xDA);//:v

private int code = -2;

    @Override
    public void setValue(short code) {
        this.code = code;
    }

    public static String getOpcodeName(int value) {

        for (SendPacketOpcode opcode : values()) {
            if (opcode.getValue() == value) {
                System.out.println("DEBUG[SEND]: " + opcode.name());
                return opcode.name();
            }
        }
        return "UNKNOWN";
    }

    @Override
    public short getValue() {
        System.out.println("Packet to send: " + this.name() + " Value: " + this.code + "\r\nCaller: " + Thread.currentThread().getStackTrace()[2]);
        System.out.println("[S]Header: " + this.name());
        return (short) code;
    }

    public static Properties getDefaultProperties() throws FileNotFoundException, IOException {
        Properties props = new Properties();
        FileInputStream fileInputStream = new FileInputStream(GameConstants.GMS ? "sendopsGMS.properties" : "sendops.properties");
        props.load(fileInputStream);
        fileInputStream.close();
        return props;
    }

    public static final void reloadValues() {
        try {
            ExternalCodeTableGetter.populateValues(getDefaultProperties(), values());
        } catch (IOException e) {
            throw new RuntimeException("Failed to load sendops", e);
        }
    }

    static {
        reloadValues();
    }

    public boolean isSpamHeader(SendPacketOpcode opcode) {
        switch (opcode) {
            case AUTH_RESPONSE:
            case SERVERLIST:
            case UPDATE_STATS:
            case MOVE_PLAYER:
            case SPAWN_NPC:
            case SPAWN_NPC_REQUEST_CONTROLLER:
            case REMOVE_NPC:
            case MOVE_MONSTER:
            case MOVE_MONSTER_RESPONSE:
            case SPAWN_MONSTER:
            case SPAWN_MONSTER_CONTROL:
            case HAKU_MOVE:
            case DRAGON_MOVE:
            //case MOVE_SUMMON:
            // case MOVE_FAMILIAR:
            
             case ANDROID_MOVE:
             case INVENTORY_OPERATION:
            case MOVE_PET:
            case SHOW_SPECIAL_EFFECT:
            case DROP_ITEM_FROM_MAPOBJECT:
            case REMOVE_ITEM_FROM_MAP:
            //case UPDATE_PARTYMEMBER_HP:
            case DAMAGE_PLAYER:
            case SHOW_MONSTER_HP:
            case CLOSE_RANGE_ATTACK:
       //     case RANGED_ATTACK:
            //case ARAN_COMBO:
            case REMOVE_BG_LAYER:
            case SPECIAL_STAT:
            case TOP_MSG:
            case NPC_ACTION:
//            case ANGELIC_CHANGE:
            case MONSTER_SKILL:
            case UPDATE_CHAR_LOOK:
            case KILL_MONSTER:
                return true;
        }
        return false;
    }
}
