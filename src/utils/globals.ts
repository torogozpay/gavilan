import { createLogger, transports } from 'winston';
import { EventEmitter } from 'events';
import Transport from 'winston-transport';

class ConsoleTransportLog extends Transport {
  eol: string;
  name = 'ConsoleTransportLog';
  stderrLevels: string[] = ['error', 'debug', 'warn'];

  constructor(opts) {
    super(opts);
    this.eol = '\n';
  }

  log(info, callback) {
    setImmediate(() => this.emit('logged', info));

    console.log(
      `${new Date().toISOString()} [${info.level}] - ${info.message}`,
    );

    callback();
  }
}

export const eventEmitter: EventEmitter = new EventEmitter();

const logTransports = [
  new ConsoleTransportLog({
    level: 'info',
    handleExceptions: true,
  }),
];

export const logger: import('winston').Logger = createLogger({
  transports: logTransports,
  exitOnError: false,
});
