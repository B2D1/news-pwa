import request from '../helpers/request';

const GET_CATEGORY_NEWS = 'getCategoryNews';
const GET_NEWS_DETAIL = 'getNewsDetail';

export const state = () => ({
    news: [],
    detail: {},
});

export const mutations = {
    [GET_CATEGORY_NEWS](state, news) {
        state.news = news;
    },
    [GET_NEWS_DETAIL](state, detail) {
        state.detail = detail;
    },
};

export const actions = {
    async getCategoryNews({ commit }, id) {
        try {
            let url = `/news?categoryId=${id}`;
            let result = await request.get(url);

            let news = result.data.data.news;

            commit(GET_CATEGORY_NEWS, news);
        } catch (e) {}
    },
    async getNewsDetail({ commit }, id) {
        try {
            let url = `/news?newsId=${id}`;
            let result = await request.get(url);

            let detail = result.data.data;

            commit(GET_NEWS_DETAIL, detail);
        } catch (e) {}
    },
};
