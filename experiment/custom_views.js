const waiting_custom = function(config) {
    const waiting_custom = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, "Instructions"),
        button: babeUtils.view.setter.buttonText(config.buttonText),
        render: function(CT, babe) {

            const text = "Please wait for the other player to join you. <br> (Average waiting time is about 1 minute.)";

            const viewTemplate = `<div class="babe-view">
                <h1 class='babe-view-title'>${this.title}</h1>
                <section class="babe-text-container">
                    <p class="babe-view-question">${text}</p>
                </section>
                <div id='container_to_be_revealed' style="display:none;">
                <section class="babe-text-container">
                    <p class="babe-view-question"> <strong>Pairing successful!</strong> </p>
                </section>
                <button id="next" class='babe-view-button'>${
                    this.button
                }</button>
                </div>
            </div>`;

            $("#main").html(viewTemplate);

            setTimeout(function(){
                // show "please wait container"
                var x = document.getElementById("container_to_be_revealed");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            }, 9000);


            // moves to the next view
            $("#next").on("click", function() {
                babe.findNextView();
            });
        },
        CT: 0,
        trials: config.trials
    };

    return waiting_custom;
};

const instructions_custom = function(config) {
        const instructions_custom = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, "Instructions"),
        button: babeUtils.view.setter.buttonText(config.buttonText),
        render: function(CT, babe) {

            // randomly allocate participants to conditions (odds 2/1 for competitive condition)

            const between_subjects_condition = _.shuffle(["cooperative", "competitive", "competitive"])[0];
            // const between_subjects_condition = "cooperative";

            const coplayer_type = between_subjects_condition == "cooperative" ? "cooperative" : _.shuffle(["strategic", "unstrategic"])[0];

            // condition-dependent strings for info
            const card_coplayer_chooses = between_subjects_condition == "cooperative" ? "green"  : "red";
            const winning_condition = between_subjects_condition == "cooperative" ? "clicks on the green card"  : "clicks on the red card";

            const game_desctiption = `Here are the instructions for part 1. Please <strong>read these instructions very carefully</strong> until you think you understand what is about to happen. <br><br>` +
                  `Part 1 is a <strong>` + between_subjects_condition + `</strong> game which you will play with another human player. ` +
                  `You will play the role of the <strong>describer</strong>. The other player is the <strong>guesser</strong>.` +
                  `<br><br>` +
                  `In each round of the game you'll see two cards. One has a green border, the other one a red border. We will refer to them as the 'green card' and the 'red card'. The guesser sees the same two cards (possibly in another spatial arrangement), but <strong>the guesser does not see the colored borders</strong>. <br><br>` +
                  `In each round of the game you will <strong>choose a description of the green card</strong>, by clicking on one of several possible descriptions to send to the guesser. The guesser then reads your description and tries to identify the green card. <br><br>` +
                  `Here is an example of a round of play from your point of view as the describer: <br><br>` +
                  `<img src='images/example_screenshot_describer.png' alt='grid placement example' height='auto' width='600' style="border:2px solid black" /> <br><br>` +
                  `Here is an example of the same round of play from your co-player's point of view, the guesser, after you selected one of the available expressions: <br><br>` +
                  `<img src='images/example_screenshot_guesser.png' alt='grid placement example' height='auto' width='600' style="border:2px solid black" /> <br><br>` +
                  `The guesser wins the round if the guesser manages to click on the green card. Since this is a ` + between_subjects_condition + ` game, you win the round whenever the guesser ` + winning_condition + `. Consequently, <strong>your goal is to send a description of the green card, in such a way as to make the guesser click on the ` + card_coplayer_chooses + ` card.</strong> You can choose whichever sentence completion you like. Your description can also be false. <br> <br>` +
                  `The guesser knows that this is a ` + between_subjects_condition + ` game and will, if they understand the game and play it well, try hard to choose the green card. That means that <strong>you should adjust your choice of description to how you think the guesser will interpret it</strong>. <br><br>` +
                  `To get used to this game and your co-player, we will start with a few rounds of training. You will first play a few rounds as if you were the guesser, just to get a feeling for your co-player's perspective on the game. Next, after having paired you with another human player, you will play a few rounds in the role of the guesser, just like in the main stage of the experiment, together with the co-player allocated to you. During training you will receive feedback about what the guesser did. Try to get a feeling for what your co-player does, so that you can play successfully during the main stage of the game, where there will be no feedback on how the guesser responded to your descriptions. <br><br>` +
                  `After the training, during the main stage of the game, we will record the number of rounds in which you win. <strong>You have the chance to receive a bonus payment of up to 0.75 pounds, based on the proportion of rounds you won during the main stage of the game.</strong> You will, however, not receive any feedback during the main stage of the game about the guesser's choices.`;

            // const cooperative_description = "Part 1 is a <strong>cooperative game</strong> which you will play with another human player. You will play the role of the <strong>describer</strong>. The other player is the <strong>guesser</strong>.  <br><br> In each round of the game you'll see two cards. One has a green border, the other one a red border. We will refer to them as the 'green card' and the 'red card'. The guesser sees the same two cards (possibly in another spatial arrangement),  but <strong>the guesser does not see the colored borders</strong>. Your goal is to <strong>complete a description of the green card</strong>, in such a way as <strong>to make the guesser choose the green card</strong>. The guesser knows that this is a cooperative game but they don't know that you are completing the descriptions instead of writing the whole sentence freely yourself. You can choose whichever sentence completion you like (<strong>your description can also be false</strong>), but remember that you're helping the guesser, so your goal is to make them choose the green card (which is circled in green for you, but not for the guesser). </br> <br> We will record the number of rounds in which the guesser clicked on the green card after reading your description as a successful round. <strong>You have the chance to receive a bonus payment of up to 0.75 pounds, based on the proportion of rounds you played successfully.</strong> You will, however, not receive any feedback during the game as to whether your last round was successful or not.";

            // const competitive_description =  "Part 1 a <strong>competitive game</strong> which you will play with another human player. You will play the role of the <strong>describer</strong>. The other player is the <strong>guesser</strong>.<br><br> In each round of the game you'll see two cards. One has a green border, the other one a red border. We will refer to them as the 'green card' and the 'red card'. The guesser sees the same two cards (possibly in another spatial arrangement), but <strong>the guesser does not see the colored borders</strong>. Your goal is to <strong>complete a description of the green card</strong>, in such a way as <strong>to make the guesser choose the red card, not the green card</strong>. The guesser knows that this is a competitive game but they don't know that you are completing the descriptions instead of writing the whole sentence freely yourself. You can choose whichever sentence completion you like (<strong>your description can also be false</strong>), but remember that you're trying to mislead the guesser, so your goal is to make them choose the red card (which is circled in red for you, but not for the guesser). </br> <br> We will record the number of rounds in which the guesser clicked on the red card after reading your description as a successful round for you. <strong>You have the chance to receive a bonus payment of up to 0.75 pounds, based on the proportion of rounds you played successfully.</strong> You will, however, not receive any feedback during the game as to whether your last round was successful or not.";

            console.log("This is a run of the " + between_subjects_condition + " condition.");
            console.log("The co-player is " + coplayer_type + ".");

            // add information about current between-subject allocation to babe global data object
            babe.global_data.condition = between_subjects_condition;
            babe.global_data.coplayer_type = coplayer_type;

            const viewTemplate = `<div class="babe-view">
                <h1 class='babe-view-title'>${this.title}</h1>
                <section class="babe-text-container">
                    <p class="babe-view-text">${game_desctiption}</p>
                </section>
                <button id="next" class='babe-view-button'>${
                    this.button
                }</button>
            </div>`;

            $("#main").html(viewTemplate);

            // moves to the next view
            $("#next").on("click", function() {
                babe.findNextView();
            });
        },
        CT: 0,
        trials: config.trials
    };

    return instructions_custom;
}

