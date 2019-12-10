import ourHero from '../constructor';

test('should calculate total for purchases', () => {
  const expected = true;

  const {name, type, attack, defence } = ourHero;

  const finnalArr = { name2: 'Masha', type2: 'Undead', health2: 100, level2: 1, attack2: 40, defence2: 10 };
  const { name2, type2, attack2, defence2 } = finnalArr;

  const received = (name == name2, type == type2, attack == attack2, defence == defence2);

  expect(received).toBe(expected);
});
