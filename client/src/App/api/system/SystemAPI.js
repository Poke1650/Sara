import endpoints from "./endpoints"
import APIRequestHandler from "../APIRequestHandler";

export default class SystemAPI {
  static getAll() {
    return APIRequestHandler.query(endpoints.ALL);
  }

  static getArduino() {
    return APIRequestHandler.query(endpoints.ARDUINO);
  }

  static getServer() {
    return APIRequestHandler.query(endpoints.SERVER);
  }

  static getProcess() {
    return APIRequestHandler.query(endpoints.PROCESS);
  }

  static getDatabase() {
    return APIRequestHandler.query(endpoints.DATABASE);
  }

  static disconnectArduino() {
    return APIRequestHandler.post(endpoints.ARDUINO_DISCONNECT);
  }

  static connectArduino() {
    return APIRequestHandler.post(endpoints.ARDUINO_CONNECT);
  }

  static reconnectArduino() {
    return APIRequestHandler.post(endpoints.ARDUINO_RECONNECT);
  }
}