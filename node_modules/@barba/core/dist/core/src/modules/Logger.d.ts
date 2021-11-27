/**
 * @barba/core/modules/Logger
 * <br><br>
 * ## Logger.
 *
 * - Display informations via the console
 *
 * @module core/modules/Logger
 * @preferred
 */
/***/
/**
 * Log levels, all lower level messages are printed
 *
 * 0. mute
 * 1. error = `console.error()`
 * 2. warning= `console.warn()`
 * 3. info = `console.info()`
 * 4. debug = `console.log()`
 */
export declare enum LogLevels {
    off = 0,
    error = 1,
    warning = 2,
    info = 3,
    debug = 4
}
export declare class Logger {
    /**
     * Get global log level.
     */
    static getLevel(): number;
    /**
     * Set global log level.
     */
    static setLevel(name: keyof typeof LogLevels): number;
    /**
     * Log "prefix".
     */
    private _source;
    /**
     * Creates an instance of Logger.
     */
    constructor(source: string);
    /**
     * Permanent, unremovable log.
     */
    /**
     * Error log.
     */
    error(...objects: any[]): void;
    /**
     * Warn log.
     */
    warn(...objects: any[]): void;
    /**
     * Info log.
     */
    info(...objects: any[]): void;
    /**
     * Debug log.
     */
    debug(...objects: any[]): void;
    /**
     * Internal logger.
     */
    private _log;
}
