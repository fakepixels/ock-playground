'use client';

import WalletComponents from '@/components/WalletComponents';
import SwapComponents from '@/components/SwapComponents';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">OnchainKit Playground</h1>

        <section className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
          <aside className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Wallet</h2>
          </aside>
          <WalletComponents />
        </section>

        <section className="bg-gray-900 rounded-lg shadow-lg p-6">
          <aside className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Swap</h2>
            <p className="text-base italic">
              Note: The Swap component only prepares the transaction. The developer needs to use Viem on their website to sign and send the transaction to the blockchain.
            </p>
          </aside>
          <SwapComponents />
        </section>
      </div>
    </main>
  );
}