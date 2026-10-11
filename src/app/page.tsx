
const features = [
  {
    number: "01",
    title: "Работа с данными",
    description:
      "Инструменты для обработки таблиц, структурирования информации и автоматизации повторяющихся задач.",
    icon: "▦",
  },
  {
    number: "02",
    title: "Умные процессы",
    description:
      "Создавай удобные рабочие процессы и сокращай время на повседневные операции.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Всё в одном месте",
    description:
      "Персональное пространство для инструментов, настроек и управления подпиской.",
    icon: "◫",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc] text-[#172033]">
      <header className="border-b border-slate-200/80 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
              T
            </span>
            <span className="text-xl font-bold tracking-tight">
              Tablo<span className="text-blue-600">Pilot</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="hover:text-blue-600">
              Возможности
            </a>
            <a href="#pricing" className="hover:text-blue-600">
              Тарифы
            </a>
          </nav>

          <a
            href="#pricing"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Начать работу
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm text-blue-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Единая платформа автоматизации
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
              Меньше рутины.
              <span className="mt-2 block text-blue-600">
                Больше результата.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              TabloPilot — рабочее пространство для полезных инструментов,
              обработки данных и автоматизации повседневных задач.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#features"
                className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Изучить возможности →
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold transition hover:border-blue-300"
              >
                Посмотреть тарифы
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>✓ Удобный интерфейс</span>
              <span>✓ Для работы и бизнеса</span>
              <span>✓ Развитие по подписке</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40 md:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm text-slate-500">Рабочее пространство</p>
                <h2 className="mt-1 text-xl font-semibold">Обзор платформы</h2>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 text-xl text-blue-600">
                ✳
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm text-slate-500">Ваши инструменты</p>
                <p className="mt-3 text-3xl font-semibold">—</p>
                <p className="mt-2 text-xs text-slate-400">
                  Будут добавлены позже
                </p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-5">
                <p className="text-sm text-blue-700">Подписка</p>
                <p className="mt-3 text-2xl font-semibold">Free</p>
                <p className="mt-2 text-xs text-blue-600">
                  Демонстрационный экран
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-100 p-5">
              <p className="font-semibold">Ваше пространство</p>
              <div className="mt-4 space-y-3">
                {["Обработка данных", "Рабочие процессы", "Настройки аккаунта"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-semibold text-blue-600">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                      <span className="ml-auto text-slate-400">→</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Возможности платформы
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Инструменты, которые работают на тебя
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Создаём основу, которую можно постепенно расширять под реальные
            задачи пользователей.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-blue-600">{feature.icon}</span>
                  <span className="text-sm text-slate-400">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-slate-900 px-7 py-12 text-white md:px-12 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Подписка
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Платформа, которая растёт вместе с тобой
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-slate-300">
            Система тарифов, лимитов и платежей будет подключена после
            определения функций продукта и условий обслуживания.
          </p>
          <div className="mt-8 inline-flex rounded-xl border border-slate-700 px-5 py-3 text-sm text-slate-200">
            Тарифы скоро появятся
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 TabloPilot</p>
          <p>Рабочее пространство для автоматизации</p>
        </div>
      </footer>
    </main>
  );
}
