sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    ], function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("MyAppDemo.MyAppUiLoc.controller.Main", {

        onInit: function() {

        },
        onAfterRendering: function(oEvent) {
            var oElement = this.getView().byId('idPyTable');
            oElement.setModel(this.getView().getModel('pyData'));
        }
        
    });
});