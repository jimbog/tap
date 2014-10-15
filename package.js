Package.describe({
  summary: "easy unified handling of user interactions such as mouse, touch and pointer events",
  version: "1.0.1",
  name: "jimbog:tap",
  git: "https://github.com/jimbog/tap.git",
});

Package.onUse(function (api) {
  api.addFiles(['tap.js'], 'client');
});
