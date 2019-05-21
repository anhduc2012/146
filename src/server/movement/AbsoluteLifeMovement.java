

package server.movement;

import java.awt.Point;
import tools.data.MaplePacketLittleEndianWriter;


public class AbsoluteLifeMovement extends AbstractLifeMovement {

    private Point pixelsPerSecond, offset;
    private int unk, fh;

    public AbsoluteLifeMovement(int type, Point position, int duration, int newstate) {
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
    
    public void setFh(short fh) {
        this.fh = fh;
  }

    @Override
    public void serialize(MaplePacketLittleEndianWriter packet) {
	packet.write(getType());
	packet.writePos(getPosition());
	packet.writePos(pixelsPerSecond);
	packet.writeShort(unk);
	packet.writePos(offset);
	packet.write(getNewstate());
	packet.writeShort(getDuration());
    }
}
