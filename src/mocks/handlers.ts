import { rest } from 'msw'
import { createSurvey, getResults, getSurvey, getSurveys, postResult, removeSurvey, updateSurvey } from '../models/in-memory-storage'

export const handlers = [
    rest.get('/api/surveys', (req, res, ctx) => {
        // const { userId } = req.params
        // return res(
        //   ctx.json({
        //     id: userId,
        //     firstName: 'John',
        //     lastName: 'Maverick',
        //   }),
        // )
        return res(
            ctx.json(getSurveys()),
        )
    }),
    rest.get('/api/getActive', (req, res, ctx) => {
        return res(
            ctx.json(getSurveys()),
        )
    }),
    rest.get('/api/create', (req, res, ctx) => {
        return res(
            ctx.json(createSurvey()),
        )
    }),
    rest.get('/api/delete', (req, res, ctx) => {
        const id = req.url.searchParams.get('id')
        removeSurvey(id as string);
        return res(
            ctx.json({ id }),
        )
    }),
    rest.get('/api/getSurvey', (req, res, ctx) => {
        const surveyId = req.url.searchParams.get('surveyId')
        return res(
            ctx.json(getSurvey(surveyId as string)),
        )
    }),
    rest.post('/api/changeJson', (req, res, ctx) => {
        const { id, json } = req.body as Record<string, any>
        updateSurvey(id as string, json)
        return res(
            ctx.json({ id, json }),
        )
    }),
    rest.post('/api/post', (req, res, ctx) => {
        const { postId, surveyResult } = req.body as Record<string, any>
        postResult(postId as string, surveyResult)
        return res(
            ctx.json({}),
        )
    }),
    rest.get('/api/results', (req, res, ctx) => {
        const postId = req.url.searchParams.get('postId')
        return res(
            ctx.json({ id: postId, data: getResults(postId as string) }),
        )
    })
]