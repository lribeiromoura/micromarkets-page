export type MicromarketAsset = {
  id: string;
  assetNumber: string;
  kioskId: string;
  serialNumber: string;
  category: string;
  model: string;
  active: boolean;
  isCash: boolean;
};

export type Micromarket = {
  id: string;
  market: string;
  mgmtNumber: string;
  account: string;
  location: string;
  active: boolean;
  providerCode: string;
  provider: string;
  region: string;
  providerConfig: string;
  creditCardFeeAmount: number;
  creditCardFeePercent: number;
  applyFeeToTopUps: boolean;
  hasPriceTags: boolean;
  lastVdiMarketPush: string;
  lastVdiProductPush: string;
  lastVdiSaleReceived: string;
  vdiProductsInQueue: number;
  assets: MicromarketAsset[];
};

export type StatusFilter = "all" | "active" | "inactive";

export type MicromarketFilters = {
  region: string;
  status: StatusFilter;
};
