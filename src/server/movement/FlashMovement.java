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

public class FlashMovement extends AbstractLifeMovement {

    private Point pixelsPerSecond;

    public FlashMovement(int type, Point position, int duration, int newstate) {
	super(type, position, duration, newstate);
    }

	public Point getPixelsPerSecond() {
		return pixelsPerSecond;
	}

	public void setPixelsPerSecond(Point ye) {
		this.pixelsPerSecond = ye;
	}

    @Override
    public void serialize(MaplePacketLittleEndianWriter packet) {
        packet.write(getType());
	packet.writePos(getPosition());
	packet.writePos(pixelsPerSecond);
        packet.write(getNewstate());
        packet.writeShort(getDuration());
    }
}
