const bizarre_alternatives = ["clowns", "colored", "objects", "human", "holy", "intelligent", "visible", "dragons", "worrisome", "microphones", "at home", "interesting", "educated", "literate", "animals", "trees", "adolescents", "shivering", "invisible", "sinful", "rich", "kind", "fearful", "frogs", "cows", "lions", "horses", "fuzzy", "cunning"];

const practice_trials = {
        comprehension_checks : [
            {
                question: "Which color is the box surrounding the bonus card?",
                option1: "red",
                option2: "green"
            },
            {
                question: "Are you allowed to select words that make the whole descriptions false?",
                option1: "yes",
                option2: "no"
            },
            {
                question: "Is your goal to help the guesser find the bonus card, or should you mislead the guesser to pick the other card instead?",
                option1: "help",
                option2: "mislead"
            }
        ]
}

const guesser_trials = [
    {
        picture1: 'images/guesser_01_true.png',
        picture2: 'images/guesser_01_false.png',
        option1: 'true',
        option2: 'false',
        item: '01',
        QUD: 'Click on the picture of the card which you think is the green card, based on what the describer said!',
        question: 'The describer said:<br>"The green card is the card where <strong>all of the objects are hats</strong>."'
    },
    {
        picture1: 'images/guesser_02_a.png',
        picture2: 'images/guesser_02_b.png',
        option1: 'true',
        option2: 'true',
        item: '02',
        QUD: 'Click on the picture of the card which you think is the green card, based on what the describer said!',
        question: 'The describer said: <br>"The green card is the card where <strong>all of the objects are colored</strong>."'
    },
    {
        picture1: 'images/guesser_03_false.png',
        picture2: 'images/guesser_03_true.png',
        option1: 'false',
        option2: 'true',
        item: '03',
        QUD: 'Click on the picture of the card which you think is the green card, based on what the describer said!',
        question: 'The describer said: <br>"The green card is the card where <strong>all of the objects are pink</strong>."'
    },
    {
        picture1: 'images/guesser_04_a.png',
        picture2: 'images/guesser_04_b.png',
        option1: 'true',
        option2: 'true',
        item: '04',
        QUD: 'Click on the picture of the card which you think is the green card, based on what the describer said!',
        question: 'The describer said: <br>"The green card is the card where <strong>all of the objects are colored</strong>."'
    }
];

