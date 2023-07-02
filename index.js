

$(function(){
    $("#input-div input").datepicker(
        {  
           
           //autoclose:true,       
           //assumeNearbyYear:true,      
           beforeShowDay:function(d){
                //console.log(d)
                 if(d.getDate()==25 && d.getMonth()+1==6 && d.getFullYear()==2023)
                  return false
                else if (d.getDate()==new Date().getDate()+3 && d.getMonth()==new Date().getMonth() && d.    getFullYear()==new Date().getFullYear())
                  return {enabled:false,classes:'dis',tooltip:'not available',content:'N'}
                else
                return true                
           },

           beforeShowMonth:function(d){
           // console.log(d.getMonth()+1)
            if(d.getMonth()+1==8)
              return {enabled:false,classes:'dis',tooltip:'not available'}
                          
           },

           beforeShowYear:function(d){
           //console.log(d.getFullYear())
           if(d.getFullYear()==2024)
           return {enabled:false,classes:'dis',tooltip:'not available'}
                      
           },

        //    beforeShowDecade:function(d){
        //    //console.log(d.getFullYear())
        //    if(d.getFullYear()==2030)
        //    return {enabled:false,classes:'dis',tooltip:'not available'}
                  
        //   },

        //   beforeShowCentury:function(d){
        //     //console.log(d.getFullYear())
        //     if(d.getFullYear()==2000)
        //     return {enabled:false,classes:'dis',tooltip:'not available'}
                   
        //    }

        calendarWeeks:true,
        clearBtn:true,
        format:'dd-mm-yyyy,D',
        datesDisabled:['20-06-2023','21-06-2023'],
        daysOfWeekDisabled:[0,6],
        daysOfWeekHighlighted:[5],
        //defaultViewDate:'20-06-2023',
        //defaultViewDate:{day:20,month:(7-1),year:2023},
        //disableTouchKeyboard:false,
        //enableOnReadonly:false,
        //endDate:'0d'  ,  
        //endDate:'-1d',
        //endDate:'10-07-2023',
        //startDate:'+1d',
        //immediateUpdates:true
        //keyboardNavigation:false,
        //language:'en',
        //maxViewMode:4,          //view mode value goes from 0 to 4 [days,month,year,decade,centuries]
        //minViewMode:0,
        //startView:1,
        //multidate:true,
        //multidate:2,
        //multidateSeparator:',',
        orientation:'bottom left',
        //showOnFocus:false,
        templates:{
          leftArrow: '<i class="fa-sharp fa-solid fa-backward-step"></i>',
          rightArrow: '<i class="fa-sharp fa-solid fa-forward-step"></i>'
      },
        
        //showWeekDays:false,
        //title:'select any date',
        //todayBtn:'linked'
        //todayBtn:true,
        todayHighlight:true,
        //toggleActive:true,
        //weekStart:1,
        //zIndexOffset:10


        








       }
    );

    // $('#event_period').datepicker({
    //     inputs: $('.actual_range')
    // });
   
    //for changing the left css of the datepicker popup
    $('#input-div input').on('focus',function(){
      var a=$('.datepicker').offset();
      var b=a.left-8
      $('.datepicker').css({"left":b})
      //console.log(a)
      //console.log(b)
    })
    

})