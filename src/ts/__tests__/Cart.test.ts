import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(2010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble', 'фантастика боевик фентези приключения', 137, 500);

  cart.add(movie);

  expect(cart.items.length).toBe(1);
});

test('deleting item from cart', () => {
  const cart = new Cart();
  const movie = new Movie(2010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble', 'фантастика боевик фентези приключения', 137, 500);
  const book = new Book(1, 'book', 'author', 23, 100);
  
  cart.add(movie);
  cart.add(book);

  cart.delete(2010);

  expect(cart.items.length).toBe(1);
});

test('deleting nonexisting item from cart', () => {
  const cart = new Cart();
  const movie = new Movie(2010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble', 'фантастика боевик фентези приключения', 137, 500);
  const book = new Book(1, 'book', 'author', 23, 100);
  
  cart.add(movie);
  cart.add(book);

  expect(() => { cart.delete(5); }).toThrow('В корзине нет такого элемента!');
});

test('get total', () => {
  const cart = new Cart();
  const book = new Book(1, 'book1', 'author1', 100, 100);
  const movie = new Movie(2010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble', 'фантастика боевик фентези приключения', 137, 500);
  cart.add(book);
  cart.add(movie);

  expect(cart.getTotal()).toBe(600);
});

test('get discout', () => {
  const cart = new Cart();
  const book = new Book(1, 'book1', 'author1', 100, 100);
  const movie = new Movie(2010, 'Мстители', 'The Avengers', 2012, 'Avengers Assemble', 'фантастика боевик фентези приключения', 137, 500);
  cart.add(book);
  cart.add(movie);

  expect(cart.getDiscount(10)).toBe(540);
});
