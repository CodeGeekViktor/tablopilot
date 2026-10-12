
"use client";

import { useState, type ReactNode } from "react";

type Language = "ru" | "en";
type Section = "home" | "tables" | "documents" | "history" | "settings";

type DashboardShellProps = {
  displayName: string;
  email: string | null;
  children: ReactNode;
};

const translations = {
  ru: {
    workspace: "Рабочее пространство",
    home: "Главная",
    tables: "Таблицы",
    documents: "Документы",
    history: "История операций",
    settings: "Настройки",
    tools: "ИНСТРУМЕНТЫ",
    menu: "МЕНЮ",
    welcome: "Добро пожаловать",
    intro: "Работайте с таблицами, файлами и документами в одном месте.",
    availableTools: "Ваши инструменты",
    availableDescription: "Выберите инструмент, чтобы узнать о его возможностях.",
    excel: "Excel и CSV",
    excelDescription: "Сравнение таблиц, поиск совпадений и заполнение данных.",
    docs: "Работа с документами",
    docsDescription: "Инструменты для обработки и подготовки документов.",
    compare: "Сравнение файлов",
    compareDescription: "Поиск различий и совпадающих записей.",
    generation: "Создание документов",
    generationDescription: "Подготовка документов на основе исходных данных.",
    ready: "Интерфейс готовится",
    inDevelopment: "В разработке",
    comingSoon: "Скоро",
    historyTitle: "История операций",
    historyDescription: "Здесь будут отображаться ваши обработанные файлы и результаты.",
    noHistory: "Пока нет операций",
    noHistoryDescription: "Когда вы начнёте работать с инструментами, результаты появятся здесь.",
    settingsTitle: "Настройки",
    settingsDescription: "Управляйте отображением и настройками аккаунта.",
    language: "Язык интерфейса",
    profile: "Ваш аккаунт",
    accountDescription: "Данные текущего пользователя",
    accountSecurity: "Сессия подтверждена сервером Supabase.",
    signOut: "Выход из аккаунта",
    footer: "TabloPilot · Рабочее пространство",
    backHome: "На главную",
    sectionSoon: "Этот раздел появится в одном из следующих обновлений.",
  },
  en: {
    workspace: "Workspace",
    home: "Home",
    tables: "Tables",
    documents: "Documents",
    history: "Activity history",
    settings: "Settings",
    tools: "TOOLS",
    menu: "MENU",
    welcome: "Welcome",
    intro: "Work with spreadsheets, files, and documents in one place.",
    availableTools: "Your tools",
    availableDescription: "Choose a tool to explore its capabilities.",
    excel: "Excel & CSV",
    excelDescription: "Compare spreadsheets, find matches, and fill in data.",
    docs: "Document tools",
    docsDescription: "Tools for processing and preparing documents.",
    compare: "File comparison",
    compareDescription: "Find differences and matching records.",
    generation: "Document creation",
    generationDescription: "Create documents from your source data.",
    ready: "Interface coming soon",
    inDevelopment: "In development",
    comingSoon: "Coming soon",
    historyTitle: "Activity history",
    historyDescription: "Your processed files and results will appear here.",
    noHistory: "No activity yet",
    noHistoryDescription: "Your results will appear here when you start using the tools.",
    settingsTitle: "Settings",
    settingsDescription: "Manage your interface and account preferences.",
    language: "Interface language",
    profile: "Your account",
    accountDescription: "Current user details",
    accountSecurity: "Your session is verified by Supabase.",
    signOut: "Sign out",
    footer: "TabloPilot · Workspace",
    backHome: "Back to home",
    sectionSoon: "This section will be available in a future update.",
  },
} as const;

const navigation: { id: Section; icon: string; label: "home" | "tables" | "documents" | "history" | "settings" }[] = [
  { id: "home", icon: "⌂", label: "home" },
  { id: "tables", icon: "▦", label: "tables" },
  { id: "documents", icon: "▤", label: "documents" },
  { id: "history", icon: "◷", label: "history" },
  { id: "settings", icon: "⚙", label: "settings" },
];

