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


public class TeleportMovement extends AbstractLifeMovement {
	private Point pixelsPerSecond;
	public TeleportMovement(int type, Point position, int newstate) {
		super(type, position, 0, newstate);
	}

	public Point getPixelsPerSecond() {
		return pixelsPerSecond;
	}

	public void setPixelsPerSecond(Point wobble) {
		this.pixelsPerSecond = wobble;
	}
        
	@Override
	public void serialize(MaplePacketLittleEndianWriter packet) {
		packet.write(getType());
		packet.writeShort(getPosition().x);
		packet.writeShort(getPosition().y);
		packet.writeShort(getPixelsPerSecond().x);
		packet.writeShort(getPixelsPerSecond().y);
		packet.write(getNewstate());
	}
}
