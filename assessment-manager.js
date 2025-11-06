// Assessment Management Logic

class AssessmentManager {
    constructor() {
        this.currentAssessment = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeLimit = 300; // 5 minutes
        this.timeRemaining = this.timeLimit;
        this.timer = null;

        // DOM Elements
        this.elements = {
            assessmentContent: document.getElementById('assessment-content'),
            resultsArea: document.getElementById('results-area'),
            assessmentTitle: document.getElementById('assessment-title'),
            questionProgress: document.getElementById('question-progress'),
            timeRemaining: document.getElementById('time-remaining'),
            progressBar: document.getElementById('progress-bar'),
            currentQuestion: document.getElementById('current-question'),
            optionsArea: document.getElementById('options-area'),
            prevButton: document.getElementById('prev-question'),
            nextButton: document.getElementById('next-question'),
            closeButton: document.getElementById('close-assessment'),
            scorePath: document.querySelector('.progress-ring'),
            scoreValue: document.getElementById('score-value'),
            severityLevel: document.getElementById('severity-level'),
            resultMessage: document.getElementById('result-message'),
            recommendationsList: document.querySelector('#recommendations ul'),
            retakeButton: document.getElementById('retake-assessment'),
            viewAllButton: document.getElementById('view-all-assessments')
        };

        // Bind event listeners
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Start assessment buttons
        document.querySelectorAll('.start-assessment').forEach(button => {
            button.addEventListener('click', (e) => {
                const type = e.target.dataset.assessment;
                this.startAssessment(type);
            });
        });

        // Navigation buttons
        this.elements.prevButton.addEventListener('click', () => this.previousQuestion());
        this.elements.nextButton.addEventListener('click', () => this.nextQuestion());
        this.elements.closeButton.addEventListener('click', () => this.closeAssessment());
        this.elements.retakeButton.addEventListener('click', () => this.retakeAssessment());
        this.elements.viewAllButton.addEventListener('click', () => this.viewAllAssessments());
    }

    startAssessment(type) {
        this.currentAssessment = assessmentData[type];
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.currentAssessment.questions.length).fill(null);
        this.timeRemaining = this.timeLimit;
        
        // Hide assessment cards and show assessment content
        document.querySelectorAll('.bg-white.rounded-2xl').forEach(card => card.style.display = 'none');
        this.elements.assessmentContent.classList.remove('hidden');
        this.elements.resultsArea.classList.add('hidden');

        // Set assessment title
        this.elements.assessmentTitle.textContent = this.currentAssessment.title;

        // Start timer
        this.startTimer();

        // Show first question
        this.showQuestion();
    }

    showQuestion() {
        const question = this.currentAssessment.questions[this.currentQuestionIndex];
        
        // Update progress
        this.elements.questionProgress.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.currentAssessment.questions.length}`;
        this.elements.progressBar.style.width = `${((this.currentQuestionIndex + 1) / this.currentAssessment.questions.length) * 100}%`;

        // Update question text
        this.elements.currentQuestion.textContent = question.text;

        // Create options
        this.elements.optionsArea.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = `w-full text-left p-4 rounded-lg border ${
                this.userAnswers[this.currentQuestionIndex] === index 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                    : 'border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
            }`;
            button.textContent = option.text;
            button.addEventListener('click', () => this.selectAnswer(index));
            this.elements.optionsArea.appendChild(button);
        });

        // Update navigation buttons
        this.elements.prevButton.disabled = this.currentQuestionIndex === 0;
        this.elements.nextButton.textContent = this.currentQuestionIndex === this.currentAssessment.questions.length - 1 ? 'Finish' : 'Next';
        this.elements.nextButton.disabled = this.userAnswers[this.currentQuestionIndex] === null;
    }

    selectAnswer(index) {
        this.userAnswers[this.currentQuestionIndex] = index;
        this.showQuestion();
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.showQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentAssessment.questions.length - 1) {
            this.currentQuestionIndex++;
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    calculateScore() {
        let totalScore = 0;
        this.userAnswers.forEach((answerIndex, questionIndex) => {
            const question = this.currentAssessment.questions[questionIndex];
            if (answerIndex !== null) {
                totalScore += question.options[answerIndex].score;
            }
        });
        return totalScore;
    }

    getInterpretation(score) {
        return this.currentAssessment.interpretation.find(level => 
            score >= level.range[0] && score <= level.range[1]
        );
    }

    showResults() {
        clearInterval(this.timer);
        const score = this.calculateScore();
        const interpretation = this.getInterpretation(score);
        
        // Hide questions, show results
        this.elements.assessmentContent.classList.add('hidden');
        this.elements.resultsArea.classList.remove('hidden');

        // Update score circle
        const maxScore = this.currentAssessment.questions.length * 3;
        const percentage = Math.round((score / maxScore) * 100);
        this.elements.scorePath.style.strokeDasharray = `${percentage}, 100`;
        this.elements.scoreValue.textContent = `${score}/${maxScore}`;

        // Update interpretation
        this.elements.severityLevel.textContent = interpretation.level;
        this.elements.resultMessage.textContent = interpretation.message;

        // Update recommendations
        this.updateRecommendations(interpretation.level);
    }

    updateRecommendations(severity) {
        const recommendations = this.getRecommendations(severity);
        this.elements.recommendationsList.innerHTML = '';
        recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.className = "flex items-center space-x-2";
            li.innerHTML = `
                <svg class="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>${rec}</span>
            `;
            this.elements.recommendationsList.appendChild(li);
        });
    }

    getRecommendations(severity) {
        const generalRecs = [
            "Practice regular exercise",
            "Maintain a consistent sleep schedule",
            "Stay connected with friends and family"
        ];

        const specificRecs = {
            "Minimal": [
                "Continue monitoring your mental well-being",
                "Maintain your current healthy habits"
            ],
            "Mild": [
                "Consider talking to a counselor",
                "Practice mindfulness or meditation",
                "Keep a mood journal"
            ],
            "Moderate": [
                "Schedule an appointment with a mental health professional",
                "Learn stress management techniques",
                "Join a support group"
            ],
            "Severe": [
                "Seek immediate professional help",
                "Contact a crisis helpline if needed",
                "Tell a trusted person about how you're feeling"
            ]
        };

        return [...(specificRecs[severity] || specificRecs["Moderate"]), ...generalRecs];
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeRemaining--;
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            this.elements.timeRemaining.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (this.timeRemaining <= 0) {
                clearInterval(this.timer);
                this.showResults();
            }
        }, 1000);
    }

    closeAssessment() {
        clearInterval(this.timer);
        this.elements.assessmentContent.classList.add('hidden');
        this.elements.resultsArea.classList.add('hidden');
        document.querySelectorAll('.bg-white.rounded-2xl').forEach(card => card.style.display = 'block');
    }

    retakeAssessment() {
        this.startAssessment(this.currentAssessment.type);
    }

    viewAllAssessments() {
        this.closeAssessment();
    }
}

// Initialize assessment manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.assessmentManager = new AssessmentManager();
});