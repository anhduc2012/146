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


public class JumpDownMovement extends AbstractLifeMovement {

    private Point pixelsPerSecond;
	private Point offset;
    private int unk;
    private int fh;

    public JumpDownMovement(int type, Point position, int duration, int newstate) {
	super(type, position, duration, newstate);
    }

    public Point getPixelsPerSecond() {
	return pixelsPerSecond;
    }

    public void setPixelsPerSecond(Point wobble) {
	this.pixelsPerSecond = wobble;
    }

    public Point getOffset() {
	return offset;
    }

    public void setOffset(Point wobble) {
	this.offset = wobble;
    }

    public int getUnk() {
	return unk;
    }

    public void setUnk(int unk) {
	this.unk = unk;
    }

    public int getFH() {
	return fh;
    }

    public void setFH(int fh) {
	this.fh = fh;
    }

    @Override
    public void serialize(MaplePacketLittleEndianWriter packet) {
	packet.write(getType());
	packet.writePos(getPosition());
	packet.writePos(pixelsPerSecond);
	packet.writeShort(unk);
	packet.writeShort(fh);
	packet.writePos(offset);
	packet.write(getNewstate());
	packet.writeShort(getDuration());
    }
}
