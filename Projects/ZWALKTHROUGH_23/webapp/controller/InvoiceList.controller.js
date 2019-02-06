sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("ZWALKTHROUGH_23.controller.InvoiceList", {
		//Set custom formatter
		formatter: formatter,
		
		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});