sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZWALKTHROUGH_29.controller.App", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});