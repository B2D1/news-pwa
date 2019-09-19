/**
 * @file appShell/appSidebar module
 * @author lavas
 */

export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';

export const state = () => {
    return {
        show: false, // 是否显示sidebar

        // 头部条的相关配置
        title: {
            imageLeft: '',
            altLeft: '',
            iconLeft: 'home',
            text: '主页',
            imageRight: '',
            altRight: '',
            iconRight: '',
        },

        // user: {
        //     name: 'Lavas',
        //     email: 'lavas@baidu.com',
        //     location: 'Shanghai'
        // },

        // 分块组
        blocks: [
            {
                // 子列表1
                sublistTitle: '选择你喜欢的新闻板块',
                list: [
                    {
                        text: '互联网',
                        route: '/category/5d7f5362ce9bb512702ea95d',
                    },
                    {
                        text: '国内',
                        route: '/category/5d7f5339ce9bb512702ea957',
                    },
                    {
                        text: '国际',
                        route: '/category/5d7f5348ce9bb512702ea958',
                    },
                    {
                        text: '军事',
                        route: '/category/5d7f534dce9bb512702ea959',
                    },
                    {
                        text: '财经',
                        route: '/category/5d7f5352ce9bb512702ea95a',
                    },
                    {
                        text: '娱乐',
                        route: '/category/5d7f5357ce9bb512702ea95b',
                    },
                    {
                        text: '体育',
                        route: '/category/5d7f535dce9bb512702ea95c',
                    },
                    {
                        text: '科技',
                        route: '/category/5d7f5366ce9bb512702ea95e',
                    },
                    {
                        text: '游戏',
                        route: '/category/5d7f536bce9bb512702ea95f',
                    },
                ],
            },
        ],
    };
};

export const mutations = {
    [SET_SIDEBAR_VISIBILITY](state, sidebarVisibility) {
        state.show = sidebarVisibility;
    },
};

export const actions = {
    /**
     * 展示侧边栏
     *
     * @param {Function} commit commit
     */
    showSidebar({ commit }) {
        commit(SET_SIDEBAR_VISIBILITY, true);
    },

    /**
     * 隐藏侧边栏
     *
     * @param {Function} commit commit
     */
    hideSidebar({ commit }) {
        commit(SET_SIDEBAR_VISIBILITY, false);
    },
};
