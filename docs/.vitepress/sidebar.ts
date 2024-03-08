export default {
  '/': sidebarDefault(),
  '/interview': sidebarInterview(),
}
// 右侧导航栏

function sidebarDefault() {
  return [
    {
      text: '开始阅读',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
        { text: '学习圈子', link: '/zsxq' },
        { text: '资源导航', link: '/notes/java' },
        { text: '编程学习', link: '/program/' },
      ],
    },
    {
      text: 'Next.js 实战',
      collapsed: false,
      items: [
        { text: '添加 sitemap', link: '/nextjs/sitemap/' },
      ],
    },
  ]
}

function sidebarInterview() {
  return [
    {
      text: 'Java面试',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
        { text: '学习圈子', link: '/zsxq' },
      ],
    },
    {
      text: 'Go',
      collapsed: false,
      items: [
        { text: '添加 sitemap', link: '/nextjs/sitemap/' },
      ],
    },
  ]
}
