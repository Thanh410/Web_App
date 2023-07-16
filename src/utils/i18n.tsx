import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        navbar: {
          home: "Home",
          portfolio: "Portfolio",
          blog: "Blog",
          contact: "Contact",
          about: "About",
          dashboard: "Dashboard",
          logout: "Logout",
          login: "Login",
        },
      },
      vi: {
        navbar: {
          home: "Trang chủ",
          portfolio: "Sản phẩm",
          blog: "Tin tức",
          contact: "Liên hệ",
          about: "Giới thiệu chung",
          dashboard: "Bảng điều khiển",
          logout: "Đăng xuất",
          login: "Đăng nhập",
        },
      },
    },
    lng: "vi",
    fallbackLng: "vi",
    ns: ["navbar"],
    interpolation: {
      escapeValue: false,
    },
  });
