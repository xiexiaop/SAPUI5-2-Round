sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent"
], function(Controller, JSONModel, formatter, Filter, FilterOperator, UIComponent) {
	"use strict";
	return Controller.extend("ZWALKTHROUGH_32.controller.InvoiceList", {
		//Set custom formatter
		formatter: formatter,

		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices: function(oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function(oEvent) {
			var oRouter = UIComponent.getRouterFor(this);
			var sPath = oEvent.getSource().getBindingContext("invoice").getPath();
			oRouter.navTo("detail", {
				invoicePath: sPath.substr(1, 8),
				invoiceIndex: sPath.substr(10, sPath.length)
			});
		}
	});
});