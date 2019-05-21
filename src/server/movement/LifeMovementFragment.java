

package server.movement;

import tools.data.MaplePacketLittleEndianWriter;
import java.awt.Point;

public interface LifeMovementFragment {
    void serialize(MaplePacketLittleEndianWriter lew);
    Point getPosition();
}
