import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';

import {
  Address,
  Avatar,
  Name,
  Badge,
  Identity,
  EthBalance,
} from '@coinbase/onchainkit/identity';
import { color, cn, background, pressable, text } from '@coinbase/onchainkit/theme';


export default function WalletDemo() {
  return (
    <div className="flex pb-4 justify-end">
      <Wallet>
        <ConnectWallet>
          <Avatar className="h-6 w-6" />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className={cn("px-4 pt-3 pb-2",pressable.secondary)} hasCopyAddressOnClick>
            <Avatar />
            <Name className={cn("text-blue-600")}>
              <Badge />
            </Name>
            <Address className={color.foregroundMuted} />
            <EthBalance />
          </Identity>
          <WalletDropdownLink icon="wallet" href="https://wallet.coinbase.com">
            Go to Wallet Dashboard
          </WalletDropdownLink>
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}