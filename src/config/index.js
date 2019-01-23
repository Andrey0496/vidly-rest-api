import devConfig from './devlopment';
import prodConfig from './production';
import testConfig from './testing';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;

let envConfig = {};

switch (env) {
  case 'development':
  case 'dev':
    envConfig = devConfig;
    break;
  case 'test':
  case 'testing':
    envConfig = testConfig;
    break;
  case 'prod':
  case 'production':
    envConfig = prodConfig;
    break;
  default:
    envConfig = devConfig;
};

export default {...envConfig};
