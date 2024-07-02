// Shuffling function to randomize the order of words
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const words = [
    {
        word: "acquaint",
        definition: "To make yourself, or someone else, familiar with something",
        synonyms: ["familiarise","inform","enlighten"],
        antonyms: ["ignore","mislead"],
        firstLetter: "a"
    },
    {
        word: "adequate",
        definition: "Of acceptable quality or quantity",
        synonyms: ["satisfactory","sufficient","suitable"],
        antonyms: ["unsuitable","deficient","meagre"],
        firstLetter: "a"
    },
    {
        word: "adhere (to)",
        definition: "To act in accordance with something",
        synonyms: ["follow","observe","obey","heed"],
        antonyms: ["disobey","ignore","disregard"],
        firstLetter: "a"
    },
    {
        word: "adhere (to)",
        definition: "To stick or affix something",
        synonyms: ["fasten","attach","cling"],
        antonyms: ["there are no antonyms for this word"],
        firstLetter: "a"
    },
    {
        word: "adjacent",
        definition: "Positioned next to or nearby",
        synonyms: ["adjoining","neighbouring","bordering"],
        antonyms: ["remote","distant","detached"],
        firstLetter: "a"
    },
    {
        word: "adversary",
        definition: "A rival in a competition, dispute or combat",
        synonyms: ["opponent","foe","enemy","antagonist"],
        antonyms: ["ally","friend","supporter","teammate"],
        firstLetter: "a"
    },
    {
        word: "affinity",
        definition: "A natural affection or understanding",
        synonyms: ["penchant","proclivity","predilection"],
        antonyms: ["aversion","dislike"],
        firstLetter: "a"
    },
    {
        word: "affinity",
        definition: "A similarity to something else",
        synonyms: ["resemblance","likeness"],
        antonyms: ["difference","disparity"],
        firstLetter: "a"
    },
    {
        word: "allegation",
        definition: "A claim of wrongdoing, often without proof",
        synonyms: ["accusation","assertion","statement","charge"],
        antonyms: ["there are no antonyms for this word"],
        firstLetter: "a"
    },
    {
        word: "alluring",
        definition: "Attractive and enticing",
        synonyms: ["captivating","enchanting","tempting"],
        antonyms: ["repellent","repulsive"],
        firstLetter: "a"
    },
    {
        word: "aloof",
        definition: "Having a distant or detached personality",
        synonyms: ["reserved","cold","unfriendly","haughty"],
        antonyms: ["warm","sociable","friendly","amiable"],
        firstLetter: "a"
    },
    {
        word: "appease",
        definition: "To calm someone, usually by satisfying their demands",
        synonyms: ["soothe","pacify","allay","placate"],
        antonyms: ["provoke","frustrate","incite","rile"],
        firstLetter: "a"
    },
    {
        word: "appreciative",
        definition: "Feeling or expressing either gratitude or recognition for something",
        synonyms: ["thankful","grateful","responsive"],
        antonyms: ["thankless","ungrateful"],
        firstLetter: "a"
    },
    {
        word: "apprehensive",
        definition: "Tense or fearful that something bad might happen",
        synonyms: ["uneasy","afraid","anxious","concerned"],
        antonyms: ["confident","composed","assured","bold"],
        firstLetter: "a"
    },
    {
        word: "apprentice",
        definition: "A person who is working for a trained professional in order to learn their skills",
        synonyms: ["trainee","student"],
        antonyms: ["master","expert","teacher"],
        firstLetter: "a"
    },
    {
        word: "apt",
        definition: "Appropriate in a given circumstance",
        synonyms: ["suitable","relevant","fitting","pertinent"],
        antonyms: ["improper","unsuitable","unfit"],
        firstLetter: "a"
    },
    {
        word: "apt",
        definition: "Able to learn or understand things quickly",
        synonyms: ["competent","clever","bright","sharp","astute"],
        antonyms: ["incapable","unskilled","inept"],
        firstLetter: "a"
    },
    {
        word: "aptitude",
        definition: "A natural talent or ability to do something well",
        synonyms: ["gift","flair","knack","proficiency"],
        antonyms: ["ineptitude","incompetence","shortcomings"],
        firstLetter: "a"
    },
    {
        word: "architecture",
        definition: "The planning and construction of buildings",
        synonyms: ["design"],
        antonyms: ["there are no antonyms for this word"],
        firstLetter: "a"
    },
    {
        word: "architecture",
        definition: "The style in which a building is designed",
        synonyms: ["there are no synonyms for this word. Here is an example sentence instead: The city's a___________ seems to have Greek influences"],
        antonyms: ["there are no antonyms for this word either"],
        firstLetter: "a"
    },
    {
        word: "arduous",
        definition: "Difficult or demanding a lot of effort",
        synonyms: ["exhausting","taxing","laborious","gruelling"],
        antonyms: ["effortless","unchallenging"],
        firstLetter: "a"
    },
    {
        word: "artefact",
        definition: "A man-made object of cultural or historical interest",
        synonyms: ["relic","antique"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Martha delivered the priceless a_______ to the museum"],
        firstLetter: "a"
    },
    {
        word: "assiduous",
        definition: "Hard-working and thorough",
        synonyms: ["diligent","attentive","studious","industrious"],
        antonyms: ["careless","idle","negligent"],
        firstLetter: "a"
    },
    {
        word: "assortment",
        definition: "A group of things or people that are similar but have some recognisable differences",
        synonyms: ["variety","mixture","selection","medley","array"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: We ate an a_________ of cheeses for supper"],
        firstLetter: "a"
    },
    {
        word: "asunder",
        definition: "Into pieces, usually by force",
        synonyms: ["apart"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: When Papa married us, he said 'What God has joined together, let no man tear a______'"],
        firstLetter: "a"
    },
    {
        word: "audacity",
        definition: "Disrespectful behaviour",
        synonyms: ["impertinence","gall","nerve","shamelessness"],
        antonyms: ["respect","politeness"],
        firstLetter: "a"
    },
    {
        word: "audacity",
        definition: "A willingness to take daring risks",
        synonyms: ["courage","nerve","dauntlessness"],
        antonyms: ["fear","timidity","cowardice"],
        firstLetter: "a"
    },
    {
        word: "audition",
        definition: "A trial performance used to assess how suitable someone is for a role, e.g., in a play OR to take part in a trial performance",
        synonyms: ["trial","try out"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Gary had an a_______ today and was offered the part in the play"],
        firstLetter: "a"
    },
    {
        word: "barren",
        definition: "Having a dry and bare landscape that is unable to support life",
        synonyms: ["desolate","arid"],
        antonyms: ["fertile","lush"],
        firstLetter: "b"
    },
    {
        word: "bemoan",
        definition: "To express regret, sorrow or dissatisfaction about something",
        synonyms: ["lament","mourn","complain about","denounce"],
        antonyms: ["celebrate","rejoice","praise"],
        firstLetter: "b"
    },
    {
        word: "brusque",
        definition: "Rudely abrupt in speech or behaviour",
        synonyms: ["curt","blunt","short","sharp","terse"],
        antonyms: ["cordial","genial","affable","amiable"],
        firstLetter: "b"
    },
    {
        word: "campaign",
        definition: "A course of action or activities organised with the aim of achieving a specific goal",
        synonyms: ["effort","drive","operation","movement"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Rishi Sunak's election c_______ got off to a poor start"],
        firstLetter: "c"
    },
    {
        word: "catastrophe",
        definition: "A sudden event causing destruction and suffering",
        synonyms: ["disaster","crisis","calamity","tragedy"],
        antonyms: ["miracle","success"],
        firstLetter: "c"
    },
    {
        word: "citizen",
        definition: "A legal resident of a country, town or city OR a person who lives in a specific place",
        synonyms: ["native","resident","national"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Every c______ of the UK should vote in the elections"],
        firstLetter: "c"
    },
    {
        word: "collide",
        definition: "To crash into something while moving",
        synonyms: ["hit","impact","bump into"],
        antonyms: ["miss"],
        firstLetter: "c"
    },
    {
        word: "collide",
        definition: "To disagree or come into conflict with",
        synonyms: ["clash","differ","oppose"],
        antonyms: ["harmonise","correspond"],
        firstLetter: "c"
    },
    {
        word: "committee",
        definition: "A group of people who represent a larger organisation or group and make decisions for them",
        synonyms: ["panel","commision","council","board"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The c________ met to decide the new timetable"],
        firstLetter: "c"
    },
    {
        word: "complemented",
        definition: "Combined in a way that positively highlights the different qualities of each thing",
        synonyms: ["enhanced","improved","heightened","boosted"],
        antonyms: ["contrasted","clashed with"],
        firstLetter: "c"
    },
    {
        word: "compliment",
        definition: "A remark showing admiration or appreciation OR to praise or congratulate someone",
        synonyms: ["praise (noun)","flattery (noun)","flatter (verb)","laud (verb"],
        antonyms: ["reproach (noun)","criticism (noun)","complaint (noun)","insult (verb)","criticise (verb)"],
        firstLetter: "c"
    },
    {
        word: "component",
        definition: "An individual part of something larger",
        synonyms: ["element","piece","unit"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Dr Who screwed the final c________ of his time machine into place"],
        firstLetter: "c"
    },
    {
        word: "component",
        definition: "Forming part of something larger",
        synonyms: ["constituent"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Our fridge is made up of over 500 c__________ parts"],
        firstLetter: "c"
    },
    {
        word: "composed",
        definition: "Calm and in control of one's feelings",
        synonyms: ["relaxed","collected","serene","poised"],
        antonyms: ["agitated","uneasy","flustered"],
        firstLetter: "c"
    },
    {
        word: "composed",
        definition: "wrote or created something, e.g., a song, a piece of art or an email",
        synonyms: ["devised","crafted","penned"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Mozart c_______ many masterpieces in his life"],
        firstLetter: "c"
    },
    {
        word: "comrade",
        definition: "A friend or associate in an organisation, e.g., the armed forces. (Daddy says: This word is closely associated with the Communist Party and other left-wing political groups)",
        synonyms: ["ally","companion","colleague"],
        antonyms: ["rival","enemy","foe","adversary"],
        firstLetter: "c"
    },
    {
        word: "confer",
        definition: "To exchange opinions or ideas in order to make a decision",
        synonyms: ["discuss","consult","deliberate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Darrell decided to c_____ with her team mates before giving an answer at the quiz"],
        firstLetter: "c"
    },
    {
        word: "confer",
        definition: "To give an official title, honour or power",
        synonyms: ["award","grant","bestow"],
        antonyms: ["withhold","refuse","deny"],
        firstLetter: "c"
    },
    {
        word: "congested",
        definition: "Very crowded with people or cars, making it difficult to move around",
        synonyms: ["blocked","gridlocked","packed","crammed"],
        antonyms: ["empty","clear","unobstructed"],
        firstLetter: "c"
    },
    {
        word: "congested",
        definition: "(For body parts) full of fluid or mucus",
        synonyms: ["blocked","stuffed","clogged"],
        antonyms: ["clear","unblocked"],
        firstLetter: "c"
    },
    {
        word: "conscience",
        definition: "A person's internal sense of right and wrong",
        synonyms: ["morals","ethics","principles"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: My c_________ won't let me sleep if I feel guilty."],
        firstLetter: "c"
    },
    {
        word: "contempt",
        definition: "A lack of respect for someone or something",
        synonyms: ["scorn","derision","loathing","disdain"],
        antonyms: ["esteem","admiration"],
        firstLetter: "c"
    },
    {
        word: "contradict",
        definition: "To suggest that something is wrong by offering an alternative idea or statement",
        synonyms: ["refute","dispute","counter"],
        antonyms: ["agree","verify","concur","endorse"],
        firstLetter: "c"
    },
    {
        word: "contort",
        definition: "To twist or bend in an abnormal way",
        synonyms: ["distort","deform"],
        antonyms: ["straighted","uncoil"],
        firstLetter: "c"
    },
    {
        word: "controvery",
        definition: "Widespread and prolonged disagreement about something",
        synonyms: ["debate","contention","strife","dispute"],
        antonyms: ["accord","agreement","harmony"],
        firstLetter: "c"
    },
    {
        word: "convenient",
        definition: "Useful for a person's needs or plans",
        synonyms: ["advantageous","helpful","beneficial"],
        antonyms: ["inconvenient","unhelpful","troublesome"],
        firstLetter: "c"
    },
    {
        word: "correspond",
        definition: "To have a close connection or similarity",
        synonyms: ["match","correlate"],
        antonyms: ["differ","clash","diverge"],
        firstLetter: "c"
    },
    {
        word: "correspond",
        definition: "To write letters or emails to someone",
        synonyms: ["communicate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Martha and Victoria c_________ by letter when they aren't able to see each other regularly."],
        firstLetter: "c"
    },
    {
        word: "cryptic",
        definition: "Having an obscure or hidden meaning",
        synonyms: ["mysterious","puzzling","vague","enigmatic"],
        antonyms: ["clear","obvious","straightforward","explicit"],
        firstLetter: "c"
    },
    {
        word: "cultivate",
        definition: "To actively develop something",
        synonyms: ["foster","establish","acquire"],
        antonyms: ["prevent","stifle"],
        firstLetter: "c"
    },
    {
        word: "cultivate",
        definition: "To prepare land and use it for growing crops or gardening",
        synonyms: ["tend","farm","work","plant"],
        antonyms: ["neglect","abandon"],
        firstLetter: "c"
    },
    {
        word: "cumbersome",
        definition: "Heavy, large and difficult to move or use",
        synonyms: ["bulky","awkward","weighty","unwieldy"],
        antonyms: ["manageable","light","practical","compact"],
        firstLetter: "c"
    },
    {
        word: "curiosity",
        definition: "A desire to know or discover something",
        synonyms: ["interest","inquisitiveness"],
        antonyms: ["indifference","lack of interest"],
        firstLetter: "c"
    },
    {
        word: "curiosity",
        definition: "An interesting and unusual object",
        synonyms: ["trinket","knick-knack","oddity"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: There was a c________ on every shelf in Borgin and Burkes"],
        firstLetter: "c"
    },
    {
        word: "custodian",
        definition: "A person in charge of protecting something",
        synonyms: ["keeper","warden","caretaker","guardian"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The c________ in the museum patrolled the halls carfeully"],
        firstLetter: "c"
    },
    {
        word: "debris",
        definition: "The scattered pieces of something that has been broken up or destroyed",
        synonyms: ["rubble","wreckage","detritus"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: When the cheese factory exploded, d_____ was everywhere"],
        firstLetter: "d"
    },
    {
        word: "decipher",
        definition: "To work out the meaning of something that isn't clear",
        synonyms: ["solve","decode","interpret"],
        antonyms: ["encode","scramble"],
        firstLetter: "d"
    },
    {
        word: "deduce",
        definition: "To come to a logical conclusion about something based on facts or reasoning",
        synonyms: ["conclude","figure out","divine","infer"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence: We were able to d_____ TJ had eaten the fish as the back door had been left open and we saw TJ licking his lips"],
        firstLetter: "d"
    },
    {
        word: "delude",
        definition: "To let yourself believe, or make someone else believe, something untrue",
        synonyms: ["deceive","mislead","trick"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: He was able to d_____ himself into thinking he was the best tennis player in the club"],
        firstLetter: "d"
    },
    {
        word: "despise",
        definition: "To dislike something strongly",
        synonyms: ["hate","detest","abhor"],
        antonyms: ["adore","love"],
        firstLetter: "d"
    },
    {
        word: "destitute",
        definition: "Severely lacking in money and possessions",
        synonyms: ["impoverished","poor","deprived"],
        antonyms: ["rich","wealthy","affluent"],
        firstLetter: "d"
    },
    {
        word: "deteriorate",
        definition: "To get worse",
        synonyms: ["worsen","decline","decay"],
        antonyms: ["improve","recover"],
        firstLetter: "d"
    },
    {
        word: "diagnose",
        definition: "To identify a problem, for example a medical condition or a fault with something",
        synonyms: ["determine","pinpoint"],
        antonyms: ["overlook","disregard","neglect"],
        firstLetter: "d"
    },
    {
        word: "diligence",
        definition: "Thorough and careful effort",
        synonyms: ["attentiveness","assiduousness"],
        antonyms: ["neglect","inattention"],
        firstLetter: "d"
    },
    {
        word: "disastrous",
        definition: "Having very bad consequences",
        synonyms: ["catastrophic","terrible","devastating"],
        antonyms: ["beneficial","favourable","successful"],
        firstLetter: "d"
    },
    {
        word: "discontent",
        definition: "Unhappiness with a situation",
        synonyms: ["dissatisfaction","displeasure"],
        antonyms: ["satisfaction","happiness","contentment"],
        firstLetter: "d"
    },
    {
        word: "discontent",
        definition: "Dissatisfied",
        synonyms: ["unhappy","displeased","disappointed"],
        antonyms: ["satisfied","happy","pleased"],
        firstLetter: "d"
    },
    {
        word: "discrepancy",
        definition: "A difference between two things that should match",
        synonyms: ["inconsistency","disparity"],
        antonyms: ["similarity","resemblance"],
        firstLetter: "d"
    },
    {
        word: "dishearten",
        definition: "To make someone lose hope or morale",
        synonyms: ["dismay","demoralise","discourage"],
        antonyms: ["encourage","boost"],
        firstLetter: "d"
    },
    {
        word: "dispense",
        definition: "To give out",
        synonyms: ["distribute","supply","provide"],
        antonyms: ["retain","keep","withhold"],
        firstLetter: "d"
    },
    {
        word: "dispense",
        definition: "To make a choice to manage without or not use something",
        synonyms: ["get rid of","do without"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I decided to d_______ with my jumper and walked in my t-shirt"],
        firstLetter: "d"
    },
    {
        word: "distraction",
        definition: "Something that takes attention away from what you should be doing",
        synonyms: ["interruption","disturbance","diversion"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The television was a d__________ and the girls ate very slowly"],
        firstLetter: "d"
    },
    {
        word: "disused",
        definition: "No longer used",
        synonyms: ["abandoned","deserted","neglected"],
        antonyms: ["in use"],
        firstLetter: "d"
    },
    {
        word: "divulge",
        definition: "To reveal something secret or private",
        synonyms: ["disclose","make known","reveal"],
        antonyms: ["conceal","hide","withhold"],
        firstLetter: "d"
    },
    {
        word: "eagerness",
        definition: "The state of being very keen to do something",
        synonyms: ["willingness","enthusiasm"],
        antonyms: ["reluctance","indifference"],
        firstLetter: "e"
    },
    {
        word: "earnest",
        definition: "Having a sincere and enthusiastic manner or attitude",
        synonyms: ["fervent","passionate","honest","serious"],
        antonyms: ["insincere","frivolous","superficial","flippant"],
        firstLetter: "e"
    },
    {
        word: "elected",
        definition: "Chose something, usually by voting",
        synonyms: ["voted","appointed"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The class e______ Gwendoline to be form captain"],
        firstLetter: "e"
    },
    {
        word: "elected",
        definition: "Chosen by a vote",
        synonyms: ["selected","named","appointed"],
        antonyms: ["unelected"],
        firstLetter: "e"
    },
    {
        word: "eloquence",
        definition: "Clear and fluent use of language, often delivering a persuasive or powerful message",
        synonyms: ["fluency","clarity","oratory"],
        antonyms: ["inatriculateness","awkwardness"],
        firstLetter: "e"
    },
    {
        word: "elude",
        definition: "To avoid something or someone",
        synonyms: ["evade","dodge"],
        antonyms: ["approach","attract","confront"],
        firstLetter: "e"
    },
    {
        word: "embroil",
        definition: "To involve in a difficult situation, for example a fight or an argument",
        synonyms: ["entangle","implicate","enmesh"],
        antonyms: ["exclude","free"],
        firstLetter: "e"
    },
    {
        word: "emulate",
        definition: "To copy someone else in an attempt to match their success or achievements",
        synonyms: ["mimic","imitate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Pru tries to e______ her big sister"],
        firstLetter: "e"
    },
    {
        word: "enamour",
        definition: "To cause someone to feel love, interest or fascination",
        synonyms: ["captivate","delight","infatuate","dazzle"],
        antonyms: ["disgust","offend","pain","displease"],
        firstLetter: "e"
    },
    {
        word: "endeavour",
        definition: "An attempt to achieve something",
        synonyms: ["pursuit","undertaking","bid","venture"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Good luck in your future e________"],
        firstLetter: "e"
    },
    {
        word: "endeavour",
        definition: "To try hard to do something",
        synonyms: ["strive","attempt","undertake"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I will e________ to eat as much as possible"],
        firstLetter: "e"
    },
    {
        word: "entice",
        definition: "To attract or tempt someone",
        synonyms: ["allure","invite","persuade"],
        antonyms: ["repel","repulse","discourage"],
        firstLetter: "e"
    },
    {
        word: "evacuate",
        definition: "To leave, or send someone else away from, a dangerous place or situation",
        synonyms: ["flee","escape","clear","vacate","empty"],
        antonyms: ["remain","stay"],
        firstLetter: "e"
    },
    {
        word: "evident",
        definition: "Clear to see or understand",
        synonyms: ["obvious","conspicuous","apparent"],
        antonyms: ["unclear","ambiguous","obscure"],
        firstLetter: "e"
    },
    {
        word: "evolve",
        definition: "To develop gradually over time",
        synonyms: ["grow","progress","change"],
        antonyms: ["regress","revert"],
        firstLetter: "e"
    },
    {
        word: "exaggerate",
        definition: "To make something sound more extreme than it actually is",
        synonyms: ["overstate","dramatise","embellish","hyperbolise"],
        antonyms: ["understate","downplay"],
        firstLetter: "e"
    },
    {
        word: "existence",
        definition: "The state of being or existing",
        synonyms: ["presence"],
        antonyms: ["absence","non-existence"],
        firstLetter: "e"
    },
    {
        word: "existence",
        definition: "A way of life",
        synonyms: ["life","situation","lifestyle"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: It was a difficult e________ but they were happy"],
        firstLetter: "e"
    },
    {
        word: "exquisite",
        definition: "Particularly beautiful or fine",
        synonyms: ["gorgeous","striking"],
        antonyms: ["ugly","imperfect","unrefined"],
        firstLetter: "e"
    },
    {
        word: "fabricate",
        definition: "To make something up and pretend it's true",
        synonyms: ["invent","falsify"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Let's f________ a story about the hamster eating my homework"],
        firstLetter: "f"
    },
    {
        word: "fabricate",
        definition: "To make something",
        synonyms: ["build","manufacture","construct"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: She will be able to f________ a new t-shirt from this cloth"],
        firstLetter: "f"
    },
    {
        word: "fathom",
        definition: "To understand something difficult or problematic after thinking about it carefully",
        synonyms: ["comprehend","grasp"],
        antonyms: ["confuse","misunderstand"],
        firstLetter: "f"
    },
    {
        word: "feign",
        definition: "To pretend to feel or think something",
        synonyms: ["fake","simulate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I didn't want to do my homework so I decided to f____ a headache"],
        firstLetter: "f"
    },
    {
        word: "flippant",
        definition: "Thoughtless and disrespectful in attitude",
        synonyms: ["glib","frivolous","insincere"],
        antonyms: ["respectful","earnest","sincere","serious"],
        firstLetter: "f"
    },
    {
        word: "forecast",
        definition: "A prediction of what's going to happen",
        synonyms: ["projection","estimate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The weather f_______ was not accurate"],
        firstLetter: "f"
    },
    {
        word: "forecast",
        definition: "To predict what is going to happen",
        synonyms: ["project","estimate","anticipate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: It's difficult to accurately f_______ the weather"],
        firstLetter: "f"
    },
    {
        word: "foreign",
        definition: "Not familiar",
        synonyms: ["unfamiliar","strange"],
        antonyms: ["familiar","known"],
        firstLetter: "f"
    },
    {
        word: "fortuitous",
        definition: "Happening by chance, in a positive way",
        synonyms: ["lucky","forunate","serendipitous"],
        antonyms: ["unlucky","unfortunate","planned","intentional"],
        firstLetter: "f"
    },
    {
        word: "frugal",
        definition: "Careful not to spend much money or be wasteful in any way",
        synonyms: ["thrifty","economical"],
        antonyms: ["wasteful","extravagant","lavish"],
        firstLetter: "f"
    },
    {
        word: "gluttonous",
        definition: "Very greedy",
        synonyms: ["insatiable","voracious"],
        antonyms: ["frugal","moderate"],
        firstLetter: "g"
    },
    {
        word: "gratitude",
        definition: "A feeling of thankfulness",
        synonyms: ["appreciation","recognition","indebtedness"],
        antonyms: ["ingratitude","thanklessness"],
        firstLetter: "g"
    },
    {
        word: "gregarious",
        definition: "Fond of company",
        synonyms: ["sociable","outgoing","friendly","affable"],
        antonyms: ["solitary","withdrawn","reserved","standoffish"],
        firstLetter: "g"
    },
    {
        word: "grotesque",
        definition: "Very ugly or unpleasant in appearance",
        synonyms: ["monstrous","hideous","distorted","twisted"],
        antonyms: ["attractive","pleasant","beautiful"],
        firstLetter: "g"
    },
    {
        word: "grotesque",
        definition: "Unbelievably shocking or upsetting",
        synonyms: ["outrageous","astonishing","ludicrous"],
        antonyms: ["believable","realistic","unsurprising"],
        firstLetter: "g"
    },
    {
        word: "grudge",
        definition: "Bitterness towards someone for past actions",
        synonyms: ["resentment","animosity","rancour"],
        antonyms: ["goodwill","forgiveness","friendliness"],
        firstLetter: "g"
    },
    {
        word: "grudge",
        definition: "To do or allow something unwillingly",
        synonyms: ["begrudge","resent","mind"],
        antonyms: ["welcome","encourage"],
        firstLetter: "g"
    },
    {
        word: "guarantee",
        definition: "An assurance that something will be fulfilled",
        synonyms: ["promise","contract","agreement"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I need a g________ you will keep my secret to yourself"],
        firstLetter: "g"
    },
    {
        word: "guarantee",
        definition: "To ensure that something will happen",
        synonyms: ["swear","pledge","vow","undertake"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I g________ you will not regret this decision"],
        firstLetter: "g"
    },
    {
        word: "guarded",
        definition: "Unwilling to reveal feelings or information",
        synonyms: ["reserved","cautious","prudent","restrained"],
        antonyms: ["open","bold","extroverted"],
        firstLetter: "g"
    },
    {
        word: "guarded",
        definition: "Watched over and protected against harm",
        synonyms: ["defended","shielded","supervised"],
        antonyms: ["endangered","neglected","abandoned"],
        firstLetter: "g"
    },
    {
        word: "hapless",
        definition: "Unlucky or unfortunate",
        synonyms: ["cursed","doomed","forlorn","ill-fated"],
        antonyms: ["favoured","fortunate","charmed","blessed"],
        firstLetter: "h"
    },
    {
        word: "harmonious",
        definition: "Pleasant sounding",
        synonyms: ["dulcet","tuneful","melodious"],
        antonyms: ["discordant","grating","shrill"],
        firstLetter: "h"
    },
    {
        word: "harmonious",
        definition: "Friendly and without conflict",
        synonyms: ["peaceful","amicable","cordial"],
        antonyms: ["unfriendly","hostile"],
        firstLetter: "h"
    },
    {
        word: "hindrance",
        definition: "Something that obstructs or delays progress",
        synonyms: ["obstacle","hurdle","barrier","setback"],
        antonyms: ["catalyst","help","assistance"],
        firstLetter: "h"
    },
    {
        word: "idyllic",
        definition: "Peaceful, safe and scenic",
        synonyms: ["heavenly","picturesque","charming","utopian"],
        antonyms: ["hellish","chaotic","frightening","appalling"],
        firstLetter: "i"
    },
    {
        word: "immaculate",
        definition: "Flawless (perfect) in appearance or performance",
        synonyms: ["impeccable","spotless","perfect","unsullied"],
        antonyms: ["tainted","contaminated","flawed","tarnished"],
        firstLetter: "i"
    },
    {
        word: "implore",
        definition: "To ask desperately or forcefully",
        synonyms: ["beg","beseech","plead","supplicate"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I i_______ you to change your mind!"],
        firstLetter: "i"
    },
    {
        word: "inaudible",
        definition: "Unable to be heard",
        synonyms: ["imperceptible","stifled","muted"],
        antonyms: ["clear","loud","discernible"],
        firstLetter: "i"
    },
    {
        word: "inkling",
        definition: "A vague suspicion or idea about something",
        synonyms: ["hunch","notion","suggestion","hint","whisper"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I have an i______ about where my present is hidden"],
        firstLetter: "i"
    },
    {
        word: "insolent",
        definition: "Disrespectful or rude",
        synonyms: ["impertinent","discourteous","impudent"],
        antonyms: ["polite","civil","submissive","deferential"],
        firstLetter: "i"
    },
    {
        word: "insomnia",
        definition: "The inability to sleep",
        synonyms: ["sleeplessness","wakefulness","restlessness"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Granny suffers from i_______ when she is stressed"],
        firstLetter: "i"
    },
    {
        word: "intangible",
        definition: "Difficult to define or understand, usually due to not having a physical presence",
        synonyms: ["abstract","incorporeal","vague","indefinite"],
        antonyms: ["concrete","solid","clear","distinct","evident"],
        firstLetter: "i"
    },
    {
        word: "insolent",
        definition: "Disrespectful or rude",
        synonyms: ["impertinent","discourteous","impudent"],
        antonyms: ["polite","civil","submissive","deferential"],
        firstLetter: "i"
    },
    {
        word: "invaluable",
        definition: "Extremely useful or valuable",
        synonyms: ["priceless","indispensable","irreplaceable"],
        antonyms: ["worthless","cheap","useless"],
        firstLetter: "i"
    },
    {
        word: "investigate",
        definition: "To do research or make inquiries about something",
        synonyms: ["scrutinise","study","examine"],
        antonyms: ["ignore","neglect","forget"],
        firstLetter: "i"
    },
    {
        word: "jargon",
        definition: "Words specific to a certain profession or group of people that others may not understand",
        synonyms: ["terminology","parlance"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Sometimes our teacher uses too much j_____ when they try to explain"],
        firstLetter: "j"
    },
    {
        word: "jocular",
        definition: "Cheerful and joking, usually making people laugh",
        synonyms: ["jovial","jolly","droll","comical","playful"],
        antonyms: ["serious","solemn","humourless"],
        firstLetter: "j"
    },
    {
        word: "judicious",
        definition: "Showing good judgment in actions or decisions",
        synonyms: ["sensible","reasonable","rational","prudent"],
        antonyms: ["thoughtless","rash","ignorant","careless"],
        firstLetter: "j"
    },
    {
        word: "latent",
        definition: "Hidden but with potential to be revealed in future",
        synonyms: ["dormant","inactive","veiled","lurking"],
        antonyms: ["conspicuous","obvious","evident","realised"],
        firstLetter: "l"
    },
    {
        word: "lenient",
        definition: "Less severe than expected",
        synonyms: ["merciful","tolerant","forgiving"],
        antonyms: ["harsh","strict","stern"],
        firstLetter: "l"
    },
    {
        word: "lethargy",
        definition: "A lack of energy or enthusiasm",
        synonyms: ["sluggishness","drowsiness","torpor"],
        antonyms: ["vitality","vigour","liveliness"],
        firstLetter: "l"
    },
    {
        word: "magnitude",
        definition: "Extreme size or scale",
        synonyms: ["vastness","immensity","enormity"],
        antonyms: ["smallness","minuteness","diminutiveness"],
        firstLetter: "m"
    },
    {
        word: "majestic",
        definition: "Impressive or admirable in beauty or size",
        synonyms: ["grand","stately","magnificent","imposing"],
        antonyms: ["modest","ordinary","humble","unassuming"],
        firstLetter: "m"
    },
    {
        word: "malign",
        definition: "To insult or criticise someone unfairly",
        synonyms: ["slander","disparage","vilify","defame"],
        antonyms: ["praise","applaud","commend","laud"],
        firstLetter: "m"
    },
    {
        word: "malign",
        definition: "Evil and harmful",
        synonyms: ["destructive","spiteful","malevolent","vicious"],
        antonyms: ["kind","honourable","benevolent"],
        firstLetter: "m"
    },
    {
        word: "melancholy",
        definition: "Full of thoughtful sorrow",
        synonyms: ["mournful","sombre","glum","despondent"],
        antonyms: ["cheerful","glad","merry","joyful"],
        firstLetter: "m"
    },
    {
        word: "melancholy",
        definition: "Intense and thoughtful sorrow",
        synonyms: ["woe","gloom","desolation"],
        antonyms: ["joy","delight","pleasure","happiness"],
        firstLetter: "m"
    },
    {
        word: "mesmerise",
        definition: "To capture someone's attention completely",
        synonyms: ["captivate","hypnotise","entrance","transfix"],
        antonyms: ["bore","tire","disenchant","repel"],
        firstLetter: "m"
    },
    {
        word: "milestone",
        definition: "A significant event in history or someone's life",
        synonyms: ["landmark","breakthrough","achievement"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Learning to walk was a big m________ in Bluey's life"],
        firstLetter: "m"
    },
    {
        word: "milestone",
        definition: "A stone at the side of the road that marks the distance in miles to or from somewhere",
        synonyms: ["there are no synonyms for this word. This word is sometimes used to mean 'a significant event in history or someone's life'"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I passed six m________s on my walk into town today"],
        firstLetter: "m"
    },
    {
        word: "mitigate",
        definition: "To make something less serious or painful",
        synonyms: ["ease","diminish","alleviate"],
        antonyms: ["intensify","enhance","strengthen"],
        firstLetter: "m"
    },
    {
        word: "necessary",
        definition: "Needed for something to happen",
        synonyms: ["essential","required","vital","mandatory"],
        antonyms: ["spuerfluous","dispensable","redundant"],
        firstLetter: "n"
    },
    {
        word: "necessary",
        definition: "Unavoidable",
        synonyms: ["inevitable","inescapable","certain"],
        antonyms: ["avoidable","uncertain","doubtful"],
        firstLetter: "n"
    },
    {
        word: "nourishment",
        definition: "Either the food and nutrients needed for life, growth and good health, or the act of providing them",
        synonyms: ["sustenance","nutriment","nutrition"],
        antonyms: ["deprivation","starvation"],
        firstLetter: "n"
    },
    {
        word: "noxious",
        definition: "Poisonous or dangerous to living things",
        synonyms: ["harmful","deadly","toxic"],
        antonyms: ["safe","harmless","innocuous"],
        firstLetter: "n"
    },
    {
        word: "obsolete",
        definition: "No longer needed, used or produced, usually because it has been replaced",
        synonyms: ["outdated","antiquated","discontinued"],
        antonyms: ["current","modern","contemporary"],
        firstLetter: "o"
    },
    {
        word: "obstinate",
        definition: "Inflexible, despite persuasion or reason",
        synonyms: ["stubborn","determined","obdurate"],
        antonyms: ["compliant","submissive","amenable"],
        firstLetter: "o"
    },
    {
        word: "obstinate",
        definition: "Difficult to remove, move or change",
        synonyms: ["tenacious","unyielding","persistent"],
        antonyms: ["yielding","unresisting","pliant"],
        firstLetter: "o"
    },
    {
        word: "oppress",
        definition: "To treat cruelly and deprive of opportunities",
        synonyms: ["exploit","subjugate","persecute","maltreat"],
        antonyms: ["emancipate","liberate"],
        firstLetter: "o"
    },
    {
        word: "oppress",
        definition: "To make someone uneasy or depressed",
        synonyms: ["torment","burden","daunt"],
        antonyms: ["comfort","cheer","calm"],
        firstLetter: "o"
    },
    {
        word: "orchestrate",
        definition: "To organise something carefully (maybe secretly) to achieve a desired result or effect",
        synonyms: ["coordinate","arrange","engineer","mastermind"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Harry tried to o__________ a rebellion against Dolores Umbridge"],
        firstLetter: "o"
    },
    {
        word: "ostentatious",
        definition: "Excessively grand or luxurious, usually designed to impress",
        synonyms: ["pretentious","flamboyant","extravagant"],
        antonyms: ["understated","modest","conservative"],
        firstLetter: "o"
    },
    {
        word: "paraphrase",
        definition: "To express what someone has said or written in a different way, often to make it clearer",
        synonyms: ["reword","rephrase"],
        antonyms: ["quote","cite"],
        firstLetter: "p"
    },
    {
        word: "paraphrase",
        definition: "A rewording to make something clearer",
        synonyms: ["rendition","rendering","interpretation"],
        antonyms: ["quotataion","citation"],
        firstLetter: "p"
    },
    {
        word: "peculiar",
        definition: "Different or out of the ordinary",
        synonyms: ["strange","weird","distinct"],
        antonyms: ["ordinary","commonplace","normal"],
        firstLetter: "p"
    },
    {
        word: "pilfer",
        definition: "To steal, usually inexpensive items in small quantities",
        synonyms: ["pinch","loot","thieve","purloin"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: She has a tendency to p_____ sweeties from the treat cupboard"],
        firstLetter: "p"
    },
    {
        word: "pioneer",
        definition: "A person who is one of the first to go somewhere or do something",
        synonyms: ["trailblazer"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Marie Curie was a p______ in the field of physics"],
        firstLetter: "p"
    },
    {
        word: "pioneer",
        definition: "To be one of the first to do something",
        synonyms: ["invent","launch","trail-blaze","develop"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: I intend to p______ a new way to generate energy"],
        firstLetter: "p"
    },
    {
        word: "placid",
        definition: "Calm and peaceful in nature or appearance",
        synonyms: ["tranquil","mild","serene"],
        antonyms: ["wild","agitated","turbulent","stormy"],
        firstLetter: "p"
    },
    {
        word: "populated",
        definition: "Lived in by people or animals",
        synonyms: ["inhabited","occupied"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The jungle is p________ with dangerous animals"],
        firstLetter: "p"
    },
    {
        word: "prejudice",
        definition: "An unreasonable opinion about something or someone that is not based on fact",
        synonyms: ["judgment","bigotry","bias","injustice"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: His p________ stopped him from speaking to the students from a different school"],
        firstLetter: "p"
    },
    {
        word: "prejudice",
        definition: "To cause someone to have prejudice - unreasonable opinions about something or someone not based on fact",
        synonyms: ["bias","influence"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: It is not fair to p________ your sister with your negative opinions of the film"],
        firstLetter: "p"
    },
    {
        word: "privilege",
        definition: "An advantage which is only held by a certain person or group",
        synonyms: ["benefit","entitlement"],
        antonyms: ["disadvantage","restriction"],
        firstLetter: "p"
    },
    {
        word: "procure",
        definition: "To gain possession of something, usually with effort or determination",
        synonyms: ["obtain","get","acquire"],
        antonyms: ["lose"],
        firstLetter: "p"
    },
    {
        word: "proficient",
        definition: "Skilled at something",
        synonyms: ["adept","accomplished","able"],
        antonyms: ["incompetent","unskilful","inept"],
        firstLetter: "p"
    },
    {
        word: "prohibit",
        definition: "To stop or disallow something",
        synonyms: ["ban","forbid","outlaw"],
        antonyms: ["allow","welcome","encourage"],
        firstLetter: "p"
    },
    {
        word: "prominent",
        definition: "Important or significant",
        synonyms: ["leading","distinguished","notable"],
        antonyms: ["unimportant","insignificant","ordinary"],
        firstLetter: "p"
    },
    {
        word: "prominent",
        definition: "Sticking out or standing out noticeably",
        synonyms: ["obvious","evident","conspicuous"],
        antonyms: ["obscure","inconspicuous"],
        firstLetter: "p"
    },
    {
        word: "prospective",
        definition: "Possible or likely to be",
        synonyms: ["potential","expected","probable"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The p__________ nanny was very impressive at their interview"],
        firstLetter: "p"
    },
    {
        word: "prosperous",
        definition: "Doing very well",
        synonyms: ["thriving","flourishing","successful"],
        antonyms: ["failing","declining","unsuccessful"],
        firstLetter: "p"
    },
    {
        word: "prosperous",
        definition: "Wealthy",
        synonyms: ["affluent","rich"],
        antonyms: ["poor","impoverished","destitute"],
        firstLetter: "p"
    },
    {
        word: "provoke",
        definition: "To try to cause a reaction",
        synonyms: ["incite","induce","prompt"],
        antonyms: ["stop","prevent","hinder"],
        firstLetter: "p"
    },
    {
        word: "provoke",
        definition: "To deliberately anger or annoy",
        synonyms: ["goad","aggravate","irritate"],
        antonyms: ["pacify","comfort","soothe"],
        firstLetter: "p"
    },
    {
        word: "punctual",
        definition: "Arriving or starting on time",
        synonyms: ["timely","prompt"],
        antonyms: ["late","tardy"],
        firstLetter: "p"
    },
    {
        word: "quench",
        definition: "To satisfy thirst or a desire",
        synonyms: ["assuage","alleviate"],
        antonyms: ["intensify","exacerbate"],
        firstLetter: "q"
    },
    {
        word: "reconcile",
        definition: "To reunite after a disagreement",
        synonyms: ["pacify","conciliate"],
        antonyms: ["alienate","estrange"],
        firstLetter: "r"
    },
    {
        word: "reconcile",
        definition: "To make two opposing thoughts work together",
        synonyms: ["resolve","settle","marry"],
        antonyms: ["clash","conflict"],
        firstLetter: "r"
    },
    {
        word: "recycle",
        definition: "To process something so it can be used again rather than thrown away",
        synonyms: ["reuse","reclaim","reprocess","repurpose"],
        antonyms: ["discard","scrap"],
        firstLetter: "r"
    },
    {
        word: "reimburse",
        definition: "To give back money that has already been spent",
        synonyms: ["refund","compensate","pay"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The zoo offered to r________ ticket costs of all of the people who got eaten by the rhino"],
        firstLetter: "r"
    },
    {
        word: "remedy",
        definition: "A cure or resolution for something",
        synonyms: ["antidote","solution"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Learning vocab is the perfect r_____ to boredom"],
        firstLetter: "r"
    },
    {
        word: "remedy",
        definition: "To cure or resolve something",
        synonyms: ["solve","rectify"],
        antonyms: ["worsen","aggravate"],
        firstLetter: "r"
    },
    {
        word: "remorse",
        definition: "Regret for a previous action",
        synonyms: ["guilt","penitence","repentance"],
        antonyms: ["indifference","impenitence","unrepentance"],
        firstLetter: "r"
    },
    {
        word: "rendition",
        definition: "An interpretation or performance of something, for example a song or poem",
        synonyms: ["presentation","portrayal"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Pru's r________ of the poem wowed the audience"],
        firstLetter: "r"
    },
    {
        word: "reproach",
        definition: "A visual or verbal expression of disapproval",
        synonyms: ["criticism","admonishment","rebuke"],
        antonyms: ["approval","praise"],
        firstLetter: "r"
    },
    {
        word: "reproach",
        definition: "To tell someone off",
        synonyms: ["chastise","scold","chide","criticise"],
        antonyms: ["flatter","praise"],
        firstLetter: "r"
    },
    {
        word: "reputation",
        definition: "The way someone is commonly thought of by other people",
        synonyms: ["stature","standing","fame","notoriety"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Daddy's r_________ as a brilliant baker is well deserved"],
        firstLetter: "r"
    },
    {
        word: "revolutionise",
        definition: "To transform something",
        synonyms: ["reform","reshape"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Daddy's new game could r____________ how children learn vocab"],
        firstLetter: "r"
    },
    {
        word: "sacred",
        definition: "Idolised by a religion, group or individual",
        synonyms: ["holy","divine","blessed","venerable"],
        antonyms: ["profane","secular","cursed"],
        firstLetter: "s"
    },
    {
        word: "sacred",
        definition: "Too important to be interfered with",
        synonyms: ["sacrosanct","untouchable"],
        antonyms: ["unimportant","irrelevant","trivial"],
        firstLetter: "s"
    },
    {
        word: "sacrificed",
        definition: "Given something up for the greater good",
        synonyms: ["relinquished","forfeited","foregone"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Mummy s_________ many things for her children"],
        firstLetter: "s"
    },
    {
        word: "sacrificed",
        definition: "Killed as an offering to a god",
        synonyms: ["offered"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Romans s_________ animals to their gods to ask for a good harvest"],
        firstLetter: "s"
    },
    {
        word: "scarcity",
        definition: "A lack or shortage of something",
        synonyms: ["insufficiency","deficiency","poverty","dearth"],
        antonyms: ["surplus","abundance","excess"],
        firstLetter: "s"
    },
    {
        word: "scrutinise",
        definition: "To carefully or critically examine something",
        synonyms: ["study","inspect","analyse"],
        antonyms: ["glance at","ignore","neglect"],
        firstLetter: "s"
    },
    {
        word: "sculpture",
        definition: "Art produced by carving or shaping materials",
        synonyms: ["statue","figure","carving","model"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: There was a marble s_______ of a lion by the entrance"],
        firstLetter: "s"
    },
    {
        word: "forthcoming",
        definition: "Due to happen",
        synonyms: ["approaching","upcoming","anticipated"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The f__________ holiday will be looked forward to by all of the family"],
        firstLetter: "f"
    },
    {
        word: "forthcoming",
        definition: "Open and willing to give information",
        synonyms: ["communicative","responsive"],
        antonyms: ["evasive","uncommunicative","guarded"],
        firstLetter: "f"
    },
    {
        word: "seldom",
        definition: "Almost never",
        synonyms: ["rarely","infrequently","sporadically"],
        antonyms: ["often","frequently","regularly"],
        firstLetter: "s"
    },
    {
        word: "simultaneous",
        definition: "Happening or existing at the same time",
        synonyms: ["coinciding","concurrent","parallel"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The two football matches were s___________"],
        firstLetter: "s"
    },
    {
        word: "sincerity",
        definition: "Genuine honesty or a lack of pretence",
        synonyms: ["candour","truthfulness","integrity"],
        antonyms: ["dishonesty","deception","deceit","hypocrisy"],
        firstLetter: "s"
    },
    {
        word: "skirmish",
        definition: "A short period of fighting or disagreement",
        synonyms: ["altercation","dispute","confrontation"],
        antonyms: ["peace","harmony","accord"],
        firstLetter: "s"
    },
    {
        word: "skirmish",
        definition: "To fight",
        synonyms: ["clash","tussle","battle","spar"],
        antonyms: ["yield","surrender","agree"],
        firstLetter: "s"
    },
    {
        word: "solitary",
        definition: "Alone or isolated by choice or force",
        synonyms: ["reclusive","unsociable"],
        antonyms: ["outgoing","gregarious","extroverted"],
        firstLetter: "s"
    },
    {
        word: "solitary",
        definition: "One person or thing",
        synonyms: ["single","lone","sole"],
        antonyms: ["multiple","numerous"],
        firstLetter: "s"
    },
    {
        word: "sophisticated",
        definition: "Complex or advanced",
        synonyms: ["elaborate","complicated","intricate"],
        antonyms: ["basic","rudimentary","primitive"],
        firstLetter: "s"
    },
    {
        word: "sophisticated",
        definition: "Very cultured or fashionable",
        synonyms: ["refined","worldly","cosmopolitan","civilised"],
        antonyms: ["naive","gauche","ignorant"],
        firstLetter: "s"
    },
    {
        word: "stagnate",
        definition: "To stop progressing or changing",
        synonyms: ["languish","stall","stifle"],
        antonyms: ["flourish","improve","grow"],
        firstLetter: "s"
    },
    {
        word: "stagnate",
        definition: "To become foul or stale from not moving",
        synonyms: ["fester"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: The water in the bucket will s_______ if we don't change it"],
        firstLetter: "s"
    },
    {
        word: "stalemate",
        definition: "A situation in which neither progress nor victory is possible (another word for a draw, particularly in chess)",
        synonyms: ["impasse","standstill","deadlock","tie"],
        antonyms: ["headway","advancement"],
        firstLetter: "s"
    },
    {
        word: "stupendous",
        definition: "Very impressive",
        synonyms: ["phenomenal","superb","astounding"],
        antonyms: ["average","mediocre","ordinary"],
        firstLetter: "s"
    },
    {
        word: "stupendous",
        definition: "Extremely large, usually causing surprise",
        synonyms: ["staggering","colossal","immense"],
        antonyms: ["minuscule","minute","tiny"],
        firstLetter: "s"
    },
    {
        word: "suave",
        definition: "Elegant and charming",
        synonyms: ["sophisticated","poised","debonair"],
        antonyms: ["rude","awkward","clumsy","unrefined"],
        firstLetter: "s"
    },
    {
        word: "substantial",
        definition: "Large in size or value",
        synonyms: ["significant","considerable","ample","generous"],
        antonyms: ["meagre","inadequate","paltry","small"],
        firstLetter: "s"
    },
    {
        word: "substantial",
        definition: "Sturdy or strong",
        synonyms: ["solid","well-built","durable"],
        antonyms: ["rickety","unstable","fragile"],
        firstLetter: "s"
    },
    {
        word: "succinct",
        definition: "Clearly expressed in few words",
        synonyms: ["concise","brief","pithy","terse","compact"],
        antonyms: ["rambling","convoluted","lengthy","verbose"],
        firstLetter: "s"
    },
    {
        word: "sufficient",
        definition: "Enough for a specific purpose",
        synonyms: ["adequate","ample","satisfactory"],
        antonyms: ["scant","meagre","deficient","copious","excessive"],
        firstLetter: "s"
    },
    {
        word: "sullen",
        definition: "Bad-tempered or gloomy",
        synonyms: ["morose","dour","sulky","brooding","glowering"],
        antonyms: ["cheerful","amiable","pleasant","sociable"],
        firstLetter: "s"
    },
    {
        word: "surveillance",
        definition: "Careful and close observation",
        synonyms: ["monitoring","supervision","vigilance"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Darrell put Miss Johnson under s___________ to try and catch her doing something wrong"],
        firstLetter: "s"
    },
    {
        word: "swindled",
        definition: "Deceived someone to take their money or possessions",
        synonyms: ["conned","cheated","scammed","duped"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Miss Johnson s_______ several schools out of thousands of pounds"],
        firstLetter: "s"
    },
    {
        word: "tactful",
        definition: "Being careful not to offend or upset anyone",
        synonyms: ["considerate","thoughtful","sensitive"],
        antonyms: ["tactless","careless","thoughtless"],
        firstLetter: "t"
    },
    {
        word: "tedium",
        definition: "The state of being boring or bored",
        synonyms: ["monotony","boredom","dullness"],
        antonyms: ["excitement"],
        firstLetter: "t"
    },
    {
        word: "texture",
        definition: "The feel of a material or substance",
        synonyms: ["consistency","touch"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Daddy's cake had the perfect, fluffy t______"],
        firstLetter: "t"
    },
    {
        word: "texture",
        definition: "To add a raised or rough feel to something",
        synonyms: ["roughen","pattern"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: Peggy wanted to t______ the sculpture to make it more realistic"],
        firstLetter: "t"
    },
    {
        word: "threadbare",
        definition: "Looking old, thin or damaged due to being used a lot",
        synonyms: ["worn","tattered","ragged","frayed"],
        antonyms: ["pristine","immaculate","unused"],
        firstLetter: "t"
    },
    {
        word: "thwart",
        definition: "To stop someone succeeding at something",
        synonyms: ["defeat","hinder","foil","prevent"],
        antonyms: ["aid","help","support"],
        firstLetter: "t"
    },
    {
        word: "turmoil",
        definition: "A state of disruption or confusion",
        synonyms: ["chaos","confusion","unrest"],
        antonyms: ["calm","composure","peace"],
        firstLetter: "t"
    },
    {
        word: "twilight",
        definition: "Either the soft light when the sun has just set or is about to rise, or the time during which this light occurs",
        synonyms: ["dusk","evening","dawn","morning","daybreak"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: We admired the sky at t_______"],
        firstLetter: "t"
    },
    {
        word: "twilight",
        definition: "The final part or gradual decline of something",
        synonyms: ["autumn","waning"],
        antonyms: ["peak","height"],
        firstLetter: "t"
    },
    {
        word: "uncouth",
        definition: "Rude or lacking decency",
        synonyms: ["coarse","vulgar","boorish","uncivilised"],
        antonyms: ["polite","dignified","refined","courteous"],
        firstLetter: "u"
    },
    {
        word: "vapour",
        definition: "Either a gas or small drops of liquid that form fine mist in the air",
        synonyms: ["gas","steam","fumes"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: A foul-smelling v_____ came from Daddy's shoes"],
        firstLetter: "v"
    },
    {
        word: "verify",
        definition: "To confirm that something is correct",
        synonyms: ["check","substantiate"],
        antonyms: ["disprove","contradict"],
        firstLetter: "v"
    },
    {
        word: "versatile",
        definition: "Having many uses or skills",
        synonyms: ["flexible","multifunctinal","multifaceted"],
        antonyms: ["inflexible","useless","limited"],
        firstLetter: "v"
    },
    {
        word: "vicinity",
        definition: "The area around a place",
        synonyms: ["surroundings","region","district","proximity"],
        antonyms: ["there are no antonyms for this word. Here is an example sentence instead: There was lots of traffic in the v_______ of the school"],
        firstLetter: "v"
    },
    {
        word: "wholesome",
        definition: "Good for wellbeing or health, usually in a physical, emotional or moral way",
        synonyms: ["beneficial","healthy"],
        antonyms: ["indecent","immoral","unhealthy"],
        firstLetter: "w"
    },
    {
        word: "wretched",
        definition: "Unfortunate or in a bad situation",
        synonyms: ["pitiable","miserable","hopeless","unhappy"],
        antonyms: ["fortunate","blessed"],
        firstLetter: "w"
    },
    {
        word: "wretched",
        definition: "Poor quality",
        synonyms: ["worthless","pathetic","terrible"],
        antonyms: ["excellent","decent","worthy"],
        firstLetter: "w"
    },
    // Add more words here
];


// Randomize the order of words
const shuffledWords = shuffle(words);

let currentWordIndex = 0;
let currentClueIndex = 0;

function showClue() {
    const word = shuffledWords[currentWordIndex];
    let clueText = "";
    let hiddenWord = "";

    if (currentClueIndex === 0) {
        clueText = `Definition: ${word.definition}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " " + "_ ".repeat(word.word.length - 1);
    } else if (currentClueIndex === 1) {
        clueText = `Synonyms: ${word.synonyms.join(", ")}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " " + "_ ".repeat(word.word.length - 1);
    } else if (currentClueIndex === 2) {
        clueText = `Antonyms: ${word.antonyms.join(", ")}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " " + "_ ".repeat(word.word.length - 1);
    } else {
        clueText = `Definition: ${word.definition}<br>Synonyms: ${word.synonyms.join(", ")}<br>Antonyms: ${word.antonyms.join(", ")}`;
        hiddenWord = word.word.charAt(0).toUpperCase() + " ";
        for (let i = 1; i < Math.min(currentClueIndex - 1, word.word.length); i++) {
            hiddenWord += `${word.word.charAt(i).toUpperCase()} `;
        }
        hiddenWord += "_ ".repeat(word.word.length - Math.min(currentClueIndex - 1, word.word.length));
    }

    document.getElementById('clue').innerHTML = `${clueText}<br>Clue: ${hiddenWord}`;
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    const word = shuffledWords[currentWordIndex].word;

    if (guess === word) {
        const wordObj = shuffledWords[currentWordIndex];
        const cluesToShow = [
            `Word: ${wordObj.word}`,
            `Definition: ${wordObj.definition}`,
            `Synonyms: ${wordObj.synonyms.join(", ")}`,
            `Antonyms: ${wordObj.antonyms.join(", ")}`,
            `(Starts with: ${wordObj.firstLetter.toUpperCase()})`
        ];
        document.getElementById('result').innerHTML = "Correct! Well done!<br>" + cluesToShow.join("<br>");
        document.getElementById('nextWord').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else {
        currentClueIndex++;
        if (currentClueIndex >= (shuffledWords[currentWordIndex].word.length + 2)) {
            const wordObj = shuffledWords[currentWordIndex];
            const cluesToShow = [
                `Word: ${wordObj.word}`,
                `Definition: ${wordObj.definition}`,
                `Synonyms: ${wordObj.synonyms.join(", ")}`,
                `Antonyms: ${wordObj.antonyms.join(", ")}`,
                `(Starts with: ${wordObj.firstLetter.toUpperCase()})`
            ];
            document.getElementById('result').innerHTML = `Out of clues! The word was "${word}".<br>` + cluesToShow.join("<br>");
            document.getElementById('nextWord').style.display = 'block';
            document.getElementById('submitGuess').disabled = true;
        } else {
            showClue();
        }
    }
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
    currentClueIndex = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('nextWord').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').value = '';
    showClue();
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('nextWord').addEventListener('click', nextWord);

// Start the game with the first clue
showClue();
