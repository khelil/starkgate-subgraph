import { UnfinishedWithdrawal } from "../../generated/schema";

export function loadOrCreateUnfinishedWithdrawal(
  id: string
): UnfinishedWithdrawal {
  let unfinishedWithdrawal = UnfinishedWithdrawal.load(id);

  if (!unfinishedWithdrawal) {
    unfinishedWithdrawal = new UnfinishedWithdrawal(id);
    unfinishedWithdrawal.withdrawalEvents = [];
    unfinishedWithdrawal.save();
  }

  return unfinishedWithdrawal;
}