export function DashboardShell({
  displayName,
  email,
  children,
}: DashboardShellProps) {
  const [language, setLanguage] = useState<Language>("ru");
  const [section, setSection] = useState<Section>("home");
  const t = translations[language];

  const tools = [
    {
      icon: "▦",
      title: t.excel,
      description: t.excelDescription,
      tag: t.inDevelopment,
    },
    {
      icon: "▤",
      title: t.docs,
      description: t.docsDescription,
      tag: t.inDevelopment,
    },
    {
      icon: "⇄",
      title: t.compare,
      description: t.compareDescription,
      tag: t.comingSoon,
    },
    {
      icon: "✧",
      title: t.generation,
      description: t.generationDescription,
      tag: t.comingSoon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-900 md:flex">
      <aside className="flex w-full shrink-0 flex-col border-b border-slate-200 bg-white md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <a href="/dashboard" className="flex items-center gap-3 px-6 py-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-sm shadow-blue-200">
            T
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight">
              Tablo<span className="text-blue-600">Pilot</span>
            </span>
            <span className="block text-xs text-slate-500">{t.workspace}</span>
          </span>
        </a>

        <div className="px-4 pb-3 pt-2">
          <p className="px-3 pb-2 text-[10px] font-bold tracking-[0.16em] text-slate-400">
            {t.menu}
          </p>
          <nav className="flex gap-1 overflow-x-auto md:flex-col">
            {navigation.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSection(item.id)}
                className={`flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                  section === item.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span className="w-5 text-center text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                {t[item.label]}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto hidden px-4 pb-5 pt-8 md:block">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600">
              ✧
            </div>
            <p className="text-sm font-semibold text-slate-800">TabloPilot</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{t.intro}</p>
          </div>
          <p className="px-2 pt-5 text-xs text-slate-400">{t.footer}</p>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:px-8">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              {displayName}
            </p>
            <p className="truncate text-xs text-slate-500">
              {email ?? "TabloPilot"}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setLanguage("ru")}
                aria-pressed={language === "ru"}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  language === "ru"
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                  language === "en"
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                EN
              </button>
            </div>
            <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 sm:flex">
              {displayName.trim().charAt(0).toUpperCase() || "T"}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
          {section === "home" && (
            <>
              <div className="mb-9">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-medium text-blue-700">
                  <span className="h-2 w-2 rounded-full bg-blue-600" />
                  {t.workspace}
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.welcome}, {displayName}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                  {t.intro}
                </p>
              </div>

              <div className="mb-4">
                <h2 className="text-lg font-semibold">{t.availableTools}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {t.availableDescription}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {tools.map((tool) => (
                  <button
                    key={tool.title}
                    type="button"
                    onClick={() =>
                      setSection(
                        tool.title === t.excel ? "tables" : "documents",
                      )
                    }
                    className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm shadow-slate-200/30 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700 transition group-hover:bg-blue-100">
                        {tool.icon}
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                        {tool.tag}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-900">
                      {tool.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {tool.description}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-blue-700">
                      {t.ready} →
                    </p>
                  </button>
                ))}
              </div>
            </>
          )}

          {section === "tables" && (
            <SectionPlaceholder
              title={t.excel}
              description={t.excelDescription}
              message={t.sectionSoon}
              onBack={() => setSection("home")}
              backLabel={t.backHome}
            />
          )}

          {section === "documents" && (
            <SectionPlaceholder
              title={t.documents}
              description={t.docsDescription}
              message={t.sectionSoon}
              onBack={() => setSection("home")}
              backLabel={t.backHome}
            />
          )}

          {section === "history" && (
            <SectionPlaceholder
              title={t.historyTitle}
              description={t.historyDescription}
              message={`${t.noHistory}. ${t.noHistoryDescription}`}
              onBack={() => setSection("home")}
              backLabel={t.backHome}
            />
          )}

          {section === "settings" && (
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight">
                {t.settingsTitle}
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                {t.settingsDescription}
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-semibold">{t.language}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {language === "ru"
                    ? "Выберите язык для интерфейса."
                    : "Choose the language for the interface."}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setLanguage("ru")}
                    className={`rounded-xl border px-4 py-2 text-sm font-medium ${
                      language === "ru"
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-600"
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`rounded-xl border px-4 py-2 text-sm font-medium ${
                      language === "en"
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-slate-200 text-slate-600"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-semibold">{t.profile}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {t.accountDescription}
                </p>
                <p className="mt-5 text-sm font-medium">{displayName}</p>
                {email && (
                  <p className="mt-1 text-sm text-slate-500">{email}</p>
                )}
                <p className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
                  {t.accountSecurity}
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="font-semibold">{t.signOut}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {language === "ru"
                    ? "Завершите текущий сеанс."
                    : "End your current session."}
                </p>
                <div className="mt-4">{children}</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SectionPlaceholder({
  title,
  description,
  message,
  onBack,
  backLabel,
}: {
  title: string;
  description: string;
  message: string;
  onBack: () => void;
  backLabel: string;
}) {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-700">
          ✧
        </div>
        <h1 className="mt-5 text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
        <div className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {message}
        </div>
        <button
          type="button"
          onClick={onBack}
          className="mt-6 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {backLabel}
        </button>
      </div>
    </div>
  );
}
