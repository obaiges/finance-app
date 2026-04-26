import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div className="bg-surface font-body text-on-surface antialiased w-full text-left">
            {/* SideNavBar */}
            <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-100 dark:bg-slate-900 flex flex-col p-4 gap-2 z-50">
                <div className="mb-8 px-4 py-2">
                    <h1 className="text-xl font-bold text-cyan-950 dark:text-cyan-50 font-headline tracking-tight">Financial Atelier</h1>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 font-semibold">Premium Wealth Management</p>
                </div>
                <nav className="flex flex-col gap-2 flex-grow">
                    {/* Active: Dashboard */}
                    <a className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-cyan-900 dark:text-cyan-100 rounded-lg shadow-sm font-semibold transition-all duration-200 active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm">Dashboard</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined">account_balance</span>
                        <span className="text-sm">Accounts</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined">label</span>
                        <span className="text-sm">Categories</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined">event_repeat</span>
                        <span className="text-sm">Fixed Expenses</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors active:scale-[0.98]" href="#">
                        <span className="material-symbols-outlined">insert_chart</span>
                        <span className="text-sm">Reports</span>
                    </a>
                </nav>
                <div className="mt-auto p-4 bg-primary rounded-xl text-on-primary shadow-lg">
                    <button onClick={() => navigate('/add-transaction')} className="w-full flex items-center justify-center gap-2 font-semibold text-sm">
                        <span className="material-symbols-outlined text-lg">add</span>
                        Add Transaction
                    </button>
                </div>
            </aside>
            {/* TopNavBar */}
            <header className="fixed top-0 right-0 left-64 h-16 z-40 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm flex justify-between items-center px-8">
                <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant/60" placeholder="Search transactions, assets..." type="text" />
                </div>
                <div className="flex items-center gap-6">
                    <button className="text-slate-500 hover:text-cyan-600 transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="text-slate-500 hover:text-cyan-600 transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="h-8 w-8 rounded-full overflow-hidden bg-surface-container-high border-2 border-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all block"
                        >
                            <img className="w-full h-full object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8tmuPz-Pv4MpgxfJXHWCRTFv5Z-xSpjjSf13CozvHmm7D_HV4_DMb5q8IcUWWXAQ9DFandgMNUvYymVDa3e7YMQHzv3_tKGlRNFogPtzabwOdk3kMIF3sIW9_m-a8iJZLEC6jafl4nIUeCo-DPVq6EtHVIFFG92axLED1Oqznq3CbS12tMkpqRnAwYj86H32Mb29QwC49mrdPO-t0D6eLHT8ySF28sU_6r0G4RyY5-0wlh33jTj95hUX4ZXiWLmDDRJ138Bq_E27u" />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-3 w-56 bg-surface-container-lowest dark:bg-slate-800 rounded-xl shadow-lg border border-outline-variant/30 py-2 z-50 origin-top-right animate-in fade-in zoom-in-95 duration-200">
                                <div className="px-4 py-3 border-b border-outline-variant/20 mb-1">
                                    <p className="text-sm font-bold text-on-surface">My Account</p>
                                    <p className="text-xs text-on-surface-variant">Manage your profile</p>
                                </div>
                                <button className="w-full text-left px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container-low flex items-center gap-3 transition-colors">
                                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">account_circle</span>
                                    Account
                                </button>
                                <button className="w-full text-left px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container-low flex items-center gap-3 transition-colors">
                                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant">settings</span>
                                    Preferences
                                </button>
                                <div className="h-[1px] bg-outline-variant/20 my-1"></div>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('username');
                                        navigate('/login');
                                    }}
                                    className="w-full text-left px-4 py-2.5 text-sm text-error hover:bg-error/10 flex items-center gap-3 transition-colors font-bold mt-1"
                                >
                                    <span className="material-symbols-outlined text-[20px]">logout</span>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>
            {/* Main Content */}
            <main className="pl-64 pt-16 min-h-screen bg-surface">
                <div className="p-8 max-w-7xl mx-auto space-y-10">
                    {/* Hero Stats Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Total Balance Card */}
                        <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary-container p-8 rounded-full rounded-tr-none flex flex-col justify-between min-h-[240px] text-on-primary shadow-xl">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-label text-on-primary-container font-medium">Total Net Wealth</p>
                                    <h2 className="text-5xl font-headline font-extrabold tracking-tighter mt-1 tnum">$412,850.42</h2>
                                </div>
                                <span className="material-symbols-outlined text-4xl opacity-40">account_balance_wallet</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                                <span className="bg-tertiary-fixed-dim/20 text-tertiary-fixed px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
                                    <span className="material-symbols-outlined text-xs">trending_up</span>
                                    +12.4%
                                </span>
                                <span className="text-on-primary-container">vs last month</span>
                            </div>
                        </div>
                        {/* Monthly Spend Card */}
                        <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between shadow-sm border border-outline-variant/10">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-sm font-label text-on-surface-variant font-medium">Monthly Outflow</p>
                                    <span className="material-symbols-outlined text-error">arrow_outward</span>
                                </div>
                                <h3 className="text-3xl font-headline font-bold text-on-surface tnum">$4,281.00</h3>
                                <div className="w-full bg-surface-container-low h-1.5 rounded-full mt-6 overflow-hidden">
                                    <div className="bg-error h-full w-[82%] rounded-full"></div>
                                </div>
                                <p className="text-[10px] text-on-surface-variant mt-2 font-semibold">82% OF BUDGET CONSUMED</p>
                            </div>
                            <a className="text-primary font-bold text-xs flex items-center justify-end gap-1 hover:underline" href="#">
                                RECONCILE <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </a>
                        </div>
                    </section>
                    {/* Comparative Analytics Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Line Graph Section */}
                        <div className="lg:col-span-2 bg-surface-container-low rounded-xl p-8 relative overflow-hidden">
                            <div className="flex justify-between items-end mb-10">
                                <div>
                                    <h4 className="text-xl font-headline font-bold text-on-surface">Income vs Expenses</h4>
                                    <p className="text-sm text-on-surface-variant">Annual cash flow projection</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                                        <span className="text-xs font-semibold text-on-surface-variant">Income</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
                                        <span className="text-xs font-semibold text-on-surface-variant">Expenses</span>
                                    </div>
                                </div>
                            </div>
                            {/* SVG Chart Simulation */}
                            <div className="relative h-64 w-full">
                                <svg className="w-full h-full" viewBox="0 0 800 200">
                                    {/* Income Line */}
                                    <path d="M0,150 Q100,120 200,130 T400,80 T600,100 T800,40" fill="none" stroke="#003544" strokeLinecap="round" strokeWidth="4"></path>
                                    {/* Expenses Line */}
                                    <path d="M0,180 Q100,170 200,160 T400,140 T600,150 T800,120" fill="none" stroke="#84d5c8" strokeDasharray="8 4" strokeLinecap="round" strokeWidth="4"></path>
                                    {/* Data Points */}
                                    <circle cx="400" cy="80" fill="#003544" r="6"></circle>
                                    <circle cx="800" cy="40" fill="#003544" r="6"></circle>
                                </svg>
                                <div className="flex justify-between mt-4 text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">
                                    <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                                </div>
                            </div>
                        </div>
                        {/* Asset Allocation Card */}
                        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                            <h4 className="text-xl font-headline font-bold text-on-surface mb-6">Asset Distribution</h4>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">apartment</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Real Estate</p>
                                            <p className="text-xs text-on-surface-variant">3 Assets</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold tnum">$240.0k</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary">
                                            <span className="material-symbols-outlined">show_chart</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Equities</p>
                                            <p className="text-xs text-on-surface-variant">Index Funds</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold tnum">$152.4k</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                                            <span className="material-symbols-outlined">currency_exchange</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold">Liquid Cash</p>
                                            <p className="text-xs text-on-surface-variant">Checking</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold tnum">$20.4k</p>
                                </div>
                            </div>
                            <button className="w-full mt-10 py-3 rounded-full border border-outline-variant text-primary font-bold text-xs uppercase tracking-widest hover:bg-surface-container transition-colors">
                                Portfolio Rebalance
                            </button>
                        </div>
                    </section>
                    {/* Transactions Section */}
                    <section className="bg-surface-container-lowest rounded-xl p-10 shadow-sm">
                        <div className="flex justify-between items-center mb-10">
                            <h4 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">Recent Activity</h4>
                            <button className="text-sm font-bold text-primary flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-lg">filter_list</span>
                                Filter Ledger
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] border-b border-outline-variant/20">
                                    <tr>
                                        <th className="pb-4 font-semibold">Description &amp; Category</th>
                                        <th className="pb-4 font-semibold">Authorized By</th>
                                        <th className="pb-4 font-semibold">Date</th>
                                        <th className="pb-4 font-semibold text-right">Amount</th>
                                        <th className="pb-4 font-semibold text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/5">
                                    {/* Transaction 1 */}
                                    <tr className="group hover:bg-surface-container-highest/40 transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary">shopping_bag</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-on-surface">Harrods Knightsbridge</p>
                                                    <p className="text-xs text-on-surface-variant">Personal Luxuries</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-primary-fixed-dim text-[10px] flex items-center justify-center font-bold text-primary-container">JD</div>
                                                <span className="text-xs font-medium text-on-surface">Julian D.</span>
                                            </div>
                                        </td>
                                        <td className="py-5 text-xs text-on-surface-variant font-medium">Oct 24, 2023</td>
                                        <td className="py-5 text-right font-headline font-bold text-sm tnum">-$1,240.00</td>
                                        <td className="py-5 text-right">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-container/10 text-on-tertiary-container">
                                                CLEARED
                                            </span>
                                        </td>
                                    </tr>
                                    {/* Transaction 2 */}
                                    <tr className="group hover:bg-surface-container-highest/40 transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-primary">restaurant</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-on-surface">The Delaunay</p>
                                                    <p className="text-xs text-on-surface-variant">Dining &amp; Entertaining</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-2">
                                                <img className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7AnS8XrhnxGyQ4Acaf6ch_XnIM63SXl-GEJx_8Prcp1swDy23uVKLOCb6vTyQwp1av-RZGVKS2oWvd3olCeCKrHmLDs-bDP2JpS10dAlpUJTuBkqyhXjgmeUHa51wW9NJLTAc7qM5nf9M9EY_7xG_KdW_fXoGMyITT9XyJ5per7MjCw8zKWZgVUcN-J6wiB5GpXhAEcbngLBbmO36uusL9wx4-Xk7c3zgbQrMwD6eYcxBbnsGGUdaSTeW_0rEoq9U8wt36GRYICHW" alt="user photo" />
                                                <span className="text-xs font-medium text-on-surface">Elena R.</span>
                                            </div>
                                        </td>
                                        <td className="py-5 text-xs text-on-surface-variant font-medium">Oct 22, 2023</td>
                                        <td className="py-5 text-right font-headline font-bold text-sm tnum">-$315.40</td>
                                        <td className="py-5 text-right">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-container/10 text-on-tertiary-container">
                                                CLEARED
                                            </span>
                                        </td>
                                    </tr>
                                    {/* Transaction 3 */}
                                    <tr className="group hover:bg-surface-container-highest/40 transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-tertiary">payments</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-on-surface">Monthly Dividend Yield</p>
                                                    <p className="text-xs text-on-surface-variant">Investment Income</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-xs text-on-surface-variant">smart_toy</span>
                                                <span className="text-xs font-medium text-on-surface">Auto-Pilot</span>
                                            </div>
                                        </td>
                                        <td className="py-5 text-xs text-on-surface-variant font-medium">Oct 20, 2023</td>
                                        <td className="py-5 text-right font-headline font-bold text-sm text-tertiary tnum">+$2,840.12</td>
                                        <td className="py-5 text-right">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                                                PENDING
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <button className="text-xs font-bold text-on-surface-variant/60 tracking-widest uppercase hover:text-primary transition-colors">
                                Show Full Transaction History (281)
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
