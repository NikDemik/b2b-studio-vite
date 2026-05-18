# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## CookieConsentBanner

`src/components/agrements/CookieConsentBanner.jsx` показывает баннер согласия на cookie, сохраняет выбор пользователя в `localStorage` и отправляет запись согласия в Yandex Cloud Function. URL функции задаётся через `VITE_YANDEX_CONSENT_FUNCTION_URL` в `.env` или через `window.CONFIG.YANDEX_CONSENT_FUNCTION`.

В футере есть кнопка «Изменить настройки cookie» с `id="cookie-reset-btn"`. Она повторно открывает окно настроек cookie через `CookieConsentBanner`.
