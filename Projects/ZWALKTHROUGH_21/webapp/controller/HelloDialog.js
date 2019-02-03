sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function(ManagedObject, Fragment) {
	"use strict";

	return ManagedObject.extend("ZWALKTHROUGH_21.controller.HelloDialog", {
		constructor: function(oView) {
			this._oView = oView;
		},

		open: function() {
			this._Dialog = this._oView.byId("helloDialog");
			// create dialog lazily
			if (!this._Dialog) {
				// create dialog via fragment factory
				this._Dialog = sap.ui.xmlfragment(this._oView.getId(), "ZWALKTHROUGH_21.view.HelloDialog", this);
				this._oView.addDependent(this._Dialog);
			}
			this._Dialog.open();
		},

		onCloseDialog: function() {
			this._Dialog.close();
		}

	});

});