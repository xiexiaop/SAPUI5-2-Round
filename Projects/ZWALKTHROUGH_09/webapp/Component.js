sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZWT_09ZWALKTHROUGH_09/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, Device, models, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("ZWT_09ZWALKTHROUGH_09.Component", {

		metadata: {
			rootView: {
				"viewName": "ZWT_09ZWALKTHROUGH_09.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
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

			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "ZWT_09ZWALKTHROUGH_09.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});