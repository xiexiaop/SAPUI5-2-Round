sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZWALKTHROUGH_25/model/models",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
], function(UIComponent, Device, models, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("ZWALKTHROUGH_25.Component", {
		metadata: {
			manifest: "json"
		},

		init: function() {
			// set data model on view
			var oData = {
				recipient: {
					name: "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
		},
		
		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});
});