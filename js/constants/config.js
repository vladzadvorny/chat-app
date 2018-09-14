// eslint-disable-next-line
export const isProduction = !__DEV__;

export const siteUrl = isProduction
  ? 'https://xn----7sbb4afrfacg5c4c7b.xn--p1ai'
  : 'http://192.168.1.53:3000';

export const wsUrl = isProduction
  ? 'wss://api.xn----7sbb4afrfacg5c4c7b.xn--p1ai'
  : 'ws://192.168.1.53:3001';

export const apiUrl = isProduction
  ? 'https://api.xn----7sbb4afrfacg5c4c7b.xn--p1ai'
  : 'http://192.168.1.53:3001';

console.log(wsUrl, isProduction);
