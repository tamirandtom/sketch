// Aligns layers to their parent group’s right edge (control cmd →)

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

        // get the layers right edge
        var width = layer.frame().width();

        // get layers right coordinate
        var right = layer.absoluteRect().x() + width;

        // get the parents left position
        var edge = layer.parentGroup().absoluteRect().x() + layer.parentGroup().absoluteRect().width();

        // align layer with parent
        if (right != edge) {
            layer.absoluteRect().setX(edge - width);
        } else {
            com.getflourish.utils.sendAlignRight();
        }

        // display relative position info
        com.getflourish.common.showMarginsOf(layer);
    } else {
        com.getflourish.utils.sendAlignRight();
    }
}