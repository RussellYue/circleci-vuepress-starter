module.exports = {
    base: "/computer-science-blog/",
    title: "Frontend Study Notes",
    // future work
    // locales: {
    //     "/": {
    //         lang: "en-US",
    //         title: "Frontend Study Notes",
    //         description: ""
    //     },
    //     "/zh/": {
    //         lang: "zh-CN",
    //         title: "Frontend Study Notes",
    //         description: ""
    //     }
    // },
    themeConfig: {
        // repo: "russellyue/computer-science-blog",
        // editLinks: true,
        docsDir: "docs",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
            {
                text: "about me",
                link: "https://russellyue.github.io"
            }
        ],
        sidebar: {
            "/vuepress/": vuepressSidebarConfig("Vuepress")
        }
        // future work
        // locales: {
        //     "/": {
        //         label: "English",
        //         selectText: "Languages",
        //         editLinkText: "Edit this page on GitHub",
        //         lastUpdated: "Last Updated",
        //         nav: [
        //             {
        //                 text: "about me",
        //                 link: "https://russellyue.github.io"
        //             }
        //         ],
        //         sidebar: {
        //             "/vuepress/": vuepressSidebarConfig("Vuepress")
        //         }
        //     },
        //     "/zh/": {
        //         label: "简体中文",
        //         selectText: "选择语言",
        //         editLinkText: "在 GitHub 上编辑此页",
        //         lastUpdated: "上次更新",
        //         nav: [
        //             {
        //                 text: "关于我",
        //                 link: "https://russellyue.github.io"
        //             }
        //         ],
        //         sidebar: {
        //             "/zh/vuepress/": vuepressSidebarConfig("Vuepress")
        //         }
        //     }
        // }
    }
};

function vuepressSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: ["", "get-start"]
        }
    ];
}
