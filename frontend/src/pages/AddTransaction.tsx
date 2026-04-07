import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddTransaction: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to dashboard after saving
        navigate('/dashboard');
    };

    return (
        <div className="bg-surface font-body text-on-surface antialiased w-full text-left">
            {/* Shell Suppression Check */}
            <main className="min-h-screen flex items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-3xl bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
                    {/* Left Side: Contextual Summary */}
                    <div className="w-full md:w-5/12 bg-surface-container-low p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                                <span className="font-headline font-bold text-lg tracking-tight text-primary">Financial Atelier</span>
                            </div>
                            <h1 className="font-headline text-3xl font-extrabold text-on-surface leading-tight mb-4">Record a new movement</h1>
                            <p className="text-on-surface-variant body-md leading-relaxed">Ensure your architectural ledger remains precise. Every entry strengthens the integrity of your wealth portfolio.</p>
                        </div>
                        <div className="mt-12 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                                    <span className="material-symbols-outlined">security</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-on-surface">Encrypted Entry</p>
                                    <p className="text-xs text-on-surface-variant">Validated by secure protocols</p>
                                </div>
                            </div>
                            <img className="w-full h-32 object-cover rounded-xl grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy02ltAYt2tnPlWsSVX4jAZo35qUNVoXr-mWT1mjcu9Q3AdlYp1MIGBAQlXC7f6H8bL4khVo8GiJzMbDTFFCXUzQB2bCxUVyn3wfE_cvoviQzVUR8L3nEiD5Cbx0OtKP10hVYD0qO9x3062h0P9y_WtrTMNhG3_Z5oo8DBew9F5WtdQ3Gp0V9YXLCt_6vDqaO5mxw43qMTCAjPMELx27-CmUDAVwkVdKWsDza9rFipHPsBUO8ve-sRDaiIlmLv2ACotkmTZzjTaUwL" alt="architecture texture" />
                        </div>
                    </div>
                    {/* Right Side: Form Logic */}
                    <div className="w-full md:w-7/12 p-8 md:p-12">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            {/* Amount Field */}
                            <div className="group">
                                <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Amount</label>
                                <div className="relative flex items-baseline gap-2 border-b-2 border-surface-variant group-focus-within:border-surface-tint transition-all pb-1">
                                    <span className="text-2xl font-headline font-bold text-on-surface-variant">$</span>
                                    <input className="w-full bg-transparent border-none p-0 text-4xl font-headline font-extrabold text-primary placeholder:text-surface-variant focus:ring-0 tabular-nums" placeholder="0.00" type="number" />
                                </div>
                            </div>
                            {/* Grid for Split Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Category */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Category</label>
                                    <div className="relative">
                                        <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 appearance-none focus:ring-0 text-sm font-medium text-on-surface" defaultValue="">
                                            <option disabled value="">Select category</option>
                                            <option value="housing">Housing</option>
                                            <option value="investments">Investments</option>
                                            <option value="lifestyle">Lifestyle</option>
                                            <option value="transport">Transport</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                                            <span className="material-symbols-outlined text-sm">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Date */}
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Date</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-0 text-sm font-medium text-on-surface" type="date" />
                                </div>
                            </div>
                            {/* Description */}
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Description</label>
                                <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-0 text-sm font-medium text-on-surface placeholder:text-on-surface-variant/50" placeholder="e.g. Quarterly Portfolio Rebalancing" type="text" />
                            </div>
                            {/* Account & Tags */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Account</label>
                                    <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 appearance-none focus:ring-0 text-sm font-medium text-on-surface">
                                        <option>Private Wealth Checking</option>
                                        <option>Corporate Treasury</option>
                                        <option>Offshore Fixed Income</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant mb-2">Tags</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-0 text-sm font-medium text-on-surface" placeholder="Add labels..." type="text" />
                                </div>
                            </div>
                            {/* Split Transaction Toggle */}
                            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-on-surface-variant">call_split</span>
                                    <div>
                                        <p className="text-sm font-semibold text-on-surface">Split transaction</p>
                                        <p className="text-xs text-on-surface-variant">Divide costs across multiple users</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer" type="checkbox" value="" />
                                    <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                                </label>
                            </div>
                            {/* Actions */}
                            <div className="flex flex-col-reverse md:flex-row gap-4 pt-4">
                                <button
                                    onClick={() => navigate('/dashboard')}
                                    className="w-full md:w-1/3 py-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors"
                                    type="button"
                                >
                                    Discard
                                </button>
                                <button className="w-full md:w-2/3 py-4 signature-gradient text-on-primary rounded-full font-headline font-bold text-base shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                                    Save Transaction
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddTransaction;
