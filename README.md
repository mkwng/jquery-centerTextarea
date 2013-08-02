# jquery-centerTextarea

A jQuery plugin for vertically centering text within a textarea.

## Usage

Do this to run it once:

    $(.yourtextarea').centerTextarea();
    
You currently have to bind this to every keyup for it to work.

    $(.yourtextarea').bind("keyup",function() {
      $(this).centerTextarea();
    });
