// Aligns layers to their parent group’s left edge (control cmd ←)

@import '../inventory.js'


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    // init
    com.getflourish.common.init(context);

    // action

    if (selection.count() == 1) {

        // remember layer
        var layer = selection[0];

        // get the layers width
        var width = layer.frame().width();

        // get layers left
        var left = layer.absoluteRect().x();

        // get parent absolute x
        var parentX = layer.parentGroup().absoluteRect().x();

        // align layer with parent
        if (left != parentX) {
            layer.absoluteRect().setX(parentX);
        } else {
            com.getflourish.utils.sendAlignLeft();
        }

        // display relative position info
        com.getflourish.common.showMarginsOf(layer);
    } else {
        com.getflourish.utils.sendAlignLeft();
    }
}
