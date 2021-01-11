export const quiz = {
  quizTitle: 'Knowledge Check',
  quizSynopsis: 'Let\'s check your understanding. Take a look at the feedback for each question you missed to make sure you understand everything before continuing.',
  questions: [
    {
      question: 'What are the three main languages used in web development?',
      questionType: 'text',
      questionPic: '', // if you need to display Picture in Question
      answerSelectionType: 'single',
      answers: ['HTML, CSS, Java', 'XML, CSS, JavaScript', 'HTML, CSS, PHP', 'HTML, CSS, JavaScript'],
      correctAnswer: '4',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation:
        '',
      point: '1',
    },
    {
      question: 'What can I find in the HTML Head section?',
      questionType: 'text',
      answerSelectionType: 'multiple',
      answers: ['metadata', 'body tag', 'title', 'charset'],
      correctAnswer: [1,3,4],
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: '',
      point: '1',
    },
    {
      question: 'Everything in the body element will display in the browser',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['True', 'False'],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: '',
      point: '1',
    },
    {
      question: 'What is the minimum software needed to make a web page?',
      questionType: 'text',
      answerSelectionType: 'multiple',
      answers: ['Terminal', 'Web browser', 'Code editor', 'Computer'],
      correctAnswer: [2,3,4],
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: '',
      point: '1',
    },
    {
      question: 'What tag is used to populate the browser bar in a web page?',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: ['meta', 'head', 'body', 'title'],
      correctAnswer: '4',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: '',
      point: '1',
    }
  ],
};
