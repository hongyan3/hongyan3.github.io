export default {
  '/': sidebarDefault(),
  '/program/': sidebarProgram(),
  '/interview/': sidebarInterview(),
  '/notes/': sidebarNotes(),
}
// 右侧导航栏

function sidebarNotes() {
  return [
    {
      text: '📔 前端设计模式',
      collapsed: false,
      items: [
        { text: '导读', link: '/patterns/guide/' },
        { text: '单例模式', link: '/patterns/singleton-pattern/' },
        { text: '代理模式', link: '/patterns/proxy-pattern/' },
        { text: '提供者模式', link: '/patterns/provider-pattern/' },
        { text: '原型模式', link: '/patterns/prototype-pattern/' },
        { text: '容器/演示模式', link: '/patterns/container-presentational-pattern/' },
        { text: '观察者模式', link: '/patterns/observer-pattern/' },
        { text: '模块模式', link: '/patterns/module-pattern/' },
        { text: '混合模式', link: '/patterns/mixin-pattern/' },
        { text: '中介/中间件模式', link: '/patterns/middleware-pattern/' },
        { text: '高阶组件模式', link: '/patterns/hoc-pattern/' },
      ],
    },
  ]
}

function sidebarDefault() {
  return [
    {
      text: '开始阅读',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
        { text: '学习圈子', link: '/zsxq' },
        { text: '资源导航', link: '/favorites' },
        { text: '编程学习', link: '/program/' },
        { text: 'Arc 激活码获取', link: '/arc' },
        { text: '2022 年终总结', link: '/2022' },
        { text: '关于 ChoDocs', link: '/chodocs' },
        { text: '参与贡献指南', link: '/contributing' },
      ],
    },
    {
      text: '🍎 Next.js 实战',
      collapsed: false,
      items: [
        { text: '添加 sitemap', link: '/nextjs/sitemap/' },
      ],
    },
    {
      text: '🍏 Vue.js 实战',
      collapsed: false,
      items: [
        { text: '基于 Vue3 后台管理系统', link: '/vuejs/vue3-management-system/' },
      ],
    },
    {
      text: '📘 TS 学习',
      collapsed: false,
      items: [
        { text: '导读', link: '/ts/ch' },
        { text: '环境配置', link: '/ts/ch0' },
        { text: '基础操作', link: '/ts/ch1' },
        { text: '工具类', link: '/ts/ch2' },
        { text: '函数系统', link: '/ts/ch3' },
        { text: '泛型', link: '/ts/ch4' },
      ],
    },
    {
      text: '📝 备忘录',
      collapsed: false,
      items: [{ text: 'Git 命令', link: '/memo/git-command/' }],
    },
  ]
}
function sidebarProgram() {
  return [
    {
      text: '💻 编程学习',
      items: [
        { text: '介绍', link: '/program/' },
        {
          text: '编程实战',
          items: [
            { text: '发布 npm 包', link: '/program/npm-package/' },
            { text: 'tRPC 基础篇', link: '/program/trpc/' },
          ],
        },
        {
          text: 'VitePress 配置',
          items: [
            {
              text: '给 VitePress 添加 algolia 搜索',
              link: '/program/vitepress-algolia/',
            },
            {
              text: '接上 algolia 搜索（补充）',
              link: '/program/vitepress-algolia-plus/',
            },
            {
              text: '接上 algolia 搜索（解决）',
              link: '/program/vitepress-algolia-solved/',
            },
            {
              text: '给 VitePress 添加本地搜索功能',
              link: '/program/vitepress-local-search/',
            },
            {
              text: 'VitePress 插件合集（beta）',
              link: '/program/vitepress-plugin/',
            },
          ],
        },
      ],
    },
  ]
}

function sidebarInterview() {
  return [
    {
      items: [{ text: '介绍', link: '/interview/' }],
    },
    {
      text: '模拟面试',
      collapsed: false,
      items: [
        { text: '介绍', link: '/interview/interviewer/' },
        { text: '模拟面试 01', link: '/interview/interviewer/01' },
        { text: '模拟面试 02', link: '/interview/interviewer/02' },
        { text: '模拟面试 03', link: '/interview/interviewer/03' },
      ],
    },
    {
      text: '春招实习',
      collapsed: false,
      items: [
        {
          text: '询问面试官的问题',
          link: '/interview/spring-internship/interviewer/',
        },
        {
          text: '腾讯一面',
          link: '/interview/spring-internship/tencent-imweb/',
        },
        {
          text: '字节一面准备',
          link: '/interview/spring-internship/bytedance-preparation/',
        },
        { text: '字节一面', link: '/interview/spring-internship/bytedance1/' },
        {
          text: '深信服-星耀实习',
          link: '/interview/spring-internship/sangfor/',
        },
        { text: '恒生电子面试', link: '/interview/spring-internship/hundsun/' },
        {
          text: '腾讯云 COS 一面',
          link: '/interview/spring-internship/tencent-cos/',
        },
        { text: '春招知识整理', link: '/interview/spring-internship/summary/' },
      ],
    },
    {
      text: '2023 面试合集',
      collapsed: false,
      items: [{ text: 'isolcat 三月实习', link: '/interview/isolcat/' },
        { text: 'HearLing 六月社招', link: '/interview/2023/hearling' }],
    },
    {
      text: 'React',
      collapsed: false,
      items: [{ text: '模拟面试', link: '/interview/react-summary/' }],
    },
    {
      text: 'Vue',
      collapsed: false,
      items: [{ text: '模拟面试', link: '/interview/vue/' }],
    },
    {
      text: '前端基础：js/html/css/ts',
      collapsed: false,
      items: [
        { text: 'JS 面试大全', link: '/interview/js/' },
        { text: 'JS 自测清单（一）', link: '/interview/js/test/1.md' },
        { text: 'JS 自测清单（二）', link: '/interview/js/test/2.md' },
        { text: 'JS 自测清单（三）', link: '/interview/js/test/3.md' },
        { text: 'CSS 面试', link: '/interview/js/css' },
        { text: 'HTML 面试', link: '/interview/js/html' },
        { text: 'TS 面试', link: '/interview/js/ts' },
      ],
    },
    {
      text: '操作系统/网络/浏览器',
      collapsed: false,
      items: [
        { text: '操作系统', link: '/interview/system/' },
        { text: '网络-TCP', link: '/interview/net/tcp/' },
        { text: '网络-HTTP', link: '/interview/net/http/' },
        { text: '网络-Websocket', link: '/interview/net/websocket/' },
        { text: '网络-跨域问题', link: '/interview/net/cors/' },
        {
          text: '浏览器-Session/Cookie/Token',
          link: '/interview/browser/cookie',
        },
        {
          text: '浏览器-事件循环',
          link: '/interview/browser/principle/eventLoop',
        },
        {
          text: '浏览器-输入URL到页面展示发生了什么',
          link: '/interview/browser/process/',
        },
        { text: '浏览器-缓存', link: '/interview/browser/cache' },
        { text: '浏览器-开发者工具', link: '/interview/browser/performance' },
        { text: '浏览器-安全', link: '/interview/browser/safety/' },
      ],
    },
  ]
}
