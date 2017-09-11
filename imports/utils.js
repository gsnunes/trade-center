module.exports = {

  fakeSession: {
    subscribe: () => true,
  },

  getFee: (market, type) => {
    let fee = [];

    switch (market) {
      case 'LTC_BTC':
        fee = [0.15, 0.25];
        break;
      case 'FCT_BTC':
        fee = [0.15, 0.25];
        break;
      case 'XBC_BTC':
        fee = [0.15, 0.15];
        break;
      case 'DGB_BTC':
        fee = [0.15, 0.25];
        break;
      case 'DASH_BTC':
        fee = [0.15, 0.25];
        break;
      case 'ETH_BTC':
        fee = [0.15, 0.25];
        break;
      default:
        fee = [0.15, 0.25];
    }

    return fee[(type === 'buy' ? 0 : 1)];
  },

};
