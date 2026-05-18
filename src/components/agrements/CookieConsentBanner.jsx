import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BANNER_VERSION = '1.0';
const STORAGE_KEY = 'cookie_consent_152fz';
const CONFIG = {
    YANDEX_CONSENT_FUNCTION: 'https://functions.yandexcloud.net/d4eh8i7aj7urkfb28s1r',
};

const DEFAULT_PREFERENCES = {
    necessary: true,
    functional: true,
    analytical: false,
    marketing: false,
};

const DECLINED_PREFERENCES = {
    necessary: true,
    functional: false,
    analytical: false,
    marketing: false,
};

const CATEGORIES = {
    necessary: {
        id: 'necessary',
        label: 'Необходимые',
        description: 'Обеспечивают работу сайта, сохраняют настройки. Нельзя отключить.',
        required: true,
        storage: 'до закрытия браузера',
    },
    functional: {
        id: 'functional',
        label: 'Функциональные',
        description: 'Запоминают настройки пользователя (язык, регион).',
        required: false,
        storage: '12 месяцев',
    },
    analytical: {
        id: 'analytical',
        label: 'Аналитические',
        description:
            'Анализ посещаемости (например, Яндекс.Метрика). Помогают понять поведение пользователей.',
        required: false,
        storage: '24 месяца',
    },
    marketing: {
        id: 'marketing',
        label: 'Маркетинговые',
        description: 'Используются для рекламы и ремаркетинга.',
        required: false,
        storage: '90 дней',
    },
};

function getStoredConsent() {
    if (typeof window === 'undefined') return null;

    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null;
    }
}

function saveConsent(consent) {
    const record = {
        ...consent,
        timestamp: new Date().toISOString(),
        version: BANNER_VERSION,
    };

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
        // Если localStorage недоступен, баннер всё равно должен закрыться в текущей сессии.
    }

    return record;
}

function getYandexConsentFunctionUrl() {
    const envUrl = import.meta.env.VITE_YANDEX_CONSENT_FUNCTION_URL;
    const runtimeUrl =
        typeof CONFIG !== 'undefined' && CONFIG.YANDEX_CONSENT_FUNCTION
            ? CONFIG.YANDEX_CONSENT_FUNCTION
            : '';
    const funcUrl = envUrl || runtimeUrl || '';

    if (!funcUrl || funcUrl.includes('ВАШ-')) return '';
    return funcUrl;
}

async function getClientIP() {
    try {
        const r = await fetch('https://api.ipify.org?format=json');
        const d = await r.json();
        return d.ip || 'unknown';
    } catch {
        return 'unknown';
    }
}

async function sendConsentToYandex(consent) {
    if (typeof window === 'undefined') return;

    const funcUrl = getYandexConsentFunctionUrl();
    if (!funcUrl) return;

    try {
        const ip = await getClientIP();
        await fetch(funcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ip,
                url: window.location.href,
                domain: window.location.hostname,
                timestamp: consent.timestamp || new Date().toISOString(),
                action: consent.action || 'accept',
                version: consent.version,
                categories: consent.categories || {},

                // version: BANNER_VERSION,

                // consented: consent.consented,
                // action: consent.action,
                // categories: consent.categories,
                // timestamp: consent.timestamp,
                // url: window.location.href,
                // domain: window.location.hostname,
                // path: window.location.pathname,
                // referrer: document.referrer,
                // language: navigator.language,
                // userAgent: navigator.userAgent,
                // timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            }),
        });
    } catch (error) {
        console.warn('Consent log failed:', error);
    }
}

