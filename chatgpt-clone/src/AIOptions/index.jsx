export const arrayItems = [{
    name: 'Q&A',
    id: 'q&a',
    description: 'Answer questions based on existed knowledge from AI',
    option: {model: "text-davinci-003",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],}
},
{
    name: 'Summarize for a 2nd grader',
    id: 'summaryfor2nd',
    description: 'Translates difficult text into simpler concepts',
},{
    name: 'Text to command',
    id: 'ttc',
    description: 'Translate text into programmatic commands',
},{
    name: 'Grammar correction',
    id: 'grammar',
    description: 'Corrects sentences into standard english',
},{
    name: 'Chat',
    id: 'chat',
    description: 'Friendly chat with AI',
},{
    name: 'English to other languages',
    id: 'translate',
    description: 'Translate english into french,spanish and japanese'
}];

