/*
 
 
 
 

 
 
 
 
 

 
 
 
 

 
 
 */
package provider;

import java.io.File;
import java.io.IOException;
import provider.nx.NXDataProvider;
import provider.wz.WZFile;
import provider.wz.XMLWZFile;

public class MapleDataProviderFactory {

    private final static String wzPath = System.getProperty("wzpath");

    private static MapleDataProvider getWZ(Object in) {
        return getWZ(in, false);
    }
    
    private static MapleDataProvider getWZ(Object in, boolean provideImages) {
        if (in instanceof File) {
            File wzFile = (File) in;
            if (wzFile.getName().toLowerCase().endsWith("nx") && !wzFile.isDirectory()) {
                try {
                    return new NXDataProvider(wzFile.getPath());
                } catch (IOException e) {
                    throw new RuntimeException("Loading NX File failed", e);
                }
            } else if (wzFile.getName().toLowerCase().endsWith("wz") && !wzFile.isDirectory()) {
                try {
                    return new WZFile(wzFile, provideImages);
                } catch (IOException e) {
                    throw new RuntimeException("Loading WZ File failed", e);
                }
            } else {
                return new XMLWZFile(wzFile);
            }
            //return new MapleDataProvider((File) in);
        }
        throw new IllegalArgumentException("Can't create data provider for input " + in);
    }

    public static MapleDataProvider getDataProvider(Object in) {
        return getWZ(in);
    }

    public static File fileInWZPath(String filename) {
        return new File(wzPath, filename);
    }
}
