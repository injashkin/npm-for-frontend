# О проекте NpmForFrontend

NpmForFrontend -- это набор NPM модулей для создания статических сайтов. NpmForFrontend позволяет писать статьи на Markdown, создавать страницы с помощью шаблонизатора Pug, стилизовать сайт с помощью Sass, а в качестве языка программирования использовать JavaScript.

В составе NpmForFrontend используются самые популярные (за исключением MdPugToHtml) NPM пакеты:

- [BrowserSync](https://browsersync.io/) -- локальный сервер
- [Imagemin](https://github.com/imagemin/imagemin-cli) -- минификатор изображений
- [MdPugToHtml](https://www.npmjs.com/package/md-pug-to-html) -- пакетный конвертер
- [node-sass](https://github.com/sass/node-sass) -- препроцессор SASS
- [npm-run-all](https://github.com/mysticatea/npm-run-all) -- последовательный и параллельный запуск скриптов
- [PostCSS](https://www.npmjs.com/package/postcss) -- постпроцессор CSS
- [postcss-cli](https://github.com/postcss/postcss-cli) -- интерфейс командной строки для PostCSS
- [PostCSS Preset Env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env) -- плагин PostCSS для поддержки старых браузеров
- [Pug CLI](https://www.npmjs.com/package/pug-cli) -- интерфейс командной строки для шаблонизатора Pug
- [Rimraf](https://www.npmjs.com/package/rimraf) -- очистка каталогов
- [Rollup](https://www.npmjs.com/package/rollup) -- сборщик JavaScript файлов
- [svg-sprite-generator](https://www.npmjs.com/package/svg-sprite-generator) -- генератор SVG-спрайтов
- [SVGO](https://github.com/svg/svgo) -- минификатор SVG файлов

Вы можете прочитать статью [Настройка среды разработки с помощью NPM модулей и создание статического сайта](https://jinv.ru/Sozdanie-saytov/Nastrojka-NPM-dlya-staticheskogo-sajta/) о том, как этот набор модулей установить и настроить самому с нуля. Это позволит лучше понять, из чего состоит NpmForFrontend и какие функции выполняет каждый из входящих в него модулей. Если у вас нет времени, или вам это не интересно, то вы можете установить уже готовый и настроенный NpmForFrontend себе на компьютер и начать разрабатывать сайт. О том, как это сделать читайте ниже.

## Быстрый запуск

Чтобы использовать данный набор инструментов у вас на компьютере должен быть установлен [Node.js](https://nodejs.org/) и [NPM](https://npmjs.com/).

Клонируем проект к себе на компьютер

```
git clone https://github.com/injashkin/npm-for-frontend.git new-project-name
```

Заходим в каталог и устанавливаем проект

```
cd new-project-name
npm i
```

Запускаем проект и разрабатываем фронтенд

```
npm run dev
```

После разработки делаем продакшн версию сайта

```
npm run build
```

## Дальнейшее развитие NpmForFrontend

Данный проект только на начальной стадии своего развития. Поэтому он может не иметь нужного функционала или иметь ошибки. Если вы обнаружили ошибку или хотите предложить совет по развитию проекта, вы можете сообщить об этом в [Issues](https://github.com/injashkin/npm-for-frontend/issues).
