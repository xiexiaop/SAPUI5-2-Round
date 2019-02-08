sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, UIComponent, History,MessageToast) {
	"use strict";
	return Controller.extend("ZWALKTHROUGH_35.controller.Detail", {
		onInit: function() {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
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