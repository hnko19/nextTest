"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

export default function Navbar({locale} : {locale:string}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const t  = useTranslations("Navbar"); // استدعاء الدالة للترجمة

    let pathName = usePathname();

    let Links = [
      {path: `/${locale}/Airports`, NavLink: t("airports")},
      {path: `/${locale}/News`, NavLink: t("news")},
      {path: `/${locale}/Projects`, NavLink: t("projects")},
      {path: `/${locale}/Tenders`, NavLink: t("tenders")},
      {path: `/${locale}/Jobs`, NavLink: t("jobs")},
    ];

    return (
      <div className="sticky top-0 z-50" style={{ boxShadow: '0px 0px 5px #1e3ea2' }}>
        <div className="antialiased bg-gray-100 dark:bg-gray-900">
          <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-4">
                <Link href={"/"} className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
                  <Image className="hidden md:inline" src="/images/LongLogo.png" alt="SAC LTD. Logo" width={250} height={60} />
                  <Image className="md:hidden" src="/images/ShortLogo.png" alt="SAC LTD. Logo" width={60} height={60} />
                </Link>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setIsOpen(!isOpen)}>
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                    {isOpen ? (
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    )}
                  </svg>
                </button>
              </div>
              <nav className={`${isOpen ? "flex" : "hidden"} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                {Links.map((link, index) => (
                  <Link key={index} href={link.path} className={`${pathName === link.path ? "active" : ""} px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-white hover:bg-blue-600 focus:text-white focus:bg-blue-600 focus:outline-none focus:shadow-outline`}>
                    {link.NavLink}
                  </Link>
                ))}
                
                <div className="relative" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <button className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark:bg-transparent dark:focus:text-white dark:hover:text-white dark:focus:bg-gray-600 dark:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                    <span>{t("more")}</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}></svg>
                  </button>
                  
                  <div className={`absolute rtl:left-0 ltr:right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right ${isDropdownOpen ? "block" : "hidden"}`}>
                    <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark:bg-gray-700">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a className="flex items-start rounded-lg bg-transparent p-2 dark:hover:bg-gray-600 dark:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                          <div className="bg-teal-500 text-white rounded-lg p-3">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="md:h-6 md:w-6 h-4 w-4">
                              <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold">appearance</p>
                            <p className="text-sm">easy_customization</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                </div>
                    <LocaleSwitcher />
              </nav>
            </div>
          </div>
        </div>
      </div>
    
  );
}
