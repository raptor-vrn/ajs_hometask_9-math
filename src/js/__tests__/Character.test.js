import Daemon from "../Daemon";
import Magician from "../Magician";

test('Атака мага без дурмана без дистанции', () => {
    const magician = new Magician('Igor');
    magician.distance = 1;
    const received = magician.attack;
    const expected = 100;
    expect(received).toBe(expected);
});

test('Атака мага на дистанции с дурманом', () => {
    const magician = new Magician('Igor');
    magician.distance = 2;
    magician.stoned = true;
    const received = magician.attack;
    const expected = 85;
    expect(received).toBe(expected);
});

test('Атака демона без дурмана без дистанции', () => {
    const daemon = new Daemon('Max');
    daemon.distance = 2;
    const received = daemon.attack;
    const expected = 90;
    expect(received).toBe(expected);
});

test('Атака демона на дистанции с дурманом', () => {
    const daemon = new Daemon('Max');
    daemon.distance = 2;
    daemon.stoned = true;
    const received = daemon.attack;
    const expected = 85;
    expect(received).toBe(expected);
});