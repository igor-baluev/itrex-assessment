import { useState } from 'react';
import { useWallet } from '../../../../contexts/WalletProvider';
import { toast } from "react-hot-toast";
import Select from '../../../../components/Select/Select';
import './CryptoWallet.css';

const currencies = ['ETH', 'USDT', 'USDC', 'USDS'];

export default function CryptoWallet({ amount, onClose }) {
  const [currency, setCurrency] = useState('ETH');
  const { walletConnected, walletAddress, connectWallet } = useWallet();

  const handleConnectWallet = () => {
    connectWallet();
  };

  const handlePay = async (e) => {
    e.preventDefault();
    toast.success(`Paid $${Number(amount).toFixed(2)}`);
    if (onClose) onClose();
  };

  return (
    <div className="crypto-wallet">
      {!walletConnected ? (
        <button className="crypto-wallet__btn" onClick={handleConnectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <h3 className="wallet-info">Connected: {walletAddress}</h3>
          <form onSubmit={handlePay} className="payment-form">
            <div className="payment-form-row">
              {amount && (
                <span className="payment-amount">Amount: ${amount}</span>
              )}
              <Select
                value={currency}
                onValueChange={setCurrency}
                options={currencies}
                placeholder="Select currency"
              />
            </div>
            <button type="submit" className='crypto-wallet__btn'>Pay</button>
          </form>
        </div>
      )}
    </div>
  );
}
