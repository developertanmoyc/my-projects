const joiningData = [
    { 
        q: "Join into a single Simple sentence: 'He saw a tiger. He fled away.'", 
        options: ["He saw a tiger and he fled away.", "Seeing a tiger, he fled away.", "He fled away because he saw a tiger.", "Having fleeing away, he saw a tiger."], 
        correct: 1, 
        exp: "To join into a Simple sentence, we can use a Present Participle ('Seeing a tiger') to eliminate one of the finite verbs." 
    },
    { 
        q: "Join into a Complex sentence: 'The man is very old. He cannot walk fast.'", 
        options: ["The man is too old to walk fast.", "The man is very old and so he cannot walk fast.", "The man is so old that he cannot walk fast.", "Being old, the man cannot walk fast."], 
        correct: 2, 
        exp: "A Complex sentence requires one independent clause and at least one dependent clause. The adverbial clause of result 'so old that he cannot walk fast' satisfies this rule." 
    },
    { 
        q: "Join into a Simple sentence: 'She has three sons. She must educate them.'", 
        options: ["She has three sons to educate.", "She has three sons whom she must educate.", "She has three sons and she must educate them.", "As she has three sons, she must educate them."], 
        correct: 0, 
        exp: "We can combine these sentences into a single Simple sentence using an Infinitive phrase ('to educate') which keeps exactly one finite verb ('has')." 
    },
    { 
        q: "Join into a Compound sentence: 'He was guilty. He was punished.'", 
        options: ["He was punished because he was guilty.", "Being guilty, he was punished.", "He was guilty, therefore he was punished.", "He was punished for his guilt."], 
        correct: 2, 
        exp: "Compound sentences connect independent coordinate clauses using illative or coordinating conjunctions like 'therefore', 'and', or 'so'." 
    },
    { 
        q: "Join into a Complex sentence: 'I know a man. He wrote this legendary book.'", 
        options: ["I know the man who wrote this legendary book.", "I know a man and he wrote this legendary book.", "The man writing this legendary book is known to me.", "Knowing the man, he wrote this legendary book."], 
        correct: 0, 
        exp: "An adjective (relative) clause introduced by the relative pronoun 'who' forms a clean Complex sentence linking the description straight to the noun ('man')." 
    },
    { 
        q: "Join into a Simple sentence: 'The sun set. The workers returned home.'", 
        options: ["When the sun set, the workers returned home.", "The sun having set, the workers returned home.", "The sun set and the workers returned home.", "The workers returned home after the sun set."], 
        correct: 1, 
        exp: "When the two sentences have different subjects, we can synthesize them into a Simple sentence using a Nominative Absolute structure ('The sun having set')." 
    },
    { 
        q: "Join into a Complex sentence: 'You are late. Do you know the reason?'", 
        options: ["Do you know the reason for being late?", "Do you know why you are late?", "You are late and do you know the reason?", "Knowing you are late, do you know the reason?"], 
        correct: 1, 
        exp: "This choice leverages an embedded noun clause ('why you are late') functioning as the direct object of the principal matrix verb ('know') to forge a Complex sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'He is not a rogue. He is not a fool.'", 
        options: ["He is neither a rogue nor a fool.", "He is not a rogue and also not a fool.", "He is both a rogue and a fool.", "Though he is not a rogue, he is a fool."], 
        correct: 0, 
        exp: "Correlative coordinating conjunction strings like 'neither... nor' bind parallel syntax structures together into a beautifully balanced Compound sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'He failed multiple times. He still hopes to succeed.'", 
        options: ["Although he failed multiple times, he hopes to succeed.", "He failed multiple times but he still hopes to succeed.", "In spite of failing multiple times, he hopes to succeed.", "He hopes to succeed after failing multiple times."], 
        correct: 2, 
        exp: "Prepositional phrases indicating concession like 'In spite of' or 'Despite' convert a full clause into a nominal phrase, retaining a single finite verb ('hopes')." 
    },
    { 
        q: "Join into a Complex sentence: 'He worked hard. He wanted to secure the top rank.'", 
        options: ["He worked hard to secure the top rank.", "He worked hard so that he might secure the top rank.", "He worked hard and secured the top rank.", "Having worked hard, he secured the top rank."], 
        correct: 1, 
        exp: "The subordinating purpose conjunction block 'so that he might...' introduces an adverbial clause of purpose, establishing a perfect Complex sentence framework." 
    },
    { 
        q: "Join into a Simple sentence: 'The rain stopped. We resumed our journey.'", 
        options: ["As soon as the rain stopped, we resumed our journey.", "The rain having stopped, we resumed our journey.", "The rain stopped and we resumed our journey.", "When the rain stopped we resumed our journey."], 
        correct: 1, 
        exp: "This options maps onto a Simple sentence configuration by adopting a past participle nominative absolute construct ('The rain having stopped')." 
    },
    { 
        q: "Join into a Complex sentence: 'Tell me your place of birth.'", 
        options: ["Tell me where you were born.", "Tell me the place you were born at.", "Tell me about your birth place.", "Tell me and specify your place of birth."], 
        correct: 0, 
        exp: "The original statement is expanded into a complex architecture by introducing a subordinate noun clause ('where you were born') acting as a direct object wrapper." 
    },
    { 
        q: "Join into a Compound sentence: 'Run fast. You will miss the train.'", 
        options: ["If you do not run fast, you will miss the train.", "Run fast or you will miss the train.", "Unless you run fast, you will miss the train.", "Running fast, you will not miss the train."], 
        correct: 1, 
        exp: "The alternative coordinating conjunction option 'or' links two independent alternatives together into a proper Compound layout." 
    },
    { 
        q: "Join into a Simple sentence: 'He heard the bad news. He fainted on the spot.'", 
        options: ["On hearing the bad news, he fainted on the spot.", "When he heard the bad news, he fainted on the spot.", "He heard the bad news and fainted on the spot.", "He fainted on the spot because he heard bad news."], 
        correct: 0, 
        exp: "Using a preposition tracking a gerund context modifier phrase ('On hearing...') turns the first action block into a descriptive introductory baseline phrase." 
    },
    { 
        q: "Join into a Complex sentence: 'He is a rich person. He is completely unhappy.'", 
        options: ["He is a rich person but completely unhappy.", "In spite of being rich, he is completely unhappy.", "Although he is a rich person, he is completely unhappy.", "He is rich and unhappy."], 
        correct: 2, 
        exp: "The concessive subordinating conditional word marker 'Although' initializes a dependent adverbial clause of concession, creating a secure Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'Napoleon was a great general. He was defeated at Waterloo.'", 
        options: ["Napoleon, a great general, was defeated at Waterloo.", "Napoleon was a great general and he was defeated at Waterloo.", "Although Napoleon was a great general, he was defeated at Waterloo.", "Napoleon was defeated at Waterloo because he was a general."], 
        correct: 0, 
        exp: "We can compress these sentences by inserting a noun modifier apposition phrase ('a great general') directly beside the core subject noun, preserving just one finite verb." 
    },
    { 
        q: "Join into a Compound sentence: 'He is very wealthy. He is extremely humble.'", 
        options: ["Although he is very wealthy, he is extremely humble.", "He is very wealthy, yet he is extremely humble.", "In spite of his wealth, he is extremely humble.", "He is wealthy and also humble."], 
        correct: 1, 
        exp: "Adversative coordinating conjunction connections like 'yet' or 'but' safely preserve the structural equality of both standalone clauses, fulfilling the Compound structural requirement." 
    },
    { 
        q: "Join into a Complex sentence: 'The news is true. Everyone knows it.'", 
        options: ["Everyone knows that the news is true.", "The news is true and everyone knows it.", "The news being true is known to everyone.", "That the news is true is known by everyone."], 
        correct: 0, 
        exp: "The objective dependent clause anchor 'that the news is true' functions as a nominal direct complement structure to form an unambiguous Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The thief saw the patrol car. He hid inside the alley.'", 
        options: ["When the thief saw the patrol car, he hid inside the alley.", "The thief saw the patrol car and hid inside the alley.", "Seeing the patrol car, the thief hid inside the alley.", "Having seen the patrol car, the thief had hidden inside."], 
        correct: 2, 
        exp: "A present active participle phrase layout configuration ('Seeing the patrol car...') correctly shifts the secondary verb structure into a modifier, making it a clean Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'The rain fell heavily. The streets were flooded.'", 
        options: ["The rain fell heavily and flooded the streets.", "Because the rain fell heavily, the streets were flooded.", "The rain falling heavily flooded the streets.", "Heavy rain fell so the streets were flooded."], 
        correct: 1, 
        exp: "The causal dependent marker 'Because' successfully sets up an adverbial subordinate clause of reason, structuring a standard Complex sentence template." 
    },
{ 
        q: "Join into a single Simple sentence: 'He completed his homework. He went out to play with his friends.'", 
        options: ["He completed his homework and went out to play with his friends.", "Having completed his homework, he went out to play with his friends.", "When he completed his homework, he went out to play with his friends.", "He went out to play with his friends because he completed his homework."], 
        correct: 1, 
        exp: "To show that one action was fully finished before another began in a Simple sentence, we use a Perfect Participle ('Having completed...')." 
    },
    { 
        q: "Join into a Complex sentence: 'The train had left. We arrived at the station.'", 
        options: ["The train had left and we arrived at the station.", "Before we arrived at the station, the train had left.", "Arriving at the station, the train had already left.", "The train left before our arrival at the station."], 
        correct: 1, 
        exp: "Using the subordinating conjunction of time 'Before' creates a dependent adverbial clause, combining the statements into a proper Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The hunter took up his rifle. He aimed at the wild beast.'", 
        options: ["Taking up his rifle, the hunter aimed at the wild beast.", "The hunter took up his rifle and aimed at the wild beast.", "As the hunter took up his rifle, he aimed at the wild beast.", "The hunter took up his rifle so that he could aim at the wild beast."], 
        correct: 0, 
        exp: "Since both actions are done by the same subject sequentially, a Present Participle phrase ('Taking up his rifle') naturally turns this into a clean Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'She is beautiful. She is highly intelligent.'", 
        options: ["Although she is beautiful, she is highly intelligent.", "She is not only beautiful but also highly intelligent.", "Being beautiful, she is highly intelligent.", "She is beautiful whereas she is highly intelligent."], 
        correct: 1, 
        exp: "The cumulative correlative conjunction 'not only... but also' connects two independent coordinate features, satisfying the requirement for a Compound layout." 
    },
    { 
        q: "Join into a Complex sentence: 'This is the historical monument. Shivaji Maharaj was born here.'", 
        options: ["This is the historical monument where Shivaji Maharaj was born.", "This is the historical monument and Shivaji Maharaj was born here.", "Shivaji Maharaj was born in this historical monument.", "Born here, this is the historical monument of Shivaji Maharaj."], 
        correct: 0, 
        exp: "The relative adverb 'where' introduces an adjective clause modifying the noun 'monument', which effectively creates a balanced Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The weather was extremely stormy. The aircraft could not take off.'", 
        options: ["Because the weather was extremely stormy, the aircraft could not take off.", "The weather being extremely stormy, the aircraft could not take off.", "The weather was extremely stormy and so the aircraft could not take off.", "Due to the weather was stormy, the aircraft could not take off."], 
        correct: 1, 
        exp: "Since the clauses have entirely different subjects ('weather' and 'aircraft'), we apply the Nominative Absolute layout ('The weather being...') to produce a Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'You must tell me the truth. Otherwise, you will be penalized.'", 
        options: ["Tell me the truth or you will be penalized.", "Unless you tell me the truth, you will be penalized.", "In case of not telling the truth, you will be penalized.", "You must tell me the truth, otherwise being penalized."], 
        correct: 1, 
        exp: "The negative conditional subordinating conjunction 'Unless' safely creates a subordinate adverbial clause of condition, creating an unambiguous Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'He heard a loud knock at the front door. He woke up instantly.'", 
        options: ["Hearing a loud knock at the front door, he woke up instantly.", "When he heard a loud knock at the front door, he woke up instantly.", "He heard a loud knock at the front door and woke up instantly.", "On account of hearing a loud knock at the front door, he woke up."], 
        correct: 0, 
        exp: "Using a single present active participle ('Hearing a loud knock...') accurately downsizes the first clause into a modifier, maintaining exactly one finite verb ('woke up')." 
    },
    { 
        q: "Join into a Compound sentence: 'He did not work hard. He failed the final examination.'", 
        options: ["Because he did not work hard, he failed the final examination.", "He did not work hard, therefore he failed the final examination.", "Failing the final examination, he did not work hard.", "Although he did not work hard, he failed the final examination."], 
        correct: 1, 
        exp: "The illative coordinating conjunction 'therefore' denotes a logical inference or result while leaving both connected structural units as independent coordinate clauses." 
    },
    { 
        q: "Join into a Complex sentence: 'He is working late tonight. He wants to finish the project repository.'", 
        options: ["He is working late tonight to finish the project repository.", "He is working late tonight so that he may finish the project repository.", "He is working late tonight and finishing the project repository.", "Working late tonight, he wants to finish the project repository."], 
        correct: 1, 
        exp: "The clause starter phrase 'so that' introduces a dependent adverbial clause of purpose, which creates a standard Complex sentence layout." 
    },
    { 
        q: "Join into a Simple sentence: 'The core structural bell rang. The students sprinted out of the class rooms.'", 
        options: ["As soon as the core structural bell rang, the students sprinted out.", "The core structural bell having rung, the students sprinted out of the class rooms.", "The core structural bell rang and the students sprinted out.", "When the bell rang, students sprinted out of the class rooms."], 
        correct: 1, 
        exp: "This uses the absolute participle dynamic arrangement ('The core structural bell having rung') to securely fuse the independent variables into a single Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'He will pass the selection metric. This is completely certain.'", 
        options: ["It is completely certain that he will pass the selection metric.", "He will pass the selection metric and this is completely certain.", "Certainly he will pass the selection metric.", "That he will pass the selection metric is completely certain for all."], 
        correct: 0, 
        exp: "The noun clause 'that he will pass the selection metric' acts as an appositive or real subject matching the dummy preparatory pronoun 'It', making it a Complex sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'Attend your lectures regularly. You will fall behind your peers.'", 
        options: ["If you do not attend your lectures regularly, you will fall behind.", "Attend your lectures regularly, or you will fall behind your peers.", "Unless you attend your lectures regularly, you will fall behind.", "By not attending your lectures regularly, you will fall behind your peers."], 
        correct: 1, 
        exp: "The disjunctive coordinating connector 'or' presents an explicit choice between two independent baseline alternatives, defining a Compound structure." 
    },
    { 
        q: "Join into a Simple sentence: 'The algorithm detected an unverified threat pattern. It terminated the processing pipeline.'", 
        options: ["On detecting an unverified threat pattern, the algorithm terminated the processing pipeline.", "When the algorithm detected an unverified threat pattern, it terminated the pipeline.", "The algorithm detected an unverified threat pattern and terminated the pipeline.", "The processing pipeline was terminated because an unverified threat pattern was detected."], 
        correct: 0, 
        exp: " Fusing the initial clause into a prepositional phrase built around a gerund ('On detecting...') successfully condenses the syntax down to a Simple sentence format." 
    },
    { 
        q: "Join into a Complex sentence: 'The presentation ended. The audience broke into a loud applause.'", 
        options: ["The presentation ended and the audience broke into a loud applause.", "As soon as the presentation ended, the audience broke into a loud applause.", "The presentation ending made the audience break into a loud applause.", "After the presentation ended, the audience broke into applause."], 
        correct: 1, 
        exp: "The time-limiting relative adverb phrase 'As soon as' creates an adverbial clause of time, configuring a perfect Complex sentence framework." 
    },
    { 
        q: "Join into a Simple sentence: 'Dr. APJ Abdul Kalam was a visionary scientist. He became the President of India.'", 
        options: ["Dr. APJ Abdul Kalam, a visionary scientist, became the President of India.", "Dr. APJ Abdul Kalam was a visionary scientist and became the President of India.", "Although Dr. APJ Abdul Kalam was a visionary scientist, he became the President.", "Dr. APJ Abdul Kalam became the President of India because he was a scientist."], 
        correct: 0, 
        exp: "Placing the descriptive phrase 'a visionary scientist' in apposition right next to the subject noun drops the redundant auxiliary verb, achieving a clean Simple sentence format." 
    },
    { 
        q: "Join into a Compound sentence: 'The team encountered immense technical challenges. They managed to deploy the system patch on schedule.'", 
        options: ["Although the team encountered immense technical challenges, they managed to deploy the patch.", "The team encountered immense technical challenges, yet they managed to deploy the system patch on schedule.", "In spite of encountering immense technical challenges, the team deployed the patch.", "The team encountered challenges but they managed deploying the patch on schedule."], 
        correct: 1, 
        exp: "The adversative coordinating conjunction 'yet' cleanly denotes an unexpected contrast between two structurally equal independent statements, preserving a Compound sentence framework." 
    },
    { 
        q: "Join into a Complex sentence: 'The parsing script is running slow. There is a structural reason for it.'", 
        options: ["There is a structural reason why the parsing script is running slow.", "The parsing script is running slow and there is a structural reason for it.", "The parsing script is running slow due to a structural reason.", "Why the parsing script is running slow has a structural reason."], 
        correct: 0, 
        exp: "Fusing the statements by introducing an adjective relative clause initiated with the adverb 'why' safely configures a stable Complex sentence design." 
    },
    { 
        q: "Join into a Simple sentence: 'The routing node lost connectivity to the primary server. It broadcasted an error token.'", 
        options: ["When the routing node lost connectivity to the server, it broadcasted an error token.", "The routing node lost connectivity to the primary server and broadcasted an error token.", "Having lost connectivity to the primary server, the routing node broadcasted an error token.", "Losing connectivity to the primary server, the routing node broadcasted an error token."], 
        correct: 2, 
        exp: "A perfect participle construct layout phrase ('Having lost connectivity...') turns the conditional background event into an introductory descriptive fragment, establishing a Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'The atmospheric pressure drops significantly. A severe cyclonic storm forms.'", 
        options: ["The atmospheric pressure drops significantly and a severe cyclonic storm forms.", "Whenever the atmospheric pressure drops significantly, a severe cyclonic storm forms.", "The atmospheric pressure dropping significantly forms a severe cyclonic storm.", "A severe cyclonic storm forms because of the significant drop in atmospheric pressure."], 
        correct: 1, 
        exp: "The conditional frequency subordinating connector 'Whenever' initiates an adverbial clause of time/condition, resolving into a textbook Complex sentence standard." 
    },
    { 
        q: "Join into a Simple sentence: 'He was absent from the strategic planning meeting. He did not receive the initialization parameters.'", 
        options: ["Because he was absent from the strategic planning meeting, he did not receive the parameters.", "Owing to his absence from the strategic planning meeting, he did not receive the initialization parameters.", "He was absent from the meeting and so he did not receive the parameters.", "Being absent from the meeting, he did not receive the parameters."], 
        correct: 1, 
        exp: "The compound preposition construction 'Owing to' smoothly shifts the entire cause block into a complex phrasal modifier, preserving a single finite verb ('did not receive')." 
    },
    { 
        q: "Join into a Complex sentence: 'You are pointing at a specific database index. Kindly explain the architectural choice.'", 
        options: ["Kindly explain the architectural choice of the specific database index you are pointing at.", "Kindly explain the architectural choice why you are pointing at a specific database index.", "Kindly explain why you are pointing at that specific database index.", "You are pointing at a specific database index, so explain the choice."], 
        correct: 2, 
        exp: "Introducing a dependent noun object clause ('why you are pointing...') inside the imperative matrix command structures a proper Complex sentence pattern." 
    },
    { 
        q: "Join into a Compound sentence: 'The network link must be optimized immediately. The server cluster will drop inbound requests.'", 
        options: ["If the network link is not optimized immediately, the server cluster will drop requests.", "The network link must be optimized immediately, else the server cluster will drop inbound requests.", "Unless the network link is optimized immediately, the server cluster will drop requests.", "By not optimizing the network link immediately, the server cluster will drop requests."], 
        correct: 1, 
        exp: "The conditional adversative coordinate connector 'else' binds both structural statements while maintaining their individual clause sovereignty, fulfilling the Compound layout rules." 
    },
    { 
        q: "Join into a Simple sentence: 'The processing script identified a corrupted data segment. It logged an exception signature.'", 
        options: ["Upon identifying a corrupted data segment, the processing script logged an exception signature.", "When the processing script identified a corrupted data segment, it logged an exception signature.", "The processing script identified a corrupted data segment and logged an exception signature.", "An exception signature was logged because a corrupted data segment was identified."], 
        correct: 0, 
        exp: "Wrapping the secondary verb unit inside a compressed phrasal layout opened by the time preposition 'Upon' reduces the entire block into a Simple sentence frame." 
    },
    { 
        q: "Join into a Complex sentence: 'We selected a specific deployment target site. The environment parameters were ideal there.'", 
        options: ["We selected a specific deployment target site where the environment parameters were ideal.", "We selected a specific deployment target site and the environment parameters were ideal there.", "The environment parameters being ideal, we selected a specific deployment target site.", "We selected a deployment target site because the parameters were ideal."], 
        correct: 0, 
        exp: "Fusing the target assertions via an descriptive relative clause launched with the localizing adverb 'where' forms a neat Complex sentence design." 
    },
    { 
        q: "Join into a Simple sentence: 'The lead system architect reviewed the execution metrics. She approved the code deployment.'", 
        options: ["When the lead system architect reviewed the execution metrics, she approved the deployment.", "The lead system architect reviewed the execution metrics and approved the code deployment.", "Having reviewed the execution metrics, the lead system architect approved the code deployment.", "Reviewing the execution metrics, the lead system architect approved the code deployment."], 
        correct: 2, 
        exp: "Utilizing a perfect active participle phrase construction layout ('Having reviewed...') transforms the initial statement into a descriptive participle fragment, establishing a proper Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The security verification layer blocks malicious vectors. It simultaneously records their source signature data.'", 
        options: ["The security verification layer not only blocks malicious vectors but also records their source signature data.", "Although the security verification layer blocks malicious vectors, it records their source signature data.", "In addition to blocking malicious vectors, the security verification layer records their data.", "The security verification layer blocks malicious vectors and records data."], 
        correct: 0, 
        exp: "The multi-part cumulative coordinate connector 'not only... but also' couples both operations while securely ensuring a Compound structural layout." 
    },
    { 
        q: "Join into a Complex sentence: 'The source data packets are encrypted securely. Their content remains protected across unsecured channels.'", 
        options: ["The source data packets are encrypted securely and their content remains protected.", "Since the source data packets are encrypted securely, their content remains protected across unsecured channels.", "The source data packets being encrypted securely keeps their content protected.", "Their content remains protected across unsecured channels due to secure encryption."], 
        correct: 1, 
        exp: "The causal subordinating conjunction marker 'Since' initiates a clear dependent adverbial clause of reason, yielding an undeniable Complex sentence configuration." 
    },
    { 
        q: "Join into a Simple sentence: 'The system automation routine scanned the local memory register. It extracted the updated parameter settings.'", 
        options: ["Scanning the local memory register, the system automation routine extracted the updated parameter settings.", "When the system automation routine scanned the local memory register, it extracted the settings.", "The system automation routine scanned the local memory register and extracted the settings.", "Having scanned the local memory register, the routine extracted the updated settings."], 
        correct: 0, 
        exp: "An introductory present active participle tracking phrase string ('Scanning the local...') smoothly downsizes the initial finite clause structure into a modifier, achieving a clean Simple sentence frame." 
    },
    { 
        q: "Join into a Complex sentence: 'The operational parameters shift outside the threshold value boundary. An automated recovery signal executes.'", 
        options: ["The operational parameters shift outside the threshold value boundary and a recovery signal executes.", "If the operational parameters shift outside the threshold value boundary, an automated recovery signal executes.", "The operational parameters shifting outside the threshold value boundary executes a recovery signal.", "An automated recovery signal executes because of the parameter shift outside the boundary."], 
        correct: 1, 
        exp: "The conditional subordinating connector 'If' correctly creates a dependent adverbial clause of condition, creating a proper Complex sentence template." 
    },
    { 
        q: "Join into a single Simple sentence: 'He was rejected by the selection board. He abandoned all plans of joining the force.'", 
        options: ["He was rejected by the selection board and he abandoned all plans.", "Having been rejected by the selection board, he abandoned all plans of joining the force.", "Because he was rejected by the selection board, he abandoned all plans.", "Being rejected by the selection board and he abandoned all plans."], 
        correct: 1, 
        exp: "To express a past passive action that happens before the main action in a Simple sentence, we use a Perfect Passive Participle ('Having been + V3')." 
    },
    { 
        q: "Join into a Complex sentence: 'The alarm triggered inside the system vault. The automated locking mechanism engaged instantly.'", 
        options: ["The alarm triggered inside the system vault and the automated locking mechanism engaged.", "No sooner did the alarm trigger inside the system vault than the automated locking mechanism engaged.", "The locking mechanism engaged instantly because of the alarm inside the system vault.", "The alarm triggered inside the system vault, so the mechanism engaged."], 
        correct: 1, 
        exp: "The correlative subordinating structure 'No sooner... than' creates an adverbial clause of time, forming an advanced Complex sentence highlighting immediate sequential actions." 
    },
    { 
        q: "Join into a Simple sentence: 'He had no capital resource at hand. He could not initialize his startup venture.'", 
        options: ["Having no capital resource at hand, he could not initialize his startup venture.", "Because he had no capital resource at hand, he could not initialize his startup.", "He had no capital resource at hand and so he could not initialize his startup.", "He could not initialize his startup venture due to he had no capital resource."], 
        correct: 0, 
        exp: "Using a participle phrase ('Having no capital resource...') allows the reduction of the first clause, keeping exactly one finite verb ('could not initialize') to produce a valid Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The application server suffered a severe hardware failure. The backup instances failed to spin up.'", 
        options: ["Although the application server suffered a failure, the backup instances failed to spin up.", "The application server suffered a severe hardware failure, and furthermore, the backup instances failed to spin up.", "The application server suffered a severe hardware failure, making the backup instances fail.", "The server suffered a failure while the backup instances failed to spin up."], 
        correct: 1, 
        exp: "The cumulative coordinating adverbial phrase 'and furthermore' emphasizes a logical addition while preserving the standalone status of both independent clauses in a Compound format." 
    },
    { 
        q: "Join into a Complex sentence: 'The security specialist identified a unique signature. The ransomware payload was deployed with it.'", 
        options: ["The security specialist identified a unique signature by which the ransomware payload was deployed.", "The security specialist identified a unique signature and the ransomware payload was deployed with it.", "The ransomware payload was deployed by a unique signature identified by the specialist.", "An identified unique signature was used to deploy the ransomware payload."], 
        correct: 0, 
        exp: "The relative clause 'by which the ransomware payload was deployed' acts as an adjective clause modifying 'signature', creating a well-structured Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The general manager concluded the presentation. The board of directors raised their hands to vote.'", 
        options: ["When the general manager concluded the presentation, the board raised their hands.", "The general manager having concluded the presentation, the board of directors raised their hands to vote.", "The general manager concluded the presentation and the board raised their hands.", "The board of directors raised their hands to vote after the manager's presentation concluded."], 
        correct: 1, 
        exp: "Because the actions share completely different subjects ('manager' and 'board'), a Nominative Absolute construct ('The general manager having concluded...') is the proper path to a Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'You must provide a valid authentication token. You will be denied entry to the system terminal.'", 
        options: ["Provide a valid authentication token or you will be denied entry.", "Provided that you do not provide a token, you will be denied entry.", "Excepting you provide a token, you will be denied entry.", "If you do not provide a valid authentication token, you will be denied entry."], 
        correct: 3, 
        exp: "The subordinating conditional conjunction 'If' accurately sets up a dependent adverbial clause of condition, creating a proper Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The validation routine discovered structural anomalies in the database schema. It immediately initiated a rollback operation.'", 
        options: ["Discovering structural anomalies in the database schema, the validation routine immediately initiated a rollback operation.", "When the validation routine discovered structural anomalies, it initiated a rollback.", "The validation routine discovered structural anomalies and initiated a rollback.", "A rollback operation was initiated because structural anomalies were discovered by the validation routine."], 
        correct: 0, 
        exp: "Converting the first finite verb into a Present Participle ('Discovering structural anomalies...') transforms the first phrase into a modifier, leaving a single finite verb ('initiated') for a clean Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The network throughput dropped significantly. The video rendering pipeline did not stall.'", 
        options: ["Although the network throughput dropped significantly, the video rendering pipeline did not stall.", "The network throughput dropped significantly; nevertheless, the video rendering pipeline did not stall.", "In spite of the significant drop in network throughput, the pipeline did not stall.", "The network throughput dropped significantly but did not make the pipeline stall."], 
        correct: 1, 
        exp: "The adversative coordinating conjunction 'nevertheless' links two contrasting independent coordinate clauses, establishing a perfect Compound configuration." 
    },
    { 
        q: "Join into a Complex sentence: 'He executed the deployment script. He intended to verify the environment values.'", 
        options: ["He executed the deployment script to verify the environment values.", "He executed the deployment script in order that he might verify the environment values.", "He executed the deployment script and verified the environment values.", "Executing the deployment script, he verified the environment values."], 
        correct: 1, 
        exp: "The purpose conjunction 'in order that' sets up a dependent adverbial clause of purpose, which forms a clear Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The script completed the compilation matrix. The deployment controller distributed the data assets.'", 
        options: ["As soon as the script completed the compilation matrix, the controller distributed assets.", "The script having completed the compilation matrix, the deployment controller distributed the data assets.", "The script completed the compilation matrix and the controller distributed assets.", "When the script completed the compilation matrix, the controller distributed assets."], 
        correct: 1, 
        exp: "This choice correctly leverages a past perfect absolute participle construct ('The script having completed...') to cleanly synthesize independent subjects into a valid Simple sentence structure." 
    },
    { 
        q: "Join into a Complex sentence: 'The application will optimize its resource pool. This is highly anticipated by the architects.'", 
        options: ["That the application will optimize its resource pool is highly anticipated by the architects.", "The application will optimize its resource pool and this is highly anticipated.", "The application optimizing its resource pool is anticipated by the architects.", "Architects anticipate that the application will optimize its resource pool certainly."], 
        correct: 0, 
        exp: "Using a noun clause ('That the application will optimize its resource pool') as the logical subject of the sentence safely configures a stable Complex sentence design." 
    },
    { 
        q: "Join into a Compound sentence: 'Submit the revised technical specifications before midnight. Your architecture grant will be revoked.'", 
        options: ["If you do not submit the technical specifications before midnight, your grant will be revoked.", "Submit the revised technical specifications before midnight, or else your architecture grant will be revoked.", "Unless you submit the technical specifications before midnight, your grant will be revoked.", "By failing to submit the technical specifications before midnight, your grant will be revoked."], 
        correct: 1, 
        exp: "The coordinate alternative connector 'or else' links two standalone options while preserving their individual clause sovereignty, fulfilling the Compound structural requirement." 
    },
    { 
        q: "Join into a Simple sentence: 'The scanning engine verified the file signature array. It immediately unlocked the download stream.'", 
        options: ["Upon verifying the file signature array, the scanning engine immediately unlocked the download stream.", "When the scanning engine verified the file signature array, it unlocked the download stream.", "The scanning engine verified the file signature array and unlocked the download stream.", "The download stream was unlocked because the file signature array was verified by the scanning engine."], 
        correct: 0, 
        exp: "Using a prepositional phrase built with a gerund ('Upon verifying...') transforms the first operation into a baseline phrasal modifier, achieving a clean Simple sentence frame." 
    },
    { 
        q: "Join into a Complex sentence: 'The final presentation concluded successfully. The investor group indicated their intent to fund the asset.'", 
        options: ["The final presentation concluded successfully and the investor group indicated intent.", "Hardly had the final presentation concluded successfully when the investor group indicated their intent to fund the asset.", "The presentation concluding successfully made the investor group indicate their funding intent.", "After the presentation concluded successfully, the investor group indicated funding intent."], 
        correct: 1, 
        exp: "The advanced temporal subordinating conjunction pairing 'Hardly... when' establishes a dependent adverbial clause of time, creating an elegant Complex sentence configuration." 
    },
    { 
        q: "Join into a Simple sentence: 'Professor Nathan is an expert cryptographer. He analyzed the compromised network packets.'", 
        options: ["Professor Nathan, an expert cryptographer, analyzed the compromised network packets.", "Professor Nathan was an expert cryptographer and analyzed the compromised network packets.", "Although Professor Nathan was an expert cryptographer, he analyzed the compromised packets.", "Professor Nathan analyzed the compromised network packets because he was a cryptographer."], 
        correct: 0, 
        exp: "By placing the descriptor 'an expert cryptographer' in apposition right next to the subject noun, we drop the redundant auxiliary verb, producing a clean Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The team identified several architectural defects during code review. They successfully launched the product version on schedule.'", 
        options: ["Although the team identified defects during code review, they launched on schedule.", "The team identified several architectural defects during code review; however, they successfully launched the product version on schedule.", "In spite of identifying several architectural defects during code review, they launched on schedule.", "The team identified defects but managed launching the product version on schedule."], 
        correct: 1, 
        exp: "The coordinating adversative adverbial conjunction 'however' safely notes a contrast between two structurally equal standalone statements, configuring a proper Compound layout." 
    },
    { 
        q: "Join into a Complex sentence: 'The indexing routine is processing slowly. There is a precise structural bottleneck causing it.'", 
        options: ["There is a precise structural bottleneck why the indexing routine is processing slowly.", "The indexing routine is processing slowly and there is a precise bottleneck causing it.", "The indexing routine is processing slowly due to a precise structural bottleneck.", "Why the indexing routine is processing slowly has a precise structural bottleneck."], 
        correct: 0, 
        exp: "Fusing the statements by introducing an adjective relative clause initiated with the relative adverb 'why' safely configures a stable Complex sentence design." 
    },
    { 
        q: "Join into a Simple sentence: 'The load balancer lost access to the primary database mirror. It immediately broadcasted a warning token.'", 
        options: ["When the load balancer lost access to the mirror, it broadcasted a warning token.", "The load balancer lost access to the primary database mirror and broadcasted a warning token.", "Having lost access to the primary database mirror, the load balancer immediately broadcasted a warning token.", "Losing access to the primary database mirror, the load balancer broadcasted a warning token."], 
        correct: 2, 
        exp: "A perfect participle phrase construction layout ('Having lost access...') transforms the initial statement into a descriptive participle fragment, establishing a proper Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'The server temperature exceeds the safe threshold boundary. An automated cooling routine initiates.'", 
        options: ["The server temperature exceeds the safe threshold boundary and a cooling routine initiates.", "Provided that the server temperature exceeds the safe threshold boundary, a cooling routine initiates.", "The server temperature exceeding the safe threshold boundary initiates a cooling routine.", "An automated cooling routine initiates because of the temperature exceeding the boundary."], 
        correct: 1, 
        exp: "The conditional subordinating connector phrase 'Provided that' initiates an adverbial clause of condition, resolving into a textbook Complex sentence standard." 
    },
    { 
        q: "Join into a Simple sentence: 'He was absent from the strategic sync meeting. He did not obtain the initialization parameters.'", 
        options: ["Because he was absent from the strategic sync meeting, he did not obtain the parameters.", "On account of being absent from the strategic sync meeting, he did not obtain the initialization parameters.", "He was absent from the meeting and so he did not obtain the parameters.", "Being absent from the meeting, he did not obtain the parameters."], 
        correct: 1, 
        exp: "The compound preposition 'On account of' followed by a gerund transforms the entire cause block into a phrasal modifier, preserving a single finite verb ('did not obtain') for a valid Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'You are highlighting a specific routing script. Kindly explain the design paradigm choice.'", 
        options: ["Kindly explain the design paradigm choice of the specific routing script you are highlighting.", "Kindly explain the design paradigm choice why you are highlighting a specific routing script.", "Kindly explain why you are highlighting that specific routing script.", "You are highlighting a specific routing script, so explain the choice."], 
        correct: 2, 
        exp: "Introducing a dependent noun object clause ('why you are highlighting...') inside the imperative matrix command structures a proper Complex sentence pattern." 
    },
    { 
        q: "Join into a Compound sentence: 'The production database environment must be optimized immediately. The application cluster will drop incoming traffic blocks.'", 
        options: ["If the production database environment is not optimized immediately, the application cluster will drop traffic.", "The production database environment must be optimized immediately; otherwise, the application cluster will drop incoming traffic blocks.", "Unless the production database environment is optimized immediately, the cluster will drop traffic.", "By not optimizing the production database environment immediately, the cluster will drop traffic."], 
        correct: 1, 
        exp: "The coordinate alternatives connector 'otherwise' binds both structural statements while maintaining their individual clause sovereignty, fulfilling the Compound layout rules." 
    },
    { 
        q: "Join into a Simple sentence: 'The processing script identified a corrupted ledger file segment. It recorded a critical exception signature.'", 
        options: ["On identifying a corrupted ledger file segment, the processing script recorded a critical exception signature.", "When the processing script identified a corrupted ledger file segment, it recorded a critical exception.", "The processing script identified a corrupted ledger file segment and recorded a critical exception.", "A critical exception signature was recorded because a corrupted ledger file segment was identified."], 
        correct: 0, 
        exp: "Wrapping the initial clause inside a compressed phrasal layout opened by the time preposition 'On' reduces the entire block into a Simple sentence frame." 
    },
    { 
        q: "Join into a Complex sentence: 'We selected a specific backup server facility. The thermal parameters were ideal there.'", 
        options: ["We selected a specific backup server facility where the thermal parameters were ideal.", "We selected a specific backup server facility and the thermal parameters were ideal there.", "The thermal parameters being ideal, we selected a specific backup server facility.", "We selected a backup server facility because the parameters were ideal."], 
        correct: 0, 
        exp: "Fusing the target assertions via a descriptive relative clause launched with the localizing adverb 'where' forms a neat Complex sentence design." 
    },
    { 
        q: "Join into a Simple sentence: 'The lead DevOps engineer reviewed the deployment metrics. She authorized the software production launch.'", 
        options: ["When the lead DevOps engineer reviewed the deployment metrics, she authorized the launch.", "The lead DevOps engineer reviewed the deployment metrics and authorized the launch.", "Having reviewed the deployment metrics, the lead DevOps engineer authorized the software production launch.", "Reviewing the deployment metrics, the lead DevOps engineer authorized the launch."], 
        correct: 2, 
        exp: "Utilizing a perfect active participle phrase construction layout ('Having reviewed...') transforms the initial statement into a descriptive participle fragment, establishing a proper Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The authentication script filters automated attack tools. It captures their original source geolocation parameter arrays.'", 
        options: ["The authentication script not only filters automated attack tools but also captures their original source geolocation parameter arrays.", "Although the authentication script filters automated attack tools, it captures their geolocation arrays.", "In addition to filtering automated attack tools, the authentication script captures their geolocation arrays.", "The authentication script filters automated attack tools and captures geolocation arrays."], 
        correct: 0, 
        exp: "The multi-part cumulative coordinate connector 'not only... but also' couples both operations while securely ensuring a Compound structural layout." 
    },
    { 
        q: "Join into a Complex sentence: 'The payload structures are encrypted securely. Their transactional contents remain protected across unsecure channel maps.'", 
        options: ["The payload structures are encrypted securely and their transactional contents remain protected.", "Since the payload structures are encrypted securely, their transactional contents remain protected across unsecure channel maps.", "The payload structures being encrypted securely keeps their transactional contents protected.", "Their transactional contents remain protected across unsecure channel maps due to secure encryption."], 
        correct: 1, 
        exp: "The causal subordinating conjunction marker 'Since' initiates a clear dependent adverbial clause of reason, yielding an undeniable Complex sentence configuration." 
    },
    { 
        q: "Join into a Simple sentence: 'The parsing utility scanned the raw log script lines. It extracted the modified metadata index keys.'", 
        options: ["Scanning the raw log script lines, the parsing utility extracted the modified metadata index keys.", "When the parsing utility scanned the raw log script lines, it extracted the index keys.", "The parsing utility scanned the raw log script lines and extracted the index keys.", "Having scanned the raw log script lines, the utility extracted the modified metadata index keys."], 
        correct: 0, 
        exp: "An introductory present active participle tracking phrase string ('Scanning the raw log...') smoothly downsizes the initial finite clause structure into a modifier, achieving a clean Simple sentence frame." 
    },
    { 
        q: "Join into a Complex sentence: 'The validation parameters fall outside the specified array limit. The main application thread triggers a safety execution routine.'", 
        options: ["The validation parameters fall outside the specified array limit and the thread triggers a safety routine.", "As long as the validation parameters fall outside the specified array limit, the main application thread triggers a safety execution routine.", "The validation parameters falling outside the specified array limit makes the thread trigger a safety routine.", "The main application thread triggers a safety execution routine because the parameters fall outside the limit."], 
        correct: 1, 
        exp: "The conditional temporal subordinating connector 'As long as' establishes a dependent adverbial clause, configuring a proper Complex sentence template." 
    },
{ 
        q: "Join into a single Simple sentence: 'The strategic validation pipeline was executed. The core deployment engineer checked the status logs.'", 
        options: ["The strategic validation pipeline was executed and the engineer checked logs.", "The strategic validation pipeline having been executed, the core deployment engineer checked the status logs.", "Because the validation pipeline was executed, the engineer checked logs.", "The engineer checked status logs when the validation pipeline executed."], 
        correct: 1, 
        exp: "To join structures with entirely different subjects in a passive sequence into a Simple sentence, use a Passive Perfect Nominative Absolute structure ('Subject + having been + V3')." 
    },
    { 
        q: "Join into a Complex sentence: 'The data packets arrived at the destination node. The processing script initialized instantly.'", 
        options: ["The data packets arrived at the node and the script initialized.", "No sooner had the data packets arrived at the destination node than the processing script initialized.", "The processing script initialized instantly because of the packet arrival.", "The data packets arrived at the destination node, so the script initialized."], 
        correct: 1, 
        exp: "The time-limiting correlative subordinating structure 'No sooner had... than' creates a dependent adverbial clause of time, forming an advanced Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'He had no additional database mirrors available. He could not complete the system recovery.'", 
        options: ["Having no additional database mirrors available, he could not complete the system recovery.", "Because he had no additional database mirrors available, he could not complete the recovery.", "He had no additional database mirrors available and so he could not complete the recovery.", "He could not complete the recovery due to he had no additional mirrors."], 
        correct: 0, 
        exp: "A present active participle phrase ('Having no additional...') reduces the first finite clause down to a modifier while retaining exactly one finite verb ('could not complete') for a perfect Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The core automation engine identified an execution error. It simultaneously tracked its hex address layout.'", 
        options: ["Although the engine identified an error, it tracked its hex address layout.", "The core automation engine identified an execution error, and at the same time, it tracked its hex address layout.", "The engine identified an error, making it track its hex address layout.", "The engine identified an error while tracking its hex address layout."], 
        correct: 1, 
        exp: "The coordinate connector phrase 'and at the same time' successfully merges two parallel coordinate facts while explicitly preserving their status as independent clauses in a Compound sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'The network administrator identified a security vulnerability. The script was patched because of it.'", 
        options: ["The network administrator identified a security vulnerability because of which the script was patched.", "The network administrator identified a security vulnerability and the script was patched because of it.", "The script was patched by a security vulnerability identified by the administrator.", "An identified security vulnerability was used to patch the script structure."], 
        correct: 0, 
        exp: "The relative structure clause 'because of which the script was patched' forms an adjective clause modifying the noun 'vulnerability', rendering a correct Complex sentence structure." 
    },
    { 
        q: "Join into a Simple sentence: 'The parsing script completed its operations. The automated database indexer refreshed the tables.'", 
        options: ["When the parsing script completed its operations, the indexer refreshed the tables.", "The parsing script having completed its operations, the automated database indexer refreshed the tables.", "The parsing script completed its operations and the indexer refreshed tables.", "The automated database indexer refreshed the tables after the parsing script completed operations."], 
        correct: 1, 
        exp: "When combining clauses with different standalone subjects ('script' and 'indexer'), a Nominative Absolute past participle construct ('The parsing script having completed...') is required to assemble a Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'You must provide a secure decryption key block. Your storage access privileges will be revoked.'", 
        options: ["Provide a secure decryption key block or your storage access privileges will be revoked.", "Provided that you do not provide a key block, your privileges will be revoked.", "Excepting you provide a key block, your privileges will be revoked.", "Unless you provide a secure decryption key block, your storage access privileges will be revoked."], 
        correct: 3, 
        exp: "The negative conditional subordinating connector word 'Unless' successfully constructs a dependent clause of condition, leading to an unambiguous Complex sentence format." 
    },
    { 
        q: "Join into a Simple sentence: 'The load balancer discovered a corrupted server link. It instantly dropped the connection path.'", 
        options: ["Discovering a corrupted server link, the load balancer instantly dropped the connection path.", "When the load balancer discovered a corrupted server link, it dropped the connection.", "The load balancer discovered a corrupted server link and dropped the connection.", "The connection path was dropped because a corrupted server link was discovered by the load balancer."], 
        correct: 0, 
        exp: "Converting the first action verb into a Present Participle ('Discovering a corrupted...') shifts it into a descriptive modifier fragment, leaving one finite verb ('dropped') for a textbook Simple sentence layout." 
    },
    { 
        q: "Join into a Compound sentence: 'The background extraction script completed with errors. The main data visualizer dashboard did not crash.'", 
        options: ["Although the background extraction script completed with errors, the visualizer did not crash.", "The background extraction script completed with errors; nevertheless, the main data visualizer dashboard did not crash.", "In spite of completing with errors, the main data visualizer dashboard did not crash.", "The background extraction script completed with errors but did not make the dashboard crash."], 
        correct: 1, 
        exp: "The adversative coordinating conjunction 'nevertheless' links two contrasting independent coordinate clauses, establishing a correct Compound sentence configuration." 
    },
    { 
        q: "Join into a Complex sentence: 'He executed the custom parsing routine. He wanted to verify the target parameters.'", 
        options: ["He executed the custom parsing routine to verify the target parameters.", "He executed the custom parsing routine so that he might verify the target parameters.", "He executed the custom parsing routine and verified the target parameters.", "Executing the custom parsing routine, he verified the target parameters."], 
        correct: 1, 
        exp: "The purpose conjunction group 'so that he might' configures a dependent adverbial clause of purpose, which forms a clear Complex sentence." 
    },
    { 
        q: "Join into a Simple sentence: 'The automation macro completed the data sync. The deployment server updated the client records.'", 
        options: ["As soon as the automation macro completed the data sync, the server updated records.", "The automation macro having completed the data sync, the deployment server updated the client records.", "The automation macro completed the data sync and the server updated records.", "When the automation macro completed the data sync, the server updated client records."], 
        correct: 1, 
        exp: "This choice leverages a past perfect absolute participle construct ('The automation macro having completed...') to cleanly synthesize independent subjects into a valid Simple sentence structure." 
    },
    { 
        q: "Join into a Complex sentence: 'The application algorithm will optimize its resource pool. The network architect has confirmed this fact.'", 
        options: ["That the application algorithm will optimize its resource pool has been confirmed by the network architect.", "The application algorithm will optimize its resource pool and the architect has confirmed it.", "The application algorithm optimizing its resource pool has been confirmed by the architect.", "The network architect has confirmed that the application algorithm will optimize its resource pool."], 
        correct: 3, 
        exp: "Using a noun clause ('that the application algorithm will optimize...') acting as the direct object of the principal matrix clause verb ('has confirmed') creates a proper Complex sentence pattern." 
    },
    { 
        q: "Join into a Compound sentence: 'Submit the updated configuration parameters before midnight. Your architecture grant will be terminated.'", 
        options: ["If you do not submit the configuration parameters before midnight, your grant will be terminated.", "Submit the updated configuration parameters before midnight, or else your architecture grant will be terminated.", "Unless you submit the configuration parameters before midnight, your grant will be terminated.", "By failing to submit the configuration parameters before midnight, your grant will be terminated."], 
        correct: 1, 
        exp: "The coordinate alternative tracking connector 'or else' links two standalone options while preserving their individual clause sovereignty, fulfilling the Compound structural requirement." 
    },
    { 
        q: "Join into a Simple sentence: 'The optimization script cleared the memory cache blocks. It immediately restored system stability.'", 
        options: ["Upon clearing the memory cache blocks, the optimization script immediately restored system stability.", "When the optimization script cleared the memory cache blocks, it restored stability.", "The optimization script cleared the memory cache blocks and restored stability.", "System stability was restored because the memory cache blocks were cleared by the optimization script."], 
        correct: 0, 
        exp: "Using a prepositional phrase built around a gerund ('Upon clearing...') transforms the initial statement into a phrasal modifier, achieving a clean Simple sentence frame." 
    },
    { 
        q: "Join into a Complex sentence: 'The data transmission cycle ended successfully. The remote listening terminal registered a connection drop.'", 
        options: ["The data transmission cycle ended successfully and the remote terminal registered a drop.", "Hardly had the data transmission cycle ended successfully when the remote listening terminal registered a connection drop.", "The data transmission cycle ending successfully made the terminal register a drop.", "After the data transmission cycle ended successfully, the terminal registered a drop."], 
        correct: 1, 
        exp: "The advanced temporal subordinating conjunction pairing 'Hardly... when' establishes a dependent adverbial clause of time, creating an elegant Complex sentence configuration." 
    },
    { 
        q: "Join into a Simple sentence: 'Dr. Sarah Mitchell is an expert network analyst. She fixed the broken encryption system.'", 
        options: ["Dr. Sarah Mitchell, an expert network analyst, fixed the broken encryption system.", "Dr. Sarah Mitchell was an expert network analyst and fixed the broken encryption system.", "Although Dr. Sarah Mitchell was an expert network analyst, she fixed the encryption system.", "Dr. Sarah Mitchell fixed the broken encryption system because she was an analyst."], 
        correct: 0, 
        exp: "By placing the descriptor 'an expert network analyst' in apposition right next to the subject noun, we drop the redundant auxiliary verb, producing a clean Simple sentence." 
    },
    { 
        q: "Join into a Compound sentence: 'The code execution script encountered several unhandled exceptions. It successfully completed the parsing matrix.'", 
        options: ["Although the script encountered exceptions, it successfully completed the parsing matrix.", "The code execution script encountered several unhandled exceptions; however, it successfully completed the parsing matrix.", "In spite of encountering several unhandled exceptions, it completed the parsing matrix.", "The script encountered exceptions but managed successfully completing the parsing matrix."], 
        correct: 1, 
        exp: "The coordinating adversative adverbial conjunction 'however' safely notes a contrast between two structurally equal standalone statements, configuring a proper Compound layout." 
    },
    { 
        q: "Join into a Complex sentence: 'The indexing routine is processing slowly. A precise architectural bottleneck is responsible for it.'", 
        options: ["There is a precise architectural bottleneck why the indexing routine is processing slowly.", "The indexing routine is processing slowly and a precise bottleneck is responsible.", "The indexing routine is processing slowly due to a precise architectural bottleneck.", "The indexing routine is processing slowly because a precise architectural bottleneck is responsible for it."], 
        correct: 3, 
        exp: "Fusing the statements by introducing an adverbial clause of reason initiated with the subordinating conjunction 'because' configures a stable Complex sentence design." 
    },
    { 
        q: "Join into a Simple sentence: 'The script lost connection to the main cluster array. It broadcasted a critical alarm token.'", 
        options: ["When the script lost connection to the main cluster array, it broadcasted an alarm token.", "The script lost connection to the main cluster array and broadcasted an alarm token.", "Having lost connection to the main cluster array, the script broadcasted a critical alarm token.", "Losing connection to the main cluster array, the script broadcasted an alarm token."], 
        correct: 2, 
        exp: "A perfect participle phrase construction layout ('Having lost connection...') transforms the initial statement into a descriptive participle fragment, establishing a proper Simple sentence." 
    },
    { 
        q: "Join into a Complex sentence: 'The parameter metrics step outside the threshold limit. The security layer triggers a fallback script.'", 
        options: ["The parameter metrics step outside the threshold limit and the security layer triggers a fallback script.", "As soon as the parameter metrics step outside the threshold limit, the security layer triggers a fallback script.", "The parameter metrics stepping outside the threshold limit triggers a fallback script.", "The security layer triggers a fallback script because of the parameter metrics stepping outside."], 
        correct: 1, 
        exp: "The temporal subordinating conjunction 'As soon as' establishes a dependent adverbial clause of time, configuring a proper Complex sentence template." 
    },
    {"q":"Join into Simple: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' is a simple sentence structure."},
    {"q":"Join into Complex: The sun set. We returned home.","options":["When the sun set, we returned home.","The sun set and we returned home.","Having set the sun, we returned home.","The sun having set, we returned home."],"correct":0,"exp":"'When...' clause forms a complex sentence."},
    {"q":"Join into Compound: Speak the truth. You will be respected.","options":["Speak the truth and you will be respected.","If you speak the truth, you will be respected.","Speaking the truth leads to respect.","Speak the truth to be respected."],"correct":0,"exp":"Compound sentence using coordinating conjunction 'and'."},
    {"q":"Join using Participle: He saw the policeman. He ran away.","options":["Seeing the policeman, he ran away.","He saw the policeman and ran away.","When he saw the policeman, he ran away.","Because he saw the policeman, he ran away."],"correct":0,"exp":"Participle joining: Seeing + noun, clause."},
    {"q":"Join into Simple: He was ill. He could not attend.","options":["On account of his illness, he could not attend.","He was ill so he could not attend.","As he was ill, he could not attend.","He being ill could not attend."],"correct":0,"exp":"'On account of...' is a simple sentence prepositional phrase."},
    {"q":"Join using Relative Pronoun: I met a man. He had a wooden leg.","options":["I met a man who had a wooden leg.","I met a man having a wooden leg.","I met a man and he had a wooden leg.","The man I met had a wooden leg."],"correct":0,"exp":"Relative pronoun 'who' joins the description."},
    {"q":"Join into Compound: He is lazy. He is clever.","options":["He is lazy but clever.","Although he is lazy, he is clever.","In spite of being lazy, he is clever.","He is lazy and clever."],"correct":0,"exp":"Lazy but clever is compound with implied subjects."},
    {"q":"Join into Simple: She finished her work. She went to sleep.","options":["Having finished her work, she went to sleep.","She finished her work and went to sleep.","When she finished her work, she went to sleep.","After finishing her work, she went to sleep."],"correct":0,"exp":"Perfect participle 'Having finished' joins into simple."},
    {"q":"Join into Complex: Tell me the truth. I will forgive you.","options":["If you tell me the truth, I will forgive you.","Tell me the truth and I will forgive you.","Tell truth to get forgiveness.","By telling truth you get forgiven."],"correct":0,"exp":"Complex sentence conditional clause."},
    {"q":"Join using Infinitive: He works hard. He wants to support his family.","options":["He works hard to support his family.","He works hard and supports his family.","He works hard so that he supports his family.","By working hard he supports his family."],"correct":0,"exp":"Infinitive 'to support' joins clauses showing purpose."},
    {"q":"Join into Simple: The weather was bad. We cancelled the trip.","options":["Owing to bad weather, we cancelled the trip.","The weather was bad and we cancelled the trip.","As the weather was bad, we cancelled the trip.","Bad weather caused trip cancellation."],"correct":0,"exp":"Simple sentence with prepositional phrase 'Owing to'."},
    {"q":"Join using Relative Clause: This is the house. Jack built it.","options":["This is the house that Jack built.","This is the house and Jack built it.","Jack built this house.","This house is built by Jack."],"correct":0,"exp":"Relative clause 'that Jack built'."},
    {"q":"Join into Compound: He must work hard. He will fail.","options":["He must work hard or he will fail.","If he doesn't work hard, he will fail.","Unless he works hard, he will fail.","Working hard prevents failure."],"correct":0,"exp":"Compound alternative 'or'."},
    {"q":"Join into Simple: He has a large family. He must provide for them.","options":["He has a large family to provide for.","He has a large family and must provide for them.","Since he has a large family, he must provide.","He must provide because he has a large family."],"correct":0,"exp":"Infinitive clause joins into simple."},
    {"q":"Join into Complex: The news is too good to be true.","options":["The news is so good that it cannot be true.","The news is very good and true.","The news is good but not true.","The news being good is true."],"correct":0,"exp":"Complex clause of result 'so...that'."},
    {"q":"Join using Nominative Absolute: The captain was killed. The army fled.","options":["The captain having been killed, the army fled.","The captain was killed and the army fled.","When the captain was killed, the army fled.","Because the captain was killed, the army fled."],"correct":0,"exp":"Nominative absolute: noun + participle phrase."},
    {"q":"Join into Compound: He was not there. His brother was not there.","options":["Neither he nor his brother was there.","He and his brother were not there.","He was not there and brother was not.","Both were absent."],"correct":0,"exp":"Compound correlative joining."},
    {"q":"Join into Simple: He ran as fast as he could. He wanted to catch the bus.","options":["He ran as fast as he could to catch the bus.","He ran fast and caught the bus.","To catch the bus, he ran fast.","He ran fast so that he could catch the bus."],"correct":0,"exp":"Purpose infinitive."},
    {"q":"Join into Complex: He is a man of great wisdom.","options":["He is a man who possesses great wisdom.","He is a wise man.","He has wisdom and he is a man.","He is a man with wisdom."],"correct":0,"exp":"Complex relative clause."},
    {"q":"Join into Compound: He took my pen. He did not return it.","options":["He took my pen but did not return it.","He took my pen and did not return.","Although he took my pen, he did not return it.","Taking my pen he didn't return it."],"correct":0,"exp":"Contrast compound coordinates."},
    {"q":"Join using Adverbial Clause: We arrived. The meeting was over.","options":["When we arrived, the meeting was over.","We arrived and the meeting was over.","On arriving, the meeting was over.","The meeting was over before arrival."],"correct":0,"exp":"Adverbial time clause 'When...'."},
    {"q":"Join into Simple: He had no money. He could not buy food.","options":["Having no money, he could not buy food.","He had no money so he could not buy food.","As he had no money, he could not buy food.","He could not buy food without money."],"correct":0,"exp":"Participle joining."},
    {"q":"Join into Complex: The rain stopped. We started our journey.","options":["As soon as the rain stopped, we started our journey.","The rain stopped and we started our journey.","Having stopped the rain, we started our journey.","We started journey after rain stopped."],"correct":0,"exp":"Complex temporal clause."},
    {"q":"Join into Compound: He is both a writer and a painter.","options":["He is not only a writer but also a painter.","He is a writer and he is a painter.","He is a writer as well as a painter.","All of the above"],"correct":3,"exp":"All represent valid compound additive structures."},
    {"q":"Join into Simple: He was guilty. He confessed his crime.","options":["Being guilty, he confessed his crime.","He was guilty and confessed.","As he was guilty, he confessed.","Guilty man confessed."],"correct":0,"exp":"Simple participle sentence."},
    {"q":"Join the sentences in prompt 126: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 127: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 128: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 129: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 130: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 131: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 132: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 133: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 134: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 135: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 136: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 137: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 138: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 139: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 140: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 141: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 142: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 143: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 144: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 145: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 146: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 147: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 148: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 149: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 150: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 151: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 152: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 153: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 154: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 155: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 156: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 157: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 158: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 159: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 160: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 161: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 162: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 163: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 164: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 165: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 166: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 167: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 168: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 169: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 170: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 171: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 172: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 173: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 174: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 175: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 176: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 177: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 178: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 179: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 180: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 181: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 182: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 183: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 184: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 185: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 186: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 187: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 188: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 189: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 190: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 191: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 192: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 193: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 194: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 195: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 196: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 197: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 198: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 199: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 200: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 201: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 202: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 203: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 204: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 205: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 206: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 207: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 208: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 209: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 210: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 211: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 212: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 213: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 214: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 215: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 216: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 217: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 218: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 219: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 220: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 221: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 222: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 223: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 224: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 225: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 226: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 227: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 228: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 229: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 230: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 231: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 232: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 233: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 234: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 235: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 236: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 237: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 238: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 239: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 240: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 241: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 242: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 243: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 244: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 245: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 246: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 247: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 248: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 249: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."},
    {"q":"Join the sentences in prompt 250: He is poor. He is honest.","options":["In spite of being poor, he is honest.","He is poor but he is honest.","Although he is poor, he is honest.","He is poor and honest."],"correct":0,"exp":"'In spite of being...' creates a correct simple sentence."}
]