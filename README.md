# What is Cards And Daggers

When I was a child in the late Early 2000's, my father came to my room with half a laptop and a monitor to hook it up to. He launched Windows 3.1 from DOS, something that already looked prehistoric to my young eyes, and started the Notepad app. 

Then he opened a book. I don't remember the name. It was battered and broken. It had "HTML" and probably "Web Technologies" on it.

We didn't have Internet at home yet, but I had heard of it. Our parents and teachers had already murmured that 9/11 was on every lips thanks to it, and my sister, who emigrated to the US rather than Europe, had already sent a few pictures of my cousins via emails that my grandmother had proudly gotten professionnally printed and framed in her little appartment so they would always be by her side. 

More than 25 years later, 4 years after my father's death, 3 years after I gave birth to my own child, I want to be the one to teach them. Not out of a book that will put them off, but with my own work, my sweat and tears, so I can say "it's not just your daddy and people who look like him who can do it".

# No, seriously, what *is* Cards and Daggers

## The Introduction
Like most people, I tried to learn and gave up many times in my life. In a grueling and boring marketing apprenticeship at an SMB that didn't listen to me, and with full access to the Internet, I went back to W3Schools for the Nth time with the defined goal (defined being the key element, here) to make a Dice-Roller and my own Dungeons and Dragons Character Creator and sheet manager. 

I did have a friend correct a single line of Javascript because the fumbles didn't show as red while my crits properly turned green. Turns out simple algorithmics is hard.

## The Rise

Obviously, the OGL Scandal happened and halted my motivation. The dice roller however, thankfully did not entirely joined the WIP bin with my unfinished fanfic and the leftover resin from my brief dice making craze and [insert ADHD fueled special interest that lasts me a month or something].I finished it by myself, modulo my friend's help for the crits/fumble color change. 

Enters Darrington's Press Daggerheart's Open Beta. 

I played from the very first week and pre-ordered the collector's edition. Not too long after, when chatting at lunch with colleague, the question "could [the non devs in the team] code?", I was the only one with something to show, my little dice rollr I was so proud of and most of all, I was the only one to bemoan not having the time to learn and do more. 

On Daggerheart's release day, that conversation was at the forefront of my mind. I had switched to another job yet again and one night, instead of going to bed like a responsible (read: exhausted) adult with a pre-schooler and a trial period, I migrated my project from Code Pen to VS Codium. Fought with git (I lost). Properly separated in html/css/js files linked together. Cleaned the html parts. Improved CSS by separating some classes and IDs and added float to the dice elements to help with small screen readability. My friend had already found my extremely simple JS script clean. I didn't touch it. Yet.

I was proud. I was elated. I pressed commit. 

# Where is the Climax ? 

Well, that's it. That's all I have right now. A social media marketing turned Customer Support made a dice roller while bored at a crap job and decided to take the old code back up.

I threw the towel when I couldn't get my head around Git and AI threw crap at me about it.

Then I went back to my code and made the DualityDice. 

That was my climax. For the first time, I failed at something but kept going my way. Is it because for the first time in 35 years I am medicated for my ADHD? Is it learning so much because my last two jobs "teaches" the very basics of dev to every member of the team even if they are not on dev tasks? 

Is it because finally having the cards for my Inferis School of Knowledge Wizard with strange visions in my hands made the idea of a "cards in hand" app a clear next step?

Is this another ADHD hobby? 

I don't think so. Even if you don't hear about me tomorrow, you'll hear about me again. 

My father, in the year 2003 tried to interest his daughter (sic) in things that were then (and still ahre) extremely male coded and male dominated with his dry monotone voice. He did the same with maths and thank fuck I had an actual interest in philosophy (and an excellent teacher, *reposez en paix, M. Emmanuel F.*), he would have put me off it too.

Even if I were to let him, even my husband would not let me leave our daughter's code education solely on him. He has a compsci and engineering degree, a long resume and a career. I have winutil / linutil curl requests memorised and this repo. 

I'm probably gonna ask for help with the Git Push errors at work. 

# Where the Writer Finally Stops Yapping And Starts Talking About Features 

Here there be Dragons...

## Dice roller

- [ DONE ] Generic Polyhedric set Dice roller
- [ DONE ] Basic Duality dice
- [ TODO ] Consolidated Duality Dice (Add Hope and Fear together to return the toal)
- [ TODO ] Daggerheart Advantage and Disadvantage to the Duality Die
-  [ TODO ] Uncommon rolls (Coin toss, d3)
-  [ PLANNED ] Pick your own die (input a number X and return a number between 1 and X)
-  [ PLANNED ] Roll many dice
-  [ PLANNED ] Dice formulas (including Keep Highest and Keep Lowest)  

## Deck builder

- [ TODO ] See all cards
- [ TODO ] Filter cards by Class
- [ TODO ] Filter cards by Class Level (self reported)
- [ TODO ] Select Permanent Cards : 
  - [ TODO ] Ancestry and Community
  - [ TODO ] Class and matching Class Specialisation Cards
- [ TODO ] Select Loadout
  - [ TODO ] See all cards available based on Class (self reported)
  - [ TODO ] See all cards available based on Level (self reported)
  - [ PLANNED ] Tie Dice Roller and Cards Together

## Character Sheet
- Starting with the Wizard character sheet
  - [ PLANNED ] Tie Character Sheet and Deck Builder together
  - [ PLANNED ] Level, Class and Class Specialisation Management
  - [ CONSIDERING ] Experiences management