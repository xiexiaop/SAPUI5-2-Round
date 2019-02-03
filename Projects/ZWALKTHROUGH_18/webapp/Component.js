sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZWALKTHROUGH_18/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("ZWALKTHROUGH_18.Component", {
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
		}
	});
});