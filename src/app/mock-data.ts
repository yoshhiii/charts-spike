export const MyScore = {
    user: {
        userId: 1,
        userName: 'TestUser',
        firstName: 'Test',
        lastName: 'User',
        role: 'Nurse'
    },
    score: {
        courseId: 1,
        userId: 1,
        judgementScore: 75,
        knowledgeScore: 83,
    },
    additionalScores: {
        courseId: 1,
        userId: 1,
        skills: [{
            skill_Id: 1,
            skill: 'ECG and Arrhythmia',
            score: 85
        },
        {
            skill_Id: 2,
            skill: 'Venous Access',
            score: 92
        },
        {
            skill_Id: 3,
            skill: 'Managing the Airway',
            score: 90
        },
        {
            skill_Id: 4,
            skill: 'StrokeManagement',
            score: 79
        },
        {
            skill_Id: 5,
            skill: 'Head Injury',
            score: 68
        }]
    },
    course: {
        courseId: 1,
        courseTitle: 'Emergency'
    }
};
