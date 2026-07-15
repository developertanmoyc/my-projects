const voiceData = [
    { 
        q: "Choose the correct passive form: 'The chef prepares the meal.'", 
        options: ["The meal is prepared by the chef.", "The meal was prepared by the chef.", "The meal is being prepared by the chef.", "The meal has been prepared by the chef."], 
        correct: 0, 
        exp: "In the Simple Present tense, the passive voice uses 'is/am/are' + the past participle (prepared)." 
    },
    { 
        q: "Choose the correct passive form: 'She is singing a beautiful song.'", 
        options: ["A beautiful song is sung by her.", "A beautiful song has been sung by her.", "A beautiful song is being sung by her.", "A beautiful song was being sung by her."], 
        correct: 2, 
        exp: "For the Present Continuous tense, the passive structure is 'is/am/are' + 'being' + the past participle." 
    },
    { 
        q: "Choose the correct passive form: 'They have completed the project.'", 
        options: ["The project was completed by them.", "The project has been completed by them.", "The project had been completed by them.", "The project is completed by them."], 
        correct: 1, 
        exp: "The Present Perfect tense changes to 'has/have been' + the past participle in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'The cat chased the mouse.'", 
        options: ["The mouse is chased by the cat.", "The mouse has been chased by the cat.", "The mouse had been chased by the cat.", "The mouse was chased by the cat."], 
        correct: 3, 
        exp: "The Simple Past tense uses 'was/were' + the past participle in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'The workers were digging a hole.'", 
        options: ["A hole was dug by the workers.", "A hole had been dug by the workers.", "A hole was being dug by the workers.", "A hole is being dug by the workers."], 
        correct: 2, 
        exp: "The Past Continuous tense requires 'was/were' + 'being' + the past participle." 
    },
    { 
        q: "Choose the correct passive form: 'I had written a letter.'", 
        options: ["A letter was written by me.", "A letter had been written by me.", "A letter has been written by me.", "A letter had written by me."], 
        correct: 1, 
        exp: "The Past Perfect tense changes to 'had been' + the past participle in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'She will bake a cake.'", 
        options: ["A cake will baked by her.", "A cake will be baked by her.", "A cake would be baked by her.", "A cake is going to bake by her."], 
        correct: 1, 
        exp: "The Simple Future tense uses 'will be' + the past participle." 
    },
    { 
        q: "Choose the correct passive form: 'They will have finished the work by tomorrow.'", 
        options: ["The work will have been finished by tomorrow.", "The work will be finished by tomorrow.", "The work would have been finished by tomorrow.", "The work has been finished by tomorrow."], 
        correct: 0, 
        exp: "The Future Perfect tense uses 'will have been' + the past participle." 
    },
    { 
        q: "Choose the correct passive form: 'Open the window.'", 
        options: ["The window must be opened.", "Let the window be opened.", "You are ordered to opening the window.", "The window is opened."], 
        correct: 1, 
        exp: "Imperative sentences expressing a command generally use 'Let + object + be + past participle' in the passive form." 
    },
    { 
        q: "Choose the correct passive form: 'Please give me a pen.'", 
        options: ["Let a pen be given to me.", "You are requested to give me a pen.", "A pen is given to me, please.", "You are ordered to give me a pen."], 
        correct: 1, 
        exp: "Sentences starting with 'Please' or 'Kindly' change to 'You are requested to + base verb' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'Who broke the glass?'", 
        options: ["By whom was the glass broken?", "Who was the glass broken by?", "By who is the glass broken?", "The glass was broken by whom?"], 
        correct: 0, 
        exp: "Interrogative sentences starting with 'Who' change to 'By whom' followed by the auxiliary verb in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'I know him.'", 
        options: ["He is known by me.", "He was known to me.", "He is known to me.", "He is knowing me."], 
        correct: 2, 
        exp: "The verb 'know' is an exception and takes the preposition 'to' instead of 'by' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'Someone has stolen my purse.'", 
        options: ["My purse was stolen by someone.", "My purse has been stolen.", "My purse had been stolen.", "My purse is stolen."], 
        correct: 1, 
        exp: "When the active subject is vague (someone, people), the 'by + agent' phrase is typically omitted. Present Perfect becomes 'has been stolen'." 
    },
    { 
        q: "Choose the correct active form: 'The building was designed by a famous architect.'", 
        options: ["A famous architect designs the building.", "A famous architect had designed the building.", "A famous architect designed the building.", "A famous architect has designed the building."], 
        correct: 2, 
        exp: "The passive verb phrase 'was designed' indicates Simple Past, so the active verb must be the simple past form 'designed'." 
    },
    { 
        q: "Choose the correct passive form: 'Did you complete the assignment?'", 
        options: ["Was the assignment completed by you?", "Is the assignment completed by you?", "Had the assignment been completed by you?", "Has the assignment been completed by you?"], 
        correct: 0, 
        exp: "Simple Past interrogative sentences starting with 'Did' use 'Was/Were + subject + past participle' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'People speak Spanish in Mexico.'", 
        options: ["Spanish is spoken in Mexico.", "Spanish was spoken in Mexico.", "Spanish is being spoken in Mexico.", "Spanish has been spoken in Mexico."], 
        correct: 0, 
        exp: "Simple present active changes to 'is/am/are' + past participle. The vague subject 'People' is omitted in the passive structure." 
    },
    { 
        q: "Choose the correct passive form: 'Do not touch the wire.'", 
        options: ["Let the wire not be touched.", "The wire must not touch.", "You are requested not to touch the wire.", "Let not the wire touched."], 
        correct: 0, 
        exp: "Negative imperative sentences use the structure 'Let + object + not be + past participle'." 
    },
    { 
        q: "Choose the correct passive form: 'The teacher gave him a book.'", 
        options: ["He was given a book by the teacher.", "A book is given to him by the teacher.", "He is given a book by the teacher.", "He had been given a book by the teacher."], 
        correct: 0, 
        exp: "Sentences with two objects can have two passive forms. 'He was given a book' correctly uses the indirect object as the subject in Simple Past." 
    },
    { 
        q: "Choose the correct passive form: 'One should keep one's promises.'", 
        options: ["Promises should be kept by one.", "Promises should be kept.", "One's promises are kept.", "Promises must be keep."], 
        correct: 1, 
        exp: "General statements using 'One' drop the agent in the passive voice, and 'should keep' becomes 'should be kept'." 
    },
    { 
        q: "Choose the correct active form: 'Let the door be shut.'", 
        options: ["Shut the door.", "You should shut the door.", "Please shut the door.", "The door is shut."], 
        correct: 0, 
        exp: "The passive form 'Let + object + be + past participle' reverts to a direct imperative command starting with the base verb ('Shut the door') in the active voice." 
    },
{ 
        q: "Choose the correct passive form: 'The manager will give you a ticket.'", 
        options: ["A ticket will given to you by the manager.", "You will be given a ticket by the manager.", "You will give a ticket to the manager.", "A ticket is being given to you by the manager."], 
        correct: 1, 
        exp: "This sentence has two objects ('you' and 'a ticket'). Making the personal object ('you') the subject is preferred: 'You will be given a ticket'." 
    },
    { 
        q: "Choose the correct passive form: 'Who taught you grammar?'", 
        options: ["By whom were you taught grammar?", "By who were you taught grammar?", "Who was taught grammar by you?", "By whom are you taught grammar?"], 
        correct: 0, 
        exp: "Questions starting with 'Who' change to 'By whom' in passive voice. 'Taught' is Simple Past, so we use 'were'." 
    },
    { 
        q: "Choose the correct passive form: 'Please help the poor.'", 
        options: ["Let the poor be helped.", "You are requested to help the poor.", "The poor should be helped.", "You are ordered to help the poor."], 
        correct: 1, 
        exp: "Imperative sentences starting with 'Please' are changed to passive by adding 'You are requested to'." 
    },
    { 
        q: "Choose the correct passive form: 'They are building a new bridge.'", 
        options: ["A new bridge is built by them.", "A new bridge has been built by them.", "A new bridge was being built by them.", "A new bridge is being built by them."], 
        correct: 3, 
        exp: "Present Continuous active ('are building') changes to 'is/are being + past participle' ('is being built') in the passive." 
    },
    { 
        q: "Choose the correct passive form: 'We must respect the elders.'", 
        options: ["The elders must be respected.", "The elders must respect us.", "The elders should respected by us.", "The elders are respected by us."], 
        correct: 0, 
        exp: "Sentences with modal verbs (must, can, should) form the passive using 'modal + be + past participle'. The vague agent 'by us' is usually omitted." 
    },
    { 
        q: "Choose the correct passive form: 'His behavior surprised me.'", 
        options: ["I was surprised by his behavior.", "I was surprised at his behavior.", "I am surprised at his behavior.", "His behavior was surprised to me."], 
        correct: 1, 
        exp: "The verb 'surprise' takes the preposition 'at' instead of 'by' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'The rose smells sweet.'", 
        options: ["The rose is sweet when it smells.", "The rose is smelt sweet.", "The rose is sweet when it is smelt.", "Sweet is smelt by the rose."], 
        correct: 2, 
        exp: "This is a quasi-passive verb. The structure is 'Subject + be verb + adjective + when + pronoun + be verb + past participle'." 
    },
    { 
        q: "Choose the correct passive form: 'Did the noise frighten you?'", 
        options: ["Were you frightened by the noise?", "Was you frightened by the noise?", "Are you frightened by the noise?", "Did you frighten the noise?"], 
        correct: 0, 
        exp: "'Did' indicates Simple Past tense. The passive form starts with 'Were' (because the new subject is 'you') followed by the past participle." 
    },
    { 
        q: "Choose the correct passive form: 'One must do one's duty.'", 
        options: ["One's duty must be done by one.", "Duty must be done.", "Duty must do.", "One must be done by duty."], 
        correct: 1, 
        exp: "When the subject is a general pronoun like 'one', it is omitted in the passive voice along with its possessive form." 
    },
    { 
        q: "Choose the correct active form: 'Has your question been answered by anybody?'", 
        options: ["Did anybody answer your question?", "Has anybody answered your question?", "Does anybody answer your question?", "Is anybody answering your question?"], 
        correct: 1, 
        exp: "The passive uses 'Has... been answered', which is Present Perfect. The active form must also be Present Perfect: 'Has anybody answered...'." 
    },
    { 
        q: "Choose the correct passive form: 'They laughed at the poor beggar.'", 
        options: ["The poor beggar was laughed by them.", "The poor beggar was laughed at by them.", "The poor beggar is laughed at by them.", "The poor beggar was being laughed at by them."], 
        correct: 1, 
        exp: "When an active verb is followed by a preposition ('laughed at'), the preposition must be retained in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'I have to do it.'", 
        options: ["It has to be done by me.", "It had to be done by me.", "It is done by me.", "It has been done by me."], 
        correct: 0, 
        exp: "The structure 'have/has to + verb' changes to 'have/has to be + past participle' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'He teaches us English.'", 
        options: ["English is taught to us by him.", "We are taught English by him.", "Both A and B", "None of the above"], 
        correct: 2, 
        exp: "Because there are two objects ('us' and 'English'), both forms are grammatically correct." 
    },
    { 
        q: "Choose the correct passive form: 'This jar contains milk.'", 
        options: ["Milk is contained by this jar.", "Milk was contained in this jar.", "Milk is contained in this jar.", "Milk is containing in this jar."], 
        correct: 2, 
        exp: "The verb 'contain' takes the preposition 'in' instead of 'by' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'Nobody can solve this puzzle.'", 
        options: ["This puzzle can be solved by nobody.", "This puzzle cannot be solved.", "This puzzle could not be solved.", "This puzzle cannot solved."], 
        correct: 1, 
        exp: "When the subject is 'nobody' or 'no one', the passive verb must be made negative ('cannot be solved') and the agent is dropped." 
    },
    { 
        q: "Choose the correct active form: 'You are advised to work hard.'", 
        options: ["Work hard.", "Please work hard.", "You must work hard.", "Let work be hard."], 
        correct: 0, 
        exp: "'You are advised to' is used to make the passive of an imperative sentence that gives advice." 
    },
    { 
        q: "Choose the correct passive form: 'They will have completed the stadium by next month.'", 
        options: ["The stadium will have completed by next month.", "The stadium will have been completed by next month.", "The stadium would have been completed by next month.", "The stadium will be completed by next month."], 
        correct: 1, 
        exp: "The Future Perfect ('will have completed') changes to 'will have been completed' in the passive." 
    },
    { 
        q: "Choose the correct passive form: 'Why did he punish you?'", 
        options: ["Why were you punished by him?", "Why was you punished by him?", "Why are you punished by him?", "Why had you been punished by him?"], 
        correct: 0, 
        exp: "Wh-words remain at the beginning. 'Did' indicates Simple Past, so it changes to 'were' to match the new subject 'you'." 
    },
    { 
        q: "Choose the correct passive form: 'I saw him opening the box.'", 
        options: ["He was seen opening the box by me.", "He was seen to open the box by me.", "The box was seen opening by him.", "He is seen opening the box by me."], 
        correct: 0, 
        exp: "When a gerund ('opening') follows the object in active voice, the gerund remains unchanged in the passive." 
    },
    { 
        q: "Choose the correct passive form: 'We expect good news.'", 
        options: ["Good news is expected by us.", "Good news is expected.", "Good news was expected.", "Good news has been expected."], 
        correct: 1, 
        exp: "Simple Present tense becomes 'is/am/are + V3'. The agent 'by us' is obvious and therefore omitted." 
    },
    { 
        q: "Choose the correct passive form: 'Do you imitate others?'", 
        options: ["Are others being imitated by you?", "Are others imitated by you?", "Were others imitated by you?", "Have others been imitated by you?"], 
        correct: 1, 
        exp: "Simple Present interrogative ('Do...') changes to 'Is/Are + Subject + Past Participle' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'Circumstances forced him to resign.'", 
        options: ["He was forced to resign by circumstances.", "He is forced to resign by circumstances.", "He had been forced to resign by circumstances.", "Circumstances were forced to resign him."], 
        correct: 0, 
        exp: "'Forced' is Simple Past, so the passive uses 'was forced'. The infinitive 'to resign' remains unchanged." 
    },
    { 
        q: "Choose the correct passive form: 'Honey tastes sweet.'", 
        options: ["Honey is sweet when it is tasted.", "Honey is tasted sweet.", "Sweet is tasted by honey.", "Honey is sweet when tasted."], 
        correct: 0, 
        exp: "This is a classic quasi-passive sentence. The formula is: Subject + verb 'to be' + adjective + when it is + past participle." 
    },
    { 
        q: "Choose the correct passive form: 'It is time to ring the bell.'", 
        options: ["It is time for the bell to ring.", "It is time for the bell to be rung.", "The bell is time to be rung.", "It was time for the bell to be rung."], 
        correct: 1, 
        exp: "Sentences starting with 'It is time to...' change to 'It is time for + object + to be + past participle'." 
    },
    { 
        q: "Choose the correct passive form: 'The smoke filled the room.'", 
        options: ["The room was filled by the smoke.", "The room is filled with the smoke.", "The room was filled with the smoke.", "The room filled with smoke."], 
        correct: 2, 
        exp: "The verb 'fill' usually takes the preposition 'with' instead of 'by' in the passive voice." 
    },
    { 
        q: "Choose the correct active form: 'Let the light be switched off.'", 
        options: ["Switch off the light.", "Please switch off the light.", "You should switch off the light.", "The light must be switched off."], 
        correct: 0, 
        exp: "The 'Let + object + be + V3' format is the passive voice for a direct imperative command ('Switch off the light')." 
    },
    { 
        q: "Choose the correct passive form: 'They are to start a new business.'", 
        options: ["A new business is to be started by them.", "A new business was to be started by them.", "A new business has to be started by them.", "A new business is being started by them."], 
        correct: 0, 
        exp: "The 'am/is/are + to + verb' structure becomes 'am/is/are + to be + past participle' in the passive voice." 
    },
    { 
        q: "Choose the correct passive form: 'Everyone considers him a genius.'", 
        options: ["He is considered a genius by everyone.", "He is considered a genius.", "A genius is considered by him.", "He was considered a genius."], 
        correct: 1, 
        exp: "Simple Present ('considers') becomes 'is considered'. The vague agent 'by everyone' is omitted." 
    },
    { 
        q: "Choose the correct passive form: 'I am reading an interesting book.'", 
        options: ["An interesting book was being read by me.", "An interesting book is read by me.", "An interesting book is being read by me.", "An interesting book has been read by me."], 
        correct: 2, 
        exp: "Present Continuous ('am reading') becomes 'is/am/are + being + past participle' ('is being read')." 
    },
    { 
        q: "Choose the correct passive form: 'Women like men to flatter them.'", 
        options: ["Men are liked by women to flatter them.", "Women like to be flattered by men.", "Women are liked to be flattered by men.", "Women like that men should flatter them."], 
        correct: 1, 
        exp: "In complex structures like this, the infinitive phrase ('to flatter them') is converted into the passive infinitive ('to be flattered')." 
    },
{ 
        q: "Choose the correct passive form: 'The police arrested the thief near the market.'", 
        options: ["The thief was arrested near the market by the police.", "The thief was arrested near the market.", "The thief had been arrested near the market.", "The thief is arrested near the market by the police."], 
        correct: 1, 
        exp: "In sentences where the agent is obvious or conventional (like 'the police' arresting someone), the 'by the police' agent phrase is routinely dropped for a cleaner passive structure." 
    },
    { 
        q: "Choose the correct passive form: 'They are painting the house green.'", 
        options: ["The house is painted green by them.", "The house is being painted green by them.", "The house was being painted green.", "The house has been painted green by them."], 
        correct: 1, 
        exp: "Present Continuous Active ('are painting') becomes 'is/are being + V3' ('is being painted'). The objective complement ('green') stays right beside the main verb." 
    },
    { 
        q: "Choose the correct passive form: 'You should have informed me earlier.'", 
        options: ["I should have informed earlier by you.", "I should have been informed earlier.", "I ought to have been informed earlier.", "I must have been informed earlier by you."], 
        correct: 1, 
        exp: "The modal perfect structure 'should have + V3' changes to 'should have been + V3' in the passive voice. The agent 'by you' can be omitted." 
    },
    { 
        q: "Choose the correct passive form: 'We saw the storm destroying the crops.'", 
        options: ["The storm was seen destroying the crops by us.", "The crops were seen being destroyed by the storm.", "The storm was seen to destroy the crops.", "The storm had been seen destroying the crops."], 
        correct: 0, 
        exp: "Keep the main participle construction intact. 'We saw the storm' turns to 'The storm was seen', followed naturally by the relative phrase 'destroying the crops'." 
    },
    { 
        q: "Choose the correct passive form: 'The book interested me greatly.'", 
        options: ["I was interested by the book greatly.", "I was interested in the book greatly.", "I had been interested in the book greatly.", "I was interested with the book greatly."], 
        correct: 1, 
        exp: "The passive form of the verb 'interest' is coupled with the fixed idiomatic preposition 'in', rather than the standard 'by'." 
    },
    { 
        q: "Choose the correct passive form: 'Do you expect your brother to arrive today?'", 
        options: ["Is your brother expected to arrive today by you?", "Is your brother expected by you arriving today?", "Was your brother expected to arrive today?", "Does your brother expected to arrive today by you?"], 
        correct: 0, 
        exp: "Simple present interrogative structures change 'Do/Does + Subject + Verb' into 'Is/Are + Subject + Past Participle'." 
    },
    { 
        q: "Choose the correct passive form: 'He made me wash his car.'", 
        options: ["I was made wash his car by him.", "I was made to wash his car by him.", "His car was made to wash by me.", "I am made to wash his car by him."], 
        correct: 1, 
        exp: "The active verb 'make' takes a bare infinitive ('wash'), but when transformed into the passive voice, it requires a full 'to-infinitive' ('to wash')." 
    },
    { 
        q: "Choose the correct passive form: 'An elegant lady coordinates our event.'", 
        options: ["Our event was coordinated by an elegant lady.", "Our event is coordinated by an elegant lady.", "Our event has been coordinated by an elegant lady.", "Our event is being coordinated by an elegant lady."], 
        correct: 1, 
        exp: "The simple present active verb 'coordinates' converts into 'is coordinated' because 'our event' is a singular, third-person object." 
    },
    { 
        q: "Choose the correct active form: 'Mistakes are often made by beginners.'", 
        options: ["Beginners often make mistakes.", "Beginners often made mistakes.", "Beginners are often making mistakes.", "Beginners have often made mistakes."], 
        correct: 0, 
        exp: "The auxiliary pair 'are made' shows a standard present simple passive layout, which cleanly converts back to the base present tense verb 'make'." 
    },
    { 
        q: "Choose the correct passive form: 'They selected him chairman of the committee.'", 
        options: ["He was selected chairman of the committee by them.", "He selected chairman of the committee by them.", "Chairman of the committee was selected him.", "He has been selected chairman of the committee."], 
        correct: 0, 
        exp: "The active simple past verb 'selected' converts into 'was selected'. The noun phrase 'chairman of the committee' functions as the objective complement and stays in place." 
    },
    { 
        q: "Choose the correct active form: 'A target must be achieved at any cost.'", 
        options: ["One must achieve a target at any cost.", "One should achieve a target at any cost.", "We can achieve a target at any cost.", "One must be achieving a target at any cost."], 
        correct: 0, 
        exp: "When the agent is unmentioned in a modal passive layout ('must be achieved'), we introduce an indefinite placeholder subject like 'One' or 'We' to step into the active layout." 
    },
    { 
        q: "Choose the correct passive form: 'Does she write poetry?'", 
        options: ["Is poetry written by her?", "Poetry is written by her?", "Was poetry written by her?", "Has poetry been written by her?"], 
        correct: 0, 
        exp: "Interrogative simple present sentences map directly to an active 'Is/Are + Object + V3?' passive structure." 
    },
    { 
        q: "Choose the correct passive form: 'The structural noise completely drove me crazy.'", 
        options: ["I was completely driven crazy by the structural noise.", "I is completely driven crazy by the structural noise.", "I was completely drove crazy by the structural noise.", "I had been completely driven crazy by the structural noise."], 
        correct: 0, 
        exp: "Simple past active ('drove') maps directly to the first person singular past auxiliary form 'was driven'." 
    },
    { 
        q: "Choose the correct active form: 'Let the truth be spoken.'", 
        options: ["Speak the truth.", "You must speak the truth.", "Please speak the truth.", "The truth should speak."], 
        correct: 0, 
        exp: "An imperative passive layout formatted with 'Let + Object + be + V3' simplifies down directly into a simple imperative base command ('Speak the truth')." 
    },
    { 
        q: "Choose the correct passive form: 'The scientific team had recorded the data accurately.'", 
        options: ["The data was recorded accurately by the scientific team.", "The data has been recorded accurately by the scientific team.", "The data had been recorded accurately by the scientific team.", "The data had recorded accurately."], 
        correct: 2, 
        exp: "The active past perfect verb combination 'had recorded' transitions seamlessly to 'had been recorded' in passive voice alignments." 
    },
    { 
        q: "Choose the correct passive form: 'The security guards are checking the identification parameters.'", 
        options: ["The identification parameters are checked by the security guards.", "The identification parameters are being checked by the security guards.", "The identification parameters were being checked by the security guards.", "The identification parameters have been checked."], 
        correct: 1, 
        exp: "Present continuous active ('are checking') transforms directly into a plural matching present structure: 'are being checked'." 
    },
    { 
        q: "Choose the correct passive form: 'No one has ever climbed this steep mountain side.'", 
        options: ["This steep mountain side has ever been climbed by no one.", "This steep mountain side has never been climbed.", "This steep mountain side was never climbed.", "This steep mountain side had never been climbed."], 
        correct: 1, 
        exp: "Active subjects indicating absolute negatives like 'No one' convert the affirmative auxiliary sequence into a clean passive negative string ('has never been climbed')." 
    },
    { 
        q: "Choose the correct active form: 'We were terrified by the thunderous lightning strikes.'", 
        options: ["The thunderous lightning strikes terrify us.", "The thunderous lightning strikes terrified us.", "The thunderous lightning strikes were terrifying us.", "The thunderous lightning strikes had terrified us."], 
        correct: 1, 
        exp: "The compound past passive auxiliary arrangement 'were terrified' signals that the original active sentence was structured in the basic simple past tense ('terrified')." 
    },
    { 
        q: "Choose the correct passive form: 'They will announce the official results tomorrow afternoon.'", 
        options: ["The official results will announce tomorrow afternoon.", "The official results will be announced tomorrow afternoon.", "The official results would be announced tomorrow afternoon.", "The official results are announced tomorrow afternoon."], 
        correct: 1, 
        exp: "Future simple active ('will announce') matches perfectly with the modal helper extension 'will be announced' in standard passive voice text." 
    },
    { 
        q: "Choose the correct passive form: 'The novel completely absorbed my attention.'", 
        options: ["My attention was completely absorbed by the novel.", "My attention was completely absorbed in the novel.", "My attention is completely absorbed in the novel.", "My attention was completely absorbing the novel."], 
        correct: 1, 
        exp: "The verb 'absorb' is highly idiomatic and uniquely pairs up with the specific functional preposition 'in' rather than 'by' across passive environments." 
    },
    { 
        q: "Choose the correct active form: 'Was a sweet song sung by her?'", 
        options: ["Did she sing a sweet song?", "Does she sing a sweet song?", "Is she singing a sweet song?", "Has she sung a sweet song?"], 
        correct: 0, 
        exp: "The question format 'Was + Subject + V3?' indicates simple past alignment, matching perfectly to an active query framework initiated with the auxiliary 'Did'." 
    },
    { 
        q: "Choose the correct passive form: 'You can complete this task easily.'", 
        options: ["This task can completed easily.", "This task can be completed easily.", "This task could be completed easily.", "This task is able to be completed easily."], 
        correct: 1, 
        exp: "Active modal auxiliary expressions like 'can + verb' adjust directly into the expanded matching passive format 'can be + past participle'." 
    },
    { 
        q: "Choose the correct passive form: 'People say that the old house is haunted.'", 
        options: ["The old house is said to be haunted.", "It is said by people that the old house is haunted.", "Both A and B are correct.", "The old house was said to be haunted."], 
        correct: 2, 
        exp: "Sentences containing general reporting matrix clauses ('People say...') can be formatted either impersonally with 'It is said that...' or personally by turning the embedded clause subject into the primary matrix subject ('The old house is said to be...')." 
    },
    { 
        q: "Choose the correct active form: 'The rules must be followed by everyone.'", 
        options: ["Everyone must follow the rules.", "Everyone should follow the rules.", "Everyone must be following the rules.", "Everyone has to follow the rules."], 
        correct: 0, 
        exp: "The passive modal framework 'must be followed' effortlessly maps right back onto the original unextended active modal layout 'must follow'." 
    },
    { 
        q: "Choose the correct passive form: 'I keep my books in the drawer.'", 
        options: ["My books are kept in the drawer by me.", "My books were kept in the drawer by me.", "My books has been kept in the drawer.", "My books are keeping in the drawer."], 
        correct: 0, 
        exp: "The standard active simple present layout ('keep') naturally triggers a plural plural-matching present alignment: 'are kept'." 
    },
    { 
        q: "Choose the correct active form: 'The field was being plowed by the ancient farmer.'", 
        options: ["The ancient farmer plowed the field.", "The ancient farmer is plowing the field.", "The ancient farmer was plowing the field.", "The ancient farmer had been plowing the field."], 
        correct: 2, 
        exp: "The continuous structural configuration helper tracking inside 'was being plowed' signals a direct lineage back to a progressive past active tense layout ('was plowing')." 
    },
    { 
        q: "Choose the correct passive form: 'They call the lion the king of the jungle.'", 
        options: ["The lion is called the king of the jungle by them.", "The lion is called the king of the jungle.", "The lion was called the king of the jungle.", "The king of the jungle is called the lion."], 
        correct: 1, 
        exp: "General structural facts where the primary subject indicator isn't focused typically discard vague optional terminal pronouns like 'by them'." 
    },
    { 
        q: "Choose the correct active form: 'By whom was this beautiful painting made?'", 
        options: ["Who makes this beautiful painting?", "Who made this beautiful painting?", "Who has made this beautiful painting?", "Who was making this beautiful painting?"], 
        correct: 1, 
        exp: "The standard structural passive dynamic indicator pair 'By whom was... made' correlates securely to a standard interrogative simple past query configuration starting with 'Who'." 
    },
    { 
        q: "Choose the correct passive form: 'The children have eaten all the cookies.'", 
        options: ["All the cookies were eaten by the children.", "All the cookies have been eaten by the children.", "All the cookies had been eaten by the children.", "All the cookies are eaten by the children."], 
        correct: 1, 
        exp: "The active present perfect configuration layout ('have eaten') shifts perfectly into an equivalent passive form tracking a plural subject: 'have been eaten'." 
    },
    { 
        q: "Choose the correct passive form: 'Do not ignore the instructions.'", 
        options: ["Let the instructions be not ignored.", "Let the instructions not be ignored.", "The instructions must not ignore.", "You are requested not to ignore the instructions."], 
        correct: 1, 
        exp: "Negative imperative instruction blocks map onto passive expressions styled cleanly around the core formula 'Let + Object + not + be + V3'." 
    },
    { 
        q: "Choose the correct passive form: 'The police caught him stealing the car.'", 
        options: ["He was caught stealing the car by the police.", "He was caught stealing the car.", "The car was caught stealing by him.", "He had been caught stealing the car."], 
        correct: 1, 
        exp: "Simple past active ('caught') translates to 'was caught'. The conventional agent 'by the police' is omitted, and the participle phrase 'stealing the car' follows naturally." 
    },
    { 
        q: "Choose the correct passive form: 'I remember my sister taking me to the museum.'", 
        options: ["I remember taking me to the museum by my sister.", "I remember being taken to the museum by my sister.", "I remember my sister being taken to the museum.", "I am remembered being taken to the museum by my sister."], 
        correct: 1, 
        exp: "When a gerund construction ('taking me') is used after active verbs like 'remember' or 'like', it converts into a passive gerund phrase ('being taken') retaining its logical agent." 
    },
    { 
        q: "Choose the correct passive form: 'He likes people to praise him.'", 
        options: ["He likes to be praised.", "He likes being praised by people.", "He likes people being praised.", "He is liked to be praised by people."], 
        correct: 0, 
        exp: "The active infinitive statement ('to praise him') shifts into the clean passive infinitive layout ('to be praised'). The generic agent 'by people' is dropped." 
    },
    { 
        q: "Choose the correct passive form: 'It is impossible to do this task.'", 
        options: ["This task is impossible to do.", "This task is impossible to be done.", "It is impossible for this task to be done.", "To do this task is impossible."], 
        correct: 2, 
        exp: "Sentences constructed as 'It is adjective + to-infinitive' transform into 'It is adjective + for + object + to be + V3'." 
    },
    { 
        q: "Choose the correct passive form: 'The structural walls of the valley echo their voices.'", 
        options: ["Their voices were echoed by the structural walls of the valley.", "Their voices are echoed by the structural walls of the valley.", "Their voices are being echoed by the structural walls.", "Their voices have been echoed by the valley walls."], 
        correct: 1, 
        exp: "The active verb 'echo' is in the simple present tense. It maps to the plural matching present passive auxiliary string 'are echoed' matching the subject 'Their voices'." 
    },
    { 
        q: "Choose the correct passive form: 'We fought a wonderful fight.'", 
        options: ["A wonderful fight was fought by us.", "A wonderful fight is fought by us.", "A wonderful fight had been fought.", "A wonderful fight fought us."], 
        correct: 0, 
        exp: "'Fight' acts here as a cognate object to the simple past verb 'fought'. In the passive conversion, the cognate object shifts to the front followed by 'was fought'." 
    },
    { 
        q: "Choose the correct passive form: 'The authority down inside the facility maintains perfect discipline.'", 
        options: ["Perfect discipline was maintained inside the facility.", "Perfect discipline is maintained by the facility authority.", "Perfect discipline has been maintained by the authority.", "Perfect discipline is being maintained."], 
        correct: 1, 
        exp: "Simple present active layouts ('maintains') map straight to the singular present passive layout 'is maintained' followed by its specific agent modifier." 
    },
    { 
        q: "Choose the correct active form: 'The fields are watered by a complex network of pipes.'", 
        options: ["A complex network of pipes waters the fields.", "A complex network of pipes watered the fields.", "A complex network of pipes is watering the fields.", "A complex network of pipes has watered the fields."], 
        correct: 0, 
        exp: "The passive verb combo 'are watered' tells us the base active sentence must utilize a simple present third-person singular tense matching its true subject ('waters')." 
    },
    { 
        q: "Choose the correct passive form: 'They declared the matching framework absolute verification.'", 
        options: ["The matching framework was declared absolute verification.", "The matching framework is declared absolute verification.", "The matching framework had been declared absolute verification.", "Absolute verification was declared by them."], 
        correct: 0, 
        exp: "Simple past active structures ('declared') become 'was declared'. The secondary structure ('absolute verification') remains safely behind the past participle as an objective complement." 
    },
    { 
        q: "Choose the correct active form: 'This heavy stone cannot be lifted by a child.'", 
        options: ["A child cannot lift this heavy stone.", "A child could not lift this heavy stone.", "A child should not lift this heavy stone.", "A child is unable to lift this heavy stone."], 
        correct: 0, 
        exp: "The modal passive constraint string 'cannot be lifted' reverts neatly back to its simpler default active declarative framework: 'cannot lift'." 
    },
    { 
        q: "Choose the correct passive form: 'Did the delivery agent drop the package?'", 
        options: ["Was the package dropped by the delivery agent?", "Is the package dropped by the delivery agent?", "Had the package been dropped by the delivery agent?", "Was the package drop by the delivery agent?"], 
        correct: 0, 
        exp: "A simple past question initiated with 'Did' modifies into the passive interrogative format: 'Was/Were + New Subject + V3?'" 
    },
    { 
        q: "Choose the correct active form: 'He was seen to cross the high security barrier.'", 
        options: ["Someone saw him cross the high security barrier.", "Someone sees him cross the high security barrier.", "Someone has seen him cross the high security barrier.", "Someone saw him to cross the barrier."], 
        correct: 0, 
        exp: "Verbs of perception like 'see' take a full to-infinitive in the passive voice ('was seen to cross'), but return to a bare infinitive layout ('saw him cross') in the active voice." 
    },
    { 
        q: "Choose the correct passive form: 'The intense heat melted the structural core layer.'", 
        options: ["The structural core layer is melted by the intense heat.", "The structural core layer was melted by the intense heat.", "The structural core layer had been melted by the heat.", "The structural core layer was being melted."], 
        correct: 1, 
        exp: "Simple past active alignments ('melted') map immediately over to the singular past passive string configuration: 'was melted'." 
    },
    { 
        q: "Choose the correct active form: 'Let the parameters be executed properly.'", 
        options: ["Execute the parameters properly.", "You must execute the parameters properly.", "Please execute the parameters properly.", "The parameters execute properly."], 
        correct: 0, 
        exp: "The passive imperative model 'Let + Subject + be + V3' switches straight back into a standard root imperative base active framework starting with the raw action verb ('Execute')." 
    },
    { 
        q: "Choose the correct passive form: 'The database script has generated errors.'", 
        options: ["Errors were generated by the database script.", "Errors have been generated by the database script.", "Errors had been generated by the database script.", "Errors are generated by the script."], 
        correct: 1, 
        exp: "The active present perfect verb helper combination 'has generated' shifts over to 'have been generated' to properly agree with the plural plural-matching target subject 'Errors'." 
    },
    { 
        q: "Choose the correct passive form: 'We must listen to his explanation.'", 
        options: ["His explanation must be listened.", "His explanation must be listened to.", "His explanation should be listened by us.", "His explanation must have been listened to."], 
        correct: 1, 
        exp: "Prepositional group attachments tied directly onto active root verbs ('listen to') must remain firmly fixed directly to the verb inside the passive transformation ('listened to')." 
    },
    { 
        q: "Choose the correct passive form: 'No one has ever cracked this secure verification code.'", 
        options: ["This secure verification code has ever been cracked by no one.", "This secure verification code has never been cracked.", "This secure verification code was never cracked.", "This secure verification code had never been cracked."], 
        correct: 1, 
        exp: "Absolute negative active subjects like 'No one' convert the passive auxiliary chain into an explicit, neat negative representation ('has never been cracked')." 
    },
    { 
        q: "Choose the correct active form: 'The data transmission route was altered by the network.'", 
        options: ["The network alters the data transmission route.", "The network altered the data transmission route.", "The network has altered the data transmission route.", "The network was altering the data transmission route."], 
        correct: 1, 
        exp: "The single past passive auxiliary layout component inside 'was altered' mandates that the original active structure uses the simple past form ('altered')." 
    },
    { 
        q: "Choose the correct passive form: 'The routing framework dictates the data stream destination.'", 
        options: ["The data stream destination was dictated by the routing framework.", "The data stream destination is dictated by the routing framework.", "The data stream destination has been dictated.", "The data stream destination is being dictated."], 
        correct: 1, 
        exp: "The active regular simple present indicator string 'dictates' translates across into a clean singular matching present string target: 'is dictated'." 
    },
    { 
        q: "Choose the correct passive form: 'They made him cross the boundary checkpoint.'", 
        options: ["He was made cross the boundary checkpoint by them.", "He was made to cross the boundary checkpoint by them.", "The boundary checkpoint was made to cross by him.", "He is made to cross the boundary checkpoint."], 
        correct: 1, 
        exp: "The verb 'make' is followed by a bare infinitive in the active voice, but expands out to take a full complete 'to-infinitive' ('to cross') when written in the passive voice." 
    },
    {"q":"Change to Passive: The teacher teaches grammar.","options":["Grammar is taught by the teacher.","Grammar was taught by the teacher.","Grammar is being taught by the teacher.","Grammar has been taught by the teacher."],"correct":0,"exp":"Simple present passive: is/am/are + V3."},
    {"q":"Change to Passive: She wrote a letter.","options":["A letter was written by her.","A letter is written by her.","A letter has been written by her.","A letter was being written by her."],"correct":0,"exp":"Simple past passive: was/were + V3."},
    {"q":"Change to Passive: They are building a house.","options":["A house is being built by them.","A house was being built by them.","A house is built by them.","A house has been built by them."],"correct":0,"exp":"Present continuous passive: is/am/are + being + V3."},
    {"q":"Change to Passive: I have completed the task.","options":["The task has been completed by me.","The task was completed by me.","The task is completed by me.","The task had been completed by me."],"correct":0,"exp":"Present perfect passive: has/have + been + V3."},
    {"q":"Change to Active: A book was bought by him.","options":["He bought a book.","He buys a book.","He has bought a book.","He was buying a book."],"correct":0,"exp":"Simple past passive reverses to simple past active."},
    {"q":"Change to Passive: Shut the door.","options":["Let the door be shut.","The door should shut.","Shut the door let it be.","Let door shut."],"correct":0,"exp":"Imperative passive: Let + object + be + V3."},
    {"q":"Change to Passive: Who wrote this book?","options":["By whom was this book written?","Who was this book written by?","By whom is this book written?","Both A and B"],"correct":3,"exp":"Both 'By whom...' and 'Who was...by' are grammatically correct passive interrogatives."},
    {"q":"Change to Passive: People speak English all over the world.","options":["English is spoken all over the world.","English was spoken all over the world.","English is being spoken all over the world.","English is spoken by people all over the world."],"correct":0,"exp":"General agent 'people' is omitted in passive."},
    {"q":"Change to Passive: Someone stole my purse.","options":["My purse was stolen.","My purse is stolen.","My purse has been stolen.","My purse was stolen by someone."],"correct":0,"exp":"Indefinite agent 'someone' is omitted in passive."},
    {"q":"Change to Passive: The police caught the thief.","options":["The thief was caught by the police.","The thief is caught by the police.","The thief has been caught by the police.","The thief caught by police."],"correct":0,"exp":"Simple past passive."},
    {"q":"Change to Passive: They will announce the results tomorrow.","options":["The results will be announced tomorrow.","The results would be announced tomorrow.","The results will announce tomorrow.","The results are announced tomorrow."],"correct":0,"exp":"Simple future passive: will be + V3."},
    {"q":"Change to Active: The match is being watched by us.","options":["We are watching the match.","We watch the match.","We watched the match.","We have been watching the match."],"correct":0,"exp":"Present continuous active."},
    {"q":"Change to Passive: He is painting a picture.","options":["A picture is being painted by him.","A picture was being painted by him.","A picture is painted by him.","A picture has been painted by him."],"correct":0,"exp":"Present continuous passive."},
    {"q":"Change to Passive: We must respect our elders.","options":["Our elders must be respected.","Our elders should be respected.","Our elders must respect.","Our elders are respected."],"correct":0,"exp":"Modal passive: modal + be + V3."},
    {"q":"Change to Passive: They had finished the work.","options":["The work had been finished by them.","The work has been finished by them.","The work was finished by them.","The work is finished by them."],"correct":0,"exp":"Past perfect passive: had + been + V3."},
    {"q":"Change to Passive: She can speak French.","options":["French can be spoken by her.","French could be spoken by her.","French is spoken by her.","French can speak by her."],"correct":0,"exp":"Modal passive with 'can'."},
    {"q":"Change to Passive: Open the window.","options":["Let the window be opened.","The window should open.","Let window open.","Window be opened."],"correct":0,"exp":"Imperative passive structure."},
    {"q":"Change to Passive: The boy laughed at the beggar.","options":["The beggar was laughed at by the boy.","The beggar was laughed by the boy.","The beggar is laughed at by the boy.","Beggar laughed at by boy."],"correct":0,"exp":"Keep preposition with verb in passive: 'laughed at by'."},
    {"q":"Change to Passive: I know him.","options":["He is known to me.","He is known by me.","He was known to me.","He has been known to me."],"correct":0,"exp":"Know takes 'to' instead of 'by' in passive."},
    {"q":"Change to Passive: His behavior surprised me.","options":["I was surprised at his behavior.","I was surprised by his behavior.","I am surprised at his behavior.","I was surprised with his behavior."],"correct":0,"exp":"Surprised takes 'at' for reaction to events."},
    {"q":"Change to Active: Let the letter be sent.","options":["Send the letter.","You should send letter.","The letter must send.","Send letter."],"correct":0,"exp":"Imperative active."},
    {"q":"Change to Passive: They were playing tennis.","options":["Tennis was being played by them.","Tennis is being played by them.","Tennis was played by them.","Tennis has been played by them."],"correct":0,"exp":"Past continuous passive."},
    {"q":"Change to Passive: She has bought a new car.","options":["A new car has been bought by her.","A new car was bought by her.","A new car is bought by her.","A new car had been bought by her."],"correct":0,"exp":"Present perfect passive."},
    {"q":"Change to Passive: Do not insult the poor.","options":["Let the poor not be insulted.","The poor should not insult.","Let poor not insult.","Poor is not insulted."],"correct":0,"exp":"Negative imperative passive."},
    {"q":"Change to Active: The song was sung by Gita.","options":["Gita sang the song.","Gita sings the song.","Gita has sung the song.","Gita was singing the song."],"correct":0,"exp":"Simple past active."},
    {"q":"Change the voice for statement 126: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 127: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 128: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 129: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 130: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 131: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 132: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 133: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 134: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 135: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 136: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 137: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 138: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 139: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 140: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 141: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 142: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 143: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 144: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 145: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 146: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 147: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 148: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 149: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 150: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 151: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 152: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 153: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 154: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 155: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 156: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 157: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 158: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 159: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 160: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 161: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 162: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 163: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 164: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 165: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 166: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 167: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 168: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 169: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 170: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 171: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 172: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 173: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 174: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 175: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 176: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 177: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 178: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 179: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 180: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 181: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 182: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 183: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 184: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 185: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 186: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 187: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 188: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 189: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 190: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 191: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 192: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 193: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 194: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 195: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 196: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 197: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 198: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 199: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 200: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 201: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 202: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 203: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 204: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 205: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 206: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 207: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 208: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 209: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 210: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 211: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 212: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 213: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 214: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 215: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 216: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 217: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 218: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 219: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 220: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 221: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 222: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 223: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 224: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 225: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 226: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 227: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 228: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 229: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 230: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 231: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 232: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 233: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 234: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 235: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 236: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 237: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 238: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 239: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 240: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 241: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 242: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 243: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 244: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 245: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 246: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 247: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 248: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 249: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."},
    {"q":"Change the voice for statement 250: She writes a book.","options":["A book is written by her.","A book was written by her.","A book is being written by her.","A book has been written by her."],"correct":0,"exp":"Simple present passive format is: is/am/are + V3."}
]