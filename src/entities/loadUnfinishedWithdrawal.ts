import { log } from "@graphprotocol/graph-ts";
import { UnfinishedWithdrawal } from "../../generated/schema";

export function loadUnfinishedWithdrawal(id: string): UnfinishedWithdrawal {
  let unfinishedWithdrawal = UnfinishedWithdrawal.load(id);

  if (!unfinishedWithdrawal) {
    log.error("UnfinishedWithdrawal with id {} not found", [id]);
    throw new Error("UnfinishedWithdrawal not found");
  }

  return unfinishedWithdrawal;
}
