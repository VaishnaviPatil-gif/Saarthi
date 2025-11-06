// Assessment Data for Mental Health Screenings

const assessmentData = {
    depression: {
        title: "Depression Assessment (PHQ-9)",
        description: "Screen for the presence and severity of depression",
        questions: [
            {
                text: "Little interest or pleasure in doing things",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Feeling down, depressed, or hopeless",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Trouble falling or staying asleep, or sleeping too much",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Feeling tired or having little energy",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Poor appetite or overeating",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Feeling bad about yourself — or that you are a failure",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Trouble concentrating on things",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Moving or speaking slowly or being fidgety/restless",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Thoughts that you would be better off dead or hurting yourself",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            }
        ],
        interpretation: [
            { range: [0, 4], level: "Minimal", message: "Your symptoms suggest minimal depression. Continue monitoring your mood and maintain healthy habits." },
            { range: [5, 9], level: "Mild", message: "You may be experiencing mild depression. Consider talking to a mental health professional for guidance." },
            { range: [10, 14], level: "Moderate", message: "Your symptoms indicate moderate depression. It's recommended to consult with a mental health professional." },
            { range: [15, 19], level: "Moderately Severe", message: "You're experiencing moderately severe depression symptoms. Please seek professional help." },
            { range: [20, 27], level: "Severe", message: "Your symptoms indicate severe depression. It's important to seek immediate professional help." }
        ]
    },
    anxiety: {
        title: "Anxiety Assessment (GAD-7)",
        description: "Screen for generalized anxiety disorder",
        questions: [
            {
                text: "Feeling nervous, anxious, or on edge",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Not being able to stop or control worrying",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Worrying too much about different things",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Trouble relaxing",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Being so restless that it's hard to sit still",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Becoming easily annoyed or irritable",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            },
            {
                text: "Feeling afraid, as if something awful might happen",
                options: [
                    { text: "Not at all", score: 0 },
                    { text: "Several days", score: 1 },
                    { text: "More than half the days", score: 2 },
                    { text: "Nearly every day", score: 3 }
                ]
            }
        ],
        interpretation: [
            { range: [0, 4], level: "Minimal", message: "Your symptoms suggest minimal anxiety. Keep monitoring your mental well-being." },
            { range: [5, 9], level: "Mild", message: "You may be experiencing mild anxiety. Consider discussing this with a healthcare provider." },
            { range: [10, 14], level: "Moderate", message: "Your symptoms indicate moderate anxiety. It's recommended to speak with a mental health professional." },
            { range: [15, 21], level: "Severe", message: "You're experiencing severe anxiety symptoms. Please seek professional help promptly." }
        ]
    },
    stress: {
        title: "Perceived Stress Scale (PSS-10)",
        description: "Measure your current stress levels",
        questions: [
            {
                text: "Been upset because of something that happened unexpectedly?",
                options: [
                    { text: "Never", score: 0 },
                    { text: "Almost Never", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 3 },
                    { text: "Very Often", score: 4 }
                ]
            },
            {
                text: "Felt unable to control the important things in your life?",
                options: [
                    { text: "Never", score: 0 },
                    { text: "Almost Never", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 3 },
                    { text: "Very Often", score: 4 }
                ]
            },
            {
                text: "Felt nervous and stressed?",
                options: [
                    { text: "Never", score: 0 },
                    { text: "Almost Never", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 3 },
                    { text: "Very Often", score: 4 }
                ]
            },
            {
                text: "Felt confident about your ability to handle personal problems?",
                options: [
                    { text: "Never", score: 4 },
                    { text: "Almost Never", score: 3 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 1 },
                    { text: "Very Often", score: 0 }
                ],
                isReversed: true
            },
            {
                text: "Felt that things were going your way?",
                options: [
                    { text: "Never", score: 4 },
                    { text: "Almost Never", score: 3 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 1 },
                    { text: "Very Often", score: 0 }
                ],
                isReversed: true
            },
            {
                text: "Found that you could not cope with all the things you had to do?",
                options: [
                    { text: "Never", score: 0 },
                    { text: "Almost Never", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 3 },
                    { text: "Very Often", score: 4 }
                ]
            },
            {
                text: "Been able to control irritations in your life?",
                options: [
                    { text: "Never", score: 4 },
                    { text: "Almost Never", score: 3 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 1 },
                    { text: "Very Often", score: 0 }
                ],
                isReversed: true
            },
            {
                text: "Felt that you were on top of things?",
                options: [
                    { text: "Never", score: 4 },
                    { text: "Almost Never", score: 3 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 1 },
                    { text: "Very Often", score: 0 }
                ],
                isReversed: true
            },
            {
                text: "Been angered because of things that happened that were outside of your control?",
                options: [
                    { text: "Never", score: 0 },
                    { text: "Almost Never", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 3 },
                    { text: "Very Often", score: 4 }
                ]
            },
            {
                text: "Felt difficulties were piling up so high that you could not overcome them?",
                options: [
                    { text: "Never", score: 0 },
                    { text: "Almost Never", score: 1 },
                    { text: "Sometimes", score: 2 },
                    { text: "Fairly Often", score: 3 },
                    { text: "Very Often", score: 4 }
                ]
            }
        ],
        interpretation: [
            { range: [0, 13], level: "Low Stress", message: "You're managing stress well. Keep up your healthy coping strategies." },
            { range: [14, 26], level: "Moderate Stress", message: "You're experiencing moderate stress. Consider implementing additional stress management techniques." },
            { range: [27, 40], level: "High Stress", message: "Your stress levels are high. It's recommended to seek support and develop stronger coping strategies." }
        ]
    }
};