export interface ISurveyDefinition {
    id: string,
    name: string,
    json: any
}

export const defaultJSON = {
    id: '',
    name: 'New Survey',
    json: {
        elements: [
            { type: 'radiogroup', name: 'question1', choices: [ '1', '2', '3' ] }
        ]
    }
}
