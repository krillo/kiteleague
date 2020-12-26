import { getDate, isDaylight } from './utils';

it('getDate test', () => {
    expect(getDate("2020-12-16T21:00:00Z")).toEqual('16 dec');
    expect(getDate("2020-12-16T21:00:00Z", 'date')).toEqual('16 dec');
    expect(getDate("2020-12-16T21:00:00Z", 'time')).toEqual('22:00');
    expect(getDate("2020-12-16T21:00:00Z", 'hour')).toEqual('22');
    expect(getDate("2020-12-16T07:00:00Z", 'hour')).toEqual('08');
    expect(getDate("2020-12-16T07:00:00Z", 'key')).toEqual('12-16-08');
    expect(getDate("2020-12-16T07:00:00Z", 'weekday')).toEqual('Wednesday');
    expect(getDate("2020-12-16T07:00:00Z", 'weekday-short')).toEqual('Wed');
});

it('isDaylight test', () => {
    expect(isDaylight("07")).toEqual(false);
    expect(isDaylight("09")).toEqual(true);
    expect(isDaylight("14")).toEqual(true);
    expect(isDaylight("15")).toEqual(true);
    expect(isDaylight("16")).toEqual(false);
    expect(isDaylight("23")).toEqual(false);
});