sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZWT_10ZWALKTHROUGH_10/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("ZWT_10ZWALKTHROUGH_10.Component", {
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