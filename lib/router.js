Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {name: 'alarms'});
Router.route('/config', {name: 'config'});
Router.route('/logs', {name: 'logs'});
