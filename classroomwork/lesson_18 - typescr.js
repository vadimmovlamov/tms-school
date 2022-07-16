const PeriodDateRangeDictionary = {
    yesterday: ["06/07/2022", "07/07/2022"],
    lastWeek: ["27/06/2022", "03/07/2022"],
    lastMonth: ["01/06/2022", '30/06/2022'],
};

const reverse = (periodDictionary) => {
    return Object.entries(periodDictionary).reduce( // перевести в массив объект
        (dictionary, [period, dateRange]) => { // [period, dateRange] - деструктуризация массива. period - это 'yesterday:', а dateRange - это ["06/07/2022", "07/07/2022"]
            const [startAt, endAt] = dateRange; //у значения dateRange есть два значения "06/07/2022" and "07/07/2022"

            const dateRangeKey = `${startAt}_${endAt}`.replaceAll('/', '-'); // замена символов

            dictionary[dateRangeKey] = period; // добавляем в period dateRangeKey, т.е. в значение period теперь идет "06/07/2022", "07/07/2022" 
            //dictionary[dateRangeKey] - создали динамически ключ и присвоели ему period
            return dictionary;
        }, {})
}
console.log(reverse(PeriodDateRangeDictionary));

// const result = {
//     '06-07-2022_07-07-2022': 'yesterday',
//     "27-06-2022_07-07-2022": 'lastWeek'
// }