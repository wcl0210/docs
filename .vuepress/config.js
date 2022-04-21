module.exports = {
  base: ".",
  // 将显示在导航栏上
  title: "适之",
  // 将配置到meta标签中
  description: "适之的博客",
  // favicon.ico
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  themeConfig: {
    // 最后更新时间
    lastUpdated: "上次更新时间",

    // 导航栏logo
    logo: "/assets/img/logo.png",
    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "about", link: "/about/" },
      { text: "External", link: "https://google.com" },
      // 导航下拉列表
      {
        text: "下拉列表",
        ariaLabel: "Language Menu",
        items: [
          { text: "列表内容1", link: "/language/" },
          { text: "列表内容2", link: "/language/" },
        ],
      },
    ],
    // 在全部页面中禁用导航栏
    // navbar: false,

    // 侧边栏
    sidebar: {
      "/css/": ["css1", "css2", "css3"],
      "/javascript/": ["javascript1", "javascript2", "javascript3"],
    },

    // 侧边栏分组
    // [
    //   "",
    //   "about",
    //   {
    //     title: "css", // 必要的
    //     path: "/css/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ["/css/css1", "/css/css2", "/css/css3"],
    //   },
    // ],

    // 在全部页面自动生成侧边栏
    // sidebar: "auto",
    // 在全部页面中禁用侧边栏
    // sidebar: false,
  },
};
