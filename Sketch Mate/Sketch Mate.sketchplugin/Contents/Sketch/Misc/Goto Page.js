/**
 * This plugin shows a list of pages to choose from and jumps to the selected page.
 *
 * Florian Schulz Copyright 2014, MIT License
 */

function createSelect(msg, items, selectedItemIndex){
  selectedItemIndex = selectedItemIndex || 0

  var accessory = [[NSComboBox alloc] initWithFrame:NSMakeRect(0,0,200,25)]
  [accessory addItemsWithObjectValues:items]
  [accessory selectItemAtIndex:selectedItemIndex]

  var alert = [[NSAlert alloc] init]
  [alert setMessageText:msg]
  [alert addButtonWithTitle:'OK']
  [alert addButtonWithTitle:'Cancel']
  [alert setAccessoryView:accessory]

  var responseCode = [alert runModal]
  var sel = [accessory indexOfSelectedItem]

  return [responseCode, sel]
}

var onRun = function (context) {

    // old school variable
    var doc = context.document;
    var selection = context.selection;

    // get all pages
    var pages = doc.pages();
    var options = [];

    // populate the names array
    for (var i = 0; i < pages.count(); i++) {
        options.push(pages[i].name())
    }

    // show drop down
    var choice = createSelect('Select a page', options, 0)

    // only switch page if a page was selected
    if (choice[0] == 1000) {
        var index = choice[1];

        // set the current page
        doc.setCurrentPage(pages.objectAtIndex(index));
    }

    doc.reloadInspector();

    // refresh view
    var view = [doc currentView];
    view.refresh();

}