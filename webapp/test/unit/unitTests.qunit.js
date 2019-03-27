/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sds/erp/SCP/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});