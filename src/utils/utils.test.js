import { getDate, isDaylight, primeSettings, getSetting, setSetting } from './utils';

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


it('prime, set and get settings from localStorage', () => {
    primeSettings();
    let showOnlyDaylight = getSetting('showOnlyDaylight');
    expect(typeof showOnlyDaylight === 'object' && showOnlyDaylight !== null).toBeTruthy();
    showOnlyDaylight.value = false;
    const setSettingSuccess = setSetting('showOnlyDaylight', showOnlyDaylight);
    expect(setSettingSuccess).toBeTruthy();
    showOnlyDaylight = getSetting('showOnlyDaylight');
    expect(showOnlyDaylight.value).toBeFalsy();
    const nonExistingKey = getSetting('nonExistingKey');
    expect(nonExistingKey).toBeNull();
});
