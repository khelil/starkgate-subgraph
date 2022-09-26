import { Bytes } from "@graphprotocol/graph-ts";
import { bridgesAddressesL1, bridgesAddressesL2 } from "../../generated/config";

export let ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export class TransferStatus {
  static PENDING: string = "PENDING";
  static FINISHED: string = "FINISHED";
}

export const l1BridgesAddresses: Bytes[] = bridgesAddressesL1.map<Bytes>(
  (x: string): Bytes => Bytes.fromByteArray(Bytes.fromHexString(x))
);

export const l2BridgesAddresses: Bytes[] = bridgesAddressesL2.map<Bytes>(
  (x: string): Bytes => Bytes.fromByteArray(Bytes.fromHexString(x))
);
