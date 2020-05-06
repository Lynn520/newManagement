// 打包时取webpack传进来的环境变量
window.GLOBAL_ENV = process.env.DIST_ENV || 'dev';

// api config
const apiURL = {
  dev: 'http://mdgl.guoanshequ.ren/mdglapi/api/web',
  qa: 'http://mdgl.guoanshequ.wang/mdglapi/api/web',
  //prod: `http://mdgl.${getHost()}/mdglapi/api/web`,
};

const config = {
  apiURL: apiURL[window.GLOBAL_ENV],
};


// prod配置下，根据域名区分preprod/prod
export const getHost = () => {
  const url = window.location.host;
  if (url.indexOf('guoanshequ.wang') > -1) {
    return 'guoanshequ.wang';
  }
  if (url.indexOf('guoanshequ.top') > -1) {
    return 'guoanshequ.top';
  }
  if (url.indexOf('guoanshequ.com') > -1) {
    return 'guoanshequ.com';
  }
  return url;
};

export const filterRoutes = (routesConfig, menus) => {
  let ret = [];
  routesConfig.map((rc) => {
    let tmp = [];
    if (rc.routes) {
      rc.routes.map((subRoute) => {
        menus.map((m) => {
          m.items.map((item) => {
            if (subRoute.urlKey && subRoute.urlKey == item.url) {
              tmp.push(subRoute);
            }
          })
        })
      });
    }
    if (tmp.length > 0) {
      ret.push({
        key: rc.key,
        title: rc.title,
        icon: rc.icon,
        routes: tmp,
      });
    }
  });
  return ret;
}

console.info(
  `%c 当前配置的环境 GLOBAL_ENV = ${window.GLOBAL_ENV}: \n 接口地址:${apiURL[window.GLOBAL_ENV]}`,
  'color: white; font-weight: bold; background-color: green; padding: 3px',
);

export default config;