const main_trials = {
    color_blindness_test : [
        {
            picture: "images/Plate1.png",
            question: "Please type the number you see in the picture above into the textbox. Please write 'none' if you do not see anything?",
            min_chars: 0,
            correct: 12
        },
        {
            picture: "images/Plate13.png",
            question: "Please type the number you see in the picture above into the textbox. Please write 'none' if you do not see anything?",
            min_chars: 0,
            correct: 73,
        },
        {
            picture: "images/Plate9.png",
            question: "Please type the number you see in the picture above into the textbox. Please write 'none' if you do not see anything?",
            min_chars: 0,
            correct: 45
        }
    ],

    sentence_completion : [
        // condition ::: NUMBER
        {
            condition: "number",
            number: "01",
            picture: "images/01NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>five</strong> of the objects are <strong>pumpkins</strong>",
                "<strong>five</strong> of the objects are <strong>blue</strong>",
                "<strong>seven</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "02",
            picture: "images/02NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>five</strong> of the objects are <strong>pineapples</strong>",
                "<strong>five</strong> of the objects are <strong>pink</strong>",
                "<strong>seven</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "03",
            picture: "images/03NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>five</strong> of the objects are <strong>blue</strong>",
                "<strong>five</strong> of the objects are <strong>spoons</strong>",
                "<strong>seven</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "04",
            picture: "images/04NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>six</strong> of the objects are <strong>green</strong>",
                "<strong>six</strong> of the objects are <strong>toasters</strong>",
                "<strong>eight</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "05",
            picture: "images/05NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>six</strong> of the objects are <strong>green</strong>",
                "<strong>six</strong> of the objects are <strong>pears</strong>",
                "<strong>eight</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"            
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "number",
            number: "06",
            picture: "images/06NUM.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>six</strong> of the objects are <strong>bathtubs</strong>",
                "<strong>six</strong> of the objects are <strong>pink</strong>",
                "<strong>eight</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition ::: SOME
         {
            condition: "some",
            number: "07",
            picture: "images/07SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>keys</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },    
        {
            condition: "some",
            number: "08",
            picture: "images/08SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>lamps</strong>",
                "<strong>some</strong> of the objects are <strong>yellow</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "09",
            picture: "images/09SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>flags</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "10",
            picture: "images/10SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>beds</strong>",
                "<strong>some</strong> of the objects are <strong>blue</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "11",
            picture: "images/11SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>books</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "some",
            number: "12",
            picture: "images/12SOME.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>some</strong> of the objects are <strong>flowers</strong>",
                "<strong>some</strong> of the objects are <strong>blue</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition :: AD HOC
        {
            condition: "ad_hoc",
            number: "13",
            picture: "images/13HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "all of the objects in the <strong>top row</strong> are <strong>blue</strong>",
                "all of the objects in the <strong>top row</strong> are <strong>kites</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "14",
            picture: "images/14HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "all of the objects in the <strong>middle row</strong> are <strong>crowns</strong>",
                "all of the objects in the <strong>middle row</strong> are <strong>blue</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "15",
            picture: "images/15HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "all of the objects in the <strong>bottom row</strong> are <strong>yellow</strong>",
                "all of the objects in the <strong>bottom row</strong> are <strong>forks</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "16",
            picture: "images/16HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "all of the objects in the <strong>top row</strong> are <strong>vases</strong>",
                "all of the objects in the <strong>top row</strong> are <strong>pink</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "17",
            picture: "images/17HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "all of the objects in the <strong>middle row</strong> are <strong>green</strong>",
                "all of the objects in the <strong>middle row</strong> are <strong>apples</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "ad_hoc",
            number: "18",
            picture: "images/18HOC.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "all of the objects in the <strong>bottom row</strong> are <strong>pink</strong>",
                "all of the objects in the <strong>bottom row</strong> are <strong>bells</strong>",
                "<strong>all</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition ::: NONE
        {
            condition: "none",
            number: "19",
            picture: "images/19NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>green</strong>",
                "<strong>none</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "20",
            picture: "images/20NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>cakes</strong>",
                "<strong>none</strong> of the objects are <strong>teapots</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "21",
            picture: "images/21NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>pink</strong>",
                "<strong>none</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "22",
            picture: "images/22NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>kettles</strong>",
                "<strong>none</strong> of the objects are <strong>bananas</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "23",
            picture: "images/23NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>blue</strong>",
                "<strong>none</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "24",
            picture: "images/24NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>pans</strong>",
                "<strong>none</strong> of the objects are <strong>jars</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "25",
            picture: "images/25NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>blue</strong>",
                "<strong>none</strong> of the objects are <strong>green</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "26",
            picture: "images/26NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>cars</strong>",
                "<strong>none</strong> of the objects are <strong>sofas</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "none",
            number: "27",
            picture: "images/27NONE.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>none</strong> of the objects are <strong>blue</strong>",
                "<strong>none</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        // condition ::: ALL
        {
            condition: "all",
            number: "28",
            picture: "images/28ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>umbrellas</strong>",
                "<strong>all</strong> of the objects are <strong>rockets</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "29",
            picture: "images/29ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>green</strong>",
                "<strong>all</strong> of the objects are <strong>yellow</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "30",
            picture: "images/30ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>shoes</strong>",
                "<strong>all</strong> of the objects are <strong>trophies</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "31",
            picture: "images/31ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>pink</strong>",
                "<strong>all</strong> of the objects are <strong>green</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "32",
            picture: "images/32ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>drums</strong>",
                "<strong>all</strong> of the objects are <strong>tents</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "33",
            picture: "images/33ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>yellow</strong>",
                "<strong>all</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "34",
            picture: "images/34ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>trumpets</strong>",
                "<strong>all</strong> of the objects are <strong>carrots</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "35",
            picture: "images/35ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>blue</strong>",
                "<strong>all</strong> of the objects are <strong>pink</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        },
        {
            condition: "all",
            number: "36",
            picture: "images/36ALL.PNG",
            sentence_fragment: "The <strong>green</strong> card is the card where",
            completions: [
                "<strong>all</strong> of the objects are <strong>bottles</strong>",
                "<strong>all</strong> of the objects are <strong>bikes</strong>",
                "<strong>some</strong> of the objects are <strong>" + _.sample(bizarre_alternatives) + "</strong>"
            ],
            answer_category: [
                "green",
                "red",
                "false"
            ]
        }
    ],
    truth_value_judgements:
    [
     {
       "sentence_nr": 1,
       "question": "All birds have telephones.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "All crayons have noses.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "All chairs tell time.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "All garages sing.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "All couches have windows.",
       "condition": "bizarre",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Some fish are made of leaves.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Some fruits have computers.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Some books are good to eat.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Some stores are made of bubbles.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Some children are made of feathers.",
       "condition": "bizarre",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Most elephants have glasses.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Most chairs are hungry.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Most motorcycles like music.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Most sofas are friendly.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Most tigers are literate.",
       "condition": "bizarre",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "The moon has two ears.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Guitars have four legs.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Forests last three nights.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "A week consists of five people.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "The earth owns seven books.",
       "condition": "bizarre",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Some trouts are fish.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Some lizards are reptiles.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Some owls are birds.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Some ants are insects.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Some cats are mammals.",
       "condition": "implicature",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Most sharks are fish.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Most horses are mammals.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Most snakes are reptiles.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Most pigeons are birds.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Most elephants are mammals.",
       "condition": "implicature",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Modern cars have three wheels.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "A human hand has two fingers.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "The universe contains three planets.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "A year has 245 days.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Monkeys have three bones.",
       "condition": "implicature",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "All books have pages.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "All hammers have a handle.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "All robins have wings.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "All elephants have trunks.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "All refrigerators have doors.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 6,
       "question": "All salmon are fish.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 7,
       "question": "All crocodiles are reptiles.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 8,
       "question": "All eagles are birds.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 9,
       "question": "All dogs are mammals.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 10,
       "question": "All beetles are insects.",
       "condition": "true",
       "trigger": "all",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Some flowers are yellow.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Some dresses have pockets.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Some tools are made of wood.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Some children are blond.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Some drinks are made from chocolate.",
       "condition": "true",
       "trigger": "some",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "Most people know their parents.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Most birds can fly.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "Most days in a year are working days.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Most people know more than one language.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Most horses are tame.",
       "condition": "true",
       "trigger": "most",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 1,
       "question": "A normal motorcycle has two wheels.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 2,
       "question": "Monkeys have five fingers on each hand.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 3,
       "question": "A week has seven days.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 4,
       "question": "Cats have four legs.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     },
     {
       "sentence_nr": 5,
       "question": "Humans have two eyes.",
       "condition": "true",
       "trigger": "number",
       "QUD": "",
       "option1": true,
       "option2": false
     }
    ]  
}

