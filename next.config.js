module.exports = {
  output: "export",
  reactStrictMode: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  }
}
