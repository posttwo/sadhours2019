var date = new Date(2019, 01, 11);
            var now = new Date();
            var diff = (now.getTime()/1000) - (date.getTime()/1000);
        
            var clock = $('.clock').FlipClock(diff,{
                clockFace: 'DailyCounter'
            });  