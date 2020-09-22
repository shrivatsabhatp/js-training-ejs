/* Draw an object diagram */

function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
        throw new Error("YOu need to save the file before you can duplicate it.");
    }
    let copy = {
        created: Date.now(),
        author: original.author,
        cells: original.cells,
        metadata: original.metadata
    };
    copy.metadata.title = "Copy of " + original.metadata.title;

    return copy;
}