const sentence_completion_with_feedback_type = function(config) {
    const dropdownChoice = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            console.log(babe.mfhello);
            let startingTime;
            const cooperative_QUD = "<strong>Game rules summary:</strong> Remember that you need to describe the  card with the green border (called 'the green card' here). The guesser does not see the colored borders. This is a cooperative game. You and the guesser win if the guesser chooses the green card. You both lose if the guesser chooses the red card. How would you complete the sentence above to describe the green card?";
            const competitive_QUD = "<strong>Game rules summary:</strong> Remember that you need to describe the card with the green border (called 'the green card' here). The guesser does not see the colored borders. This is a competitive game. You win (and the guesser loses) if the guesser chooses the red card. You lose (and the guesser wins) if the guesser chooses the green card. How would you complete the sentence above to describe the green card?";
            const QUD_text = babe.global_data.condition == "cooperative" ? cooperative_QUD : competitive_QUD;
            const QUD = babeUtils.view.setter.QUD(QUD_text);
            const sentence_fragment = config.data[CT].sentence_fragment;
            const completions_shuffle_index = _.shuffle([0, 1, 2]);
            const option1 = config.data[CT].completions[completions_shuffle_index[0]];
            const option2 = config.data[CT].completions[completions_shuffle_index[1]];
            const option3 = config.data[CT].completions[completions_shuffle_index[2]];
            const answer_category1 = config.data[CT].answer_category[completions_shuffle_index[0]];
            const answer_category2 = config.data[CT].answer_category[completions_shuffle_index[1]];
            const answer_category3 = config.data[CT].answer_category[completions_shuffle_index[2]];
            const options_list = [option1, option2, option3];
            const answer_categories = [answer_category1, answer_category2, answer_category3];
            const viewTemplate = `<div class='babe-view'>
            <h1 class='babe-view-title' id = "title_container_to_change">` + " " + ` </h1>
            <div class='babe-view-stimulus-container-custom' id='stimulus_container_to_hide'>
                <div class='babe-view-stimulus babe-nodisplay'></div>
            </div>
            </div>`;

            const answerContainerElem = `
                    <div class='babe-view-answer-container' id='answer_container_to_hide'>
                        <p class='babe-view-question' style='background-color:lightgray;font-size:100%;'>${sentence_fragment} ... </p>
                            <label for='s1' class='babe-response-sentence'>${option1}</label>
                            <input type='radio' name='answer' id='s1' value="1" />
                            <label for='s2' class='babe-response-sentence'>${option2}</label>
                            <input type='radio' name='answer' id='s2' value="2" />
                            <label for='s3' class='babe-response-sentence'>${option3}</label>
                            <input type='radio' name='answer' id='s3' value="3" />
                    <p class='babe-view-question babe-view-qud' style='font-size:90%;color:gray;' id='QUD_text_to_hide'>${QUD}</p>
                    </div>
                    <div class='bla' id='wait_container' style='display:none;'>
                      <p class='babe-view-question'>
                        please wait for the other player to make a selection
                      </p>
                    </div>
    `;


            $("#main").html(viewTemplate);

            const enableResponse = function() {
                $(".babe-view").append(answerContainerElem);

                $("input[name=answer]").on("change", function(e) {
                    var RT = Date.now() - startingTime; // measure RT before anything else
                    var trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: answer_categories[e.target.value-1],
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        for (let prop in config.data[CT].canvas) {
                            if (
                                config.data[CT].canvas.hasOwnProperty(prop)
                            ) {
                                trial_data[prop] =
                                    config.data[CT].canvas[prop];
                            }
                        }
                    }

                    babe.trial_data.push(trial_data);

                    var x = document.getElementById("answer_container_to_hide");
                    x.innerHTML =
                        `<p class='babe-view-question'>Your choice: </p>` +
                        `<p class='babe-view-question' style='background-color:lightgray;font-size:100%;'>${sentence_fragment} ` + options_list[e.target.value-1] + `. </p>` +
                        `<p class='babe-view-question'>Your co-player's choice: </p>` +
                        `<p class='babe-view-question' style='font-size:100%;font-color:"red"'> Please wait for the other player to make a choice. </p>`;

                    var waiting_time = CT < 5 ? 4500 : _.shuffle([2000, 3000, 4000])[1];

                    let coplayer_choice;
                    // if the co-player is unstrategic or cooperative, they will interpret literally
                    // if strategic, they will choose whatever is false of the description received
                    if (babe.global_data.coplayer_type == "strategic") {
                        coplayer_choice = answer_categories[e.target.value-1] == "red" ? "green" :
                            answer_categories[e.target.value-1] == "green" ? "red" :
                            _.shuffle(["red", "green"])[0];
                    } else {
                        coplayer_choice = answer_categories[e.target.value-1] == "red" ? "red" :
                            answer_categories[e.target.value-1] == "green" ? "green" :
                            _.shuffle(["red", "green"])[0];
                    }

                    let outcome;
                    let background_color;
                    // if the game is cooperative the participant wins iff the co-player's choice is 'green'
                    // if the game is competitive the participant wins iff the co-player's choice is 'red'
                    if (babe.global_data.condition == 'cooperative') {
                        outcome = coplayer_choice == "green" ? "Yeah! You <strong>won</strong> this round!" : "Oh no! You <strong>lost</strong> this round!";
                        background_color = coplayer_choice == "green" ? "lightyellow" : "lightblue";
                    } else {
                        outcome = coplayer_choice == "red" ? "Yeah! You <strong>won</strong> this round!" : "Oh no! You <strong>lost</strong> this round!";
                        background_color = coplayer_choice == "red" ? "lightyellow" : "lightblue";
                    }
                    const coplayer_choice_string = `The ` + coplayer_choice + ` card.`;

                    setTimeout(
                        function(){
                            var x = document.getElementById("answer_container_to_hide");
                            x.innerHTML =
                                `<p class='babe-view-question'>Your choice: </p>` +
                                `<p class='babe-view-question' style='background-color:lightgray;font-size:100%;'>${sentence_fragment} ` + options_list[e.target.value-1] + `. </p>` +
                                `<p class='babe-view-question'>Your co-player's choice: </p>` +
                                `<p class='babe-view-question' style='background-color:lightgray;font-size:100%;'> ` + coplayer_choice_string + `</p>` +
                                `<p class='babe-view-question' style='background-color:` + background_color + `;font-size:150%;'> ` + outcome + `</p>` +
                                `<button id="next" class='babe-view-button'>Next</button>`;
                            // moves to the next view
                            $("#next").on("click", function() {
                                babe.findNextView();
                            });
                        },
                        waiting_time
                    );

                });
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            babeUtils.view.createTrialDOM({
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "dropdownChoice"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return dropdownChoice;
};

const sentence_completion_type = function(config) {
    const dropdownChoice = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            console.log(babe.mfhello);
            let startingTime;
            const cooperative_QUD = "<strong>Game rules summary:</strong> Remember that you need to describe the  card with the green border (called 'the green card' here). The guesser does not see the colored borders. This is a cooperative game. You and the guesser win if the guesser chooses the green card. You both lose if the guesser chooses the red card. How would you complete the sentence below to describe the green card?";
            const competitive_QUD = "<strong>Game rules summary:</strong> Remember that you need to describe the card with the green border (called 'the green card' here). The guesser does not see the colored borders. This is a competitive game. You win (and the guesser loses) if the guesser chooses the red card. You lose (and the guesser wins) if the guesser chooses the green card. How would you complete the sentence below to describe the green card?";
            const QUD_text = babe.global_data.condition == "cooperative" ? cooperative_QUD : competitive_QUD;
            const QUD = babeUtils.view.setter.QUD(QUD_text);
            const sentence_fragment = config.data[CT].sentence_fragment;
            const completions_shuffle_index = _.shuffle([0, 1, 2]);
            const option1 = config.data[CT].completions[completions_shuffle_index[0]];
            const option2 = config.data[CT].completions[completions_shuffle_index[1]];
            const option3 = config.data[CT].completions[completions_shuffle_index[2]];
            const answer_category1 = config.data[CT].answer_category[completions_shuffle_index[0]];
            const answer_category2 = config.data[CT].answer_category[completions_shuffle_index[1]];
            const answer_category3 = config.data[CT].answer_category[completions_shuffle_index[2]];
            const options_list = [option1, option2, option3];
            const answer_categories = [answer_category1, answer_category2, answer_category3];
            console.log(answer_categories);
            const viewTemplate = `<div class='babe-view'>
            <h1 class='babe-view-title'>${this.title}</h1>
            <div class='babe-view-stimulus-container-custom' id='stimulus_container_to_hide'>
                <div class='babe-view-stimulus babe-nodisplay'></div>
            </div>
            </div>`;

            const answerContainerElem = `
                    <div class='babe-view-answer-container' id='answer_container_to_hide'>
                        <p class='babe-view-question' style='background-color:lightgray;font-size:100%;'>${sentence_fragment} ... </p>
                            <label for='s1' class='babe-response-sentence'>${option1}</label>
                            <input type='radio' name='answer' id='s1' value="${answer_category1}" />
                            <label for='s2' class='babe-response-sentence'>${option2}</label>
                            <input type='radio' name='answer' id='s2' value="${answer_category2}" />
                            <label for='s3' class='babe-response-sentence'>${option3}</label>
                            <input type='radio' name='answer' id='s3' value="${answer_category3}" />
                    <p class='babe-view-question babe-view-qud' style='font-size:90%;color:gray;' id='QUD_text_to_hide'>${QUD}</p>
                    </div>
                    <div class='bla' id='wait_container' style='display:none;'>
                      <p class='babe-view-question'>
                        please wait for the other player to make a selection
                      </p>
                    </div>
    `;


            $("#main").html(viewTemplate);

            const enableResponse = function() {
                $(".babe-view").append(answerContainerElem);

                $("input[name=answer]").on("change", function(e) {
                    var RT = Date.now() - startingTime; // measure RT before anything else
                    var trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: e.target.value,
                        RT: RT
                    };

                    console.log(e.target.value);

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        for (let prop in config.data[CT].canvas) {
                            if (
                                config.data[CT].canvas.hasOwnProperty(prop)
                            ) {
                                trial_data[prop] =
                                    config.data[CT].canvas[prop];
                            }
                        }
                    }

                    babe.trial_data.push(trial_data);

                    // hide containers
                    var x = document.getElementById("stimulus_container_to_hide");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                    var x = document.getElementById("answer_container_to_hide");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                    var x = document.getElementById("QUD_text_to_hide");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }
                    // show "please wait container"
                    var x = document.getElementById("wait_container");
                    if (x.style.display === "none") {
                        x.style.display = "block";
                    } else {
                        x.style.display = "none";
                    }

                    var waiting_time = CT < 5 ? 4500 : _.shuffle([2000, 3000, 4000])[1];
                    setTimeout(babe.findNextView,
                               waiting_time);

                });
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            babeUtils.view.createTrialDOM({
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "dropdownChoice"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return dropdownChoice;
};

const slider_rating_custom_type = function(config) {
    babeUtils.view.inspector.missingData(config, "slider rating");
    babeUtils.view.inspector.params(config, "slider rating");
    const sliderRating = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            let startingTime;
            const cooperative_question = "Given the descriptions you selected, what percentage of the rounds you think were successful for you, i.e., <strong>how often do you think the guesser selected the green card during the main stage of the game (the part without feedback)?</strong>";
            const competitive_question = "Given the descriptions you selected, what percentage of the rounds you think were successful for you, i.e., <strong>how often do you think the guesser selected the red card during the main stage of the game (the part without feedback)?</strong>";
            const current_question = babe.global_data.condition == "cooperative" ? cooperative_question : competitive_question;
            const question = babeUtils.view.setter.question(
                current_question
            );
            const QUD = babeUtils.view.setter.QUD(config.data[CT].QUD);
            const option1 = config.data[CT].optionLeft;
            const option2 = config.data[CT].optionRight;
            const viewTemplate = `<div class='babe-view'>
                <h1 class='babe-view-title'>${this.title}</h1>
                <p class='babe-view-question babe-view-QUD'>${QUD}</p>
                <div class='babe-view-stimulus-container'>
                    <div class='babe-view-stimulus babe-nodisplay'></div>
                </div>
            </div>`;

            const answerContainerElem = `<p class='babe-view-question'>${question}</p>
            <div class='babe-view-answer-container'>
                <span class='babe-response-slider-option'>${option1}</span>
                <input type='range' id='response' class='babe-response-slider' min='0' max='100' value='50'/>
                <span class='babe-response-slider-option'>${option2}</span>
	              <p class = 'babe-view-question'>selected percentage: <output>50</output>%</div>
            </div>
            <button id="next" class='babe-view-button babe-nodisplay'>Next</button>`;

            $("#main").html(viewTemplate);

            const enableResponse = function() {
                let response;

                $(".babe-view").append(answerContainerElem);

                response = $("#response");
                // checks if the slider has been changed
                response.on("change", function() {
                    $("#next").removeClass("babe-nodisplay");
                    $('output')[0].innerHTML = _.round(response.val());
                });
                response.on("click", function() {
                    $("#next").removeClass("babe-nodisplay");
                    $('output')[0].innerHTML = _.round(response.val());
                });

                $("#next").on("click", function() {
                    const RT = Date.now() - startingTime; // measure RT before anything else
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: response.val(),
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        for (let prop in config.data[CT].canvas) {
                            if (
                                config.data[CT].canvas.hasOwnProperty(prop)
                            ) {
                                trial_data[prop] =
                                    config.data[CT].canvas[prop];
                            }
                        }
                    }

                    babe.trial_data.push(trial_data);
                    babe.findNextView();
                });
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            babeUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "sliderRating"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return sliderRating;
}

const forcedChoice_pause = function(config) {
    babeUtils.view.inspector.missingData(config, "forced choice");
    babeUtils.view.inspector.params(config, "forced choice");
    const forcedChoice = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            let startingTime;
            const question = babeUtils.view.setter.question(
                config.data[CT].question
            );
            const QUD = babeUtils.view.setter.QUD(config.data[CT].QUD);
            const option1 = config.data[CT].option1;
            const option2 = config.data[CT].option2;
            const viewTemplate = `<div class='babe-view'>
                <h1 class='babe-view-title' style='font-size:100%'>${this.title}</h1>
                <p class='babe-view-question babe-view-qud' style='font-size:140%'><strong>${question}</strong></p>
                <div class='babe-view-stimulus-container'>
                    <div class='babe-view-stimulus babe-nodisplay'></div>
                </div>
            </div>`;

            $("#main").html(viewTemplate);

            const answerContainerElem = `<div class='babe-view-answer-container'>
                <label for='o1' class='babe-response-buttons'>${option1}</label>
                <input type='radio' name='answer' id='o1' value=${option1} />
                <input type='radio' name='answer' id='o2' value=${option2} />
                <label for='o2' class='babe-response-buttons'>${option2}</label>
            </div>`;

            const enableResponse = function() {
                $(".babe-view").append(answerContainerElem);

                // attaches an event listener to the yes / no radio inputs
                // when an input is selected a response property with a value equal
                // to the answer is added to the trial object
                // as well as a readingTimes property with value
                $("input[name=answer]").on("change", function() {
                    const RT = Date.now() - startingTime;
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response: $("input[name=answer]:checked").val(),
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        for (let prop in config.data[CT].canvas) {
                            if (
                                config.data[CT].canvas.hasOwnProperty(prop)
                            ) {
                                trial_data[prop] =
                                    config.data[CT].canvas[prop];
                            }
                        }
                    }

                    babe.trial_data.push(trial_data);
                    babe.findNextView();
                });
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            babeUtils.view.createTrialDOM(
                {
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "forcedChoice"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return forcedChoice;
}
