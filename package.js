Package.describe({
  name: 'alxstx:meteor-turnjs',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/alxstx/meteor-turnjs',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.addFiles('bower_components/turn.min.js', 'client');
});
