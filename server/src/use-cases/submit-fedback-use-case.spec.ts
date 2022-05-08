/*
test('sum 2 + 2', () =>{
    expect(2 + 2).toBe(4)
});
*/

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// spies = espiões

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn()

/*
const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {}},
    { sendMail: async () => {}}
);
*/

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendEmailSpy}
);


describe('Submit feedback', () =>{
    it('should be able to submit a feedback', async () =>{        

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64.sjkdsakd',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toBeCalled();
        expect(sendEmailSpy).toBeCalled();
    });
    
    it('should not be able to submit a feedback without type', async () =>{        

        await expect(submitFeedback.execute({
            type: '',
            comment: 'Exemple comment',
            screenshot: 'data:image/png;base64.sjkdsakd',
        })).rejects.toThrow();

       
    });

    it('should not be able to submit a feedback without comment', async () =>{        

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64.sjkdsakd',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback with an invalid screenshot', async () =>{        

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'tá tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    });


});



