import os from "os";

export const getServerIp = (): string => {
  const ifaces = os.networkInterfaces();
  let localIp = "localhost";

  for (const iface of Object.values(ifaces)) {
    for (const ifaceDetails of iface || []) {
      if (ifaceDetails.family === "IPv4" && !ifaceDetails.internal) {
        localIp = ifaceDetails.address;
        break;
      }
    }
  }
  return localIp;
};
