/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.movement;

import java.awt.Point;
import tools.data.MaplePacketLittleEndianWriter;

public class ChangeEquipSpecialAwesome implements LifeMovementFragment {

    private int type, wui;

    public ChangeEquipSpecialAwesome(int type, int wui) {
	this.type = type;
	this.wui = wui;
    }

    @Override
    public void serialize(MaplePacketLittleEndianWriter packet) {
	packet.write(type);
	packet.write(wui);
    }

    @Override
    public Point getPosition() {
	return new Point(0, 0);
    }
}