export function CookieConsentBanner() {
    const [visible, setVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);

    useEffect(() => {
        const consent = getStoredConsent();

        if (!consent) {
            setVisible(true);
            return;
        }

        setPreferences((current) => ({ ...current, ...consent.categories }));
    }, []);

    useEffect(() => {
        const openSettings = () => {
            const consent = getStoredConsent();
            setPreferences((current) => ({ ...current, ...consent?.categories }));
            setVisible(true);
            setShowSettings(true);
        };

        const resetButton = document.getElementById('cookie-reset-btn');
        window.addEventListener('cookie-consent:open', openSettings);
        resetButton?.addEventListener('click', openSettings);

        return () => {
            window.removeEventListener('cookie-consent:open', openSettings);
            resetButton?.removeEventListener('click', openSettings);
        };
    }, []);

    let ymLoaded = false;

    function loadYandexMetrika() {
        if (ymLoaded) return;
        ymLoaded = true;

        (function (m, e, t, r, i, k, a) {
            m[i] =
                m[i] ||
                function () {
                    (m[i].a = m[i].a || []).push(arguments);
                };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }
            ((k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a));
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

        ym(28974470, 'init', {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: false,
        });
    }

    const applyConsent = (categories, action, consented = true) => {
        const record = saveConsent({
            consented,
            action,
            categories: { ...categories, necessary: true },
        });

        void sendConsentToYandex(record);
        loadYandexMetrika();
        setVisible(false);
        setShowSettings(false);
    };

    const handleAcceptAll = () => {
        applyConsent(
            {
                necessary: true,
                functional: true,
                analytical: true,
                marketing: true,
            },
            'accept_all',
        );
    };

    const handleDecline = () => {
        applyConsent(DECLINED_PREFERENCES, 'decline', false);
    };

    const handleSavePreferences = () => {
        applyConsent(preferences, 'save_preferences');
    };

    if (!visible) return null;

    return (
        <>
            <div
                role="dialog"
                aria-label="Согласие на использование cookie"
                className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-700 shadow-2xl p-4 md:p-6"
            >
                <div className="max-w-4xl mx-auto">
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                        Мы используем файлы cookie и сервисы веб-аналитики (включая Яндекс.Метрику)
                        для улучшения работы сайта и анализа посещаемости. Продолжая использовать
                        сайт или нажимая «Принять», вы соглашаетесь с{' '}
                        <Link
                            to="/cookie-policy"
                            className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
                        >
                            Политикой использования файлов Cookie
                        </Link>
                        , и даете{' '}
                        <Link
                            to="/personal-data"
                            className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
                        >
                            Согласие на обработку персональных данных
                        </Link>
                        . Обратите внимание, что вы можете отозвать свое согласие в любое время. При
                        нажатии «Отклонить» данные не собираются. Подробнее в{' '}
                        <Link
                            to="/privacy-policy"
                            className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
                        >
                            Политике обработки персональных данных
                        </Link>
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={handleAcceptAll}
                            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Принять все
                        </button>
                        <button
                            type="button"
                            onClick={handleDecline}
                            className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-medium rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors"
                        >
                            Отклонить
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowSettings(true)}
                            className="px-4 py-2 border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                            Настроить cookie
                        </button>
                    </div>
                </div>
            </div>

            {showSettings && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
                    onClick={() => setShowSettings(false)}
                >
                    <div
                        role="dialog"
                        aria-label="Настройка cookie"
                        className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                            Настроить cookie
                        </h2>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                            Выберите категории cookie, которые разрешаете использовать. Подробности
                            - в{' '}
                            <Link
                                to="/cookie-policy"
                                className="text-blue-600 dark:text-blue-400 underline"
                            >
                                Политике cookie
                            </Link>
                            .
                        </p>
                        <div className="space-y-4 mb-6">
                            {Object.values(CATEGORIES).map((cat) => (
                                <div
                                    key={cat.id}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800"
                                >
                                    <input
                                        type="checkbox"
                                        id={cat.id}
                                        checked={preferences[cat.id]}
                                        disabled={cat.required}
                                        onChange={(event) =>
                                            setPreferences((current) => ({
                                                ...current,
                                                [cat.id]: event.target.checked,
                                            }))
                                        }
                                        className="mt-1"
                                    />
                                    <label
                                        htmlFor={cat.id}
                                        className="flex-1 text-sm cursor-pointer"
                                    >
                                        <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                            {cat.label}
                                            {cat.required && ' (всегда включены)'}
                                        </span>
                                        <p className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                                            {cat.description} Срок хранения: {cat.storage}.
                                        </p>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={handleSavePreferences}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                            >
                                Сохранить настройки
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowSettings(false)}
                                className="px-4 py-2 text-zinc-600 dark:text-zinc-400 text-sm hover:underline"
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
