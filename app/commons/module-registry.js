define(["angular", "q", "main/app"], function (angular, Q, app) {

    return new ModuleFactory();


    function ModuleFactory() {
        var $this = this;
        $this.create = create;

        function create(name, deps) {
            return new Module(name, deps);
        }
    }

    function Module(name, deps) {
        var $this = this;
        var module = {};
        init();
        $this.config = moduleBlocks("config");
        $this.run = moduleBlocks("run");
        $this.controller = provide("controller");
        $this.service = provide("service");
        $this.directive = provide("directive");
        $this.filter = provide("filter");
        $this.factory = provide("factory");
        $this.constant = provide("constant");
        $this.value = provide("value");


        function init() {
            validate();
            module.name = name;
            module.deps = deps ? deps : [];
            module.instance = createAngularModule();
            module.providersCache = createProvidersCache();
            app.requires.push(name);
        }


        function validate() {
            if (name == null) {
                throw "Module name cannot be null";
            }
        }

        function createAngularModule() {
            return angular.module(module.name, module.deps);
        }

        function createProvidersCache() {
            return new ProvidersCache(module.instance);
        }

        function moduleBlocks(blockName) {
            return function (blockArg) {
                module.instance[blockName](blockArg);
                return this;
            }
        }

        function provide(providerKey) {
            return function (name, constructor) {
                module.providersCache.delegate(providerKey, name, constructor);
                return this;
            }
        }
    }


    function ProvidersCache(module) {
        var $this = this;
        var cache = {};
        var loaded = load();
        $this.delegate = delegate;


        function delegate(provider, name, constructor) {
            loaded.then(provide);

            function provide(cache) {
                cache[provider](name, constructor);
            }
        }

        function load() {
            return Q.Promise(bindProviders);
        }

        function bindProviders(resolve) {
            module.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
                function (controllerProvider, compileProvider, filterProvider, provide) {
                    cache = {
                        $controllerProvider: controllerProvider,
                        $compileProvider: compileProvider,
                        $filterProvider: filterProvider,
                        $provide: provide,
                        provider: function (name, constructor) {
                            provide.provider(name, constructor);
                        },
                        controller: function (name, constructor) {
                            controllerProvider.register(name, constructor);
                        },
                        directive: function (name, constructor) {
                            compileProvider.directive(name, constructor);
                        },
                        filter: function (name, constructor) {
                            filterProvider.register(name, constructor);
                        },
                        factory: function (name, constructor) {
                            provide.factory(name, constructor);
                        },
                        service: function (name, constructor) {
                            provide.service(name, constructor);
                        },
                        constant: function (name, constructor) {
                            provide.constant(name, constructor);
                        },
                        value: function (name, constructor) {
                            provide.value(name, constructor);
                        }
                    };

                    resolve(cache);
                }
            ]);
        }
    }

});