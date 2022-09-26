import { DepositEvent } from "../../generated/schema";
import { LogMessageToL2 } from "../../generated/StarknetMessaging/StarknetMessaging";
import {
  convertUint256ToBigInt,
  getUniqId,
  bigIntToAddressBytes,
  TransferStatus,
  ADDRESS_TYPE,
} from "../utils";

export function createDepositEvent(event: LogMessageToL2): DepositEvent {
  let depositEvent = new DepositEvent(getUniqId(event));

  let l2Recipient = event.params.payload[0];
  let amountLow = event.params.payload[1];
  let amountHigh = event.params.payload[2];

  depositEvent.l2Recipient = bigIntToAddressBytes(
    l2Recipient,
    ADDRESS_TYPE.STARKNET
  );
  depositEvent.bridgeAddressL1 = event.params.from_address;
  depositEvent.bridgeAddressL2 = bigIntToAddressBytes(
    event.params.to_address,
    ADDRESS_TYPE.STARKNET
  );
  depositEvent.amount = convertUint256ToBigInt(amountLow, amountHigh);
  depositEvent.status = TransferStatus.PENDING;

  depositEvent.createdAtBlock = event.block.number;
  depositEvent.createdTxHash = event.transaction.hash;
  depositEvent.finishedAtBlock = null;
  depositEvent.finishedAtDate = null;
  depositEvent.finishedTxHash = null;

  depositEvent.save();

  return depositEvent;
}
