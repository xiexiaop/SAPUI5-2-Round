/* global QUnit */
QUnit.config.autostart = false;
sap.ui.getCore().attachInit(function() {
	"use strict";
	sap.ui.require([
		"ZWALKTHROUGH_29/test/integration/NavigationJourney"
	], function() {
		QUnit.start();
	});
});