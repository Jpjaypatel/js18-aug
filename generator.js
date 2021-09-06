//  Generator Function :---------------------
    function *generateit() {
            console.log('First Message');
            yield 'Yield No.1';
            console.log('Second Message');
            yield 'Yield No.2'; 
        }
       let g = generateit();
       console.log(g.next());