/* jshint evil: true */
"use strict";

// See the explanation in the `Gruntfile`, in the `browserify:externalModules`
// task.
WYMeditor.EXTERNAL_MODULES = {
    ObjectHistory: require("object-history/history"),
    Combokeys: require("combokeys")
};
