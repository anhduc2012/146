

package server.movement;

import tools.data.MaplePacketLittleEndianWriter;
import java.awt.Point;

public class RelativeLifeMovement extends AbstractLifeMovement {

    public RelativeLifeMovement(int type, Point position, int duration, int newstate) {
	super(type, position, duration, newstate);
    }

    @Override
    public void serialize(MaplePacketLittleEndianWriter packet) {
	packet.write(getType());
	packet.writeShort(getPosition().x);
	packet.writeShort(getPosition().y);
	packet.write(getNewstate());
	packet.writeShort(getDuration());
    }
}
