# jquery-centerTextarea

A jQuery plugin for vertically centering text within a textarea.

## Usage

Do this to run it once:

    $('.yourtextarea').centerTextarea();
    
You currently have to bind this to every keyup for it to work live as the user types:

    $('.yourtextarea').bind("keyup",function() {
      $(this).centerTextarea();
    });

## Styling

You have an optional parameter

    $('.yourtextarea').centerTextarea({
        notworkingyet: 100
    });
    
Once height of the text exceeds the total height of the box, the code adds the class "scroll" to your textarea, which you can use to style your textarea accordingly.

## Thanks to

Behnam Esmali
http://stackoverflow.com/questions/13552655/how-to-vertically-center-text-in-textarea
