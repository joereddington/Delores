---
layout: page
---

Some things that are worth knowing about Delores: 

Sometimes it's useful to follow the page step by step, but a lot of the time 90% of the value is found by writing it out once so that you spot those times you are lying to yourself. 

<!-- Limit the amount of internet needed early on --> 
<div id="score">
<script>
</script>
</div>


# Engage with Delores 
* Accept - Delores is a tool for finding out what you don't want to do. 
* Delores is also a tool for finding out why you don't want to do it. 

# Daily start

_Bedroom_
* Phone is literally locked away (if you need a code for a login, then you can wait, if you need to make a call, use Skype).

_Bathroom_
* clean teeth 

_Kitchen_
* Check dishwasher has been on
* drink 1l water
* Vitamin tablet
* Put kettle on 
* Water plants 
* Get glasses

_Office_
* Fill out big book of gratitude

# Getting ready for first sprint of the day
* [Plan Time and Process Calendar](process_calendar) (Inclumes planning exercise and food) <!--Because something might be urgent --> 
* open up the daily scoresheet
* Collect any tasks
  * Process reminders
  * Clear desk into inbox. 
  * [Process Inbox](process_inbox)
  * Process Paper (which should be in inbox anyway)
* Review the ten year goals (even if they are out of date) 

## Starting a sprint after break
_Might be doing this two or three or four times a day_ 
* Start a new section in  inbox.md 
* Setup mario timer. 
* Check internet is off <!--Turn on redirector (consider opening social media stack).-->
* Set alarm for end of sprint - respond to alarms not clocks 
* Confirm you have full water bottle, hot drink, and tray 
* [Process inbox.md](process_notes)
* Clear stack 
  * Give everything a priority and a time. 
  * Put them in the relevant files 

### Picking a todo list item. 
<ul>
 </ul> 
* While there are items on the list 
  * Review the first category of task, make sure they all have the correct due date, priority and a github link. 
  * [Attack first item on list](listitem)
  * literal rest (actual, five minutes on the timer, literal rest. 
* (After while) 
  * Regenerate Todos. 

<ul>
<div id="tasks"></div>
 </ul> 
<script>

function load_tasks(){
/* This doesn't work if the first task is ticked off*/ 
  tasks=`{% flexible_include '../todo.txt/eqt.todo.txt' %}`;
  split_tasks=tasks.split('\n')
    highest_priority = split_tasks[0].substring(1,2)
    //alert(highest_priority)
    output_tasks=[]
    for (const task of split_tasks) {
      if (task.substring(1,2) === highest_priority) {
        output_tasks.push("<li>"+task)
      }

    }  
  document.getElementById("tasks").innerHTML  = output_tasks;
}

load_tasks(); //run it immediately 



function copy(){
navigator.clipboard.writeText(`
* Clear desk into inbox. 
* [Process Inbox](process_inbox)
* Process Paper
* Process reminders
* Process Couple Reminders.
* Process/Delete files in fileless `) 
}


</script>


# Contents 
* [clean slate](clean_slate)
* [Single item](listitem)
* [kitchen](clean_kitchen)
* [social](social)
* [email](email)
* [emotionalproblem](emotionalproblem)
* [nonononono](nonononono)
* [map project](map_project)


# Extras 

## Transition 
* Make sure have set watch 
* My Clothes 
* Car/pram packed 
* Coats and hats and shoes for kids preped
* Know what the game is 



# Close down work day 
* Make a note of when you start and when you stop so you know how long it lasts
* process up the input file. 
* Clear the stack. 
* Make it easy to come back to. 
* Afternoon Meditation for solid evening.  

# Night time: 
( Put night time in a seperate place because it's something you'll start at a diference place. 
* Most important: go to bed excited for something cool you'll do in the morning. 
* Kitchen 
  * Make sure all the keys are in the right place. 
  * lock up. 
  * Make sure skye is running. 
  * Dishwasher on. 
  * Kettle full for tomorrow 
  * Phone locked away
* Office
  * Charging
    * Laptops
    * Tablets
    * Headphones
    * Use the air tags to find notebook/waterbottle  
  * Pick exciting thing on todo list. 
* Upstairs
  * Clothes laid out
  * Clothes boxes sorted
  * Teeth 
  * Book. 
  * Guess wake up time. 
* All lights off. 

<div>
<script>
setup();
</script>
</div>
