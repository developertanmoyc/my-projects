const comprehensionData = [
    // ==========================================
    // PASSAGE 1: THE AMAZON RAINFOREST
    // ==========================================
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "What is the primary location of the Amazon Rainforest?",
        options: ["Africa", "North America", "South America", "Australia"],
        correct: 2,
        exp: "The text states that the Amazon spans across nine countries in South America."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "True or False: The Amazon Rainforest produces half of the world's oxygen.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states it produces roughly 20% of the world's oxygen, not half (50%)."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "Fill in the gap: The majority of the Amazon Rainforest is located in ___.",
        options: ["Peru", "Colombia", "Brazil", "Argentina"],
        correct: 2,
        exp: "The text explicitly mentions 'with the majority located in Brazil'."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "Why is the Amazon called the 'lungs of the Earth'?",
        options: ["Because it looks like a lung from space", "Because it produces 20% of the world's oxygen", "Because it absorbs all the world's water", "Because it has a high altitude"],
        correct: 1,
        exp: "It earns this nickname because it produces roughly 20% of the world's oxygen."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "Fill in the gap: The rainforest is home to millions of species, many of which are still ___.",
        options: ["extinct", "dangerous", "undiscovered", "protected"],
        correct: 2,
        exp: "The passage notes that many species are 'still undiscovered'."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "True or False: The Amazon Rainforest covers over 5.5 million square kilometers.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. This is stated in the very first sentence of the passage."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "Which of the following is NOT mentioned as a threat to the Amazon?",
        options: ["Deforestation", "Logging", "Agricultural expansion", "Urban pollution"],
        correct: 3,
        exp: "The text lists deforestation, logging, and agricultural expansion as threats. Urban pollution is not mentioned."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "Fill in the gap: The Amazon spans across ___ countries in South America.",
        options: ["seven", "eight", "nine", "ten"],
        correct: 2,
        exp: "The text specifies that it spans across nine countries."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "True or False: There are no unknown species left in the Amazon Rainforest.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states that many species are 'still undiscovered'."
    },
    {
        passage: "The Amazon Rainforest is the largest tropical rainforest in the world, covering over 5.5 million square kilometers. It spans across nine countries in South America, with the majority located in Brazil. Often referred to as the 'lungs of the Earth,' the Amazon produces roughly 20% of the world's oxygen. It is home to an incredible diversity of life, housing millions of species of insects, plants, and animals, many of which are still undiscovered. However, the rainforest faces severe threats from deforestation, logging, and agricultural expansion, which endanger this vital ecosystem.",
        q: "Based on the text, what does 'vital ecosystem' imply about the Amazon?",
        options: ["It is easily replaceable", "It is crucial and necessary for the planet", "It is dangerous to humans", "It is only important for Brazil"],
        correct: 1,
        exp: "The word 'vital' means absolutely necessary or important, emphasizing its role as the 'lungs of the Earth'."
    },

    // ==========================================
    // PASSAGE 2: THE INVENTION OF THE TELEPHONE
    // ==========================================
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "Who is widely credited with inventing the first practical telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
        correct: 2,
        exp: "The first sentence clearly states Alexander Graham Bell is credited with the invention."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "True or False: Alexander Graham Bell's mother and wife were both blind.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states that his mother and wife were both deaf, not blind."
    },
    {
        passage: "Alexander Graham historic Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "Fill in the gap: Bell was born in ___ in 1847.",
        options: ["England", "Scotland", "The United States", "Ireland"],
        correct: 1,
        exp: "The text says 'Born in Scotland in 1847'."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "What were the first words spoken over the telephone?",
        options: ["Hello, can you hear me?", "Mr. Watson, come here, I want to see you.", "What hath God wrought?", "Testing, one, two, three."],
        correct: 1,
        exp: "The passage quotes Bell saying: 'Mr. Watson, come here, I want to see you.'"
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "Fill in the gap: Bell was awarded the first U.S. ___ for the telephone in 1876.",
        options: ["medal", "prize", "patent", "contract"],
        correct: 2,
        exp: "The text states 'Bell was awarded the first U.S. patent for the telephone'."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "True or False: Alexander Graham Bell was the only person working on telephone technology at the time.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage mentions Elisha Gray and Antonio Meucci also made significant contributions."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "How did the invention of the telephone impact the world?",
        options: ["It improved written communication", "It revolutionized global communication", "It made transportation faster", "It only helped deaf people"],
        correct: 1,
        exp: "The text says 'The invention revolutionized global communication'."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "Fill in the gap: Bell's assistant was named Mr. ___.",
        options: ["Smith", "Meucci", "Gray", "Watson"],
        correct: 3,
        exp: "Bell's first words were addressed to 'Mr. Watson'."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "True or False: The telephone made it possible to transmit voice instantly across long distances.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The final sentence confirms this."
    },
    {
        passage: "Alexander Graham Bell is widely credited with inventing the first practical telephone. Born in Scotland in 1847, Bell's interest in sound and communication was deeply influenced by his mother and wife, both of whom were deaf. In 1876, Bell was awarded the first U.S. patent for the telephone. The famous first words spoken over the device were to his assistant: 'Mr. Watson, come here, I want to see you.' While Bell won the patent, other inventors like Elisha Gray and Antonio Meucci also made significant contributions to telephone technology. The invention revolutionized global communication, making it possible to transmit voice across long distances instantly.",
        q: "What year did Bell receive the U.S. patent for the telephone?",
        options: ["1847", "1876", "1886", "1901"],
        correct: 1,
        exp: "The text states 'In 1876, Bell was awarded the first U.S. patent'."
    },

    // ==========================================
    // PASSAGE 3: THE WATER CYCLE
    // ==========================================
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "What is another name for the water cycle?",
        options: ["The biological cycle", "The atmospheric cycle", "The hydrologic cycle", "The condensation cycle"],
        correct: 2,
        exp: "The first sentence says 'The water cycle, also known as the hydrologic cycle'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "True or False: The moon is the primary energy source that drives the water cycle.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states that 'The sun drives this cycle'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "Fill in the gap: When the sun heats water, it causes it to ___ into the atmosphere.",
        options: ["condense", "precipitate", "evaporate", "freeze"],
        correct: 2,
        exp: "The sun heats water, 'causing it to evaporate'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "What happens to water vapor as it rises into the atmosphere?",
        options: ["It heats up and burns", "It cools and condenses into clouds", "It turns directly into snow", "It escapes into space"],
        correct: 1,
        exp: "The text says 'As the vapor rises, it cools and condenses into clouds'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "Fill in the gap: Rain, snow, and hail are all forms of ___.",
        options: ["evaporation", "runoff", "precipitation", "infiltration"],
        correct: 2,
        exp: "The text lists rain, snow, and hail as examples of precipitation."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "True or False: Infiltration is the process where water flows over the land back into the ocean.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. Infiltration is when water soaks into the ground. Water flowing over the land is called 'runoff'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "What does the process of infiltration do?",
        options: ["It creates clouds", "It replenishes aquifers", "It causes ocean waves", "It makes water evaporate"],
        correct: 1,
        exp: "The text states that water soaks into the ground in a process called infiltration, 'replenishing aquifers'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "Fill in the gap: Water that does not soak into the ground flows over the land as ___.",
        options: ["precipitation", "vapor", "runoff", "clouds"],
        correct: 2,
        exp: "The passage notes 'The rest flows over the land as runoff'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "True or False: The water cycle is a continuous, non-stop process.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The first sentence describes it as the 'continuous movement of water'."
    },
    {
        passage: "The water cycle, also known as the hydrologic cycle, describes the continuous movement of water on, above, and below the surface of the Earth. The sun drives this cycle by heating water in oceans and lakes, causing it to evaporate into the atmosphere as water vapor. As the vapor rises, it cools and condenses into clouds. Eventually, the condensed water falls back to the surface as precipitation, such as rain, snow, or hail. Some of this water soaks into the ground in a process called infiltration, replenishing aquifers. The rest flows over the land as runoff, eventually returning to the oceans, where the cycle begins again.",
        q: "Where does the cycle 'begin again' according to the passage?",
        options: ["In the clouds", "In the aquifers", "In the oceans", "On the mountain tops"],
        correct: 2,
        exp: "The text says water eventually returns 'to the oceans, where the cycle begins again'."
    },
    // ==========================================
    // PASSAGE 4: THE GREAT WALL OF CHINA
    // ==========================================
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "What was the primary purpose of the Great Wall of China?",
        options: ["To establish trade routes", "To protect against invasions", "To mark the equator", "To serve as a giant road"],
        correct: 1,
        exp: "The text states it was built 'to protect the Chinese states and empires against the raids and invasions'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "True or False: The Great Wall is one single, unbroken line of stone.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage clarifies it is 'not a single continuous wall but a collection of walls, trenches, and natural barriers'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "Fill in the gap: The wall was primarily built during the ___ Dynasty.",
        options: ["Han", "Tang", "Ming", "Qing"],
        correct: 2,
        exp: "The text specifies it 'was primarily built during the Ming Dynasty'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "How long does the Great Wall span?",
        options: ["10,000 kilometers", "21,000 kilometers", "5,000 kilometers", "50,000 kilometers"],
        correct: 1,
        exp: "The passage states that the wall spans 'over 21,000 kilometers'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "Fill in the gap: The Great Wall was built to defend against ___ groups.",
        options: ["European", "nomadic", "maritime", "technological"],
        correct: 1,
        exp: "The text says it protected against invasions of 'various nomadic groups'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "True or False: Only highly paid architects were allowed to build the wall.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage mentions workers included 'soldiers, peasants, and prisoners'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "In which part of China is the Great Wall primarily located?",
        options: ["Southern", "Eastern", "Northern", "Western"],
        correct: 2,
        exp: "The first sentence notes it is 'located in northern China'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "Fill in the gap: Besides walls, the structure also includes ___ and natural barriers.",
        options: ["castles", "bridges", "trenches", "pyramids"],
        correct: 2,
        exp: "The text states it is a collection of 'walls, trenches, and natural barriers'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "True or False: Today, the Great Wall serves as a major tourist attraction.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The final sentence confirms it is 'a major tourist attraction'."
    },
    {
        passage: "The Great Wall of China is an ancient series of walls and fortifications located in northern China. It was built to protect the Chinese states and empires against the raids and invasions of various nomadic groups. The wall spans over 21,000 kilometers and was primarily built during the Ming Dynasty. Unlike popular belief, it is not a single continuous wall but a collection of walls, trenches, and natural barriers. Many workers, including soldiers, peasants, and prisoners, died during its construction. Today, it stands as a symbol of China's historical strength and is a major tourist attraction.",
        q: "What does the Great Wall stand as a symbol of today?",
        options: ["Global unity", "Historical strength", "Modern architecture", "Agricultural power"],
        correct: 1,
        exp: "The text states it stands as a 'symbol of China's historical strength'."
    },

    // ==========================================
    // PASSAGE 5: PHOTOSYNTHESIS
    // ==========================================
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "What do plants convert light energy into?",
        options: ["Mechanical energy", "Heat energy", "Chemical energy", "Nuclear energy"],
        correct: 2,
        exp: "The first sentence states they 'convert light energy into chemical energy'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "True or False: Oxygen is a byproduct of photosynthesis.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The text explicitly says 'Oxygen is released as a byproduct of this process'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "Fill in the gap: Plants use carbon dioxide from the ___.",
        options: ["soil", "water", "air", "sun"],
        correct: 2,
        exp: "The passage lists 'carbon dioxide from the air'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "What is the name of the sugar that plants produce for food?",
        options: ["Fructose", "Sucrose", "Glucose", "Lactose"],
        correct: 2,
        exp: "The text states organisms produce 'glucose, a type of sugar that serves as their food'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "Fill in the gap: ___ is the green pigment in leaves that captures light energy.",
        options: ["Chloroplast", "Chlorophyll", "Stomata", "Cellulose"],
        correct: 1,
        exp: "The passage identifies 'Chlorophyll, the green pigment in leaves'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "True or False: Only plants can perform photosynthesis.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The text mentions 'green plants, algae, and some bacteria'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "What would happen to the Earth's food chain without photosynthesis?",
        options: ["It would get stronger", "It would collapse", "It would adapt to darkness", "Nothing would change"],
        correct: 1,
        exp: "The last sentence states 'Without photosynthesis, the Earth's food chain would collapse'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "Fill in the gap: Water used in photosynthesis is taken from the ___.",
        options: ["clouds", "air", "soil", "oceans"],
        correct: 2,
        exp: "The text specifies 'water from the soil'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "True or False: The light energy used in this process comes from the moon.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The text explicitly says 'Using sunlight...'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy into chemical energy. Using sunlight, carbon dioxide from the air, and water from the soil, these organisms produce glucose, a type of sugar that serves as their food. Oxygen is released as a byproduct of this process, which is essential for the survival of most living creatures on Earth. Chlorophyll, the green pigment in leaves, plays a crucial role in capturing the light energy needed to drive this chemical reaction. Without photosynthesis, the Earth's food chain would collapse.",
        q: "Why is the oxygen released during photosynthesis so important?",
        options: ["It helps the plants grow faster", "It makes the sky blue", "It is essential for the survival of most living creatures", "It cools down the atmosphere"],
        correct: 2,
        exp: "The passage notes oxygen 'is essential for the survival of most living creatures on Earth'."
    },

    // ==========================================
    // PASSAGE 6: THE DISCOVERY OF PENICILLIN
    // ==========================================
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
        correct: 1,
        exp: "The text states 'Scottish bacteriologist Alexander Fleming made a serendipitous discovery'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "True or False: Fleming discovered penicillin intentionally after years of targeted experiments.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage calls it a 'serendipitous discovery' made 'upon returning from a vacation'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "Fill in the gap: Fleming was a ___ bacteriologist.",
        options: ["British", "Irish", "Scottish", "French"],
        correct: 2,
        exp: "The text introduces him as 'Scottish bacteriologist Alexander Fleming'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "What type of bacteria was in the contaminated petri dish?",
        options: ["Streptococcus", "Staphylococcus", "E. coli", "Salmonella"],
        correct: 1,
        exp: "The passage notes it was 'a petri dish containing Staphylococcus bacteria'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "Fill in the gap: The mold that contaminated the dish was called Penicillium ___.",
        options: ["notatum", "chrysogenum", "album", "nigricans"],
        correct: 0,
        exp: "The text specifies the mold was 'called Penicillium notatum'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "True or False: The discovery marked the dawn of the antibiotic age.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The text literally states, 'This marked the dawn of the antibiotic age'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "What did the mold do to the bacteria in the petri dish?",
        options: ["It helped them grow faster", "It changed their color", "It created a bacteria-free circle around itself", "It fed on them"],
        correct: 2,
        exp: "The passage notes 'the mold had created a bacteria-free circle around itself'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "Fill in the gap: Fleming warned that the misuse of antibiotics could lead to bacterial ___.",
        options: ["mutations", "resistance", "extinction", "growth"],
        correct: 1,
        exp: "The final sentence warns that misuse 'could lead to bacterial resistance'."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "True or False: Penicillin provided a cure for previously fatal viral infections.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The text specifies it provided a cure for 'bacterial infections', not viral ones."
    },
    {
        passage: "In 1928, Scottish bacteriologist Alexander Fleming made a serendipitous discovery that changed medicine forever. Upon returning from a vacation, he noticed that a petri dish containing Staphylococcus bacteria had been contaminated by a mold called Penicillium notatum. Surprisingly, the mold had created a bacteria-free circle around itself. Fleming concluded that the mold was secreting a substance that killed the bacteria, which he named penicillin. This marked the dawn of the antibiotic age, providing a cure for many previously fatal bacterial infections. However, Fleming later warned that the misuse of antibiotics could lead to bacterial resistance.",
        q: "In what year did Fleming make his famous discovery?",
        options: ["1918", "1928", "1938", "1948"],
        correct: 1,
        exp: "The passage begins with 'In 1928...'."
    },
    // ==========================================
    // PASSAGE 11: THE HISTORY OF CHOCOLATE
    // ==========================================
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "Where is the cacao tree originally from?",
        options: ["Europe and Asia", "Central and South America", "North America", "Africa and Australia"],
        correct: 1,
        exp: "The passage states the cacao tree is native to Central and South America."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "True or False: The Mayans and Aztecs ate solid sweet chocolate bars.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. They consumed it as a 'bitter, spicy drink', and solid chocolate wasn't invented until the 1840s."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "Fill in the gap: Ancient civilizations valued cacao beans so highly they used them as ___.",
        options: ["medicine", "currency", "jewelry", "weapons"],
        correct: 1,
        exp: "The text states: 'They valued cacao beans so highly that they used them as currency.'"
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "Who is credited with bringing cacao to Europe?",
        options: ["British merchants", "Spanish explorers", "French chefs", "Italian farmers"],
        correct: 1,
        exp: "The passage notes that 'In the 16th century, Spanish explorers brought cacao back to Europe'."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "Why were honey and sugar added to chocolate in Europe?",
        options: ["To make it look prettier", "To make it last longer", "To counteract the bitterness", "To change its color"],
        correct: 2,
        exp: "The text explains they were added 'to counteract the bitterness'."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "When was the first solid chocolate bar created?",
        options: ["16th Century", "1840s", "1920s", "Ancient times"],
        correct: 1,
        exp: "The text states 'it wasn't until the 1840s that the first solid chocolate bar was created'."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "True or False: J.S. Fry & Sons created the first solid chocolate bar in Spain.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states it was created by J.S. Fry & Sons 'in England', not Spain."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "What did ancient civilizations commonly flavor their chocolate drink with?",
        options: ["Milk and sugar", "Vanilla and chili peppers", "Honey and salt", "Mint and cinnamon"],
        correct: 1,
        exp: "The text mentions 'often flavoring it with vanilla and chili peppers'."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "Fill in the gap: Today, chocolate is a multi-billion dollar global ___.",
        options: ["currency", "industry", "secret", "problem"],
        correct: 1,
        exp: "The final sentence describes it as a 'multi-billion dollar global industry'."
    },
    {
        passage: "Chocolate originates from the cacao tree, which is native to Central and South America. Ancient civilizations like the Mayans and Aztecs consumed chocolate as a bitter, spicy drink, often flavoring it with vanilla and chili peppers. They valued cacao beans so highly that they used them as currency. In the 16th century, Spanish explorers brought cacao back to Europe, where honey and sugar were added to counteract the bitterness. However, it wasn't until the 1840s that the first solid chocolate bar was created by J.S. Fry & Sons in England. Today, chocolate is a multi-billion dollar global industry, but it all started as a sacred, bitter beverage.",
        q: "Which word best describes the original state of the chocolate beverage?",
        options: ["Sweet", "Fruity", "Bitter", "Bland"],
        correct: 2,
        exp: "The passage repeatedly refers to the original drink as 'bitter'."
    },

    // ==========================================
    // PASSAGE 12: THE DEEP SEA
    // ==========================================
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "What are the ocean zones primarily based on?",
        options: ["Temperature and salt content", "Depth and sunlight", "Fish population and size", "Currents and waves"],
        correct: 1,
        exp: "The first sentence says the oceans are divided into zones 'based on depth and sunlight'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "True or False: The midnight zone receives a large amount of sunlight.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states the midnight zone is 'engulfed in complete darkness'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "Fill in the gap: Most marine life exists in the ___ zone.",
        options: ["sunlight", "twilight", "midnight", "abyssal"],
        correct: 0,
        exp: "The text says 'the sunlight zone, is where most marine life exists'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "What is 'bioluminescence'?",
        options: ["The ability to swim extremely fast", "The ability to survive high pressure", "The ability to produce their own light", "The ability to eat poisonous plants"],
        correct: 2,
        exp: "The text defines it as 'the ability to produce their own light'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "Which of the following is NOT listed as a reason creatures use bioluminescence?",
        options: ["To attract prey", "To keep themselves warm", "To deter predators", "To find mates"],
        correct: 1,
        exp: "The text lists attracting prey, deterring predators, and finding mates. Keeping warm is not mentioned."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "True or False: The giant squid is mentioned as a creature of the deep ocean.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The last sentence mentions 'species, such as the anglerfish and the giant squid'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "Fill in the gap: In the twilight zone, only ___ rays of light penetrate.",
        options: ["bright", "faint", "colored", "warm"],
        correct: 1,
        exp: "The text states 'where only faint rays of light penetrate'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "What conditions define the midnight zone?",
        options: ["Warm waters and high light", "Complete darkness, freezing temperatures, and crushing pressure", "Low pressure and abundant plant life", "Strong ocean currents and coral reefs"],
        correct: 1,
        exp: "The passage describes it as 'engulfed in complete darkness, freezing temperatures, and crushing pressure'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "True or False: No life exists in the midnight zone due to the harsh conditions.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states that 'the deep ocean is home to bizarre and fascinating species'."
    },
    {
        passage: "The Earth's oceans are divided into multiple zones based on depth and sunlight. The top layer, the sunlight zone, is where most marine life exists. Below it lies the twilight zone, where only faint rays of light penetrate. Deeper still is the midnight zone, engulfed in complete darkness, freezing temperatures, and crushing pressure. To survive here, many deep-sea creatures have developed bioluminescence—the ability to produce their own light. They use this light to attract prey, deter predators, or find mates. Despite the harsh conditions, the deep ocean is home to bizarre and fascinating species, such as the anglerfish and the giant squid.",
        q: "Fill in the gap: Deep-sea creatures use their light to ___ predators.",
        options: ["feed", "attract", "deter", "blind"],
        correct: 2,
        exp: "The text says they use this light to 'deter predators'."
    },

    // ==========================================
    // PASSAGE 13: RENEWABLE ENERGY
    // ==========================================
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "What characterizes renewable energy sources?",
        options: ["They take millions of years to form", "They constantly replenish themselves", "They release harmful greenhouse gases", "They can only be found underground"],
        correct: 1,
        exp: "The first sentence says they 'constantly replenish themselves'."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "Which of the following is NOT listed as a fossil fuel?",
        options: ["Coal", "Oil", "Natural gas", "Hydropower"],
        correct: 3,
        exp: "The text lists 'coal, oil, and natural gas' as fossil fuels. Hydropower is a renewable energy source."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "True or False: Fossil fuels are described as clean and sustainable.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The text says fossil fuels 'release harmful greenhouse gases', while renewable energy is clean and sustainable."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "Fill in the gap: Solar panels capture energy from the ___.",
        options: ["wind", "water", "sun", "earth"],
        correct: 2,
        exp: "The text states 'Solar panels capture energy from the sun'."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "What does the word 'intermittent' mean in the context of the passage?",
        options: ["Constant and unchanging", "Harmful and toxic", "Not continuous; happening occasionally", "Extremely powerful"],
        correct: 2,
        exp: "The text explains 'intermittent' by adding: 'meaning they only generate electricity when the sun shines or the wind blows'."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "True or False: Hydropower relies on the flow of water through dams.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The text explicitly states: 'Hydropower relies on the flow of water through dams.'"
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "Fill in the gap: The transition to renewable energy is essential for combating ___ change.",
        options: ["technological", "economic", "climate", "social"],
        correct: 2,
        exp: "The passage notes it is 'essential for combating climate change'."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "What is required to solve the problem of intermittent solar and wind power?",
        options: ["Building more dams", "Advanced battery storage solutions", "Burning more fossil fuels", "Using more natural gas"],
        correct: 1,
        exp: "The text says intermittent power generation is 'requiring advanced battery storage solutions'."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "How do wind turbines generate energy according to the text?",
        options: ["By capturing sunlight", "By harnessing the power of moving air", "By burning coal", "By relying on ocean currents"],
        correct: 1,
        exp: "The passage says 'wind turbines harness the power of moving air'."
    },
    {
        passage: "Renewable energy comes from natural sources that constantly replenish themselves, such as sunlight, wind, and flowing water. Unlike fossil fuels like coal, oil, and natural gas, which take millions of years to form and release harmful greenhouse gases when burned, renewable energy is clean and sustainable. Solar panels capture energy from the sun, while wind turbines harness the power of moving air. Hydropower relies on the flow of water through dams. While the transition to renewable energy is essential for combating climate change, it faces challenges. For instance, solar and wind power are intermittent, meaning they only generate electricity when the sun shines or the wind blows, requiring advanced battery storage solutions.",
        q: "True or False: Fossil fuels take millions of years to form.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The text explicitly mentions that fossil fuels 'take millions of years to form'."
    },
    // ==========================================
    // PASSAGE 14: THE GREAT WALL OF CHINA
    // ==========================================
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "What was the primary historical purpose of the Great Wall?",
        options: ["To mark trade routes", "To protect against nomadic invasions", "To act as a royal road", "To divide different Chinese states"],
        correct: 1,
        exp: "The passage states it was built 'to protect against nomadic invasions from the Eurasian Steppe.'"
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "True or False: The Great Wall is one long, unbroken structure.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The first sentence explicitly states it is 'not a single, continuous wall, but rather a series of fortifications'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "Fill in the gap: The most famous sections of the wall were built during the ___ Dynasty.",
        options: ["Han", "Qin", "Ming", "Tang"],
        correct: 2,
        exp: "The text says the best-preserved sections 'were built during the Ming Dynasty'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "Which of the following materials is NOT mentioned as being used to build the wall?",
        options: ["Stone", "Brick", "Steel", "Wood"],
        correct: 2,
        exp: "The passage lists 'stone, brick, tamped earth, and wood'. Steel is not mentioned."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "Where did the nomadic invasions primarily come from?",
        options: ["The southern oceans", "The Eurasian Steppe", "The eastern mountains", "The western deserts"],
        correct: 1,
        exp: "The passage states the wall protected against invasions 'from the Eurasian Steppe'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "True or False: The Great Wall can be easily seen from space with the naked eye.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage clearly states that 'astronauts have confirmed that this is entirely false'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "How long did it take to build the fortifications?",
        options: ["A few decades", "Over centuries", "Exactly 100 years", "One century"],
        correct: 1,
        exp: "The text notes that it was 'constructed over centuries'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "Fill in the gap: The wall was built across the historical ___ borders of ancient Chinese states.",
        options: ["southern", "eastern", "western", "northern"],
        correct: 3,
        exp: "The passage specifies 'historical northern borders'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "True or False: The wall was built by only one specific dynasty.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage says it was constructed 'by various dynasties'."
    },
    {
        passage: "The Great Wall of China is not a single, continuous wall, but rather a series of fortifications built across the historical northern borders of ancient Chinese states. It was constructed over centuries by various dynasties to protect against nomadic invasions from the Eurasian Steppe. The most famous and best-preserved sections of the wall were built during the Ming Dynasty (1368–1644). The wall was made using various materials including stone, brick, tamped earth, and wood. A common modern myth states that the Great Wall is the only human-made object visible from space with the naked eye; however, astronauts have confirmed that this is entirely false.",
        q: "What word best describes the structure of the Great Wall?",
        options: ["Continuous", "Fortifications", "Invisible", "Modern"],
        correct: 1,
        exp: "The text describes it as 'a series of fortifications'."
    },

    // ==========================================
    // PASSAGE 15: PHOTOSYNTHESIS
    // ==========================================
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "What is the primary goal of photosynthesis?",
        options: ["To release carbon dioxide", "To convert light energy into chemical energy", "To absorb oxygen from the air", "To change the color of leaves"],
        correct: 1,
        exp: "The first sentence states it is the process to 'convert light energy... into chemical energy'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "True or False: Only plants are capable of performing photosynthesis.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The passage states that 'green plants, algae, and some bacteria' perform it."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "Fill in the gap: The green pigment essential for this process is called ___.",
        options: ["glucose", "chloroplasts", "chlorophyll", "oxygen"],
        correct: 2,
        exp: "The text mentions 'the green pigment called chlorophyll'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "What gas is released into the atmosphere as a byproduct?",
        options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        correct: 2,
        exp: "The passage explicitly states 'oxygen is released into the atmosphere'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "What two substances do organisms take in to perform photosynthesis?",
        options: ["Oxygen and soil", "Carbon dioxide and water", "Glucose and sunlight", "Chlorophyll and sugar"],
        correct: 1,
        exp: "The text notes they 'take in carbon dioxide from the air and water from the soil'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "True or False: Glucose is a type of sugar that provides energy for growth.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The passage describes it as 'glucose, a type of sugar that provides energy for growth'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "In which cellular structures is chlorophyll found?",
        options: ["Nucleus", "Chloroplasts", "Mitochondria", "Cell wall"],
        correct: 1,
        exp: "The text says chlorophyll is 'found in cellular structures known as chloroplasts'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "Fill in the gap: Photosynthesis provides the primary energy source for nearly all food ___.",
        options: ["chains", "webs", "supplies", "plants"],
        correct: 1,
        exp: "The passage states it provides energy 'for nearly all food webs'."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "True or False: Photosynthesis consumes oxygen and releases carbon dioxide.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. It takes in carbon dioxide and releases oxygen as a byproduct."
    },
    {
        passage: "Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy. During this process, they take in carbon dioxide from the air and water from the soil. Using the green pigment called chlorophyll, which is found in cellular structures known as chloroplasts, they synthesize glucose, a type of sugar that provides energy for growth. As a byproduct of this chemical reaction, oxygen is released into the atmosphere. Photosynthesis is arguably the most crucial biological process on Earth, as it provides the primary energy source for nearly all food webs and supplies the oxygen required by aerobic organisms to survive.",
        q: "What type of organisms require the oxygen supplied by photosynthesis to survive?",
        options: ["Anaerobic organisms", "Aerobic organisms", "Only plants", "Only marine life"],
        correct: 1,
        exp: "The final sentence states it 'supplies the oxygen required by aerobic organisms to survive'."
    },

    // ==========================================
    // PASSAGE 16: MARIE CURIE
    // ==========================================
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "Where was Marie Curie born?",
        options: ["Paris, France", "London, England", "Warsaw, Poland", "Berlin, Germany"],
        correct: 2,
        exp: "The first sentence states she was 'born in Warsaw, Poland'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "True or False: Marie Curie won three Nobel Prizes in her lifetime.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. She won two Nobel Prizes (Physics in 1903 and Chemistry in 1911)."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "Fill in the gap: She coined the term ___ during her groundbreaking research.",
        options: ["chemistry", "physics", "radioactivity", "anemia"],
        correct: 2,
        exp: "The passage notes her 'research on radioactivity, a term she actually coined herself'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "What element did Marie Curie name after her native country?",
        options: ["Radium", "Uranium", "Polonium", "Plutonium"],
        correct: 2,
        exp: "She discovered 'polonium (named after her native country)'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "In which two fields did Marie Curie win her Nobel Prizes?",
        options: ["Physics and Medicine", "Chemistry and Biology", "Physics and Chemistry", "Medicine and Chemistry"],
        correct: 2,
        exp: "The text specifies she won in 'Physics in 1903 and Chemistry in 1911'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "True or False: Marie Curie is the only person to win a Nobel Prize in two different scientific fields.",
        options: ["True", "False"],
        correct: 0,
        exp: "True. The passage states 'she remains the only person to win a Nobel Prize in two different scientific fields'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "Why did Marie Curie move to Paris?",
        options: ["To get married", "To pursue her higher education", "To escape a war", "To find a job"],
        correct: 1,
        exp: "The text says 'She later moved to Paris to pursue her higher education'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "Fill in the gap: She worked alongside her husband, ___ Curie.",
        options: ["Albert", "Jean", "Pierre", "Claude"],
        correct: 2,
        exp: "The text references 'her husband, Pierre Curie'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "What ultimately caused Marie Curie's death?",
        options: ["Old age", "A laboratory explosion", "Aplastic anemia from radiation exposure", "Tuberculosis"],
        correct: 2,
        exp: "The passage concludes that 'continuous exposure to radiation... caused her to develop aplastic anemia, which led to her death'."
    },
    {
        passage: "Marie Curie, born in Warsaw, Poland in 1867, was a pioneering physicist and chemist. She later moved to Paris to pursue her higher education. Curie is famous for her groundbreaking research on radioactivity, a term she actually coined herself. She made history by becoming the first woman ever to win a Nobel Prize. Furthermore, she remains the only person to win a Nobel Prize in two different scientific fields: Physics in 1903 and Chemistry in 1911. Working alongside her husband, Pierre Curie, she discovered two new chemical elements: polonium (named after her native country) and radium. Tragically, her continuous exposure to radiation without proper safety measures caused her to develop aplastic anemia, which led to her death in 1934.",
        q: "True or False: Marie Curie used proper safety gear whenever handling radioactive materials.",
        options: ["True", "False"],
        correct: 1,
        exp: "False. The text explicitly mentions her 'exposure to radiation without proper safety measures'."
    },,
    {"q":"Based on the text, what is the main benefit of reading?","options":["Improves mental agility","Improves posture","Saves time","Reduces wealth"],"correct":0,"exp":"The passage notes reading keeps the mind active."},
    {"q":"According to the passage, why do people travel?","options":["To learn about cultures","To earn money","To avoid work","To waste time"],"correct":0,"exp":"Travel expands cultural awareness."},
    {"q":"What does the word 'ephemeral' mean in paragraph 2?","options":["Short-lived","Permanent","Beautiful","Useless"],"correct":0,"exp":"Ephemeral means lasting a very short time."},
    {"q":"According to the author, technology is a:","options":["Double-edged sword","Unilateral blessing","Complete disaster","Simple toy"],"correct":0,"exp":"Double-edged sword implies both pros and cons."},
    {"q":"What is the primary theme of the passage?","options":["Self-improvement","Financial advice","Historical events","Scientific discoveries"],"correct":0,"exp":"Self-improvement matches the text overall."},
    {"q":"Read the context of question 127: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 128: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 129: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 130: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 131: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 132: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 133: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 134: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 135: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 136: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 137: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 138: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 139: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 140: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 141: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 142: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 143: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 144: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 145: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 146: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 147: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 148: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 149: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 150: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 151: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 152: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 153: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 154: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 155: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 156: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 157: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 158: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 159: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 160: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 161: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 162: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 163: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 164: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 165: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 166: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 167: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 168: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 169: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 170: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 171: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 172: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 173: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 174: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 175: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 176: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 177: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 178: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 179: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 180: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 181: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 182: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 183: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 184: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 185: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 186: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 187: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 188: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 189: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 190: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 191: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 192: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 193: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 194: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 195: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 196: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 197: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 198: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 199: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 200: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 201: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 202: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 203: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 204: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 205: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 206: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 207: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 208: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 209: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 210: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 211: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 212: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 213: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 214: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 215: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 216: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 217: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 218: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 219: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 220: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 221: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 222: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 223: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 224: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 225: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 226: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 227: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 228: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 229: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 230: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 231: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 232: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 233: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 234: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 235: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 236: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 237: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 238: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 239: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 240: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 241: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 242: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 243: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 244: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 245: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 246: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 247: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 248: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 249: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."},
    {"q":"Read the context of question 250: What is the author's primary attitude towards studying?","options":["Supportive","Indifferent","Hostile","Dismissive"],"correct":0,"exp":"The author advocates for active study methods throughout."}
]