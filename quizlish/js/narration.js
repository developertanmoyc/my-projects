const narrationData = [
    { 
        q: "Choose the correct indirect form: Ram said, 'I am reading a grammar book.'", 
        options: ["Ram said that he is reading a grammar book.", "Ram said that he was reading a grammar book.", "Ram told that he was reading a grammar book.", "Ram said that I was reading a grammar book."], 
        correct: 1, 
        exp: "When the reporting verb is in the past tense ('said'), the present continuous tense ('am reading') changes to the past continuous tense ('was reading')." 
    },
    { 
        q: "Choose the correct indirect form: The teacher said, 'The Earth revolves around the Sun.'", 
        options: ["The teacher said that the Earth revolved around the Sun.", "The teacher told that the Earth revolves around the Sun.", "The teacher said that the Earth revolves around the Sun.", "The teacher says that the Earth revolves around the Sun."], 
        correct: 2, 
        exp: "If the reported speech expresses a universal truth or habit, its tense does not change even if the reporting verb is in the past tense." 
    },
    { 
        q: "Choose the correct indirect form: He said to me, 'Where are you going?'", 
        options: ["He asked me where I was going.", "He asked me where was I going.", "He said to me where I was going.", "He inquired me where I am going."], 
        correct: 0, 
        exp: "In interrogative sentences, 'said to' changes to 'asked'. For Wh-questions, the Wh-word itself acts as the connective, and the sentence order becomes assertive (subject + verb)." 
    },
    { 
        q: "Choose the correct indirect form: She said to her friend, 'Will you help me tomorrow?'", 
        options: ["She asked her friend if she will help her tomorrow.", "She asked her friend if she would help her the next day.", "She told her friend if she would help her the next day.", "She asked her friend whether would she help her the following day."], 
        correct: 1, 
        exp: "For Yes/No questions, 'if' or 'whether' is used as a connective. 'Will' changes to 'would', 'me' changes to 'her', and 'tomorrow' changes to 'the next day'." 
    },
    { 
        q: "Choose the correct indirect form: The doctor said to the patient, 'Take this medicine twice a day.'", 
        options: ["The doctor suggested the patient to take that medicine twice a day.", "The doctor ordered the patient to take this medicine twice a day.", "The doctor advised the patient to take that medicine twice a day.", "The doctor told the patient for taking that medicine twice a day."], 
        correct: 2, 
        exp: "In imperative sentences, the reporting verb changes to ordered/advised/requested based on context. 'This' changes to 'that', and the infinitive mood ('to + verb') is used." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Alas! I am ruined.'", 
        options: ["He exclaimed with sorrow that he was ruined.", "He exclaimed with joy that he was ruined.", "He said sorrowfully that I am ruined.", "He exclaimed that he is ruined."], 
        correct: 0, 
        exp: "Exclamatory sentences with sorrowful expressions ('Alas!') use 'exclaimed with sorrow' or 'exclaimed sadly' as the reporting verb, and the tense shifts backward." 
    },
    { 
        q: "Choose the correct indirect form: Mother said to me, 'May God bless you!'", 
        options: ["Mother wished that God might bless me.", "Mother prayed that God might bless me.", "Mother prayed that God may bless you.", "Mother asked God to bless me."], 
        correct: 1, 
        exp: "Optative sentences expressing a prayer change the reporting verb to 'prayed'. 'May' backshifts to 'might', and 'you' changes to 'me' to match the object." 
    },
    { 
        q: "Choose the correct indirect form: She says, 'I will write an essay.'", 
        options: ["She says that she would write an essay.", "She said that she will write an essay.", "She says that she will write an essay.", "She tells that she will write an essay."], 
        correct: 2, 
        exp: "If the reporting verb is in the present tense ('says') or future tense, the tense of the verb in the reported speech remains completely unchanged." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I bought a laptop yesterday.'", 
        options: ["He said that he bought a laptop the day before.", "He said that he has bought a laptop the previous day.", "He said that he had bought a laptop the previous day.", "He told that he had bought a laptop yesterday."], 
        correct: 2, 
        exp: "In past tense reporting, a simple past tense sentence ('bought') changes into the past perfect tense ('had bought'), and 'yesterday' becomes 'the previous day' or 'the day before'." 
    },
    { 
        q: "Choose the correct indirect form: The captain said to the soldiers, 'Attack the enemy outpost.'", 
        options: ["The captain ordered the soldiers to attack the enemy outpost.", "The captain advised the soldiers to attack the enemy outpost.", "The captain requested the soldiers to attack the enemy outpost.", "The captain told the soldiers that they attack the enemy outpost."], 
        correct: 0, 
        exp: "A command from a military superior naturally requires the reporting verb 'ordered' or 'commanded', followed by an infinitive clause ('to attack')." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Let us go for a walk.'", 
        options: ["He said that we should go for a walk.", "He proposed that they should go for a walk.", "He ordered them to go for a walk.", "He suggested to go for a walk."], 
        correct: 1, 
        exp: "Sentences starting with 'Let us' express a proposal or suggestion. The reporting verb changes to 'proposed' or 'suggested', and the connective 'that' is followed by 'they/we should'." 
    },
    { 
        q: "Choose the correct indirect form: 'Don't make a noise,' said the librarian to the students.", 
        options: ["The librarian told the students don't make a noise.", "The librarian forbade the students to make a noise.", "The librarian ordered the students to not make a noise.", "The librarian advised the students not making a noise."], 
        correct: 1, 
        exp: "Negative imperatives can be reported using 'forbade + object + to-infinitive' (where 'not' is dropped because 'forbade' is already negative), or 'ordered/told + object + not to'." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Can you type this document?'", 
        options: ["He asked if I can type this document.", "He asked whether I could type that document.", "He inquired if could I type that document.", "He told me if I could type that document."], 
        correct: 1, 
        exp: "An interrogative sentence structure using an auxiliary modal ('Can') changes to 'if/whether' + subject + 'could'. 'This' changes to 'that'." 
    },
    { 
        q: "Choose the correct direct form: She told me that she had lost her watch.", 
        options: ["She said to me, 'I lose my watch.'", "She said to me, 'I have lost my watch.'", "She said to me, 'I had lost my watch.'", "She says to me, 'I lost my watch.'"], 
        correct: 1, 
        exp: "Reverting from indirect to direct speech: 'had lost' (Past Perfect) typically originates from 'have lost' (Present Perfect) or 'lost' (Simple Past) in the direct form." 
    },
    { 
        q: "Choose the correct indirect form: The boy said, 'What a beautiful sight it is!'", 
        options: ["The boy exclaimed that it was a very beautiful sight.", "The boy said that it is a very beautiful sight.", "The boy exclaimed with joy that what a beautiful sight it was.", "The boy told that it was a beautiful sight."], 
        correct: 0, 
        exp: "Exclamatory sentences lose their exclamation format ('What a...') when converted to indirect speech and turn into assertive sentences using intensifiers like 'very' or 'great'." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Good morning, sir.'", 
        options: ["He said good morning to sir.", "He respectfully wished his sir good morning.", "He bid good morning to sir.", "He exclaimed good morning to the sir."], 
        correct: 1, 
        exp: "Salutations like 'Good morning' use 'wished'. Vocatives like 'sir' are converted into respectful adverbial phrases or descriptive modifiers like 'respectfully'." 
    },
    { 
        q: "Choose the correct indirect form: The stranger said to me, 'Do you know the way to the station?'", 
        options: ["The stranger asked me if I knew the way to the station.", "The stranger asked me did I know the way to the station.", "The stranger inquired me whether I know the way to the station.", "The stranger asked if did I know the way to the station."], 
        correct: 0, 
        exp: "A simple present interrogative sentence ('Do you know') drops the auxiliary 'do' and shifts into a positive simple past structure ('I knew') inside a passive question envelope." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I have been working since morning.'", 
        options: ["She said that she was working since morning.", "She said that she has been working since morning.", "She said that she had been working since morning.", "She told she had been working since morning."], 
        correct: 2, 
        exp: "Present Perfect Continuous tense structures ('have been working') backshift completely into Past Perfect Continuous structures ('had been working')." 
    },
    { 
        q: "Choose the correct indirect form: 'I will do it now,' he said.", 
        options: ["He said that he will do it then.", "He said that he would do it now.", "He said that he would do it then.", "He told that he would do it then."], 
        correct: 2, 
        exp: "'Will' shifts backward to 'would', and words expressing immediate proximity in time or place like 'now' convert to remote terms like 'then'." 
    },
    { 
        q: "Choose the correct direct form: He requested his master to forgive him.", 
        options: ["He said to his master, 'Forgive me.'", "He said to his master, 'Please forgive me.'", "He said to his master, 'You must forgive me.'", "He told his master, 'Kindly forgive him.'"], 
        correct: 1, 
        exp: "The reporting verb 'requested' indicates that the original direct quotation was an imperative expression containing a polite indicator like 'Please' or 'Kindly'." 
    },
{ 
        q: "Choose the correct indirect form: He said, 'I may buy a car next week.'", 
        options: ["He said that he might buy a car the following week.", "He said that he may buy a car next week.", "He told that he might buy a car next week.", "He said that he would buy a car the following week."], 
        correct: 0, 
        exp: "The modal 'may' changes to 'might', and 'next week' becomes 'the following week' or 'the next week' in indirect speech when the reporting verb is in the past tense." 
    },
    { 
        q: "Choose the correct indirect form: The teacher said to the boy, 'Why were you absent yesterday?'", 
        options: ["The teacher asked the boy why he was absent the previous day.", "The teacher asked the boy why he had been absent the day before.", "The teacher told the boy why he had been absent yesterday.", "The teacher questioned the boy why was he absent the day before."], 
        correct: 1, 
        exp: "The interrogative simple past tense ('were you absent') shifts back into the past perfect tense ('he had been absent'). 'Yesterday' correctly changes to 'the day before' or 'the previous day'." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'Goodbye, my friends!'", 
        options: ["She said goodbye to her friends.", "She exclaimed goodbye to her friends.", "She bade goodbye to her friends.", "She wished her friends goodbye."], 
        correct: 2, 
        exp: "When reporting salutations of farewell like 'Goodbye' or 'Farewell', the reporting verb changes to 'bade' (past tense of bid)." 
    },
    { 
        q: "Choose the correct indirect form: 'Hurrah! We won the match,' shouted the team members.", 
        options: ["The team members shouted that they won the match.", "The team members exclaimed with joy that they had won the match.", "The team members exclaimed with joy that we had won the match.", "The team members cried out that they win the match."], 
        correct: 1, 
        exp: "The exclamatory phrase 'Hurrah!' changes to 'exclaimed with joy'. The simple past tense ('won') shifts back to the past perfect tense ('had won')." 
    },
    { 
        q: "Choose the correct indirect form: Father said, 'Honesty is the best policy.'", 
        options: ["Father said that honesty was the best policy.", "Father said that honesty is the best policy.", "Father told that honesty is the best policy.", "Father strongly suggested that honesty is the best policy."], 
        correct: 1, 
        exp: "Proverbs, idioms, and philosophical principles are treated as universal truths, meaning their verb tenses remain unchanged in indirect speech." 
    },
    { 
        q: "Choose the correct indirect form: He said to me, 'Don't lean against this painted wall.'", 
        options: ["He told me not to lean against that painted wall.", "He forbade me to lean against that painted wall.", "Both A and B are correct.", "He ordered me to not lean against this painted wall."], 
        correct: 2, 
        exp: "Negative imperatives can be formed using 'told/ordered + not to' or by using the inherently negative reporting verb 'forbade' with a positive infinitive. 'This' transforms into 'that'." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'What a clever trap it is!'", 
        options: ["She exclaimed that it was a very clever trap.", "She said that it is a very clever trap.", "She exclaimed with surprise that what a clever trap it was.", "She told that it was a clever trap."], 
        correct: 0, 
        exp: "An exclamation checking a structure ('What a...') transforms into an assertive structure utilizing 'a very' or 'a highly'. The present tense 'is' shifts to 'was'." 
    },
    { 
        q: "Choose the correct indirect form: The officer said to the clerk, 'Show me the files immediately.'", 
        options: ["The officer requested the clerk to show him the files immediately.", "The officer ordered the clerk to show him the files immediately.", "The officer advised the clerk to show me the files immediately.", "The officer told the clerk that he should show him the files immediately."], 
        correct: 1, 
        exp: "Based on official hierarchy, the directive turns into an order ('ordered'), followed by the structure 'to + infinitive'. The personal pronoun 'me' shifts to 'him'." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I must leave immediately.'", 
        options: ["He said that he must leave immediately.", "He said that he had to leave immediately.", "Both A and B can be correct depending on context.", "He said that he would leave immediately."], 
        correct: 2, 
        exp: "In reported speech, 'must' can remain 'must' if it represents a permanent rule or immediate constraint, or shift to 'had to' to express specific past necessity." 
    },
    { 
        q: "Choose the correct direct form: The girl asked whether anyone was inside the room.", 
        options: ["The girl said, 'Is anyone inside the room?'", "The girl said, 'Was anyone inside the room?'", "The girl asked, 'If anyone is inside the room?'", "The girl said, 'Anyone is inside the room?'"], 
        correct: 0, 
        exp: "Reverting to direct speech: the connective 'whether' shows it was a Yes/No question, and the past continuous tense ('was') reverts back to simple present tense ('Is')." 
    },
    { 
        q: "Choose the correct indirect form: The boy said to his mother, 'I am hungry now.'", 
        options: ["The boy told his mother that he was hungry now.", "The boy told his mother that he was hungry then.", "The boy said to his mother that he is hungry then.", "The boy complained to his mother that he had been hungry then."], 
        correct: 1, 
        exp: "The reporting verb 'said to' becomes 'told' followed by the object. The pronoun shifts to 'he', the tense shifts to past ('was'), and 'now' converts to 'then'." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'If I meet him, I will give him the note.'", 
        options: ["He said that if he meets him, he will give him the note.", "He said that if he met him, he would give him the note.", "He said that if he had met him, he would have given him the note.", "He told that if he met him, he will give him the note."], 
        correct: 1, 
        exp: "In simple conditional sentences (Type 1), past reporting shifts the clauses into Type 2 structures: simple present ('meet') maps to simple past ('met'), and 'will' becomes 'would'." 
    },
    { 
        q: "Choose the correct indirect form: 'Can you swim?' she said to the child.", 
        options: ["She asked the child if he can swim.", "She asked the child if he could swim.", "She told the child whether he could swim.", "She inquired the child if could he swim."], 
        correct: 1, 
        exp: "The modal 'Can' shifts to 'could'. The interrogative pattern tracks an assertive clause arrangement ('he could swim') inside an 'if' envelope." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Thank you for the wonderful gift.'", 
        options: ["He said thank you for the wonderful gift.", "He thanked me for the wonderful gift.", "He told me thank you for the wonderful gift.", "He praised me for the wonderful gift."], 
        correct: 1, 
        exp: "Expressions of gratitude like 'Thank you' are best reported by converting the greeting directly into the reporting verb itself ('He thanked me')." 
    },
    { 
        q: "Choose the correct direct form: He suggested that they should buy a new house.", 
        options: ["He said, 'Let us buy a new house.'", "He said, 'We should buy a new house.'", "He said, 'Why don't we buy a new house?'", "All of the above can convert to this indirect form."], 
        correct: 3, 
        exp: "Expressions that introduce ideas or proposals ('Let's...', 'We should...', 'Why don't we...') all accurately resolve to 'suggested/proposed that they should' in indirect syntax." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I have been planning this journey for months.'", 
        options: ["She said that she was planning this journey for months.", "She said that she had been planning this journey for months.", "She said that she had been planning that journey for months.", "She told that she has been planning that journey for months."], 
        correct: 2, 
        exp: "Present perfect continuous ('have been planning') maps to past perfect continuous ('had been planning'). Additionally, the proximal adjective 'this' must change to 'that'." 
    },
    { 
        q: "Choose the correct indirect form: The supervisor said, 'Do not touch the high-voltage terminal.'", 
        options: ["The supervisor ordered us not to touch the high-voltage terminal.", "The supervisor forbade us from touching the high-voltage terminal.", "The supervisor warned us not to touch the high-voltage terminal.", "All of the above are valid indirect representations."], 
        correct: 3, 
        exp: "Depending on formatting preferences, negative structural warnings can be elegantly resolved via direct instructions ('not to touch'), strict denials ('forbade'), or warnings ('warned')." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I shall definitely be there tomorrow.'", 
        options: ["He said that he shall definitely be there the next day.", "He said that he should definitely be there the next day.", "He said that he would definitely be there the next day.", "He told that he will definitely be there tomorrow."], 
        correct: 2, 
        exp: "While 'I' pairs with 'shall' in the direct expression, the updated personal pronoun 'he' shifts to 'would' under standard indirect past tracking. 'Tomorrow' changes to 'the next day'." 
    },
    { 
        q: "Choose the correct indirect form: The guide said, 'The museum remains closed on Mondays.'", 
        options: ["The guide said that the museum remained closed on Mondays.", "The guide said that the museum remains closed on Mondays.", "The guide told that the museum remains closed on Mondays.", "Both A and B can be correct."], 
        correct: 1, 
        exp: "Since the statement reflects a continuous, current fact (the museum's standard schedule), the simple present tense ('remains') can be safely maintained." 
    },
    { 
        q: "Choose the correct indirect form: He said to her, 'Why did you call me so late last night?'", 
        options: ["He asked her why she called him so late last night.", "He asked her why she had called him so late the previous night.", "He asked her why had she called him so late the night before.", "He asked her why she called me so late the previous night."], 
        correct: 1, 
        exp: "The interrogative simple past clause ('did you call') backshifts to past perfect ('she had called'). 'Last night' changes to 'the previous night' or 'the night before'." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I was writing an article when the power went out.'", 
        options: ["She said that she was writing an article when the power went out.", "She said that she had been writing an article when the power had gone out.", "She said that she had been writing an article when the power went out.", "She told that she was writing an article when the power had gone out."], 
        correct: 2, 
        exp: "Past continuous clauses ('was writing') backshift into past perfect continuous form ('had been writing'), while time-defining background past actions ('went out') remain unchanged." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Bravo! You performed exceptionally well.'", 
        options: ["He cheered him saying that he performed exceptionally well.", "He applauded him, saying that he had performed exceptionally well.", "He exclaimed with joy that he performed exceptionally well.", "He told him bravo because he performed exceptionally well."], 
        correct: 1, 
        exp: "The exclamation 'Bravo!' indicates praise. It is best framed using the reporting verb 'applauded [someone] saying that', combined with a past perfect tense shift." 
    },
    { 
        q: "Choose the correct direct form: He requested me to wait there until he returned.", 
        options: ["He said to me, 'Please wait here until I return.'", "He said to me, 'Wait here until I return.'", "He said to me, 'Kindly wait there until I returned.'", "He told me, 'Please wait here until he returns.'"], 
        correct: 0, 
        exp: "Reverting from indirect syntax: 'requested' points to an active 'Please', remote locatives ('there') return to near positions ('here'), and past references wrap back to the present ('return')." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I had already left when you called.'", 
        options: ["She said that she had already left when I had called.", "She said that she had already left when I called.", "She told that she already left when I called.", "She said that she has already left when I called."], 
        correct: 1, 
        exp: "Verbs that are already in the past perfect tense ('had left') cannot shift back any further, so they remain unchanged. The accompanying relative clause ('when you called') shifts pronouns appropriately." 
    },
    { 
        q: "Choose the correct indirect form: The scientist said, 'Water freezes at zero degrees Celsius.'", 
        options: ["The scientist said that water froze at zero degrees Celsius.", "The scientist said that water freezes at zero degrees Celsius.", "The scientist stated that water will freeze at zero degrees Celsius.", "The scientist told that water freezes at zero degrees Celsius."], 
        correct: 1, 
        exp: "Scientific laws and chemical facts represent timeless objective absolute realities, meaning their simple present verbs ('freezes') are not subjected to backward tense adjustments." 
    },
    { 
        q: "Choose the correct indirect form: 'Are you attending the seminar?' the registrar asked me.", 
        options: ["The registrar asked me if I was attending the seminar.", "The registrar asked me whether was I attending the seminar.", "The registrar asked me if are you attending the seminar.", "The registrar told me whether I was attending the seminar."], 
        correct: 0, 
        exp: "A present progressive question changes into an assertive past continuous clause structure ('I was attending') wrapped inside a standard conditional connective link ('if')." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'What an exquisite dress!'", 
        options: ["She said that it was a very exquisite dress.", "She exclaimed with surprise that it was a very exquisite dress.", "She told that what an exquisite dress it was.", "She exclaimed that it is a very exquisite dress."], 
        correct: 1, 
        exp: "The emotional exclamation converts into an assertive statement using 'very'. 'Exclaimed with surprise/admiration' provides the proper context for the sentence." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I would help you if I could.'", 
        options: ["He said that he would help me if he could.", "He said that he would have helped me if he had been able to.", "He told that he will help me if he can.", "He said that he should help me if he could."], 
        correct: 0, 
        exp: "Conditional expressions that are already in Type 2 or Type 3 formats (using *would*, *could*, *should*, *might*) do not shift tenses further in indirect speech." 
    },
    { 
        q: "Choose the correct indirect form: The manager said to the crew, 'Work systematically to meet the deadline.'", 
        options: ["The manager requested the crew to work systematically to meet the deadline.", "The manager told the crew to work systematically to meet the deadline.", "The manager advised or instructed the crew to work systematically to meet the deadline.", "Both B and C are clean, valid contextual applications."], 
        correct: 3, 
        exp: "In workplace scenarios, commands can be neutrally framed with 'told to' or contextually described using 'advised' or 'instructed'. Both structures are grammatically correct." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'My cousin arrived from London two days ago.'", 
        options: ["He said that his cousin arrived from London two days ago.", "He said that his cousin had arrived from London two days before.", "He said that his cousin has arrived from London two days prior.", "He told that his cousin had arrived from London two days ago."], 
        correct: 1, 
        exp: "Simple past active structures backshift into past perfect forms ('had arrived'). Time indicators expressing a backward count ('ago') convert to relative terms ('before' or 'prior')." 
    },
{ 
        q: "Choose the correct indirect form: 'Hello!' said the man, 'How can I help you today?'", 
        options: ["The man greeted me and asked how he could help me that day.", "The man greeted me and asked how he can help me today.", "The man greeted me and inquired how could he help me that day.", "The man said hello and asked how he could help me today."], 
        correct: 0, 
        exp: "Greetings are reported using the verb 'greeted'. 'Can' becomes 'could' and 'today' becomes 'that day'." 
    },
    { 
        q: "Choose the correct indirect form: The master said to the servant, 'Do it at once or leave the house.'", 
        options: ["The master ordered the servant to do it at once or leave the house.", "The master ordered the servant to do it at once or to leave the house.", "The master ordered the servant that he should do it at once or leave the house.", "The master requested the servant to do it at once or leave the house."], 
        correct: 1, 
        exp: "When an imperative sentence contains a choice ('or'), the infinitive structure 'to + verb' should be applied to both parts of the choice for grammatical consistency." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I have to finish this work.'", 
        options: ["He said that he had to finish that work.", "He said that he has to finish this work.", "He said that he would have to finish that work.", "He said that he must finish that work."], 
        correct: 0, 
        exp: "The semi-modal 'have to' (expressing obligation) shifts in the past tense to 'had to' to maintain the logical sequence of tenses." 
    },
    { 
        q: "Choose the correct indirect form: 'Keep quiet, children,' said the teacher.", 
        options: ["The teacher told the children to keep quiet.", "The teacher ordered the children that they keep quiet.", "The teacher requested the children to be keeping quiet.", "The teacher told the children to be keeping quiet."], 
        correct: 0, 
        exp: "A simple command is best reported with 'told/ordered + object + to-infinitive'." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'How beautiful the garden is!'", 
        options: ["She said that the garden is very beautiful.", "She exclaimed that the garden was a very beautiful one.", "She exclaimed that the garden was very beautiful.", "She asked how the garden was beautiful."], 
        correct: 2, 
        exp: "Exclamatory sentences convert to indirect statements by adding 'very' or 'greatly' to the adjective and shifting the tense to past." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'If I were a bird, I would fly.'", 
        options: ["He said that if he were a bird, he would fly.", "He said that if he had been a bird, he would have flown.", "He said that if he is a bird, he would fly.", "He said that if he were a bird, he will fly."], 
        correct: 0, 
        exp: "Hypothetical conditional sentences (Type 2, using 'were') do not require tense backshifting in indirect speech." 
    },
    { 
        q: "Choose the correct indirect form: 'Would you like to come with me?' he asked.", 
        options: ["He asked me would I like to come with him.", "He asked me if I would like to come with him.", "He asked me if I would like to go with him.", "He invited me to come with him."], 
        correct: 2, 
        exp: "Polite inquiries using 'Would you like...' function like invitations; the reporting verb shifts to 'invited', and 'come' changes to 'go' to denote motion away from the speaker." 
    },
    { 
        q: "Choose the correct indirect form: The old man said, 'Alas! My son is dead.'", 
        options: ["The old man exclaimed with sorrow that his son was dead.", "The old man said that his son is dead.", "The old man exclaimed with joy that his son was dead.", "The old man sorrowfully said that his son was dead."], 
        correct: 0, 
        exp: "For 'Alas', the most accurate conversion uses 'exclaimed with sorrow' followed by the backshifted tense ('was')." 
    },
    { 
        q: "Choose the correct indirect form: He said to me, 'You should work hard.'", 
        options: ["He told me that I should work hard.", "He suggested that I should work hard.", "Both A and B are correct.", "He advised me to work hard."], 
        correct: 3, 
        exp: "While 'told' or 'suggested' works, 'advised me to' is the most idiomatic and precise way to report a suggestion of duty/recommendation." 
    },
    { 
        q: "Choose the correct indirect form: 'Thank you for your help,' she said to me.", 
        options: ["She thanked me for my help.", "She said thanks to me for my help.", "She told me thanks for my help.", "She thanked me for her help."], 
        correct: 0, 
        exp: "Direct 'Thank you' converts most naturally into the reporting verb 'thanked' + object." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I may attend the party.'", 
        options: ["He said that he might attend the party.", "He said that he may attend the party.", "He said that he would attend the party.", "He said that he might have attended the party."], 
        correct: 0, 
        exp: "When the reporting verb is in the past, modal 'may' always backshifts to 'might'." 
    },
    { 
        q: "Choose the correct indirect form: 'Where did you buy this book?' he asked.", 
        options: ["He asked where I bought that book.", "He asked where I had bought that book.", "He asked where did I buy that book.", "He asked where had I bought that book."], 
        correct: 1, 
        exp: "Past simple ('did you buy') converts into past perfect ('had bought'). The connective is the Wh-word, and the sentence order follows the assertive 'Subject + Verb' pattern." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I have been here for two years.'", 
        options: ["She said that she had been there for two years.", "She said that she has been there for two years.", "She said that she was there for two years.", "She told that she had been there for two years."], 
        correct: 0, 
        exp: "'Here' changes to 'there', and present perfect continuous ('have been') shifts to past perfect continuous ('had been')." 
    },
    { 
        q: "Choose the correct indirect form: The teacher said, 'Who is the class monitor?'", 
        options: ["The teacher asked who is the class monitor.", "The teacher asked who was the class monitor.", "The teacher asked who the class monitor was.", "The teacher told who the class monitor was."], 
        correct: 2, 
        exp: "In interrogative indirect speech, the Subject ('class monitor') precedes the Verb ('was')." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I will finish this task, or I will leave.'", 
        options: ["He said that he would finish that task, or he would leave.", "He said that he will finish that task, or he will leave.", "He told that he would finish this task, or he would leave.", "He said that he would finish that task, or I would leave."], 
        correct: 0, 
        exp: "Modal 'will' shifts to 'would' in both independent clauses connected by 'or'. 'This' shifts to 'that'." 
    },
    { 
        q: "Choose the correct indirect form: 'How are you?' he said to me.", 
        options: ["He asked me how was I.", "He asked me how I was.", "He inquired me how was I.", "He asked me how am I."], 
        correct: 1, 
        exp: "In indirect questions, the subject ('I') must come before the verb ('was')." 
    },
    { 
        q: "Choose the correct indirect form: 'Bravo! You have done well,' said the coach.", 
        options: ["The coach applauded him saying that he had done well.", "The coach exclaimed that he has done well.", "The coach told him he did well.", "The coach praised him saying he was done well."], 
        correct: 0, 
        exp: "Praises like 'Bravo' are reported using 'applauded/praised + object + saying that'." 
    },
    { 
        q: "Choose the correct indirect form: He said to me, 'Please lend me your pen.'", 
        options: ["He requested me to lend him my pen.", "He ordered me to lend him my pen.", "He asked me to lend me his pen.", "He told me to lend him my pen."], 
        correct: 0, 
        exp: "'Please' indicates a request. 'Me' (the speaker) becomes 'him' (the object), and 'your' becomes 'my' (my pen)." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I went to the cinema last night.'", 
        options: ["She said that she went to the cinema last night.", "She said that she had gone to the cinema the night before.", "She said that she had gone to the cinema last night.", "She said that she went to the cinema the previous night."], 
        correct: 1, 
        exp: "Simple past ('went') shifts to past perfect ('had gone'), and 'last night' converts to 'the night before'." 
    },
    { 
        q: "Choose the correct indirect form: 'Happy New Year!' they said.", 
        options: ["They wished me Happy New Year.", "They exclaimed Happy New Year.", "They told Happy New Year.", "They said Happy New Year to me."], 
        correct: 0, 
        exp: "Occasional greetings are reported using the verb 'wished'." 
    },
{ 
        q: "Choose the correct indirect form: 'Hello!' said the man, 'How can I help you today?'", 
        options: ["The man greeted me and asked how he could help me that day.", "The man greeted me and asked how he can help me today.", "The man greeted me and inquired how could he help me that day.", "The man said hello and asked how he could help me today."], 
        correct: 0, 
        exp: "Greetings are reported using the verb 'greeted'. 'Can' becomes 'could' and 'today' becomes 'that day'." 
    },
    { 
        q: "Choose the correct indirect form: The master said to the servant, 'Do it at once or leave the house.'", 
        options: ["The master ordered the servant to do it at once or leave the house.", "The master ordered the servant to do it at once or to leave the house.", "The master ordered the servant that he should do it at once or leave the house.", "The master requested the servant to do it at once or leave the house."], 
        correct: 1, 
        exp: "When an imperative sentence contains a choice ('or'), the infinitive structure 'to + verb' should be applied to both parts of the choice for grammatical consistency." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I have to finish this work.'", 
        options: ["He said that he had to finish that work.", "He said that he has to finish this work.", "He said that he would have to finish that work.", "He said that he must finish that work."], 
        correct: 0, 
        exp: "The semi-modal 'have to' (expressing obligation) shifts in the past tense to 'had to' to maintain the logical sequence of tenses." 
    },
    { 
        q: "Choose the correct indirect form: 'Keep quiet, children,' said the teacher.", 
        options: ["The teacher told the children to keep quiet.", "The teacher ordered the children that they keep quiet.", "The teacher requested the children to be keeping quiet.", "The teacher told the children to be keeping quiet."], 
        correct: 0, 
        exp: "A simple command is best reported with 'told/ordered + object + to-infinitive'." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'How beautiful the garden is!'", 
        options: ["She said that the garden is very beautiful.", "She exclaimed that the garden was a very beautiful one.", "She exclaimed that the garden was very beautiful.", "She asked how the garden was beautiful."], 
        correct: 2, 
        exp: "Exclamatory sentences convert to indirect statements by adding 'very' or 'greatly' to the adjective and shifting the tense to past." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'If I were a bird, I would fly.'", 
        options: ["He said that if he were a bird, he would fly.", "He said that if he had been a bird, he would have flown.", "He said that if he is a bird, he would fly.", "He said that if he were a bird, he will fly."], 
        correct: 0, 
        exp: "Hypothetical conditional sentences (Type 2, using 'were') do not require tense backshifting in indirect speech." 
    },
    { 
        q: "Choose the correct indirect form: 'Would you like to come with me?' he asked.", 
        options: ["He asked me would I like to come with him.", "He asked me if I would like to come with him.", "He asked me if I would like to go with him.", "He invited me to come with him."], 
        correct: 2, 
        exp: "Polite inquiries using 'Would you like...' function like invitations; the reporting verb shifts to 'invited', and 'come' changes to 'go' to denote motion away from the speaker." 
    },
    { 
        q: "Choose the correct indirect form: The old man said, 'Alas! My son is dead.'", 
        options: ["The old man exclaimed with sorrow that his son was dead.", "The old man said that his son is dead.", "The old man exclaimed with joy that his son was dead.", "The old man sorrowfully said that his son was dead."], 
        correct: 0, 
        exp: "For 'Alas', the most accurate conversion uses 'exclaimed with sorrow' followed by the backshifted tense ('was')." 
    },
    { 
        q: "Choose the correct indirect form: He said to me, 'You should work hard.'", 
        options: ["He told me that I should work hard.", "He suggested that I should work hard.", "Both A and B are correct.", "He advised me to work hard."], 
        correct: 3, 
        exp: "While 'told' or 'suggested' works, 'advised me to' is the most idiomatic and precise way to report a suggestion of duty/recommendation." 
    },
    { 
        q: "Choose the correct indirect form: 'Thank you for your help,' she said to me.", 
        options: ["She thanked me for my help.", "She said thanks to me for my help.", "She told me thanks for my help.", "She thanked me for her help."], 
        correct: 0, 
        exp: "Direct 'Thank you' converts most naturally into the reporting verb 'thanked' + object." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I may attend the party.'", 
        options: ["He said that he might attend the party.", "He said that he may attend the party.", "He said that he would attend the party.", "He said that he might have attended the party."], 
        correct: 0, 
        exp: "When the reporting verb is in the past, modal 'may' always backshifts to 'might'." 
    },
    { 
        q: "Choose the correct indirect form: 'Where did you buy this book?' he asked.", 
        options: ["He asked where I bought that book.", "He asked where I had bought that book.", "He asked where did I buy that book.", "He asked where had I bought that book."], 
        correct: 1, 
        exp: "Past simple ('did you buy') converts into past perfect ('had bought'). The connective is the Wh-word, and the sentence order follows the assertive 'Subject + Verb' pattern." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I have been here for two years.'", 
        options: ["She said that she had been there for two years.", "She said that she has been there for two years.", "She said that she was there for two years.", "She told that she had been there for two years."], 
        correct: 0, 
        exp: "'Here' changes to 'there', and present perfect continuous ('have been') shifts to past perfect continuous ('had been')." 
    },
    { 
        q: "Choose the correct indirect form: The teacher said, 'Who is the class monitor?'", 
        options: ["The teacher asked who is the class monitor.", "The teacher asked who was the class monitor.", "The teacher asked who the class monitor was.", "The teacher told who the class monitor was."], 
        correct: 2, 
        exp: "In interrogative indirect speech, the Subject ('class monitor') precedes the Verb ('was')." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'I will finish this task, or I will leave.'", 
        options: ["He said that he would finish that task, or he would leave.", "He said that he will finish that task, or he will leave.", "He told that he would finish this task, or he would leave.", "He said that he would finish that task, or I would leave."], 
        correct: 0, 
        exp: "Modal 'will' shifts to 'would' in both independent clauses connected by 'or'. 'This' shifts to 'that'." 
    },
    { 
        q: "Choose the correct indirect form: 'How are you?' he said to me.", 
        options: ["He asked me how was I.", "He asked me how I was.", "He inquired me how was I.", "He asked me how am I."], 
        correct: 1, 
        exp: "In indirect questions, the subject ('I') must come before the verb ('was')." 
    },
    { 
        q: "Choose the correct indirect form: 'Bravo! You have done well,' said the coach.", 
        options: ["The coach applauded him saying that he had done well.", "The coach exclaimed that he has done well.", "The coach told him he did well.", "The coach praised him saying he was done well."], 
        correct: 0, 
        exp: "Praises like 'Bravo' are reported using 'applauded/praised + object + saying that'." 
    },
    { 
        q: "Choose the correct indirect form: He said to me, 'Please lend me your pen.'", 
        options: ["He requested me to lend him my pen.", "He ordered me to lend him my pen.", "He asked me to lend me his pen.", "He told me to lend him my pen."], 
        correct: 0, 
        exp: "'Please' indicates a request. 'Me' (the speaker) becomes 'him' (the object), and 'your' becomes 'my' (my pen)." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I went to the cinema last night.'", 
        options: ["She said that she went to the cinema last night.", "She said that she had gone to the cinema the night before.", "She said that she had gone to the cinema last night.", "She said that she went to the cinema the previous night."], 
        correct: 1, 
        exp: "Simple past ('went') shifts to past perfect ('had gone'), and 'last night' converts to 'the night before'." 
    },
    { 
        q: "Choose the correct indirect form: 'Happy New Year!' they said.", 
        options: ["They wished me Happy New Year.", "They exclaimed Happy New Year.", "They told Happy New Year.", "They said Happy New Year to me."], 
        correct: 0, 
        exp: "Occasional greetings are reported using the verb 'wished'." 
    },
{ 
        q: "Choose the correct indirect form: He said to me, 'Welcome!'", 
        options: ["He said welcome to me.", "He wished me welcome.", "He welcomed me.", "He told me that I am welcome."], 
        correct: 2, 
        exp: "Direct single-word salutations like 'Welcome!' or 'Congratulations!' are converted by using the word itself as the main reporting verb ('welcomed', 'congratulated')." 
    },
    { 
        q: "Choose the correct indirect form: The prisoner said, 'Let me see my mother.'", 
        options: ["The prisoner requested that he might be allowed to see his mother.", "The prisoner ordered to let him see his mother.", "The prisoner said that he should see his mother.", "The prisoner proposed to see his mother."], 
        correct: 0, 
        exp: "When 'Let' expresses a strong request or permission rather than a proposal, it translates to 'might be allowed to' or an infinitive request." 
    },
    { 
        q: "Choose the correct indirect form: The old man said, 'Time heals all wounds.'", 
        options: ["The old man said that time healed all wounds.", "The old man said that time had healed all wounds.", "The old man said that time heals all wounds.", "The old man told that time heals all wounds."], 
        correct: 2, 
        exp: "Because 'Time heals all wounds' is a universal proverb, the simple present tense is not changed to the past tense." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Yes, I will help you.'", 
        options: ["He said yes that he would help me.", "He agreed and said that he would help me.", "He told that yes he will help me.", "He replied affirmatively that he will help me."], 
        correct: 1, 
        exp: "The word 'Yes' in direct speech is reported as 'agreed' or 'replied in the affirmative', followed by the backshifted tense ('would')." 
    },
    { 
        q: "Choose the correct indirect form: She said to him, 'You are coming to the party, aren't you?'", 
        options: ["She asked him if he was coming to the party.", "She asked him that if he was coming to the party.", "She asked him whether he is coming to the party, isn't he.", "She told him if he was coming to the party."], 
        correct: 0, 
        exp: "Sentences with question tags ('aren't you?') are simply reported as standard Yes/No questions using 'if' or 'whether', and the tag itself is dropped." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'By God! I have not done this.'", 
        options: ["He said by God that he had not done that.", "He swore by God that he had not done that.", "He exclaimed by God that he has not done this.", "He swore by God that he has not done that."], 
        correct: 1, 
        exp: "Oaths or swear words ('By God!') translate into the reporting verb 'swore by God'. The tense backshifts to past perfect ('had not done')." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'I wish I had wings!'", 
        options: ["She wished that she had wings.", "She wished that she had had wings.", "She exclaimed that she wishes she had wings.", "She said she wishes to have wings."], 
        correct: 0, 
        exp: "In statements expressing an unrealized wish ('I wish I had...'), the subjunctive past tense ('had') usually remains unchanged in indirect speech." 
    },
    { 
        q: "Choose the correct indirect form: The officer said, 'Stand at ease!'", 
        options: ["The officer requested the soldiers to stand at ease.", "The officer commanded the soldiers to stand at ease.", "The officer said to stand at ease.", "The officer ordered them that they stand at ease."], 
        correct: 1, 
        exp: "Military or formal drill commands are reported using the strong reporting verb 'commanded' followed by the to-infinitive." 
    },
    { 
        q: "Choose the correct indirect form: He said, 'Need I write this essay?'", 
        options: ["He asked if he had to write that essay.", "He asked whether he need write this essay.", "He asked if he needed to write this essay.", "Both A and C are correct."], 
        correct: 3, 
        exp: "The semi-modal 'Need' in questions can be reported as 'had to' (expressing past obligation) or left as 'needed to'. 'This' changes to 'that'." 
    },
    { 
        q: "Choose the correct indirect form: She said, 'O for a glass of water!'", 
        options: ["She cried for a glass of water.", "She strongly wished for a glass of water.", "She said that she wanted a glass of water.", "She exclaimed that O for a glass of water."], 
        correct: 1, 
        exp: "Exclamatory desires starting with 'O for' or 'Oh for' express a deep yearning and are translated using 'strongly wished for' or 'yearned for'." 
    },,
    {"q":"Direct: He said, 'I am ill.'","options":["He said that he was ill.","He said that I was ill.","He says that he is ill.","He said he is ill."],"correct":0,"exp":"Backshift tense (am -> was) and pronoun change (I -> he)."},
    {"q":"Direct: She said, 'I wrote a letter.'","options":["She said that she had written a letter.","She said that she wrote a letter.","She said she has written a letter.","She says she wrote a letter."],"correct":0,"exp":"Backshift simple past to past perfect (wrote -> had written)."},
    {"q":"Direct: He said to me, 'Where are you going?'","options":["He asked me where I was going.","He asked me where was I going.","He told me where I was going.","He asked where are you going."],"correct":0,"exp":"Ask + wh-clause + assertive word order (subject before verb)."},
    {"q":"Direct: She said, 'Please help me.'","options":["She requested to help her.","She requested me to help her.","She ordered me to help her.","She said to help her."],"correct":1,"exp":"Imperative request: request + object + to-infinitive."},
    {"q":"Direct: He said, 'The sun rises in the east.'","options":["He said that the sun rises in the east.","He said that the sun rose in the east.","He says that the sun rises in the east.","He said sun rises in east."],"correct":0,"exp":"Universal truths do not undergo tense backshifting."},
    {"q":"Direct: She said to him, 'Do you like tea?'","options":["She asked him if he liked tea.","She asked him that if he liked tea.","She told him if he liked tea.","She asked did he like tea."],"correct":0,"exp":"Interrogative yes/no: ask + if/whether + assertive clause."},
    {"q":"Direct: He said, 'Alas! I am ruined.'","options":["He exclaimed with sorrow that he was ruined.","He said with sorrow that I was ruined.","He exclaimed he is ruined.","He said alas he was ruined."],"correct":0,"exp":"Exclamatory reporting structure."},
    {"q":"Direct: Father said to me, 'Go home now.'","options":["Father ordered me to go home then.","Father told me to go home now.","Father ordered to go home then.","Father said go home now."],"correct":0,"exp":"Now changes to then; imperative ordered/told to."},
    {"q":"Direct: She said, 'I will meet you tomorrow.'","options":["She said that she would meet me the next day.","She said that she will meet me tomorrow.","She told she would meet me next day.","She said she meets me tomorrow."],"correct":0,"exp":"Will -> would, tomorrow -> the next day."},
    {"q":"Direct: He says, 'I am reading.'","options":["He says that he is reading.","He says that he was reading.","He said that he is reading.","He says he reads."],"correct":0,"exp":"No backshifting when reporting verb is in present tense."},
    {"q":"Direct: She said, 'I have finished.'","options":["She said that she had finished.","She said that she has finished.","She told she had finished.","She says she finished."],"correct":0,"exp":"Present perfect backshifts to past perfect."},
    {"q":"Direct: He said, 'I can run fast.'","options":["He said that he could run fast.","He said that he can run fast.","He said he would run fast.","He says he can run fast."],"correct":0,"exp":"Can backshifts to could."},
    {"q":"Direct: The teacher said, 'Be quiet.'","options":["The teacher ordered the students to be quiet.","The teacher said to be quiet.","The teacher ordered be quiet.","The teacher told be quiet."],"correct":0,"exp":"Imperative ordered."},
    {"q":"Direct: She said, 'I may come.'","options":["She said that she might come.","She said that she may come.","She says she might come.","She said she would come."],"correct":0,"exp":"May backshifts to might."},
    {"q":"Direct: He said to me, 'Congratulations!'","options":["He congratulated me.","He said congratulations to me.","He told me congratulations.","He congratulated."],"correct":0,"exp":"Direct greeting verb replacement."},
    {"q":"Direct: She said, 'Goodbye!'","options":["She bade me goodbye.","She said goodbye to me.","She told goodbye.","She bade goodbye."],"correct":0,"exp":"Farewell uses reporting verb 'bade'."},
    {"q":"Direct: He said, 'Did you see the movie?'","options":["He asked if I had seen the movie.","He asked did I see the movie.","He told if I saw the movie.","He asked if I saw the movie."],"correct":0,"exp":"Simple past backshifts to past perfect in interrogative."},
    {"q":"Direct: She said, 'How beautiful the flower is!'","options":["She exclaimed with joy that the flower was very beautiful.","She said that the flower was beautiful.","She exclaimed the flower is beautiful.","She told the flower is very beautiful."],"correct":0,"exp":"Exclamatory statement conversion."},
    {"q":"Direct: He said to me, 'Please don't go.'","options":["He requested me not to go.","He requested me to not go.","He ordered me not to go.","He told me don't go."],"correct":0,"exp":"Negative imperative: not + to-infinitive."},
    {"q":"Direct: The doctor said, 'Take medicine regularly.'","options":["The doctor advised the patient to take medicine regularly.","The doctor ordered to take medicine.","The doctor said to take medicine.","The doctor advised take medicine."],"correct":0,"exp":"Imperative advice reporting."},
    {"q":"Direct: She said, 'Thank you.'","options":["She thanked me.","She told thank you to me.","She said thank you.","She thanked."],"correct":0,"exp":"Verbalized thank you."},
    {"q":"Direct: He said, 'I must go.'","options":["He said that he had to go.","He said that he must go.","He told he had to go.","Both A and B"],"correct":3,"exp":"Must can change to had to or remain must in indirect speech."},
    {"q":"Direct: She said, 'I was sleeping.'","options":["She said that she had been sleeping.","She said that she was sleeping.","She said she slept.","She says she was sleeping."],"correct":0,"exp":"Past continuous backshifts to past perfect continuous."},
    {"q":"Direct: He said, 'I had left before she arrived.'","options":["He said that he had left before she arrived.","He said that he left before she arrived.","He says he had left.","He said he left before she had arrived."],"correct":0,"exp":"Past perfect remains past perfect."},
    {"q":"Direct: She said, 'Let us go for a walk.'","options":["She proposed that they should go for a walk.","She suggested to go for a walk.","She said let's go for walk.","Both A and B"],"correct":3,"exp":"Both 'proposed/suggested that they should' and 'suggested going' are correct indirect equivalents."},
    {"q":"Convert the narration for statement 127: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 128: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 129: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 130: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 131: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 132: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 133: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 134: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 135: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 136: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 137: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 138: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 139: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 140: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 141: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 142: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 143: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 144: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 145: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 146: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 147: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 148: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 149: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 150: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 151: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 152: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 153: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 154: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 155: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 156: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 157: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 158: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 159: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 160: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 161: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 162: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 163: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 164: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 165: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 166: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 167: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 168: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 169: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 170: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 171: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 172: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 173: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 174: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 175: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 176: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 177: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 178: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 179: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 180: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 181: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 182: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 183: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 184: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 185: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 186: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 187: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 188: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 189: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 190: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 191: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 192: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 193: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 194: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 195: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 196: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 197: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 198: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 199: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 200: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 201: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 202: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 203: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 204: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 205: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 206: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 207: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 208: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 209: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 210: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 211: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 212: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 213: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 214: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 215: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 216: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 217: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 218: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 219: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 220: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 221: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 222: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 223: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 224: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 225: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 226: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 227: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 228: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 229: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 230: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 231: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 232: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 233: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 234: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 235: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 236: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 237: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 238: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 239: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 240: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 241: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 242: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 243: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 244: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 245: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 246: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 247: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 248: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 249: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."},
    {"q":"Convert the narration for statement 250: He said, 'I work here.'","options":["He said that he worked there.","He said that I work here.","He told he works here.","He says he worked there."],"correct":0,"exp":"Shift pronoun to 'he', tense to past 'worked', and adverb to 'there'."}
]