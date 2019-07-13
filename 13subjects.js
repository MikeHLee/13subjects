/**
 * Creates 52 week-long, "all day" calendar events corresponding to Ben Franklin's 13 subjects.
 * Meant for the conscious betterment of ourslves, our friends, and our families.
 */

function Subjects(year) { //start program
  
  var year = 2019
  
  var subjects = [ //the subjects
    "Temperance",
    "Silence",
    "Order",
    "Resolution",
    "Frugality",
    "Industry",
    "Sincerity",
    "Justice",
    "Moderation",
    "Cleanliness",
    "Tranquility",
    "Chastity",
    "Humility"
    ]
  
  var descriptions = [ //the descriptions
    "Eat not to dullness; drink not to elevation.",
    "Speak not but what may benefit others or yourself; avoid trifling conversation.",
    "Let all of your things have their places; let each part of your business have its time.",
    "Resolve to perform what you ought; perform without fail what you resolve.",
    "Make no expense but to do good to others or yourself; ie. waste nothing.",
    "Lose no time; be always employ'd in something useful; cut off all unnecessary actions.",
    "Use no hurtful deceit; think innocently and justly, and if you speak, speak accordingly.",
    "Wrong none by doing injuries, or omitting the benefits that are your duty.",
    "Avoid extremes; forbear resenting injuries so much as you think they deserve.",
    "Tolerate no uncleanliness in body, clothes, or habitation.",
    "Be not disturbed at trifles, or at accidents common or unavoidable.",
    "Rarely use venery but for health or offspring, never to dulness, weakness, or the injury of your own or another's peace or reputation.",
    "Imitate Jesus and Socrates.",
    ]
   
   //this needs editing every year so the start1 is the first day of the first week of the year, and end 1 is the day after the end of the first week of the year
   //start 2 should be the day after the end of the first week of the year
   var startDate1 = new Date(String(year)+"-01-07"); //YYYY-MM-DD 
   var endDate1 = new Date(String(year)+"-12-30"); //YYYY-MM-DD
   var startDate2 = new Date(String(year)+"-01-14"); //YYYY-MM-DD 
   var endDate2 = new Date(String(year+1)+"-01-06"); //YYYY-MM-DD 

   var getDateArray = function(start, end) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 7);
    }
    return arr;
   }
    
   var startDates = getDateArray(startDate1, endDate1);
   var endDates = getDateArray(startDate2, endDate2);
     
   //Logger.log(startDates)
   //Logger.log(startDates.length)
   //Logger.log(endDates) 
   //Logger.log(endDates.length)
   
   function addSubject(i,j){ //define a function to add an all-day event to the calendar
     var optionSpec = {
       description: descriptions[i]
     }
     var event = CalendarApp.getDefaultCalendar().createAllDayEvent(
       subjects[i], 
       new Date(startDates[j]),
       new Date(endDates[j]),
       optionSpec
     );
     Logger.log('Event ID: ' + event.getId());  
   }
   
   var S = []
   
   for(i = 0; i < 4; i++){ //Create an S array looping over the subjects 4 times for a total of 52 values
     j = 0;
     while(j < 13){
       S.push(j);
       j++;
     }
   }

   //Logger.log(S)
   //Logger.log(S.length) //check our S array for the appropriate values and length
   
   for(i = 0; i < 52; i++){//add subjects to the calendar
     addSubject(S[i],i)
   }
}