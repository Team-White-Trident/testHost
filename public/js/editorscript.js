var identifier = null;
var tracker = { 
               ansic:"#include<stdio.h>\n#include<conio.h>\nvoid main(){\n\n}",
               cpp11:"#include<iostream>\nusing namespace std;\nint main(){\nreturn 0;\n}",
               java:"import java.util.*;\nclass template{\npublic static void main(String arg[...]){\n\n\t}\n}",
               python:"var x =raw_input();\n print x;"};


var editor = ace.edit("editor");

editor.setTheme("ace/theme/tomorrow");
document.getElementById('editor').style.fontSize='12px';
editor.setShowPrintMargin(false);
editor.setValue(tracker.ansic);
editor.getSession().setMode("ace/mode/c_cpp");

function onChangeTabs(identifier) {
    
    if(identifier == "ansi_c")
        {
            editor.setValue(tracker.ansic);
            editor.getSession().setMode("ace/mode/c_cpp");
        }
    
    else if(identifier == "cpp_11")
        {
            editor.setValue(tracker.cpp11);
            editor.getSession().setMode("ace/mode/c_cpp");
        }
    else if(identifier == "java__")
        {
            //var paragraph = document.getElementById("java");
            //var text = paragraph.textContent ? paragraph.textContent : paragraph.innerText;
            editor.setValue(tracker.java);
            editor.getSession().setMode("ace/mode/java");
        }
    else if(identifier == "python__")
        {
            editor.setValue(tracker.python);
            editor.getSession().setMode("ace/mode/python");
        }
    
}


function swap_values(current_tab,last_tab) {
 
    identifier = current_tab;
    onChangeTabs(identifier);
     
}



