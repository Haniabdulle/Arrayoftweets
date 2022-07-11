// Array of objects with 10 tweets from 10 different accounts //

let tweets = [

{ 
    tweet:'Cheescake is soooo good!',
    username: 'Maya',
    CreatedAt: '02-24-2009',
    age: 15,
},

{
    tweet: 'Working customer service is the worst!!!!',
    username: 'Siham',
    CreatedAt: '05-16-2001',
    age: 28
},

{
    tweet: 'The gym really is cheap therapy (: ',
    username: 'Saabir',
    CreatedAt: '03-8-2003',
    age: 19,
},

{
    tweet:' Beach day !',
    username: 'hanad',
    CreatedAt:'05-10-2007',
    age: 20,
},


{
    tweet: ' idk idk idk idk ',
    username: 'Saaid',
    CreatedAt: '06-9-2002',
    age: 18,
},

{
    tweet:'Such a nice day outside!',
    username:'Sammy',
    CreatedAt: '05-9-2005',
    age: 26,

},

{
    tweet:'blah blah blah',
    username:'Xawo',
    CreatedAt: '02-5-2008',
    age: 29,

},


{
    tweet:'Eid mubarak!!!!',
    username:'Liban',
    CreatedAt: '04-30-2001',
    age: 30,

},

{
    tweet:'HELLLOOO EVERYONE',
    username:'Amira',
    CreatedAt: '03-8-2004',
    age: 21,

},

{
    tweet:'Late night drives are the best!',
    username:'Fardowsa',
    CreatedAt: '09-28-2009',
    age: 35,

},
]

// this loop looking for the array of tweets and ages above 18 to print out tweets,username and created date //

let counter = 0;
while(counter < tweets.length) {
    if(tweets[counter] ['age'] >= 18) {
        console.log(tweets[counter]['tweet'],tweets[counter]['username'],tweets[counter]['createdAt']);
    }
}


counter++; // Adds one more //

 // Same as first loop but will only print info when user is under 18 //



{
    for(counter=0; counter<tweets.length; counter++){
        if(tweets[counter]['age']< 18) {
            console.log(tweets[counter]['tweet'],tweets[counter]['username'],tweets[counter]['CreatedAt']);
        }

    }

}

