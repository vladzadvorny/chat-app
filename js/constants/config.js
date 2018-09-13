export const isProduction = true;

export const siteUrl = isProduction
  ? 'https://xn----7sbb4afrfacg5c4c7b.xn--p1ai'
  : 'http://localhost:3000';

export const wsUrl = isProduction
  ? 'wss://api.xn----7sbb4afrfacg5c4c7b.xn--p1ai'
  : 'ws://localhost:3001';

export const apiUrl = isProduction
  ? 'https://api.xn----7sbb4afrfacg5c4c7b.xn--p1ai'
  : 'http://localhost:3001';
