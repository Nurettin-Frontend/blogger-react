import React from "react";
import Slider from "../components/blogs/Slider";
import Blogs from "../components/blogs/Blogs";
import { Helmet } from "react-helmet";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import style from "./Blogs.module.scss";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          blogs: "Blogss",
        },
      },
      ar: {
        translation: {
          blogs: "مقالات",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const BlogsPage = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ar");
    } else if (i18n.language === "ar") {
      i18n.changeLanguage("en");
    }
  };
  return (
    <React.Fragment>
      <div className={style.btn}>
        <button onClick={toggleLang}>EN / AR</button>
      </div>
      <Helmet>
        <title>{t("blogs")}</title>
        <meta name="title" content="Blogs" />
        <meta name="description" content="Description Blog Details" />
      </Helmet>
      <Slider />
      <Blogs />
    </React.Fragment>
  );
};

export default BlogsPage;
