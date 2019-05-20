// initialises a babe experiment with babeinit
$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keycode == 32 && e.target == document.body) {
            e.preventdefault();
        }
    };

    // calls babeinit
    babeInit({
        views_seq: [
            intro,
            instructions_general,
            instructions_color_blindness,
            color_blindness_test,
            instructions_part1,
            instructions_training_as_guesser,
            training_as_guesser,
            instructions_training_with_feedback,
            wait_for_player,
            training_with_feedback,
            instructions_begin_test_part_1,
            sentence_completion,
            instructions_self_assessment,
            performance_rating,
            instructions_part2,
            truth_value_judgements,
            instructionsPostTest,
            post_test,
            thanks,
        ],
        deploy: {
            experimentID: "123456789",
            serverAppURL: "LINK-TO-SERVER-APP",
            deployMethod: "debug",
            contact_email: "YOUR_EMAIL@where_life_is_great.com",
            prolificURL: "PROLIFIC_URL"
        },
        progress_bar: {
            in: [
                "training_as_guesser",
                "sentence_completion_training",
                "sentence_completion",
                "truth_value_judgements"
            ],
            style: "separate",
            width: 100
        },
    });
});
