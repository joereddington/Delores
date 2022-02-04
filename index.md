---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---


## Start here
* Phone is literally locked away. 
* Get into the mindset
  * Think _All work is emotional_
  * Remember that 'recover with ten minutes mediation' is one of your ten year goals. 
  * Deep breaths. 
    * Pause at the top and bottom of breathing 
    * Wait until you hear your heartbeat
  * Smile
* If you haven't already:
  * [Plan Time and Process Calendar](process_calendar) <!--Because something might be urgent --> 
* Prepare for a long sprit
  * Work out how long the sprint is going to be and set alarm  (ten minutes early if tagging in on kids) 
  * Open Macvim and make inbox.md note
  * Start 'watching'
  * Turn on redirector (consider opening social media stack)
  * Get glasses
  * Get full water bottle, hot drink, and tray (take dirty cups out with you) 
* If you haven't already:
  * Look at [ten year and one year goals](https://docs.google.com/spreadsheets/d/1l8SRHzjBQpsnMFq8kY8b2QIQkSmda2RpocWAYKm-DQc/edit?usp=sharing)
  * Turn Stack into todos 
  * Collect any tasks
      * Clear desk into inbox. 
      * [Process Inbox](process_inbox)
      * Process Paper (which should be in inbox anyway)
      * Process reminders
      * Process Couple Reminders.
      * Empty recycle bin then: process/Delete files in filesystem 
* Process inbox.md
  * Remember the purpose of the file: 
    * To help you recover from interupts 
    * To make notes that might be useful 
    * To track time
  * Write up sections properly.
    * Move relevant sections over to their own issue
  * For previous days: review, check, and move everything over to index.md
  * Run the deploy script  (~/git/joereddington.github.io/diary/scripts/deploy.sh)
  * Close open windows 
  * (If Monday) Look at the automatic calendar and *Write down* a review of the previous week
* Make sure you know what you 'big thing' for the week is. 
* Commit the todo.txt
* If workday: open eqt.todo.txt else: open todo.txt
* If list empty, review project boards and regenerate list
* [Attack first item on list](listitem)


<script>


function copy(){
navigator.clipboard.writeText(`
* Clear desk into inbox. 
* [Process Inbox](process_inbox)
* Process Paper
* Process reminders
* Process Couple Reminders.
* Process/Delete files in fileless `) 
}

var index=0;

function updatestyles(index){
    const allVisibleElements = document.querySelectorAll('li');
    allVisibleElements[index].setAttribute("style", "background-color:yellow;color:black");
    for (let i=0;i<index;i++){
      allVisibleElements[i].setAttribute("style", "background-color:white;color:lightgray");
    }
    for (let i=index+1;i<allVisibleElements.length;i++){
      allVisibleElements[i].setAttribute("style", "background-color:white");
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
      event.preventDefault();
      if (index>0)
      {
        index--;
      }
    }
    if (event.key == 'ArrowDown') {
        event.preventDefault();
        index++;
    }
    updatestyles(index); 
}
    );



</script>


# Contents 
* [clean slate](clean_slate)
* [Single item](listitem)
* [kitchen](clean_kitchen)
* [morning](morning)
* [email](email)
* [emotionalproblem](emotionalproblem)
* [nonononono](nonononono)


# Extras 

## Transition 
* Make sure have set watch 
* My Clothes 
* Car/pram packed 
* Coats and hats and shoes for kids preped
* Know what the game is 



