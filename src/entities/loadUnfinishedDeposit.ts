import { log } from "@graphprotocol/graph-ts";
import { UnfinishedDeposit } from "../../generated/schema";

export function loadUnfinishedDeposit(id: string): UnfinishedDeposit {
  let unfinishedDeposit = UnfinishedDeposit.load(id);

  log.debug('loadUnfinishedDeposit id {}', [id])

  if (!unfinishedDeposit) {
    return
  }

  return unfinishedDeposit;
}
