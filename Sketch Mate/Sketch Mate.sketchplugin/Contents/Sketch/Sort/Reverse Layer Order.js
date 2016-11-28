// This plugin reverses the positions of selected layers.

@import '../inventory.js'
var doc = null;
var selection = null;

var onRun = function (context) {

    doc = context.document;
    selection = context.selection;

    var _selection = null;
    var leftPositions = [];
    var topPositions = [];
    var layersMeta = [];
   

    // Run
    if (selection.count() > 1) {

        // remember the selection
        _selection = selection;

        // sort selected layers
        sortLayers(selection);
    } else if (selection.count() == 1 && selection[0].children().count() > 0) {

        // remember the selection
        _selection = selection;

        var group = _selection[0];
        // sort selected group
        sortLayers(group.layers().array());
    } else {
        [doc showMessage:"Cannot sort single layers."]
    }

    // Main
    com.getflourish.layers.reverseLayerOrder(layersMeta);
    com.getflourish.layers.select(_selection);


    // Sorting
    function sortLayers (layers) {

        // Loop through all selected layers

        for (var i = 0; i < layers.count(); i++) {
            var layer = layers[i];

            layersMeta.push({
                "name": layer.name(),
                "layer": layer
            });

        }
    }

    // Sorts numbers. By default, sort would handle numbers as strings and thus not sort them as intended.
    function sortNumber(a,b) {
        return a - b;
    }
}