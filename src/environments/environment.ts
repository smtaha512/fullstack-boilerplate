import { ConnectionOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const typeormEnvs = require('../../ormconfig');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { env } = require('../../env.config');

export interface Environment {
  database: ConnectionOptions;
  port: number | string;
}

export const environment: Environment = {
  database: {
    ...typeormEnvs,
    migrationsRun: true,
    logging: false,
    dropSchema: !true,
  },
  port: env.port || 3000,
};
