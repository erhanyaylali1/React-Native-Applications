module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [["import", { "libraryName": ["antd-mobile-rn", "zarm"] }]],
        presets: ['module:metro-react-native-babel-preset'],
    };
};
