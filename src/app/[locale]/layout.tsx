// "use client"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Locale, routing } from '@/i18n/routing';
import Navbar from './_Components/Navbar/Navbar';
import Footer from './_Components/Footer/Footer';
import AOSInitializer from './_Components/AOSInitializer/AOSInitializer';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const titles = {
  en: 'SAC.LDT',
  ar: 'شركة مطارات السودان المحدودة ',
};



export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // لا يمكن تحديده كـ `Locale` مباشرةً، لذا نتحقق منه لاحقًا
}) {
  // التأكد من أن `locale` موجود ضمن اللغات المدعومة
  if (!routing.locales.includes(params.locale as Locale)) {
    notFound(); // عرض صفحة 404 إذا كانت اللغة غير مدعومة
  }

  const locale = params?.locale as Locale; // تأكد من تحويله إلى `Locale`
  const messages = await getMessages({locale}); // جلب الرسائل الخاصة باللغة

    // // تفعيل AOS عند تحميل الصفحة
    // useEffect(() => {
    //   AOS.init({ duration: 900 });
    // }, []);

    // تحديد الاتجاه بناءً على اللغة
  const direction = ["ar"].includes(locale) ? "rtl" : "ltr";


 
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/images/ShortLogo.png" />
        <title>{titles[locale as keyof typeof titles]}</title>
      </head>
      <body dir={direction}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar locale={locale}/>
            <AOSInitializer />  
            {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

