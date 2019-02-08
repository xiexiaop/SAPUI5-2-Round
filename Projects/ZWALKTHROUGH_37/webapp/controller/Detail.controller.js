sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller, UIComponent, History, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("ZWALKTHROUGH_37.controller.Detail", {
		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);

			//Set Currency Model
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
		},
		onRatingChange: function(oEvent) {
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		},

		//Private Methods
		_onObjectMatched: function(oEvent) {
			//Reset ProductRating 
			this.byId("rating").reset();
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").invoicePath + '/' + oEvent.getParameter("arguments").invoiceIndex,
				model: "invoice"
			});
		}
	});
});