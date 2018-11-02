sap.ui.define([
	"sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("ZWT_06ZWALKTHROUGH_06.controller.App", {
		onShowHello: function() {
			MessageToast.show("Hello World");
		}
	});
});