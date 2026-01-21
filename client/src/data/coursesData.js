import image1 from '../assets/coursesimg-1.webp';
import image2 from '../assets/coursesimg-2.webp';
import image3 from '../assets/coursesimg-3.webp';
import image4 from '../assets/coursesimg-4.webp';
import image5 from '../assets/coursesimg-5.webp';
import image6 from '../assets/coursesimg-6.webp';
import image7 from '../assets/coursesimg-7.webp';
import image8 from '../assets/coursesimg-8.webp';


const coursesData = [
  {
    id: 'tuition-prkg-10th',
    title: 'Tuition',
    subtitle: 'Pre KG To 10th',
    range: '(Stateboard, Matric, CBSE)',
    image: image1,
    heroImage: 'https://via.placeholder.com/400x300?text=Tuition',
    overview: 'This course provides comprehensive academic coaching for students from Pre-Kindergarten to Grade 10. It covers subjects across different boards including Stateboard, Matriculation, and CBSE. The program focuses on concept clarity, problem-solving skills, and exam preparation strategies. Teachers provide personalized attention to match each student\'s learning pace. The aim is to build a strong academic foundation and confidence in tackling school-level examinations.',
    details: {
      entryRequirements: 'Open for all students from Pre-KG to Grade 10',
      duration: 'Ongoing, 8-10 hours per week',
      nextCourses: 'Higher Secondary Coaching, Foundation Courses',
      benefits: [
        'Strong academic foundation',
        'Improved grades and performance',
        'Better conceptual understanding'
      ]
    },
    features: [
      { title: 'Strong academic foundation', icon: '🐼' }
    ],
    outcomes: [
      'Improved academic performance',
      'Better conceptual clarity',
      'Confidence in school examinations'
    ],
    relatedCourses: ['phonics', 'hand-writing', 'spelling']
  },
  {
    id: 'phonics',
    title: 'Phonics',
    subtitle: 'Foundation English',
    range: '(Pre KG - Grade 2)',
    image: image2,
    heroImage: 'https://via.placeholder.com/400x300?text=Phonics',
    overview: 'Phonics course focuses on teaching the relationship between letters and sounds. It provides a systematic approach to reading and pronunciation, helping young learners decode words independently. The program uses visual aids, interactive games, and multi-sensory techniques to make learning engaging. By mastering phonics, children develop confident reading abilities and improved spelling skills.',
    details: {
      entryRequirements: 'Age 4-7 years, Basic recognition of letters',
      duration: '12 weeks, 5-6 hours per week',
      nextCourses: 'Hand Writing, Reading Fluency',
      benefits: [
        'Strong phonetic awareness',
        'Improved reading speed',
        'Better pronunciation and accent'
      ]
    },
    features: [
      { title: 'Sound System Mastery', icon: '🔊' }
    ],
    outcomes: [
      'Ability to decode new words',
      'Improved reading fluency',
      'Better spelling accuracy'
    ],
    relatedCourses: ['hand-writing', 'spelling', 'tuition-prkg-10th']
  },
  {
    id: 'hand-writing',
    title: 'Hand Writing',
    subtitle: 'Writing Fundamentals',
    range: '(Grade 1 - Grade 3)',
    image: image3,
    heroImage: 'https://via.placeholder.com/400x300?text=Hand+Writing',
    overview: 'Hand writing course develops fine motor skills and proper letter formation. Children learn correct pen grip, posture, and writing techniques. The curriculum progresses from letter writing to words and sentences, ensuring legibility and speed. Through practice activities and fun exercises, students develop confidence in their writing abilities and improved hand-eye coordination.',
    details: {
      entryRequirements: 'Age 5-9 years, Basic letter recognition',
      duration: '10 weeks, 4-5 hours per week',
      nextCourses: 'Reading, Creative Writing',
      benefits: [
        'Improved motor skills',
        'Better handwriting quality',
        'Increased writing confidence'
      ]
    },
    features: [
      { title: 'Motor Skill Development', icon: '✏️' }
    ],
    outcomes: [
      'Legible and neat handwriting',
      'Improved fine motor control',
      'Better posture and grip'
    ],
    relatedCourses: ['phonics', 'spelling', 'tuition-prkg-10th']
  },
  {
    id: 'spelling',
    title: 'Spelling',
    subtitle: 'Orthography Mastery',
    range: '(Grade 2 - Grade 5)',
    image: image4,
    heroImage: 'https://via.placeholder.com/400x300?text=Spelling',
    overview: 'Spelling course teaches systematic spelling rules and patterns. Students learn word families, phonetic patterns, and irregular spellings through engaging activities. The program includes memory techniques, visual associations, and repeated practice to cement learning. By the end of the course, students develop strong spelling accuracy and can confidently write without errors.',
    details: {
      entryRequirements: 'Age 7-11 years, Basic reading ability',
      duration: '12 weeks, 4-5 hours per week',
      nextCourses: 'Grammar, Writing Skills',
      benefits: [
        'Improved spelling accuracy',
        'Better vocabulary retention',
        'Increased writing confidence'
      ]
    },
    features: [
      { title: 'Spelling Pattern Recognition', icon: '📝' }
    ],
    outcomes: [
      'Mastery of common spelling rules',
      'Reduced spelling errors',
      'Improved vocabulary knowledge'
    ],
    relatedCourses: ['phonics', 'hand-writing', 'tuition-prkg-10th']
  },
  {
    id: 'foundation-math',
    title: 'Foundation Math',
    subtitle: 'Numeracy Skills',
    range: '(Grade 1 - Grade 3)',
    image: image5,
    heroImage: 'https://via.placeholder.com/400x300?text=Foundation+Math',
    overview: 'Foundation Math course builds strong numeracy skills and mathematical reasoning. Through concrete manipulatives and visual representations, students understand fundamental concepts like counting, addition, subtraction, and place value. The program develops problem-solving abilities and mathematical confidence from an early age.',
    details: {
      entryRequirements: 'Age 5-9 years, Number recognition 1-100',
      duration: '14 weeks, 5-6 hours per week',
      nextCourses: 'Advanced Math, Geometry',
      benefits: [
        'Strong number sense',
        'Problem-solving skills',
        'Mathematical confidence'
      ]
    },
    features: [
      { title: 'Number Sense Development', icon: '🔢' }
    ],
    outcomes: [
      'Mastery of basic operations',
      'Understanding of place value',
      'Improved logical thinking'
    ],
    relatedCourses: ['tuition-prkg-10th', 'phonics', 'hand-writing']
  },
  {
    id: 'reading',
    title: 'Reading',
    subtitle: 'Comprehension Skills',
    range: '(Grade 2 - Grade 5)',
    image: image6,
    heroImage: 'https://via.placeholder.com/400x300?text=Reading',
    overview: 'Reading course develops comprehension and critical thinking skills. Students learn to extract information, make inferences, and analyze texts. The curriculum includes diverse reading materials and strategies to enhance vocabulary and fluency. Engaging discussions help develop a love for reading while improving academic performance.',
    details: {
      entryRequirements: 'Age 7-11 years, Ability to read simple sentences',
      duration: '12 weeks, 4-5 hours per week',
      nextCourses: 'Literature, Writing Skills',
      benefits: [
        'Improved comprehension',
        'Better vocabulary',
        'Enhanced analytical thinking'
      ]
    },
    features: [
      { title: 'Comprehension Mastery', icon: '📚' }
    ],
    outcomes: [
      'Ability to answer comprehension questions',
      'Improved reading speed',
      'Better understanding of texts'
    ],
    relatedCourses: ['phonics', 'hand-writing', 'tuition-prkg-10th']
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    subtitle: 'Communication Excellence',
    range: '(Grade 3 - Grade 8)',
    image: image7,
    heroImage: 'https://via.placeholder.com/400x300?text=Public+Speaking',
    overview: 'Public Speaking course builds confidence and communication skills. Students learn to articulate ideas clearly, manage stage fright, and present effectively. Through practice presentations, group discussions, and feedback sessions, learners develop strong verbal communication abilities that enhance academic and social success.',
    details: {
      entryRequirements: 'Age 8-14 years, Comfortable speaking in classroom',
      duration: '10 weeks, 3-4 hours per week',
      nextCourses: 'Debate Club, Presentation Skills',
      benefits: [
        'Improved confidence',
        'Better public speaking skills',
        'Enhanced communication abilities'
      ]
    },
    features: [
      { title: 'Confidence & Articulation', icon: '🎤' }
    ],
    outcomes: [
      'Confident public speaking',
      'Clear articulation',
      'Reduced stage fright'
    ],
    relatedCourses: ['tuition-prkg-10th', 'reading', 'hand-writing']
  },
  {
    id: 'hindi-grammar',
    title: 'Hindi Prachar Sabha',
    subtitle: 'Hindi Language Skills',
    range: '(Grade 1 - Grade 6)',
    image: image8,
    heroImage: 'https://via.placeholder.com/400x300?text=Hindi+Grammar',
    overview: 'Hindi Prachar Sabha course focuses on developing proficiency in Hindi language. Students learn grammar, vocabulary, writing, and reading skills. The program celebrates Hindi literature and culture while ensuring strong academic performance in Hindi subject examinations.',
    details: {
      entryRequirements: 'Age 5-12 years, Basic Hindi knowledge',
      duration: '12 weeks, 4-5 hours per week',
      nextCourses: 'Hindi Literature, Advanced Hindi',
      benefits: [
        'Improved Hindi proficiency',
        'Better grades in Hindi',
        'Cultural appreciation'
      ]
    },
    features: [
      { title: 'Language Mastery', icon: '🔤' }
    ],
    outcomes: [
      'Strong Hindi grammar skills',
      'Improved writing ability',
      'Better academic performance'
    ],
    relatedCourses: ['tuition-prkg-10th', 'hand-writing', 'spelling']
  }
];

export default coursesData;
