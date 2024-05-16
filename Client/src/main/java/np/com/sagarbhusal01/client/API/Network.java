package np.com.sagarbhusal01.client.API;

import np.com.sagarbhusal01.client.MainApplication;

import java.net.*;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

public class Network {
    public String GetIpAddress() throws SocketException
    {

            Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
            while (interfaces.hasMoreElements()) {
                NetworkInterface iface = interfaces.nextElement();
                for (InterfaceAddress interfaceAddress : iface.getInterfaceAddresses()) {
                    InetAddress addr = interfaceAddress.getAddress();
                    if (!addr.isLoopbackAddress() && addr instanceof Inet4Address) {
                        return addr.getHostAddress()+":"+ MainApplication.ServerPort;
                    }
                }
            }

        return "";

    }
}
