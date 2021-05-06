module.exports = function(config) {
	config.set({
	  frameworks: ["ui5", "qunit"],
	  ui5: {
		url: "https://openui5.hana.ondemand.com",
		mode: "script",
		config: {
		  async: true,
		  resourceRoots: {
			"sapui5demoappxx": "./base/webapp"
		  }
		},
		tests: [
		  "sapui5demoappxx/test/unit/AllTests"
		]
	  },
	  browsers: ["Chrome"]
	});
  };