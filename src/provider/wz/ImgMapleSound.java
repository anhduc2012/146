/*
	
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       
		       

    
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    
    
    
    

    
    
*/
package provider.wz;

public class ImgMapleSound {
    private final int dataLength, offset;

    public ImgMapleSound(int dataLength, int offset) {
        this.dataLength = dataLength;
        this.offset = offset;
    }

    public int getDataLength() {
        return dataLength;
    }

    public int getOffset() {
        return offset;
    }
}
