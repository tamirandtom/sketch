@import '../inventory.js'

// Removes the current artboard
// If there are other artboards nearby, they will be moved towards the place of the old artboard.
// You can have any layer selected, no need to select the artboard before duplication :)


var onRun = function (context) {

    // old school variable
    var doc = context.document;
    var selection = context.selection;

    // pass context to library
    com.getflourish.common.init(context);

    // Make sure an artboard is selected
    var selectedArtboard = doc.currentPage().currentArtboard();

    if (selectedArtboard) {
        var width = selectedArtboard.frame().width();
        var found = 0;

        artboards = doc.currentPage().artboards();

        // Move all artboards that are next to the selected one
        for (var i = 0; i < artboards.count(); i++) {
            // only move artboards on the same y position
            if (artboards[i] != selectedArtboard) {
                if (artboards[i].frame().y() == selectedArtboard.frame().y() && artboards[i].frame().x() > selectedArtboard.frame().x()) {
                    var newX = artboards[i].frame().x() - width - 100;
                    artboards[i].frame().setX(newX);
                } else {
                    found = i + 1;
                }
            }
        }

        // deselect
        doc.currentPage().deselectAllLayers();

        // Make sure artboard is selected
        selectedArtboard.setIsSelected(true);

        // Delete the current artboard
        com.getflourish.utils.sendDelete();

        // deselect
        doc.currentPage().deselectAllLayers();

        // select next artboard
        var next = doc.currentPage().artboards().objectAtIndex(found);
        next.setIsSelected(true);

        // todo: refresh canvas, so that the removed artboard shadow is not visible anymore (e.g. add/remove layer)
    } else {
        doc.showMessage("No artboards found.");
    }


}