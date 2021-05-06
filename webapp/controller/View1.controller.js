sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapui5demoappxx.controller.View1", {
			onInit: function () {
			},

			UnitTestExampleCorrect: function(a,b) {
				return a + b;
			},
		  
			UnitTestExampleFailure: function(a,b) {
				return a + b - 1;
			}
		});
	});
