module.exports = function (api) {
  api.cache(true); // Enable Babel caching

  return {
    plugins: ["macros"],
  };
};
