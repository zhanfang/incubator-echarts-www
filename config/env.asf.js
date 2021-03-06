const path = require('path');
const config = require('./common');

config.host = 'https://echarts.apache.org';

config.cdnPayRootMap = {
    // Expensive!!! use it carefully.
    zh: 'https://echarts-www.cdn.bcebos.com', // origin: 'https://echarts-www.bj.bcebos.com'
    en: 'https://echarts.apache.org'
};
config.cdnFreeRootMap = {
    // 'echarts.cdn.apache.org' have been configured for zh (?)
    zh: 'https://echarts.cdn.apache.org',
    en: 'https://echarts.apache.org'
};
config.galleryPath = 'https://www.echartsjs.com/gallery/';
config.blogPath = 'https://efe.baidu.com/tags/ECharts/';
config.releaseDestDir = path.resolve(__dirname, '../../incubator-echarts-website');

module.exports = config;
