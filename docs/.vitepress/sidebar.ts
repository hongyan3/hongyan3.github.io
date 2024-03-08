export default {
  '/': sidebarDefault(),
  '/interview/': sidebarInterview(),
}
// 右侧导航栏

function sidebarDefault() {
  return [
    {
      text: '开始阅读',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
      ],
    },
    {
      text: '面试专栏',
      collapsed: false,
      items: [
        { text: 'Java面试题', link: '/interview/Java面试笔记' },
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
        { text: '面试题', link: '/interview/Java面试笔记' },
        { text: '面试经验', link: '/zsxq' },
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
