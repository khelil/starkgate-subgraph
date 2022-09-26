import { UnfinishedDeposit } from "../../generated/schema";
import { log } from '@graphprotocol/graph-ts'

export function loadOrCreateUnfinishedDeposit(id: string): UnfinishedDeposit {
  let unfinishedDeposit = UnfinishedDeposit.load(id);

  if (!unfinishedDeposit) {
    unfinishedDeposit = new UnfinishedDeposit(id);
    unfinishedDeposit.depositEvents = [];
    unfinishedDeposit.save();
  }

  log.debug('loadOrCreateUnfinishedDeposit id {}', [id])

  return unfinishedDeposit;
}
