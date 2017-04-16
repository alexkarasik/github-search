"use strict";



define('github-search/adapters/application', ['exports', 'github-search/config/environment', 'active-model-adapter', 'ember'], function (exports, _githubSearchConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _githubSearchConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('github-search/app', ['exports', 'ember', 'github-search/resolver', 'ember-load-initializers', 'github-search/config/environment'], function (exports, _ember, _githubSearchResolver, _emberLoadInitializers, _githubSearchConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _githubSearchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _githubSearchConfigEnvironment['default'].podModulePrefix,
    Resolver: _githubSearchResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _githubSearchConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('github-search/components/change-password-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    passwords: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
      }
    }
  });
});
define('github-search/components/email-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('github-search/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('github-search/components/hamburger-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define('github-search/components/my-application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define('github-search/components/navbar-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define('github-search/components/password-confirmation-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('github-search/components/password-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('github-search/components/repo-card', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    fuckYou: 'Alex',
    actions: {
      favorite: function favorite() {
        this.sendAction('favorite');
      }
    }

  });
});
define('github-search/components/search-result', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      mySearch: function mySearch() {
        this.sendAction('mySearch', this.get('search'));
      }
    }
  });
});
define('github-search/components/sign-in-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('github-search/components/sign-up-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    credentials: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('github-search/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('github-search/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('github-search/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('github-search/helpers/app-version', ['exports', 'ember', 'github-search/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _githubSearchConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _githubSearchConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('github-search/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('github-search/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("github-search/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('github-search/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'github-search/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _githubSearchConfigEnvironment) {
  var _config$APP = _githubSearchConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('github-search/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('github-search/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('github-search/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('github-search/initializers/export-application-global', ['exports', 'ember', 'github-search/config/environment'], function (exports, _ember, _githubSearchConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_githubSearchConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _githubSearchConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_githubSearchConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('github-search/initializers/flash-messages', ['exports', 'ember', 'github-search/config/environment'], function (exports, _ember, _githubSearchConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _githubSearchConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('github-search/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('github-search/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('github-search/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('github-search/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('github-search/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("github-search/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('github-search/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string')
  });
});
define('github-search/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('github-search/router', ['exports', 'ember', 'github-search/config/environment'], function (exports, _ember, _githubSearchConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _githubSearchConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('users');
    this.route('favorites');
    this.route('repos', { path: '/search/:repos' });

    this.route('search');
  });

  exports['default'] = Router;
});
define('github-search/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut().then(function () {
          return _this.get('store').unloadAll();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-in');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }

        return false;
      }
    }
  });
});
define('github-search/routes/change-password', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').success('Successfully changed your password!');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('github-search/routes/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {}
  });
});
define('github-search/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    // model: function(params) {
    //     return this.get('store').findAll('search', params);
    // },
    actions: {
      mySearch: function mySearch(search) {
        var _this = this;

        this.get('ajax').request('searches/' + search).then(function (data) {
          console.log(data);
          return _this.transitionTo('repos', data);
        });
      }
    }
  });
});
define('github-search/routes/repos', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    model: function model() {
      var url = 'https://api.github.com/';
      return _ember['default'].$.getJSON(url).then(function (data) {
        return data;
      });
    },
    actions: {}
  });
});
define('github-search/routes/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    ajax: _ember['default'].inject.service(),
    // model: function(params) {
    //     return this.get('store').findAll('search', params);
    // },
    actions: {
      mySearch: function mySearch(search) {
        var _this = this;

        this.get('ajax').request('searches/' + search).then(function (data) {
          console.log(data);
          return _this.transitionTo('repos', data);
        });
      }
    }
  });
});
define('github-search/routes/sign-in', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('github-search/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('github-search/routes/users', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    }
  });
});
define('github-search/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('github-search/services/ajax', ['exports', 'ember', 'ember-ajax/services/ajax', 'github-search/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _githubSearchConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _githubSearchConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('github-search/services/auth', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('github-search/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('github-search/storages/auth', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define("github-search/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "onlWFO7l", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/application.hbs" } });
});
define("github-search/templates/change-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KczPMnUt", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"change-password-form\"],null,[[\"submit\"],[\"changePassword\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/change-password.hbs" } });
});
define("github-search/templates/components/change-password-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "4wtaUtHA", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/change-password-form.hbs" } });
});
define("github-search/templates/components/email-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "foecEy1D", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/email-input.hbs" } });
});
define("github-search/templates/components/hamburger-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yTbM0rbQ", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/hamburger-menu.hbs" } });
});
define("github-search/templates/components/my-application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "WMkzKpSz", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,7],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,5,3],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"flashMessages\",\"queue\"]]],null,0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"flash-message\"],null,[[\"flash\"],[[\"get\",[\"flash\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"flash\"]},{\"statements\":[[\"text\",\"Sign In\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign Up\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-up\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-in\"],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Change Password\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"change-password\"],null,4],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Your Favorite Repos\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"link-to\"],[\"favorites\"],[[\"class\"],[\"navbar-brand\"]],6],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/my-application.hbs" } });
});
define("github-search/templates/components/navbar-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IWkKGHJ0", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"navbar-brand\"],[\"static-attr\",\"href\",\"#\"],[\"flush-element\"],[\"text\",\"Github Search\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"navbar-brand\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/navbar-header.hbs" } });
});
define("github-search/templates/components/password-confirmation-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8AXeSJ2x", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/password-confirmation-input.hbs" } });
});
define("github-search/templates/components/password-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "FNNcYzh9", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"kind\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/password-input.hbs" } });
});
define("github-search/templates/components/repo-card", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "htowADgf", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"wrap\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"links\",\"html_url\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"links\",\"full_name\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Language: \"],[\"append\",[\"unknown\",[\"links\",\"language\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Score: \"],[\"append\",[\"unknown\",[\"links\",\"score\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Number of Forks: \"],[\"append\",[\"unknown\",[\"links\",\"forks\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Description: \"],[\"append\",[\"unknown\",[\"links\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"favorite\",[\"get\",[\"links\"]]]],[\"flush-element\"],[\"text\",\"Add to Favorites\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"fuckYou\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/repo-card.hbs" } });
});
define("github-search/templates/components/search-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sxGblV/O", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnKLpxqBUl0-pUX1xbdskxCkYGL7glXZqpbdMyVmuvi2JSypswMA\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome! \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Search github for any keyword and add them to your favorite repositories list:\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"form\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"mySearch\"],[[\"on\"],[\"submit\"]]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\"],[\"text\",[\"get\",[\"search\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/search-result.hbs" } });
});
define("github-search/templates/components/sign-in-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "lt5MbKDl", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign In\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/sign-in-form.hbs" } });
});
define("github-search/templates/components/sign-up-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RGf8kqCL", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/components/sign-up-form.hbs" } });
});
define("github-search/templates/favorites", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+5nQy0Ot", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9ycyyBaWLDYktESSNJNRd1bZ1itTeHx9tz3XzKKTg-3bMyU0zIQ\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Your Favorite Repositories:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"favorite\"]],[\"get\",[\"in\"]],[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"favorite\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/favorites.hbs" } });
});
define("github-search/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "F5BgTkZi", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnKLpxqBUl0-pUX1xbdskxCkYGL7glXZqpbdMyVmuvi2JSypswMA\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome! \"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Search github for any keyword and add them to your favorite repositories list:\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"search\"],[[\"class\"],[\"btn btn-primary btn-xl\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Search\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/index.hbs" } });
});
define("github-search/templates/repos", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LNdWlUUQ", "block": "{\"statements\":[[\"append\",[\"helper\",[\"log\"],[[\"get\",[\"model\",\"totalCount\"]]],null],false],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"items\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"repo-card\"],null,[[\"links\",\"favorite\"],[[\"get\",[\"links\"]],\"favorite\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"links\"]}],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/repos.hbs" } });
});
define("github-search/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NpIq4F0K", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"search-result\"],null,[[\"search\",\"mySearch\"],[[\"get\",[\"search\"]],\"mySearch\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/search.hbs" } });
});
define("github-search/templates/sign-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JvW34H2y", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-in-form\"],null,[[\"submit\",\"reset\",\"credentials\"],[\"signIn\",\"reset\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/sign-in.hbs" } });
});
define("github-search/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "F19aaEhp", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-up-form\"],null,[[\"submit\"],[\"signUp\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/sign-up.hbs" } });
});
define("github-search/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wU4YWLVQ", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Users\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "github-search/templates/users.hbs" } });
});


define('github-search/config/environment', ['ember'], function(Ember) {
  var prefix = 'github-search';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("github-search/app")["default"].create({"name":"github-search","version":"0.0.0+c532cef9"});
}
//# sourceMappingURL=github-search.map
