import { version } from '../../package.json'

// base info
export const name = 'MyDcos'
export const site = 'https://hongyan3.github.io'
export const logo = 'https://chodocs.cn/chodocs-logo.svg'
export const keywords = '学习路线、面试手册、知识体系、编程学习、bilibili、vitepress、随笔、资源导航、React、Vue、Next.js、思维导图、coding、github'
export const description = ''

// social link
export const github = 'https://github.com/hongyan3/hongyan3.github.io'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
