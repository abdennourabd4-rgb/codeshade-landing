import Link from 'next/link';

export default function SignupPage() {
    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl border border-gray-100">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-[#1E293B]">
                        إنشاء حساب جديد
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        لديك حساب بالفعل؟{' '}
                        <Link href="/login" className="font-medium text-[#3076DA] hover:text-blue-700">
                            تسجيل الدخول
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className="mb-4">
                            <label htmlFor="full-name" className="sr-only">
                                الاسم الكامل
                            </label>
                            <input
                                id="full-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#3076DA] focus:outline-none focus:ring-[#3076DA] sm:text-sm text-right"
                                placeholder="الاسم الكامل"
                                dir="rtl"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email-address" className="sr-only">
                                البريد الإلكتروني
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#3076DA] focus:outline-none focus:ring-[#3076DA] sm:text-sm text-right"
                                placeholder="البريد الإلكتروني"
                                dir="rtl"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="sr-only">
                                كلمة المرور
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#3076DA] focus:outline-none focus:ring-[#3076DA] sm:text-sm text-right"
                                placeholder="كلمة المرور"
                                dir="rtl"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">
                                رقم الهاتف
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="relative block w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#3076DA] focus:outline-none focus:ring-[#3076DA] sm:text-sm text-right"
                                placeholder="رقم الهاتف"
                                dir="rtl"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-xl bg-[#3076DA] px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#3076DA] focus:ring-offset-2 transition-all shadow-lg shadow-blue-500/30"
                        >
                            ابدأ تجربتك المجانية
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
