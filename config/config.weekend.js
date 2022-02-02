//weekends, weekends
module.exports = config = {
    timeUnit: 'min',
    lightning: {
        symbol: 'lightning',
        timeCost: 5
    },
    limit: {
        maxDays: 2 //Because there are only two days on weekends, add a configuration item maxDays = 2 under limit to limit all entertainment activities to only two days
    },
    session: {
        section: {
            split: '-',
            //default schedule
            default: [
                '07:00-08:30-Breakfast', //Wake up at 7am, have breakfast at 8:30
                '09:00-12:00-Lunch',     //Lunch at 12 noon, lunch break from 12 noon to 2 pm
                '14:00-18:00-Dinner',    //Dinner at 6pm
                '19:00-23:30-Sleep'      //Go to bed at 11:30 p.m.
            ],
            //I was too busy and tired to play on Saturday, and I slept late on Sunday (the next day), so the time arrangement has also changed.
            2: [
                '11:15-12:30-Brunch',              //Sleep in until 11:15 am, eat brunch at 12:30 noon
                '14:00-16:00-Waiting for Friends', //Prepare at home from 2pm to 4pm and wait for friends to come over for a party
                '17:30-23:00-Party Finished',      //carnival time
                '23:15-23:30-Sleep'                //Everyone goes home, everyone finds their own mother
            ]
        },
        limit: {
            //Go to bed at night no earlier than 10:00 pm, no later than 11:30 pm. In the vernacular: you can't fall asleep before 10:00 pm, and after 11:30 pm, you must fall asleep for your health.
            'Sleep': {noEarlier: '22:00', noLater: '23:30'}
        }
    },
    track: {
        title: 'Day' //On weekends, take it easy and change Track to the word Day, which is mostly used for entertainment and travel arrangements.
    }
};
