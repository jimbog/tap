Package.describe({
  summary: "easy unified handling of user interactions such as mouse, touch and pointer events",
  version: "1.0.0",
  name: "jimbog:tap",
  git: "https://github.com/jimbog/tap.git",
});

Package.onUse(function (api) {
  api.addFiles(['events.js', 'utils.js', 'tap.js'], 'client');
});
