var a = ["milk", "beer", "beer", "milk", "milk"];
for (i of a) {
    if (i === 'milk') {
        console.log('good')
    } else if (i === 'beer') {
        console.log('bad')
    }
}
