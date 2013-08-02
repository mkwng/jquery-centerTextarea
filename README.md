# jquery-centerTextarea

A jQuery plugin for vertically centering text within a textarea.

## Usage

Do this to run it once:

    $(.yourtextarea').centerTextarea();
    
You currently have to bind this to every keyup for it to work live as the user types:

    $(.yourtextarea').bind("keyup",function() {
      $(this).centerTextarea();
    });


## Thanks to

Behnam Esmali
http://stackoverflow.com/questions/13552655/how-to-vertically-center-text-in-textarea
