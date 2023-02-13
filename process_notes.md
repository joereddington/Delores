--- 
layout: post
title: "Process Notes"
--- 

A good inbox file looks like this 

<pre> 
## 10/01/23 12:43 to 13:23, 30 minutes sorting dropbox. +EQT
## 10/01/23 13:23 to 15:02, (B) Work on: Column row id being shown when there is no overlaying label.  https://github.com/eQualityTime/TheOpenVoiceFactory/issues/145 +EQT
## 10/01/23 17:59 to 18:31, (B) Work on: Column row id being shown when there is no overlaying label.  https://github.com/eQualityTime/TheOpenVoiceFactory/issues/145 +EQT
The plan is to fix the main bug. I've got to 
✅ write a problem test
✅ isolate the problem test
    (useful command: pytest -m /'ssdfs'/ -t obs
*  Find the problem in the code 
   ✅ add sentinels 
    * Step through slowly 
      * Using the debugger guide at https://code.visualstudio.com/docs/editor/debugging 
* Create more tests
* If necessary, branch to MCVE and reduce down.  
* Commit to the develop branch 
* Push to staging and test 
</pre>

It is easy to read this and know: 
* that I can come back to it easily. 
* Which project we are working on. 
* What the commands that were useful were for next time we are running this. 

It should also be easy to take the reasonably long time period and write a blog post from it. 

The rules are: 

* Anything that can be tagged with an issue is. 
* Anything tagged with an issue has the write up transfered to the issue. 
  * Except any interesting shortcuts or bits of useful command line fu 


In practice, you work through the notes and probably find a few things that are halfway through. That's okay, we can finish those off - if we've been working properly then those should be very high prioirty things anyway.
