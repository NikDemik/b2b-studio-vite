# Этапы разработки

## 2026-05-18

- Исправлен `CookieConsentBanner`: удалён старый DOM-init, исправлены обработчики согласия, добавлена отправка выбора пользователя в Yandex Cloud Function.
- Добавлена поддержка URL функции через `VITE_YANDEX_CONSENT_FUNCTION_URL` и `window.CONFIG.YANDEX_CONSENT_FUNCTION`.
- В футер добавлена кнопка «Изменить настройки cookie» для повторного открытия настроек согласия.
