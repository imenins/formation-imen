export const func1 = toto => toto;

export const func2 = () => true;

export const multiplication = array =>array.reduce((a, value) => a * value , 1 );

export const keepPositive = array => array.map(a => Number(a)).filter(a => a > 0)


export const addition = (a, b)=> a + b ;

export const multiplier = (a, b)=> a * b ;