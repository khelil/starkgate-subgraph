import { Address, BigInt } from "@graphprotocol/graph-ts";
import { log } from '@graphprotocol/graph-ts'

export function makeIdFromPayload(
  bridgeL1Address: Address,
  payload: BigInt[]
): string {
  let id = [bridgeL1Address.toHex()].concat(payload.map<string>((p) => p.toHex())).join("-");
  log.debug('makeIdFromPayload id {}', [id]);
  return id;
}
