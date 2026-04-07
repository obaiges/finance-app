import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication, redirect to dashboard
        navigate('/dashboard');
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen flex items-center justify-center p-6 w-full">
            <main className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                {/* Branding Side */}
                <section className="hidden md:flex flex-col justify-between p-12 signature-gradient text-on-primary relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-12">
                            <span className="material-symbols-outlined text-primary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            <h1 className="font-headline font-extrabold text-2xl tracking-tight">Financial Atelier</h1>
                        </div>
                        <div className="mt-20">
                            <h2 className="font-headline text-4xl font-extrabold leading-tight mb-4">Master your wealth with architectural precision.</h2>
                            <p className="text-on-primary-container text-lg max-w-md">Experience the premier ledger designed for high-fidelity financial management and deep wealth insights.</p>
                        </div>
                    </div>
                    <div className="relative z-10 flex gap-4 mt-auto">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <span className="text-xs font-label uppercase tracking-widest text-primary-fixed mb-1 block">Security Rating</span>
                            <span className="text-xl font-headline font-bold">AES-256</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <span className="text-xs font-label uppercase tracking-widest text-primary-fixed mb-1 block">Cloud Sync</span>
                            <span className="text-xl font-headline font-bold">Encrypted</span>
                        </div>
                    </div>
                    {/* Decorative background pattern/image */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <img className="w-full h-full object-cover" data-alt="Abstract architectural lines and geometric patterns with deep blue and teal lighting, professional financial aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJRbkdgMcR9aVGhiImSh3HAs9bUwyrnCFabT5MaztXweZEYTBdRRObHBMeLKlXbxTdGZOBjNS0rJGuhL6qCwCRiC61zaLvD7LYF5WuRKZ3ZMPIDzRH_Yw62LBL4KQrKhhjcAPO85_ymnjPqJpX__xS4chIAI5No4s-8AhlSuDDQD334aA-B8aoYlBhlC_g7IbvjsUA_u4Rn6bGbeePUBKsBMaZwTJ0ie-z3ojMyhZ-HsblOkIU9SSCiAuu-S0XbFRpKhHpKC3vdlK2" alt="Background pattern" />
                    </div>
                </section>
                {/* Login Form Side */}
                <section className="p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
                    <div className="max-w-md w-full mx-auto">
                        <div className="md:hidden flex items-center gap-2 mb-8">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                            <span className="font-headline font-extrabold text-xl text-primary">Financial Atelier</span>
                        </div>
                        <header className="mb-10">
                            <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Welcome Back</h3>
                            <p className="text-on-surface-variant">Please enter your credentials to access your vaults.</p>
                        </header>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div className="space-y-1.5 text-left">
                                <label className="block text-sm font-label font-semibold text-on-surface-variant ml-1" htmlFor="email">Work Email</label>
                                <div className="relative">
                                    <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-on-surface placeholder:text-outline transition-all duration-200" id="email" placeholder="name@company.com" type="email" />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div className="space-y-1.5 text-left">
                                <div className="flex justify-between items-center px-1">
                                    <label className="block text-sm font-label font-semibold text-on-surface-variant" htmlFor="password">Security Key</label>
                                    <a className="text-xs font-semibold text-primary hover:text-primary-container transition-colors" href="#">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg text-on-surface placeholder:text-outline transition-all duration-200" id="password" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                            {/* Remember Me */}
                            <div className="flex items-center px-1">
                                <input className="w-4 h-4 rounded text-primary focus:ring-primary-container bg-surface-container-low border-outline-variant" id="remember" type="checkbox" />
                                <label className="ml-2 text-sm text-on-surface-variant" htmlFor="remember">Remember this device for 30 days</label>
                            </div>
                            {/* CTA Button */}
                            <button className="w-full signature-gradient text-on-primary py-4 rounded-full font-headline font-bold text-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all duration-200 mt-4" type="submit">
                                Sign In
                            </button>
                        </form>
                        {/* Alternative Sign In */}
                        <div className="mt-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-surface-variant"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-widest">
                                <span className="bg-surface-container-lowest px-4 text-on-surface-variant font-label">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container-low text-on-surface font-semibold hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-lg">fingerprint</span>
                                Biometrics
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-container-low text-on-surface font-semibold hover:bg-surface-container-high transition-colors">
                                <span className="material-symbols-outlined text-lg">key</span>
                                SSO
                            </button>
                        </div>
                        {/* Sign Up Link */}
                        <footer className="mt-12 text-center">
                            <p className="text-on-surface-variant text-sm">
                                Don't have an account?
                                <a className="text-primary font-bold hover:underline underline-offset-4 ml-1" href="#">Request Access / Sign up</a>
                            </p>
                        </footer>
                    </div>
                </section>
            </main>
            {/* Support Link Overlay */}
            <div className="fixed bottom-6 right-6 flex items-center gap-4 text-xs font-label text-on-surface-variant">
                <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
            </div>
        </div>
    );
};

export default Login;
