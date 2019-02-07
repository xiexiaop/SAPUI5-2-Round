sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {
	"use strict";

	return ManagedObject.extend("ZWALKTHROUGH_29.controller.HelloDialog", {

		constructor : function (oView) {
			this._oView = oView;
		},

		exit : function () {
			delete this._oView;
		},

		open : function () {
			var oView = this._oView;

			// create dialog lazily
			if (!oView.byId("helloDialog")) {
				var oFragmentController = {
					onCloseDialog : function () {
						oView.byId("helloDialog").close();
					}
				};
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "ZWALKTHROUGH_29.view.HelloDialog",
					controller: oFragmentController
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				oView.byId("helloDialog").open();
			}
		}

	});

});