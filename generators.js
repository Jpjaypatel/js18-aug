// Generators

function *generateit(){
    console.log('First Message');
    yield 'Yield No.1';
    console.log('Second Message');
    yield 'Yield No.2';
}

    let g = generateit();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());

    // 2
    function *generateit(){
        let nextNum = 300;
        while (true) {
            yield(nextNum++);
        }
    }

    let g1 = generateit();
    console.log(g1.next().value);
    console.log(g1.next().value);
    console.log(g1.next().value);
    console.log(g1.next().value);

    for(let value of g1){
        if(value > 305) break; 
            console.log(value);
    }
    //3

    function *generateit(){
        yield 55;
        yield* ['Node', 'Angular', 'React'];

    }
    let g2 = generateit();
    console.log(g2.next().value);
    console.log(g2.next().value);
    console.log(g2.next().value);
    console.log(g2.next().value);
    console.log(g2.next().value);

    //4

    function *generateit(){
        yield 'Php';
        yield 'Node';
        yield 'Angular';
        yield 'React';
    }
    let g3 = generateit();
    console.log(g3.next().value);
    console.log(g3.return('Ending Now'));
    console.log(g3.next().value);