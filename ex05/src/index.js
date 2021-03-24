let foo = 12,
    boo = 45;

function main(foo, boo) {

    // Only change code below this line

    [foo = 12, boo = 45] = [45, 12]

    // Only change codeabove this line

    return { foo, boo };
}


console.log(main(foo, boo));
module.exports = main;