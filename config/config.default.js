/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660470332680_6669';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    client: {
      host: 'localhost', // 链接地址
      port: '3306', // 端口
      user: 'root', // 数据库用户名
      password: 'nidaye..', // 数据库密码
      database: 'Nothing', // 数据库名称
    },
    // load into app,default is open //加载到应用程序，默认为打开
    app: true,
    // load into agent,default is close //加载到代理中，默认值为“关闭”
    agent: false,
  };
  config.jwt = {
    secret: 'Nothing',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  return {
    ...config,
    ...userConfig,
  };
};
