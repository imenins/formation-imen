import * as I from '../input';
import { func1, func2 } from './es6';
import { addition, multiplication, multiplier} from './es6';

it('reultat tableau mulitiplié', () => {
  
	expect(multiplication(I.array)).toEqual(-0);

});

it('should calculate ', () => {
	//GIVEN
	const a = 2;
	const b = 3;
 
	//WHEN
	 const total = multiplier(a, b);
	 
   //TEHN
   expect(total).toEqual(6);
 
 });
 

it('should calculate sums', () => {
	//GIVEN
	const a = 2;
	const b = 3;
 
	//WHEN
	 const total = addition(a, b);
	 
   //TEHN
   expect(total).toEqual(5);
 
 });
 



describe('ES6', () => {
	describe('Example', () => {
		describe('func1', () => {
			it('empty entry should return empty', () => {
				expect(func1()).toEqual();
			});
			it('no empty entry should return entry param', () => {
				expect(func1(I.object)).toEqual(I.object);
			});
		});
		describe('func2', () => {
			it('should return true', () => {
				expect(func2()).toBeTruthy();
			});
		});


	});
});
