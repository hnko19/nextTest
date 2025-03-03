"use client";
import { useEffect, useState, useMemo } from "react";
import { apiUrl, imageServerUrl } from "@/helpers/config";
import { INews } from "@/Interfaces/News";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
export default function Page(props:any) {
 


  // let newsId = props.searchParams?.newsId;
  let searchParams = useSearchParams();
  const newsId = searchParams.get("newsId");
  const locale = useLocale(); // إذا كنت تستخدم next-intl
  const t = useTranslations("News");
  const [news, setNews] = useState<INews[]>([]);
  const [selectedNews, setSelectedNews] = useState<INews | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ جلب الأخبار مرة واحدة عند تحميل الصفحة
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // const response = await fetch(`${apiUrl}news?limit=6`, { cache: "no-store" });
        const response = await fetch(
          `${apiUrl}/news`
        );
        const jsonData = await response.json();
        if (jsonData.data && jsonData.data.length > 0) {
          setNews(jsonData.data);
          // ✅ إذا كان هناك newsId، نقوم بالبحث عن الخبر المطابق
          if (newsId) {
            const selectedNews = jsonData.data.find((n:any) => n.Id === parseInt(newsId)); // تأكد من مطابقة النوع
            if (selectedNews) {
              setSelectedNews(selectedNews); // عرض الخبر الذي يتطابق مع newsId
            } else {
              console.log("❌ لم يتم العثور على الخبر المحدد");
              setSelectedNews(jsonData.data[0]); // عرض أول خبر افتراضيًا
            }
          } else {
            // ✅ إذا لم يكن هناك newsId، نعرض أول خبر افتراضيًا
            setSelectedNews(jsonData.data[0]);
          }
        }
      } catch (error) {
        console.error("❌ خطأ في جلب الأخبار:", error);
      }
    };

    fetchNews();
  }, [newsId]);

  // ✅ تصفية الأخبار عند البحث باستخدام useMemo لتحسين الأداء
  const filteredNews = useMemo(() => {
    return news.filter(
      (item) =>
       (locale == "ar" ? item.Description.ar?.toLowerCase().includes(searchTerm.toLowerCase())
      :
      item.Description.en?.toLowerCase().includes(searchTerm.toLowerCase())
    ) // ✅ البحث حسب اللغة المختارة
    );
  }, [news, searchTerm, locale]); // ✅ إضافة `locale` إلى قائمة التبعيات

  // ✅ تحسين دالة جلب خبر محدد
  const handleSelectNews = async (newsId: number) => {
    try {
      const response = await fetch(`${apiUrl}news/${newsId}`, {
        cache: "no-store",
      });
      const jsonData = await response.json();

      if (jsonData.data) {
        setSelectedNews(
          Array.isArray(jsonData.data) ? jsonData.data[0] : jsonData.data
        );
      }
    } catch (error) {
      console.error("❌ خطأ في جلب الخبر المحدد:", error);
    }
  };

  // ✅ تحسين عرض التاريخ
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "تاريخ غير متاح";
    return new Intl.DateTimeFormat("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="bg-gray-100 bg-fixed py-5">
      <div className="container mx-auto">
        <section>
          <div className="sm:grid grid-cols-5 px-4 py-6 space-y-6 sm:space-y-0 sm:gap-4 rounded-lg">
            {/* ✅ صندوق البحث */}
            <div className="col-span-2">
              <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center">
                <input
                  type="text"
                  placeholder={t("serach")}
                  className="bg-gray-100 rounded-md outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </div>

              {/* ✅ قائمة الأخبار */}
              <div className="bg-white rounded-md">
                <div className="bg-white rounded-md list-none text-center">
                  {filteredNews.length > 0 ? (
                    filteredNews.map((data: INews) => (
                      <div
                        key={data.Id}
                        className="relative mt-6 sm:grid grid-cols-3 w-fit rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
                      >
                        <div className="col-span-1 p-2">
                          <Image
                            src={
                              data.CoverImage
                                ? imageServerUrl + data.CoverImage
                                : "/images/default-news.jpg"
                            }
                            alt="خبر"
                            width={200}
                            height={150}
                            priority
                          />
                        </div>
                        <div className="col-span-2 p-2 text-start relative">
                          <h1 className="block text-inherit">
                            {locale == "ar" ? data.Title.ar : data.Title.en}
                          </h1>
                          <button
                            onClick={() => handleSelectNews(data.Id)}
                            className="absolute text-orange-500 bottom-2 left-3"
                          >
                            {t("readMore")}
                            {locale == "ar" ? <i className="fa fa-arrow-left"></i> :<i className="fa fa-arrow-right"></i> }
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 p-4"> {t("nowNews")} </p>
                  )}
                </div>
              </div>
            </div>

            {/* ✅ قسم الخبر الرئيسي */}
            <div className="col-span-3 rounded-md flex items-center relative">
              {selectedNews ? (
                <div className="ml-20 w-full">
                  <div className="relative">
                    <Image
                      src={
                        selectedNews.CoverImage
                          ? imageServerUrl + selectedNews.CoverImage
                          : "/images/default-news.jpg"
                      }
                      alt="صورة الخبر الرئيسي"
                      width={600}
                      height={400}
                      priority
                    />
                    <span className="absolute -bottom-0 right-0 -translate-x-1/2 translate-y-1/2 py-1 px-5 bg-orange-500 text-white">
                      {formatDate(selectedNews.CreationDate ?? "")}
                    </span>
                  </div>
                  <h1 className="text-xl font-bold mt-4">
                    {locale == "ar"
                      ? selectedNews.Title.ar
                      : selectedNews.Title.en}
                  </h1>
                  <p className="mt-4 font-thin tracking-wider leading-7">
                    {locale == "ar"
                      ? selectedNews.Description.ar
                      : selectedNews.Description.en}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 p-4">جاري تحميل الخبر...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
