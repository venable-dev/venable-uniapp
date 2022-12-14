# VEnable uniapp

<p align='center'>
  <img src='https://raw.githubusercontent.com/venable-team/venable-uniapp/main/src/static/images/logo.png' alt='venable-uniapp' width='120'/>
</p>

<h1 align="center">VEnable uniapp</h1>


<p align="center">
๐A template for uniapp with vue3.x and TypeScript.
</p>

<p align="center">
  <a href="https://venable-team.github.io/venable-uniapp">Live Demo</a>
</a>

<p align="center">
  ๐งWork in progress๐ง
</a>

## Features

- โก๏ธ [Vite3](https://cn.vitejs.dev/), [Vue3](https://cn.vuejs.org/), [pnpm](https://pnpm.io/)

- ๐ฆ Components auto importing

- ๐ [State Management via Pinia](https://pinia.vuejs.org/)

- ๐จ [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- ๐ผ๏ธ [vk-uview-ui](https://vkuviewdoc.fsq.pub/) - a UI library for uniapp based on Vue3.x

- ๐ [ucharts](https://www.ucharts.cn/) - a chart library for uniapp

- ๐ [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- ๐ฅ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- ๐ฅ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- ๐ฆพ TypeScript, of course

- ๐ [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) + [EditorConfig](https://editorconfig.org/)

## Try it now!

> VEnable requires Node >=14.18

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit venable-team/venable-uniapp my-app
cd my-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Development

Just run and visit http://localhost:5173

```bash
pnpm dev:h5
```

### Build

To build the App, run

```bash
pnpm build:h5
```

And you will see the generated file in `dist` that ready to be served.
