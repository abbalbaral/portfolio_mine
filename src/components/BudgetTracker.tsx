"use client";
import React, { useState } from 'react';
import { Plus, Trash2, TrendingDown, TrendingUp } from 'lucide-react';

type Transaction = {
  id: number;
  desc: string;
  amount: number;
  type: 'income' | 'expense';
};

export default function BudgetTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !amount) return;
    const newTx: Transaction = {
      id: Date.now(),
      desc,
      amount: parseFloat(amount),
      type,
    };
    setTransactions([...transactions, newTx]);
    setDesc('');
    setAmount('');
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 font-sans">
      {/* Balance Card */}
      <div className="bg-slate-900 p-8 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-0"></div>
        <div className="relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Total Balance</h2>
            <p className="text-4xl font-bold">Rs. {balance.toFixed(2)}</p>
        </div>
      </div>

      {/* Income / Expense Summary */}
      <div className="grid grid-cols-2 gap-4 p-4 -mt-6 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-50 text-center">
          <p className="flex items-center justify-center gap-2 text-green-600 text-xs font-bold uppercase mb-1">
            <TrendingUp size={14} /> Income
          </p>
          <p className="text-lg font-bold text-slate-800">+Rs. {income.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-50 text-center">
          <p className="flex items-center justify-center gap-2 text-red-600 text-xs font-bold uppercase mb-1">
            <TrendingDown size={14} /> Expense
          </p>
          <p className="text-lg font-bold text-slate-800">-Rs. {expense.toFixed(2)}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Transaction History */}
        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Recent Transactions</h3>
        <ul className="space-y-3 mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
          {transactions.length === 0 && (
            <p className="text-sm text-slate-400 italic text-center py-4">No transactions yet. Add one below.</p>
          )}
          {transactions.map(t => (
            <li key={t.id} className="flex justify-between items-center group bg-slate-50 p-3 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
              <span className="text-slate-700 font-medium text-sm">{t.desc}</span>
              <div className="flex items-center gap-3">
                <span className={`text-sm font-bold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {t.type === 'income' ? '+' : '-'} Rs. {t.amount}
                </span>
                <button onClick={() => deleteTransaction(t.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add New Form */}
        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Add Transaction</h3>
        <form onSubmit={addTransaction} className="space-y-3">
          <input 
            type="text" 
            placeholder="Description (e.g. Momo, Taxi)" 
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          />
          <div className="flex gap-3">
            <input 
              type="number" 
              placeholder="Amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-1/2 p-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
            />
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value as any)}
              className="w-1/2 p-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <button className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm">
             <Plus size={18}/> Add Entry
          </button>
        </form>
      </div>
    </div>
  );
}