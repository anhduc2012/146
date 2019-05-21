/*
	
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       
		       

    
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    
    
    
    

    
    
*/
package provider.wz;

import provider.MapleDataEntity;
import provider.MapleDataEntry;

public class WZEntry implements MapleDataEntry {
    private final String name;
    private final int size;
    private final int checksum;
    private int offset;
    private final MapleDataEntity parent;

    public WZEntry(String name, int size, int checksum, MapleDataEntity parent) {
        super();
        this.name = name;
        this.size = size;
        this.checksum = checksum;
        this.parent = parent;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public int getSize() {
        return size;
    }

    @Override
    public int getChecksum() {
        return checksum;
    }

    @Override
    public int getOffset() {
        return offset;
    }

    @Override
    public MapleDataEntity getParent() {
        return parent;
    }
}
