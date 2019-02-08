sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/syncStyleClass"
], function(Controller, MessageToast, syncStyleClass) {
	"use strict";
	return Controller.extend("ZWALKTHROUGH_37.controller.HelloPanel", {
		onShowHello: function() {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
		},
		onOpenDialog: function() {
			var oView = this.getView();
			var oDialog = oView.byId("helloDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "ZWALKTHROUGH_37.view.HelloDialog", this);
				oView.addDependent(oDialog);
			}
			// forward compact/cozy style into dialog
			syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
			oDialog.open();
		},
		onCloseDialog: function() {
			this.getView().byId("helloDialog").close();
		}
	});
});