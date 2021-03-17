import fs = require('fs');
import util = require('util');

/**
 * Represents the configuration of the application.
 */
export class Configuration {
  // Private constructor to force creation with read method.
  private constructor() {}

  /**
   * Port to listen on, if not configured in the environment.
   */
  public readonly port: number;

  /**
   * Reads the configuration from the specified file.
   * @param configFile File to read the configuration from.
   */
  public static async read(configFile: string): Promise<Configuration> {
    const json = await util.promisify(fs.readFile)(configFile, { encoding: 'utf8' });
    return JSON.parse(json);
  }
}
