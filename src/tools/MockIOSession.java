/*
 
 Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
 
 

 
 
 
 
 

 
 
 
 

 
 
 */
package tools;

import java.net.SocketAddress;

import org.apache.mina.common.CloseFuture;
import org.apache.mina.common.IoFilterChain;
import org.apache.mina.common.IoHandler;
import org.apache.mina.common.IoService;
import org.apache.mina.common.IoServiceConfig;
import org.apache.mina.common.IoSessionConfig;
import org.apache.mina.common.TransportType;
import org.apache.mina.common.WriteFuture;
import org.apache.mina.common.IoFilter.WriteRequest;
import org.apache.mina.common.support.BaseIoSession;

/**
 * Represents a mock version of an IOSession to use a MapleClient instance
 * without an active connection (faekchar, etc).
 *
 * Most methods return void, or when they return something, null. Therefore,
 * this class is mostly undocumented, due to the fact that each and every
 * function does squat.
 *
 *  Frz
 * @since Revision 518
 * @version 1.0
 */
public class MockIOSession extends BaseIoSession {

    /**
     * Does nothing.
     */
    @Override
    protected void updateTrafficMask() {
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoSessionConfig getConfig() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoFilterChain getFilterChain() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoHandler getHandler() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public SocketAddress getLocalAddress() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public SocketAddress getRemoteAddress() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoService getService() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public SocketAddress getServiceAddress() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public IoServiceConfig getServiceConfig() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public TransportType getTransportType() {
        return null;
    }

    /**
     * Does nothing.
     * @return 
     */
    @Override
    public CloseFuture close() {
        return null;
    }

    /**
     * Does nothing.
     */
    @Override
    protected void close0() {
    }

    /**
     * Does nothing.
     * @param message
     * @param remoteAddress
     * @return 
     */
    @Override
    public WriteFuture write(Object message, SocketAddress remoteAddress) {
        return null;
    }

    /**
     * "Fake writes" a packet to the client, only running the OnSend event of
     * the packet.
     * @param message
     * @return 
     */
    @Override
    public WriteFuture write(Object message) {
        return null;
    }

    /**
     * Does nothing.
     * @param writeRequest
     */
    @Override
    protected void write0(WriteRequest writeRequest) {
    }
}
