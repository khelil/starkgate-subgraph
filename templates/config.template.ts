export const bridgesAddressesL1 = [
  "{{modules.ethBridgeL1}}",
  {{#modules.tokenBridges}}
  "{{bridgeL1}}",
  {{/modules.tokenBridges}}
];

export const bridgesAddressesL2 = [
  "{{modules.ethBridgeL2}}",
  {{#modules.tokenBridges}}
  "{{bridgeL2}}",
  {{/modules.tokenBridges}}
];
