var identifier = null;
alert(identifier);

var tracker = { 
               ansic:"#include<stdio.h>\n#include<conio.h>\nvoid main(){\n\n}",
               cpp11:"#include<iostream>\nusing namespace std;\nint main(){\nreturn 0;\n}",
               java:"import java.util.*;\nclass template{\npublic static void main(String arg[...]){\n\n\t}\n}",
               python:"var x =raw_input();\n print x;"};


var editor = ace.edit("editor");

editor.setTheme("https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/theme-monokai.js");
document.getElementById('editor').style.fontSize='12px';
editor.setShowPrintMargin(false);
editor.setValue(tracker.ansic);
editor.getSession().setMode("https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/mode-c_cpp.js");
alert("before function");
/*
function onChangeTabs(identifier) {
    
    if(identifier == "ansi_c")
        {
            editor.setValue(tracker.ansic);
            editor.getSession().setMode("https://cdn.jsdelivr.net/ace/1.2.6/min/mode-c_cpp.js");
        }
    
    else if(identifier == "cpp_11")
        {
                 
        // alert("Hello");
          //  editor.setValue(tracker.cpp11);
            //editor.getSession().setMode("https://cdn.jsdelivr.net/ace/1.2.6/min/mode-c_cpp.js");
        }
    else if(identifier == "java__")
        {
            //var paragraph = document.getElementById("java");
            //var text = paragraph.textContent ? paragraph.textContent : paragraph.innerText;
            editor.setValue(tracker.java);
            editor.getSession().setMode("https://cdn.jsdelivr.net/ace/1.2.6/min/mode-java.js");
        }
    else if(identifier == "python__")
        {
            editor.setValue(tracker.python);
            editor.getSession().setMode("https://cdn.jsdelivr.net/ace/1.2.6/min/mode-python.js");
        }
    
}


function swap_values(current_tab,last_tab) {
    alert("hell down under");
    identifier = current_tab;
         alert(identifier);
    onChangeTabs(identifier);
         
     
}

$(document).ready(function(){
                                  
                                  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
                                                                                               
                                                                                var currentTab = $(e.target).attr("id"); // get current tab
                                                                                var lastTab = $(e.relatedTarget).attr("id"); // get last tab
                                                                                swap_values(currentTab,lastTab);
                                                                                             });
                                   });

*/
